import { writable } from 'svelte/store';
import watchMedia from 'svelte-media';
const mediaQueries = {
	small: '(max-width: 640px)'
};
export const points = writable(0);
export const showResults = writable(false);
export const player = writable();
export const computer = writable();
export const media = watchMedia(mediaQueries);
