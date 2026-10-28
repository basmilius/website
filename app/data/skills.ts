import { siCss, siDocker, siDotnet, siFigma, siFlutter, siGit, siHtml5, siJavascript, siKotlin, siNodedotjs, siOpenjdk, siPhp, siReact, siRust, siSass, siSwift, siTypescript, siVuedotjs, siWordpress } from 'simple-icons';
import type { Brand } from '~/components/BrandIcon';

export type Skill = {
    readonly label: string;
    readonly brand: Brand;
};

export const skills: readonly Skill[] = [
    {label: 'PHP', brand: siPhp},
    {label: 'TypeScript', brand: siTypescript},
    {label: 'JavaScript', brand: siJavascript},
    {label: 'Rust', brand: siRust},
    {label: 'Kotlin', brand: siKotlin},
    {label: 'Swift', brand: siSwift},
    {label: 'Java', brand: siOpenjdk},
    {label: '.NET', brand: siDotnet},
    {label: 'HTML', brand: siHtml5},
    {label: 'CSS', brand: siCss},
    {label: 'Sass', brand: siSass},
    {label: 'React', brand: siReact},
    {label: 'Vue.js', brand: siVuedotjs},
    {label: 'Flutter', brand: siFlutter},
    {label: 'Node.js', brand: siNodedotjs},
    {label: 'WordPress', brand: siWordpress},
    {label: 'Git', brand: siGit},
    {label: 'Docker', brand: siDocker},
    {label: 'Figma', brand: siFigma}
];
