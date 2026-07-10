export type InfoItem = {
    readonly icon: string;
    readonly title: string;
    readonly value: string;
};

export const companyInfo: readonly InfoItem[] = [
    {icon: 'fas briefcase', title: 'KvK-number', value: '78355621'},
    {icon: 'fas badge-percent', title: 'BTW-ID', value: 'NL003322759B51'},
    {icon: 'fas at', title: 'E-mail', value: 'bas@mili.us'},
    {icon: 'fas phone', title: 'Phone number', value: '+31 6 41794692'},
    {icon: 'fas location-dot', title: 'Address', value: 'Het Blik 60, 7141 TK Groenlo, Netherlands'}
];
