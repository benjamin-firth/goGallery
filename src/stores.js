import { writable } from 'svelte/store';

export const displayedArt = writable([{title: '', primaryimageurl: ''}]);
export const cultureID = writable(0);