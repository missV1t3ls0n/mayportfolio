/*
functionality is not working properly at dev branch,
functionality in main branch (7e227b3) is perfect, need
to compare to the main 7e227b3 code and make it behave the same 
in here
*/



import { aboutPart1Section, aboutPart2Section } from "./js/aboutPageDom.js"

import {
	homeIntroSection, workSection, header, logo, menu
	, menuIcon, singleWorkElements, coloredArticleElements, menuOptionsContainer,
	menuButton, chevronIcon, menuOptions, menuAtagLinks, hrArray, projectsNav, aboutNav,
	homeNav
} from './js/indexPageDom.js';

import { detectMob, hexToRGB } from "./js/utils.js";

const isMobile = detectMob(), isIndexPage = location.pathname !== '/about.html';

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
const setSelectedMenuItem = (chosen) => {
	for (const el of [homeNav, projectsNav, aboutNav])
		if (el !== chosen) removeClassNameToElement(el, 'current-page');
	addClassNameToElement(chosen, 'current-page');
}

const elementInViewPortHeightAxis = (el) => {
	const offset = isMobile ? 0 : 100;
	return el.getBoundingClientRect().top + offset < window.innerHeight;
};

const adjustScrollBarPositionIndicator = () => {
	if (document.styleSheets[0]) {
		const currentHeight = Math.floor(getScrollPercent());
		if (document.styleSheets[0].cssRules[0]) {
			document.styleSheets[0].deleteRule(0);
		}
		document.styleSheets[0].insertRule(
			`    ::-webkit-scrollbar-thumb{
            height:${currentHeight - 1}vh;
        }`,
			0
		);
	}

};

const adjustScrollBarColor = (backgroundColor) => {
	if (!backgroundColor) return;
	const scrollColor = hexToRGB(backgroundColor);
	if (document.styleSheets[1].cssRules[0]) document.styleSheets[1].deleteRule(0);
	document.styleSheets[1].insertRule(
		`	::-webkit-scrollbar-thumb{
			background-color:${scrollColor}!important;
		}`,
		0
	);
};

const setBgColor = (el, backgroundColor) => {
	if (!backgroundColor) return;
	el.setAttribute(
		'style',
		`background-color:${backgroundColor}; transition:background-color 0.4s ease-out;
	`
	);
};

const setFontColor = (el, fontColor) => {
	if (!fontColor) return;
	el.setAttribute('style', `color:${fontColor}!important;`);
};

const setFillColor = (el, fontColor) => {
	if (!fontColor) return;
	el.setAttribute('style', `fill:${fontColor}!important;`);
};

const adjustPageColorsToFitCurrentElement = (el) => {
	if (!el) return;

	const backgroundColor = el.dataset.bg;
	const fontColor = el.dataset.fcolor;
	setBgColor(el, backgroundColor);
	setBgColor(document.body, backgroundColor);
	setBgColor(header, backgroundColor);
	menuOptions.style.backgroundColor = backgroundColor;
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

	// if (!isMobile) adjustScrollBarColor(backgroundColor);

};
const closeMenu = () => removeClassNameToElement(menuOptionsContainer, 'open');

const scrollToProjects = () => {
	setSelectedMenuItem(projectsNav);
	closeMenu();
	homeIntroSection.style.marginBottom = '0px';
	workSection.style.marginTop = '200px';
	workSection.scrollIntoView({ top: 0, left: 0, behavior: "auto" });

}

const scrollToHome = () => {
	setSelectedMenuItem(homeNav);
	closeMenu();
	window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const redirectToAbout = () => {
	setSelectedMenuItem(aboutNav);
	closeMenu();
	location.assign('/about.html')
}

const redirectToHome = () => {
	setSelectedMenuItem(homeNav);
	closeMenu();
	location.assign('/');
}
const redirectFromAboutToProjects = () => {
	setSelectedMenuItem(projectsNav);
	closeMenu();
	window.localStorage.setItem("goToProjectsOnHomePageLoad", 'true');
	location.assign('/');
}
const goToHome = () => {
	if (isIndexPage) scrollToHome()
	else redirectToHome()

}
const goToProjects = () => {
	if (isIndexPage) scrollToProjects()
	else redirectFromAboutToProjects()
}


homeNav.onclick = goToHome;
projectsNav.onclick = goToProjects;
menuButton.onclick = () => menuOptionsContainer.classList.toggle('open');
aboutNav.onclick = redirectToAbout;



window.addEventListener('scroll', (event) => {
	if (window.scrollY < 200) document.querySelectorAll('section')[1].style.marginBottom = '800px';
	else document.querySelectorAll('section')[1].style.marginBottom = '0px';

	if (isIndexPage) {
		if (window.scrollY >= 500) setSelectedMenuItem(projectsNav);
		else setSelectedMenuItem(homeNav);
	}

	coloredArticleElements.forEach((el, index) => {
		if (elementInViewPortHeightAxis(el)) {
			addClassNameToElement(el, 'is-visible');
			adjustPageColorsToFitCurrentElement(el);
		} else removeClassNameToElement(el, 'is-visible');
	});

});


window.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem("goToProjectsOnHomePageLoad")) {
		homeNav.classList.remove("current-page");
		projectsNav.classList.add("current-page");
		scrollToProjects()
		document.body.className = 'body-visible';
		window.localStorage.removeItem("goToProjectsOnHomePageLoad");

	}
	else
		document.body.className = 'body-visible';
});