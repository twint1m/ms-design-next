import {Playfair_Display, Raleway} from "next/font/google";

export const raleway = Raleway({ subsets: ["cyrillic", "latin"], weight: ['200', '400', '700'], style: ['normal', 'italic'], variable: '--font-raleway'});
export const playfairDisplay = Playfair_Display({ subsets: ["cyrillic", "latin"], weight: ['400', '600', '700'], style: ['normal', 'italic'], variable: '--font-playfair-display', });