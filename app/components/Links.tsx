import { Link } from 'react-router';

type AnyLinkProps = {
    readonly to: string;
    readonly className: string;
    readonly children: React.ReactNode;
};

type PillLinkProps = {
    readonly to: string;
    readonly variant?: 'primary' | 'secondary';
    readonly children: React.ReactNode;
};

type TextLinkProps = {
    readonly to: string;
    readonly children: React.ReactNode;
};

const PILL_CLASS = 'inline-flex h-11 items-center gap-2.5 rounded-full px-5 font-mono text-sm font-medium';

const PILL_VARIANTS = {
    primary: 'bg-ink text-bg transition-[translate,opacity] duration-[180ms] ease-site hover:-translate-y-px hover:opacity-88',
    secondary: 'bg-sunken transition-colors duration-200 hover:bg-active'
};

function isExternal(to: string): boolean {
    return /^(https?:|mailto:)/.test(to) || to.endsWith('.pdf');
}

function AnyLink({to, className, children}: AnyLinkProps) {
    if (isExternal(to)) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener"
                className={className}>
                {children}
            </a>
        );
    }

    return (
        <Link
            to={to}
            className={className}>
            {children}
        </Link>
    );
}

export function PillLink({to, variant = 'secondary', children}: PillLinkProps) {
    return (
        <AnyLink
            to={to}
            className={`${PILL_CLASS} ${PILL_VARIANTS[variant]}`}>
            {children}
        </AnyLink>
    );
}

export function TextLink({to, children}: TextLinkProps) {
    return (
        <AnyLink
            to={to}
            className="text-link underline decoration-line-strong underline-offset-3 transition-colors hover:text-ink hover:decoration-current">
            {children}
        </AnyLink>
    );
}

export function Code({children}: { readonly children: React.ReactNode }) {
    return (
        <code className="rounded-[5px] bg-sunken px-[.4em] py-[.1em] font-mono text-[.9em] text-ink">{children}</code>
    );
}
