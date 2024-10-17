import { LimitedFrameRateCanvas, mulberry32 } from '@basmilius/effects-common';

const maxPointDistance = 0.5;

const sevenPointCircle = new Float64Array([
    -0.304, -1, 0, -1, 0.304, -1,
    0.592, -0.861, 0.782, -0.623, 0.972, -0.386,
    1.043, -0.074, 0.975, 0.223, 0.907, 0.519,
    0.708, 0.769, 0.434, 0.901, 0.16, 1.033,
    -0.16, 1.033, -0.434, 0.901, -0.708, 0.769,
    -0.907, 0.519, -0.975, 0.223, -1.043, -0.074,
    -0.972, -0.386, -0.782, -0.623, -0.592, -0.861
]);

const entriesPerPoint = 6;
const blobPoints = new Float64Array(sevenPointCircle.length);
const blobs: Blob[] = [];
const random = mulberry32();

export class BlobsSimulator extends LimitedFrameRateCanvas {
    constructor(canvas: HTMLCanvasElement, public readonly smallMode: boolean) {
        super(canvas, smallMode ? 15 : 60, {colorSpace: 'srgb'});

        if (blobs.length === 0) {
            blobs.push(new FillBlob(0, 0, .5, '#111827', .25));
            blobs.push(new FillBlob(1, 1, .5, '#1f2937', .5));
            blobs.push(new LineBlob(.15, 0, smallMode ? .4 : .2, '#0064f2', .5));
            blobs.push(new LineBlob(.85, 1, smallMode ? .3 : .15, '#00a5ff', .25));
        }
    }

    public draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        blobs.forEach(blob => blob.draw(this.context, this.canvas.width, this.canvas.height));
    }

    public tick() {
        blobs.forEach(blob => blob.tick());
    }

    public onResize() {
        super.onResize();

        this.canvas.width = this.width * devicePixelRatio;
        this.canvas.height = this.height * devicePixelRatio;
    }
}

class Blob {
    private distance: { [key: number]: number; } = {};
    private variance: { [key: number]: number; } = {};

    constructor(private x: number, private y: number, private size: number, protected color: string, private speed: number = 1) {
    }

    private distanceValue(i) {
        let distance = this.distance[i] || (this.distance[i] = random.next());

        this.distance[i] = distance + 0.048 * this.speed;

        return distance;
    }

    private varianceValue(i) {
        return this.variance[i] || (this.variance[i] = random.next());
    }

    draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        ctx.save();
        ctx.translate(this.x * width, this.y * height);

        this.drawShape(ctx, width);

        ctx.restore();
    }

    drawShape(ctx: CanvasRenderingContext2D, width: number) {
        ctx.beginPath();

        ctx.moveTo(
            this.size * width * blobPoints[2],
            this.size * width * blobPoints[3]
        );

        for (let i = 0; i < blobPoints.length; i += entriesPerPoint) {
            const nextI = i + entriesPerPoint === blobPoints.length ? 0 : i + entriesPerPoint;

            ctx.bezierCurveTo(
                this.size * width * blobPoints[i + 4],
                this.size * width * blobPoints[i + 5],
                this.size * width * blobPoints[nextI],
                this.size * width * blobPoints[nextI + 1],
                this.size * width * blobPoints[nextI + 2],
                this.size * width * blobPoints[nextI + 3]
            );
        }

        ctx.closePath();
    }

    tick() {
        blobPoints.set(sevenPointCircle);

        for (let i = 0; i < blobPoints.length; i += entriesPerPoint) {
            let d = this.distanceValue(i);
            let v = this.varianceValue(i);

            const distance = v * maxPointDistance;
            const angle = v * Math.PI * 2;
            const xShift = Math.sin(angle) * (distance * Math.cos(d));
            const yShift = Math.cos(angle) * (distance * Math.sin(d));

            blobPoints[i] += xShift;
            blobPoints[i + 1] += yShift;
            blobPoints[i + 2] += xShift;
            blobPoints[i + 3] += yShift;
            blobPoints[i + 4] += xShift;
            blobPoints[i + 5] += yShift;
        }
    }
}

class FillBlob extends Blob {
    draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2 * devicePixelRatio;

        super.draw(ctx, width, height);

        ctx.fill();
        ctx.stroke();
    }
}

class LineBlob extends Blob {
    private frame: number;

    draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        if (!this.frame) {
            this.frame = Math.floor(random.next() * 1000);
        }

        const lineWidth = (9 + (Math.cos(++this.frame / 100) * 6)) * devicePixelRatio;

        if (lineWidth > 0) {
            ctx.fillStyle = 'transparent';
            ctx.strokeStyle = this.color;
            ctx.lineWidth = lineWidth;

            super.draw(ctx, width, height);

            ctx.stroke();
        }
    }
}
