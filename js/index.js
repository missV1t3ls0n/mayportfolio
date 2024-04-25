
class StyleSheet {

	constructor(name = 'dynamic-styleSheet') {
		this.styleSheet = this.getStyleSheet(name);
	}

	getStyleSheet(name) {
		if (!document.getElementById(name)) {
			const style = document.createElement('style');
			style.title = name;
			document.getElementsByTagName('head')[0].appendChild(style);
		}

		let styleSheet = null;
		for (let i = 0; i < document.styleSheets.length; i++) {
			styleSheet = document.styleSheets[i];
			if (styleSheet.title === name) {
				break;
			}
		}
		return styleSheet;
	}
	insertRule(css, index) {
		return this.styleSheet.insertRule(css, index);
	}
	deleteRule(index) {
		this.styleSheet.deleteRule(index);
	}
}

new StyleSheet('scroll-style');
const homeIntroSection = document.querySelector('section.intro');
const workSections = document.querySelector('section.works');
const aboutPart1Section = document.querySelector('section.about-part1');
const header = document.getElementsByTagName('header')[0];
const logo = document.querySelector('.logo');
const menu = document.querySelector('nav.menu > span.text');
const menuIcon = document.querySelectorAll('span.chevron-icon');
const singleWorkElements = document.querySelectorAll('article.single-work');
const coloredArticleElements = document.querySelectorAll('section > article');

const menuOptionsContainer = document.querySelector('.menu-options-wrapper');
const menuButton = document.querySelector('nav');
const chevronIcon = document.querySelectorAll('.chevron-icon > svg');
const menuOptions = document.querySelector('.menu-options');
const menuAtagLinks = document.querySelectorAll('.menu-options-wrapper > a > h4');
const hrArray = document.querySelectorAll('.menu-options-wrapper > hr');

const projectsSection = document.getElementById("projectsSection");
const homeSection = document.getElementById("homeSection");



const hexToRGB = (h) => {
	if (!h) return;
	let r = 0,
		g = 0,
		b = 0;

	// 3 digits
	if (h.length == 4) {
		r = '0x' + h[1] + h[1];
		g = '0x' + h[2] + h[2];
		b = '0x' + h[3] + h[3];

		// 6 digits
	} else if (h.length == 7) {
		r = '0x' + h[1] + h[2];
		g = '0x' + h[3] + h[4];
		b = '0x' + h[5] + h[6];
	}

	return 'rgb(' + +r + ',' + +g + ',' + +b + ')';
};

const detectMob = () => {
	return window.innerWidth <= 580 && window.innerHeight <= 900;
};

const elementInViewport = (el) => {
	let x;
	if (detectMob()) x = 0;
	else x = 100;
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top + x < window.pageYOffset + window.innerHeight &&
		left < window.pageXOffset + window.innerWidth &&
		top + height > window.pageYOffset &&
		left + width > window.pageXOffset
	);
};

const getScrollPercent = () => {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};

const addClassNameToElement = (element, className) => {
	if (element.classList.contains(className)) return;
	else element.classList.add(className);
};
const removeClassNameToElement = (element, className) => {
	if (!element.classList.contains(className)) return;
	else element.classList.remove(className);
};

const elementInViewPortHeightAxis = (el) => {
	const offset = isMobile ? 0 : 100;
	return el.getBoundingClientRect().top + offset < window.innerHeight;
};

const adjustScrollBarPositionIndicator = () => {
	const currentHeight = Math.floor(getScrollPercent());
	if (document.styleSheets[1].cssRules[0]) {
		document.styleSheets[1].deleteRule(0);
	}
	document.styleSheets[1].insertRule(
		`    ::-webkit-scrollbar-thumb{
            height:${currentHeight - 1}vh;
        }`,
		0
	);
};

const adjustScrollBarColor = (backgroundColor) => {
	const scrollColor = hexToRGB(backgroundColor);

	const startTime = performance.now();

	if (document.styleSheets[1].cssRules[1]) {
		document.styleSheets[1].deleteRule(1);
	}
	const durationA = performance.now() - startTime;
	document.styleSheets[1].insertRule(
		`	::-webkit-scrollbar-thumb{
			background-color:${scrollColor}!important;
		}`,
		1
	);
	const duration = performance.now() - durationA;

};

const setBgColor = (el, backgroundColor) => {
	el.setAttribute(
		'style',
		`background-color:${backgroundColor}; transition:background-color 0.4s ease-out;
	`
	);
};

const setFontColor = (el, fontColor) => {
	el.setAttribute('style', `color:${fontColor}!important;`);
};

const setFillColor = (el, fontColor) => {
	el.setAttribute('style', `fill:${fontColor}!important;`);
};

const adjustPageColorsToFitCurrentElement = (el) => {
	let backgroundColor = el.dataset.bg;
	if (window.pageYOffset <= 100) backgroundColor = 'pink';
	// if (window.pageYOffset >= 100) backgroundColor = el.dataset.bg;
	// else if (window.pageYOffset <= 100)
	// 	document.body.setAttribute('style', 'background-color:pink!important;');
	// console.log({backgroundColor, y: window.pageYOffset});

	let marginBottomStyle =
		window.pageYOffset <= 100 ? 'margin-bottom:800px;' : 'margin-bottom:50px;';
	const fontColor = el.dataset.fcolor;
	if (homeIntroSection) homeIntroSection.setAttribute('style', marginBottomStyle);
	if (aboutPart1Section) aboutPart1Section.setAttribute('style', marginBottomStyle);

	// if (!isMobile) adjustScrollBarColor(backgroundColor)
	// if (window.pageYOffset < 50) return true;
	setBgColor(el, backgroundColor);
	setBgColor(document.body, backgroundColor);
	setBgColor(header, backgroundColor);
	menuOptions.setAttribute('style', `background-color:${backgroundColor};`);
	setFontColor(el, fontColor);
	setFontColor(logo, fontColor);
	setFontColor(menu, fontColor);
	setFillColor(menuIcon[0], fontColor);
	setFillColor(menuIcon[1], fontColor);
	setFontColor(logo, fontColor);

	menuAtagLinks.forEach((a) => setFontColor(a, fontColor));
	hrArray.forEach((hr) => hr.setAttribute('style', `border-bottom: 1px solid ${fontColor};`));
	menuOptionsContainer.setAttribute(
		'style',
		`background-color:${backgroundColor}; color:${fontColor}; z-index:5000;`
	);
};

let isMobile = detectMob();
let isIndexPage = !window.location.href.includes("/about");
window.addEventListener('DOMContentLoaded', () => {
	removeClassNameToElement(menuOptionsContainer, 'open');
	isMobile = detectMob();
	if (window.localStorage.getItem("goToProjects")) {
		document.body.className = 'body-visible';
		goToProjects()
		window.localStorage.clear();
	}
	else
		document.body.className = 'body-visible';

});

menuButton.addEventListener('click', (event) => {
	menuOptionsContainer.classList.toggle('open');
});



window.addEventListener('scroll', (event) => {
	if (isIndexPage) {
		if (window.pageYOffset > 599) {
			homeSection.classList.remove("current-page");
			projectsSection.classList.add("current-page");
		}
		else {
			projectsSection.classList.remove("current-page");
			homeSection.classList.add("current-page");
		}
	}



	coloredArticleElements.forEach((el, index) => {
		if (elementInViewPortHeightAxis(el)) {
			addClassNameToElement(el, 'is-visible');
			adjustPageColorsToFitCurrentElement(el);
		} else removeClassNameToElement(el, 'is-visible');
	});

});

const goToProjects = () => {
	window.scrollTo({ top: isMobile ? 600 : 500, left: 0, behavior: "auto" });
	menuOptionsContainer.classList.remove('open');

};

const goToHome = () => {
	menuOptionsContainer.classList.remove('open');
	window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const goToProjectsFromAboutPage = () => {
	removeClassNameToElement(menuOptionsContainer, 'open');
	window.localStorage.setItem("goToProjects", '1');
	window.location.assign("./index.html");
}

