import { siDiscord, siFacebook, siGithub, siInstagram, siSnapchat, siX } from 'simple-icons';
import { linkedIn, type Brand } from '~/components/BrandIcon';

export type Social = {
    readonly label: string;
    readonly brand: Brand;
    readonly url: string;
};

export const socials: readonly Social[] = [
    {label: 'GitHub', brand: siGithub, url: 'https://github.com/basmilius'},
    {label: 'X', brand: siX, url: 'https://x.com/basmilius'},
    {label: 'LinkedIn', brand: linkedIn, url: 'https://linkedin.com/in/basmilius'},
    {label: 'Instagram', brand: siInstagram, url: 'https://instagram.com/basmilius/'},
    {label: 'Snapchat', brand: siSnapchat, url: 'https://snapchat.com/add/basmilius/'},
    {label: 'Facebook', brand: siFacebook, url: 'https://facebook.com/basmilius'},
    {label: 'Discord', brand: siDiscord, url: 'https://discord.com/users/basmilius'}
];
