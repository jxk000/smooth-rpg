const accordionHTML = document.querySelector('.accordion')
let quesitons = {
	question: {
		name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero ducimus ut hic ex, eos, autem repudiandae esse blanditiis a ab debitis porro non! Delectus, ipsam! Odit nostrum nisi voluptatem.',
	},
	question1: {
		name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		answer:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero ducimus ut hic ex, eos, autem repudiandae esse blanditiis a ab debitis porro non! Delectus, ipsam! Odit nostrum nisi voluptatem.',
	},
	question3: {
		name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
}

for (const question in quesitons) {
	accordionHTML.innerHTML += `<section class="accordion_item">
    <section class="accordion_item_question">
        <section class="accordion_item_question__text">
            <p>${quesitons[question].name}</p> </section>
        <section class="accordion_item_question__icon">+</section>
    </section>
    <section class="accordion_item_answer" style="display: none">${quesitons[question].answer}</section>
</section>`
	console.log(`object`)
	console.log(quesitons[question].name + ' ' + quesitons[question].answer)
}
