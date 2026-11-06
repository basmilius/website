import { AtSign, Briefcase, MapPin, Percent, Phone, type LucideIcon } from 'lucide-react';

export type CompanyDetail = {
    readonly icon: LucideIcon;
    readonly title: string;
    readonly value: string;
};

export const companyDetails: readonly CompanyDetail[] = [
    {icon: Briefcase, title: 'KvK-number', value: '78355621'},
    {icon: Percent, title: 'BTW-ID', value: 'NL003322759B51'},
    {icon: AtSign, title: 'E-mail', value: 'bas@mili.us'},
    {icon: Phone, title: 'Phone number', value: '+31 6 41794692'},
    {icon: MapPin, title: 'Address', value: 'Het Blik 60, 7141 TK Groenlo, Netherlands'}
];
