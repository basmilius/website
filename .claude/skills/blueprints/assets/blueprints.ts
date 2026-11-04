// Data for the project blueprints. Copy what the site needs; the SKILL.md next to this folder explains the style.

export type IconName = keyof typeof icons;

export type Blueprint = {
    // Size of the logo in its own viewBox, used to give every logo the same visual area.
    readonly width: number;
    readonly height: number;
    // The appearance that needs logos/<slug>.<variant>.svg instead of logos/<slug>.svg.
    readonly variant?: 'light' | 'dark';
    // A raster logo, such as an app icon, stored as logos/<slug>.png instead of logos/<slug>.svg.
    readonly format?: 'svg' | 'png';
    // Five icons for the pattern tile, or a pattern file of the project itself.
    readonly pattern: readonly [IconName, IconName, IconName, IconName, IconName] | 'streamwithlien';
    // The exception to the fixed logo size: larger and standing on the bottom edge.
    readonly bottom?: true;
};

// Top-left corner of each icon in the 96px tile.
export const slots = [[4, 4], [54, 6], [30, 34], [6, 64], [62, 62]] as const;

// Outline icons in a 24px box. Drawn with stroke="#fff" stroke-width="1.8", round caps and joins, no fill.
export const icons = {
    terminal: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m7 10 3 2-3 2M12 15h5"/>',
    window: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
    cursor: '<path d="M12 4v16M9 4h6M9 20h6"/>',
    split: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M14.5 9h4M14.5 12h3"/>',
    file: '<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4M9 12h6M9 16h4"/>',
    tag: '<path d="M3 12V4h8l9 9-8 8Z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
    branch: '<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 8v8M18 10c0 4-6 3-10 6.5"/>',
    pencil: '<path d="m4 20 1-4L16 5l3 3L8 19Z"/>',
    sparkle: '<path d="m12 4 1.8 6.2L20 12l-6.2 1.8L12 20l-1.8-6.2L4 12l6.2-1.8Z"/>',
    button: '<rect x="3" y="8" width="18" height="8" rx="4"/><path d="M9 12h6"/>',
    toggle: '<rect x="3" y="7" width="18" height="10" rx="5"/><circle cx="16" cy="12" r="3"/>',
    checkbox: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 3 3 5-6"/>',
    slider: '<path d="M3 12h18"/><circle cx="9" cy="12" r="3"/>',
    braces: '<path d="M9 4C6 4 7 8 6 10.5S4 12 4 12s1 0 2 1.5S6 20 9 20M15 4c3 0 2 4 3 6.5s2 1.5 2 1.5-1 0-2 1.5S18 20 15 20"/>',
    squiggle: '<path d="M3 13c2-3 4 3 6 0s4 3 6 0 4 3 6 0"/>',
    list: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>',
    box: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="m4 8 3-4h10l3 4M10 12h4"/>',
    cube: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m12 12 8-4.5M12 12v9M12 12 4 7.5"/>',
    link: '<path d="m10 14 4-4M8.5 11.5 6 14a3 3 0 0 0 4 4l2.5-2.5M15.5 12.5 18 10a3 3 0 0 0-4-4l-2.5 2.5"/>',
    database: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3"/>',
    route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6"/>',
    brick: '<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 12h18M12 6v6M8 12v6M16 12v6"/>',
    confetti: '<path d="m5 19 4-11 7 7Z"/><path d="m14 4 1 2M19 8l2-1M17 3l-1 2"/>',
    firework: '<circle cx="12" cy="12" r="1.5"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/>',
    fries: '<path d="M6 10h12l-1.5 10h-9Z"/><path d="M8 10V4M11 10V3M14 10V4M16.5 10V6"/>',
    hashtag: '<path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16"/>',
    bottle: '<path d="M10 3h4v3l2 3v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3Z"/><path d="M8 13h8"/>',
    ticket: '<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4Z"/><path d="M14 7v10"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
    qr: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2v2M18 18h2v2M14 18h2"/>',
    note: '<path d="M9 18V5l10-2v13"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/>',
    chat: '<path d="M4 5h16v11H9l-5 4Z"/>',
    canvas: '<rect x="2" y="3" width="9" height="7" rx="1.5"/><rect x="13" y="14" width="9" height="7" rx="1.5"/><path d="M11 6.5h3a3 3 0 0 1 3 3V14"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 12V7.5M12 12l3 2"/>',
    hourglass: '<path d="M7 3h10M7 21h10M8 3c0 5 8 6 8 9s-8 4-8 9M16 3c0 5-8 6-8 9s8 4 8 9"/>',
    stopwatch: '<circle cx="12" cy="13" r="7"/><path d="M12 13V9M10 3h4M12 3v3"/>',
    speaker: '<rect x="6" y="3" width="12" height="18" rx="3"/><circle cx="12" cy="14" r="3"/>',
    tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
    play: '<path d="M8 5v14l11-7Z"/>',
    signal: '<circle cx="12" cy="12" r="2"/><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>',
    partly: '<circle cx="9" cy="9" r="3"/><path d="M9 3v1.5M3 9h1.5M4.8 4.8l1 1M13.2 4.8l-1 1"/><path d="M9 20h8a3.5 3.5 0 0 0 .4-7 4.8 4.8 0 0 0-9 1.2A3 3 0 0 0 9 20Z"/>',
    rain: '<path d="M7 15h10a3.5 3.5 0 0 0 .4-7 4.8 4.8 0 0 0-9.2 1A3 3 0 0 0 7 15Z"/><path d="M9 18l-1 2.5M13 18l-1 2.5M17 18l-1 2.5"/>',
    moon: '<path d="M18 15A7 7 0 0 1 9 6a7 7 0 1 0 9 9Z"/>',
    beer: '<path d="M6 7h10v13H6Z"/><path d="M16 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2M6 7c0-2 2-3 3.5-2 1-2 4-2 5 0 1.5-.5 2 1 1.5 2"/>',
    pin: '<path d="M12 21s-6-6-6-11a6 6 0 0 1 12 0c0 5-6 11-6 11Z"/><circle cx="12" cy="10" r="2"/>',
    bubbles: '<circle cx="8" cy="8" r="2.5"/><circle cx="15" cy="14" r="3.5"/><circle cx="8" cy="18" r="1.5"/>',
    wave: '<path d="M3 10c3-3 6 3 9 0s6 3 9 0M3 16c3-3 6 3 9 0s6 3 9 0"/>',
    star: '<path d="m12 5 2 4.6 5 .5-3.8 3.3 1.1 4.9L12 15.8l-4.3 2.5 1.1-4.9L5 10.1l5-.5Z"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>',
    curtain: '<path d="M3 4h18M5 4c0 6 2 10 5 16M19 4c0 6-2 10-5 16"/>',
    house: '<path d="m4 11 8-7 8 7v9H4Z"/><path d="M10 20v-5h4v5"/>',
    tree: '<path d="m12 3 6 9h-4l5 6H5l5-6H6Z"/><path d="M12 18v3"/>',
    bed: '<path d="M3 18V7M3 13h18v5M7 13v-3h5v3"/>',
    horseshoe: '<path d="M7 4v7a5 5 0 0 0 10 0V4"/><path d="M6 4h2M16 4h2"/>',
    rosette: '<circle cx="12" cy="9" r="5"/><path d="m9 13-2 8 5-3 5 3-2-8"/>',
    scissors: '<circle cx="6" cy="7" r="2.5"/><circle cx="6" cy="17" r="2.5"/><path d="M8 8.5 20 17M8 15.5 20 7"/>',
    comb: '<path d="M4 8h16v3H4Z"/><path d="M6 11v7M9 11v7M12 11v7M15 11v7M18 11v7"/>',
    tent: '<path d="M3 20 12 4l9 16Z"/><path d="m9 20 3-6 3 6"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="m8 7 2-3h4l2 3"/>',
    aperture: '<circle cx="12" cy="12" r="8"/><path d="m12 4 3 6M20 12l-6 1M16 19l-4-5M5 17l5-3M5 7l5 3"/>',
    frame: '<rect x="4" y="4" width="16" height="16"/><rect x="7.5" y="7.5" width="9" height="9"/>',
    ball: '<circle cx="12" cy="12" r="8"/><path d="m12 8.5 3.3 2.4-1.3 3.9h-4l-1.3-3.9Z"/><path d="M12 4v4.5M15.3 10.9l4.2-1.4M14 14.8l2.6 3.6M10 14.8l-2.6 3.6M8.7 10.9l-4.2-1.4"/>'
} as const;

// Keyed by the logo file name in logos/.
export const blueprints: Record<string, Blueprint> = {
    'adecore': {width: 414, height: 108, variant: 'dark', pattern: ['terminal', 'window', 'cursor', 'split', 'terminal']},
    'skills': {width: 260, height: 48, variant: 'dark', pattern: ['file', 'tag', 'branch', 'pencil', 'sparkle']},
    'flux': {width: 488, height: 202, variant: 'dark', pattern: ['button', 'toggle', 'checkbox', 'slider', 'button']},
    'ls-core': {width: 216, height: 48, variant: 'dark', pattern: ['braces', 'cursor', 'list', 'squiggle', 'braces']},
    'ls-sql': {width: 194, height: 48, variant: 'dark', pattern: ['braces', 'database', 'list', 'squiggle', 'cursor']},
    'ls-php': {width: 194, height: 48, variant: 'dark', pattern: ['braces', 'cursor', 'list', 'squiggle', 'file']},
    'meteocons': {width: 252, height: 252, pattern: ['sun', 'partly', 'rain', 'moon', 'sun']},
    'packages': {width: 210, height: 218, pattern: ['box', 'cube', 'tag', 'link', 'box']},
    'raxos': {width: 266, height: 70, variant: 'dark', pattern: ['database', 'route', 'brick', 'braces', 'brick']},
    'sparkle': {width: 210, height: 210, pattern: ['sparkle', 'confetti', 'firework', 'heart', 'sparkle']},
    'degrolschegracht': {width: 420, height: 420, pattern: ['beer', 'pin', 'bubbles', 'wave', 'beer']},
    'dito': {width: 476, height: 262, variant: 'dark', pattern: ['star', 'mic', 'curtain', 'star', 'mic']},
    'erve-nijhuis': {width: 378, height: 162, variant: 'light', pattern: ['house', 'tree', 'bed', 'house', 'tree']},
    'erve-tank': {width: 310, height: 162, variant: 'light', pattern: ['house', 'tree', 'bed', 'house', 'tree']},
    'kapsalon-lichtenberg': {width: 416, height: 388, variant: 'light', pattern: ['scissors', 'comb', 'wave', 'scissors', 'comb']},
    'manege-nijhuis': {width: 472, height: 66, variant: 'light', pattern: ['horseshoe', 'rosette', 'tree', 'horseshoe', 'rosette']},
    'marveld': {width: 550, height: 178, variant: 'dark', pattern: ['sun', 'tent', 'tree', 'wave', 'sun']},
    'streamwithlien': {width: 480, height: 210, pattern: 'streamwithlien'},
    'studiovierentwintig': {width: 408, height: 94, variant: 'light', pattern: ['camera', 'aperture', 'frame', 'camera', 'aperture']},
    'wpist': {width: 289, height: 350, variant: 'light', pattern: ['ball', 'star', 'star', 'ball', 'ball']},
    'ishetfriet': {width: 428, height: 244, variant: 'dark', pattern: ['fries', 'hashtag', 'bottle', 'fries', 'hashtag'], bottom: true},
    'ishetpatat': {width: 488, height: 244, variant: 'dark', pattern: ['fries', 'hashtag', 'bottle', 'fries', 'hashtag'], bottom: true},
    'passly': {width: 367, height: 197, variant: 'dark', pattern: ['ticket', 'calendar', 'qr', 'note', 'ticket']},
    'ruimte': {width: 256, height: 256, format: 'png', pattern: ['canvas', 'terminal', 'chat', 'window', 'canvas']},
    'startdetijd': {width: 181, height: 180, pattern: ['clock', 'hourglass', 'stopwatch', 'clock', 'hourglass']},
    'apple-protocols': {width: 325, height: 48, variant: 'dark', pattern: ['speaker', 'tv', 'play', 'signal', 'speaker']}
};
