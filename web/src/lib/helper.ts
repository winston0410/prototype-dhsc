import type { Writable } from 'svelte/store';

type FormValue = {
	"location-id": string;
    "restricted-location": boolean;
};

type FormStore = Writable<FormValue>;

export const handleInput =
	(store: FormStore) =>
	(e: Event): void => {
		const elem = e.target as HTMLInputElement;
		const key = elem.name;
		const value = elem.value;

		store.update((prev) => {
			return {
				...prev,
				[key]: value
			};
		});
	};
