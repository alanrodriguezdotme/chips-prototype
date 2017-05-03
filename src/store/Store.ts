import { observable } from 'mobx';

let store = observable({
	activeChipsShowing: false,
	currentCategory: null,
	currentResults: null,
	chips: [
		{
			label: "< 75k",
			filter: "item.mileage < 75000",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Ford",
			filter: "item.brand == 'Ford'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Chrysler",
			filter: "item.brand == 'Chrysler'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		}
	],
	query: ''
});

export default store;