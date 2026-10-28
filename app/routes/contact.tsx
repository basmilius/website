import { Check, Copy } from 'lucide-react';
import { BODY_CLASS, Eyebrow, PageHeader, SectionHeading } from '~/components/Headings';
import { Socials } from '~/components/Socials';
import { companyDetails } from '~/data/company';
import { seo } from '~/lib/seo';
import { useClipboard } from '~/lib/useClipboard';

const EMAIL = 'bas@mili.us';

export function meta() {
    return seo({
        title: 'Contact',
        description: 'Get in touch with Bas Milius about a website, app or backend project. Company details, e-mail, phone and socials. Tap any detail to copy it.',
        path: '/contact'
    });
}

export default function Contact() {
    const [copied, copy] = useClipboard();

    return (
        <>
            <PageHeader
                eyebrow={<Eyebrow to="/contact">// ~/contact</Eyebrow>}
                title="Send a message"
                lead="Thanks for stopping by. Whether you're planning a website or app, have a question about one of my projects, or just want to get in touch, feel free to reach out using any of the details below."
                leadWidth="max-w-[56ch]">
                <p className={BODY_CLASS}>If you've found a bug in one of my open source projects, the fastest way to reach me is by opening an issue on the project's GitHub repository. Describe what you were doing when it broke and I'll take a look when I can.</p>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-white/7 bg-term px-5 py-[18px] text-[#ececf1]">
                    <span className="font-mono text-[clamp(16px,2.4vw,22px)]">
                        <span className="text-[#6b6b76]">$</span> mail <span className="text-[#4ade80]">{EMAIL}</span>
                    </span>
                    <a
                        href={`mailto:${EMAIL}`}
                        className="ml-auto inline-flex h-[38px] items-center gap-2 rounded-lg bg-accent px-4 font-mono text-[13.5px] text-white hover:brightness-110">
                        send ↵
                    </a>
                </div>
            </PageHeader>

            <section className="mt-14">
                <SectionHeading
                    eyebrow="// information"
                    title="Information"
                    description="About my company and more. Tap any detail to copy it."/>

                <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-2.5">
                    {companyDetails.map(({icon: Icon, title, value}) => {
                        const isCopied = copied === title;

                        return (
                            <button
                                key={title}
                                type="button"
                                onClick={() => copy(title, value)}
                                className={`flex w-full cursor-pointer items-center gap-3.5 rounded-[14px] border bg-surface py-3.5 pr-4 pl-3.5 text-left transition-[border-color,translate,box-shadow] duration-[180ms] ease-site hover:-translate-y-px hover:border-line-strong hover:shadow-float ${isCopied ? 'border-accent' : 'border-line'}`}>
                                <span className="grid size-10 flex-none place-items-center rounded-[10px] bg-accent-soft text-accent-text">
                                    <Icon size={15}/>
                                </span>
                                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                    <span className={`font-mono text-xs ${isCopied ? 'text-accent-text' : 'text-muted'}`}>{isCopied ? 'Copied!' : title}</span>
                                    <span className="text-base font-medium wrap-anywhere">{value}</span>
                                </span>
                                <span className={`flex-none ${isCopied ? 'text-accent-text' : 'text-muted'}`}>
                                    {isCopied ? <Check size={13}/> : <Copy size={13}/>}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <Socials className="mt-14"/>
        </>
    );
}
