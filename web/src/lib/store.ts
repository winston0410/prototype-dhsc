import { writable } from 'svelte/store';

export const formStore = writable({
    "location-id": "",
    "restricted-location": false
});
