import { Link } from 'react-router';

type PageHeaderProps = {
    readonly eyebrow: React.ReactNode;
    readonly title: string;
    readonly lead: string;
    readonly leadWidth?: string;
    readonly children?: React.ReactNode;
};

type GroupHeadingProps = {
    readonly title: string;
    readonly count?: number;
    readonly description: string;
};

type SectionHeadingProps = {
    readonly eyebrow: string;
    readonly title: string;
    readonly description?: string;
};

export const H1_CLASS = 'mt-3.5 text-[clamp(42px,5.4vw,64px)] leading-[1.02] font-semibold';
export const H2_CLASS = 'text-[clamp(26px,3vw,32px)] font-semibold';
export const LEAD_CLASS = 'mt-5 text-[clamp(18px,1.8vw,20px)] leading-[1.55] font-medium';
export const BODY_CLASS = 'mt-3.5 max-w-[62ch] text-base leading-[1.75] text-muted';

export function Eyebrow({to, children}: { readonly to: string; readonly children: React.ReactNode }) {
    return (
        <Link
            to={to}
            className="font-mono text-sm text-accent-text">
            {children}
        </Link>
    );
}

export function PageHeader({eyebrow, title, lead, leadWidth = 'max-w-[52ch]', children}: PageHeaderProps) {
    return (
        <header>
            {eyebrow}
            <h1 className={H1_CLASS}>{title}</h1>
            <p className={`${LEAD_CLASS} ${leadWidth}`}>{lead}</p>
            {children}
        </header>
    );
}

export function GroupHeading({title, count, description}: GroupHeadingProps) {
    return (
        <>
            <div className="flex items-center gap-3.5">
                <h2 className="text-[22px] font-semibold">{title}</h2>
                {count !== undefined && (
                    <span className="font-mono text-xs text-faint">{count}</span>
                )}
                <span className="h-px flex-1 bg-line"/>
            </div>
            <p className="mt-2 mb-[18px] max-w-[68ch] text-[15px] leading-[1.65] text-muted">{description}</p>
        </>
    );
}

export function SectionEyebrow({children}: { readonly children: React.ReactNode }) {
    return (
        <div className="font-mono text-[13px] text-accent-text">{children}</div>
    );
}

export function SectionHeading({eyebrow, title, description}: SectionHeadingProps) {
    return (
        <>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className={`mt-2.5 ${H2_CLASS}`}>{title}</h2>
            {description && (
                <p className="mt-2 text-base text-muted">{description}</p>
            )}
        </>
    );
}
