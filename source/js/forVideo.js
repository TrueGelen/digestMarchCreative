window.addEventListener('load', () => {
	// const video3 = document.querySelector('#page-wrapper #wrapper .slide3 .template2__iframe')
	// const btn3 = document.querySelector('#page-wrapper #wrapper .slide3 .button')
	// const preview3 = document.querySelector('#page-wrapper #wrapper .slide3 .template2__preview')
	// const videoWrap3 = document.querySelector('#page-wrapper #wrapper .slide3 .template2__videoWrap')

	// btn3.addEventListener('click', () => {
	// 	const path = document.querySelector('#page-wrapper #wrapper .slide3 .template2__iframe').getAttribute('data-src')
	// 	video3.src = path
	// 	preview3.style.display = 'none'
	// 	videoWrap3.style.display = 'block'
	// })

	function play(slide) {
		const iframe = slide.querySelector('iframe')
		const path = iframe.getAttribute('data-src')
		iframe.src = path
		slide.querySelector('.template2__preview').style.display = 'none'
		slide.querySelector('.template2__videoWrap').style.display = 'block'
	}

	const videoSlides = document.querySelectorAll('#page-wrapper #wrapper .videoSlide');

	[...videoSlides].forEach(slide => {
		slide.querySelector('.button').addEventListener('click', () => {
			play(slide)
		})
		slide.querySelector('.button_mobile').addEventListener('click', () => {
			play(slide)
		})
	})
})