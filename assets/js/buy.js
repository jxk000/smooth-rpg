const method = document.querySelectorAll('#buy_method')
const buttonBuy = document.querySelectorAll('#input_buy')

console.log(method.forEach)

buttonBuy.forEach(buttonBuys => {
	buttonBuys.addEventListener('click', function () {
		buttonBuy.forEach(buttonBuys => {
			buttonBuys.classList.remove('input_buy__active')
		})
		this.classList.add('input_buy__active')
	})
})
