const navList = document.querySelector('.nav_list')
const burgerMenu = document.querySelector('.nav_burger')
const rulesBtn = document.querySelectorAll('.rules_button')
const rulesMain = document.querySelectorAll('.rules_main')
const accordionList = document.querySelectorAll('.accordion_item')

const burger = () => {
	navList.classList.toggle('active-burger')
	if (navList.className.includes('active-burger')) {
		burgerMenu.children[0].style.display = 'none'
		burgerMenu.children[1].style.display = 'flex'
	} else {
		burgerMenu.children[1].style.display = 'none'
		burgerMenu.children[0].style.display = 'flex'
	}
}

for (let i = 0; i < rulesBtn.length; i++) {
	rulesBtn[i].addEventListener('click', () => {
		console.log(rulesBtn[i]);
			if(rulesBtn[i].textContent == 'Regulamin'){
				rulesMain[0].classList.add('active')
				rulesMain[1].classList.remove('active')
				rulesMain[2].classList.remove('active')
			}
			
			if(rulesBtn[i].textContent == 'Taryfikator'){
				rulesMain[0].classList.remove('active')
				rulesMain[1].classList.add('active')
				rulesMain[2].classList.remove('active')
				console.log(`object`);
			}
			if(rulesBtn[i].textContent == 'Prywatności'){
				rulesMain[0].classList.remove('active')
				rulesMain[2].classList.add('active')
				rulesMain[1].classList.remove('active')
				console.log(`object`);
			}
		
	})
}


for (i = 0; i < accordionList.length; i++) {
	accordionList[i].addEventListener("click", function() {
	  let answer = this.children[1];
	  if (answer.style.display == "block") {
		answer.style.display = "none";
		
	  } else {
		answer.style.display = "block";
	  }
	});
  }

burgerMenu.addEventListener('click', burger)


