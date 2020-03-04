import { writable } from 'svelte/store';

export const displayedArt = writable([{title: '', primaryimageurl: '', century: ''}]);
export const cultureID = writable(0);
export const isLoading = writable(false);
export const startApp = writable(true);