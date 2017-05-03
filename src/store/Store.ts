import { observable } from 'mobx';
let data = require('./data.json');

let store = observable({
	activeChipsShowing: false,
	currentCategory: null,
	chips: [
		{
			label: "< 75k",
			filter: "item.mileage < 75000",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Sedans",
			filter: "item.type == 'sedan'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Nissan",
			filter: "item.brand == 'Nissan'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Black",
			filter: "item.color == 'black'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Chrysler",
			filter: "item.brand == 'Chrysler'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Trucks",
			filter: "item.type == 'truck'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		},
		{
			label: "Gray/Silver",
			filter: "item.color == 'gray'",
			categories: ["cars", "automobiles", "vehicles"],
			active: false
		}
	],
	query: '',
	results: data
});

export default store;