// array of food-items
const foodItems = document.querySelectorAll('.food-item');

// ctrl btns
const viewAllBtn = document.querySelector('.all-btn');
const viewBreakfastBtn = document.querySelector('.breakfast-btn');
const viewLunchBtn = document.querySelector('.lunch-btn');
const viewShakesBtn = document.querySelector('.shakes-btn');
const viewDinnerBtn = document.querySelector('.dinner-btn');

function viewAll() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			if (foodItems[prop].classList[2] == 'not-visible') {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
}

function viewBreakfast() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			if (foodItems[prop].classList[1] == 'breakfast') {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

function viewLunch() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			if (foodItems[prop].classList[1] == 'lunch') {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

function viewShakes() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			if (foodItems[prop].classList[1] == 'shakes') {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

function viewDinner() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			if (foodItems[prop].classList[1] == 'dinner') {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

document.addEventListener("click", function(e) {
	if (e.target == viewAllBtn) viewAll();
	if (e.target == viewBreakfastBtn) viewBreakfast();
	if (e.target == viewLunchBtn) viewLunch();
	if (e.target == viewShakesBtn) viewShakes();
	if (e.target == viewDinnerBtn) viewDinner();
});