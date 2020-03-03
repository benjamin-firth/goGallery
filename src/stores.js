import { writable } from 'svelte/store';

export const displayedArt = writable([{title: '', primaryimageurl: '', century: ''}]);
export const cultureID = writable(0);