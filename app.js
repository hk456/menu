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
			foodItems[prop].classList.remove('not-visible');
		}
	}
}

function viewBreakfast() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			let isVisible = foodItems[prop].classList[2] != 'not-visible';
			let isBreakfast = foodItems[prop].classList[1] == 'breakfast';
			if (isBreakfast && !isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}

			if (!isBreakfast && isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

function viewLunch() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			let isVisible = foodItems[prop].classList[2] != 'not-visible';
			let isLunch = foodItems[prop].classList[1] == 'lunch';
			if (isLunch && !isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}

			if (!isLunch && isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

function viewShakes() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			let isVisible = foodItems[prop].classList[2] != 'not-visible';
			let isShakes = foodItems[prop].classList[1] == 'shakes';
			if (isShakes && !isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}

			if (!isShakes && isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}
		}
	}
	
}

function viewDinner() {
	for (prop in foodItems) {
		if (foodItems.hasOwnProperty(prop)) {
			let isVisible = foodItems[prop].classList[2] != 'not-visible';
			let isDinner = foodItems[prop].classList[1] == 'dinner';
			if (isDinner && !isVisible) {
				foodItems[prop].classList.toggle('not-visible');
			}

			if (!isDinner && isVisible) {
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