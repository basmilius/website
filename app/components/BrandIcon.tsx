export type Brand = {
    readonly path: string;
    readonly evenOdd?: boolean;
};

type Props = {
    readonly brand: Brand;
    readonly className?: string;
};

export const linkedIn: Brand = {
    path: 'M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm2.5 7.5V18h2.7V9.5Zm1.35-4.2a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm4.15 4.2V18h2.7v-4.6c0-1.2.6-1.9 1.6-1.9s1.4.7 1.4 1.9V18h2.7v-5.2c0-2.4-1.3-3.5-3.1-3.5-1.2 0-2 .5-2.6 1.3V9.5Z',
    evenOdd: true
};

export function BrandIcon({brand, className = 'size-[15px]'}: Props) {
    return (
        <svg
            className={`flex-none ${className}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true">
            <path
                d={brand.path}
                fillRule={brand.evenOdd ? 'evenodd' : undefined}/>
        </svg>
    );
}
