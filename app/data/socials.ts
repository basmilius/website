export type Social = {
    readonly label: string;
    readonly icon: string;
    readonly url: string;
};

export const socials: readonly Social[] = [
    {label: 'GitHub', icon: 'fab github', url: 'https://github.com/basmilius'},
    {label: 'X', icon: 'fab x-twitter', url: 'https://x.com/basmilius'},
    {label: 'LinkedIn', icon: 'fab linkedin', url: 'https://linkedin.com/in/basmilius'},
    {label: 'Instagram', icon: 'fab instagram', url: 'https://instagram.com/basmilius/'},
    {label: 'Snapchat', icon: 'fab snapchat', url: 'https://snapchat.com/add/basmilius/'},
    {label: 'Facebook', icon: 'fab facebook', url: 'https://facebook.com/basmilius'},
    {label: 'Discord', icon: 'fab discord', url: 'https://discord.com/users/basmilius'}
];
