import { observable } from 'mobx';
let data = require('./data.json');

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
	}
	return array;
}

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
	results: shuffleArray(data)
});

export default store;