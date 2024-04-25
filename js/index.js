
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
const aboutPage = document.getElementById("aboutPage");

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
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

console.log("isMobileDevice?", detectMob());

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
		homeSection.classList.remove("current-page");
		projectsSection.classList.add("current-page");
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
		if (window.pageYOffset >= 500) {
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

const scrollToHome = () => {
	projectsSection.classList.remove('current-page');
	homeSection.classList.add("current-page");
	menuOptionsContainer.classList.remove('open');
	window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const redirectToAbout = () => {
	homeSection.classList.remove("current-page");
	projectsSection.classList.remove('current-page');
	aboutPage.classList.add('current-page');
	menuOptionsContainer.classList.remove('open');
	location.href = './about.html';
}

const redirectToHome = () => {
	aboutPage.classList.remove('current-page');
	homeSection.classList.add("current-page");
	menuOptionsContainer.classList.remove('open');
	location.href = './index.html';
}

const goToProjectsFromAboutPage = () => {
	aboutPage.classList.remove('current-page');
	projectsSection.classList.add('current-page');
	removeClassNameToElement(menuOptionsContainer, 'open');
	window.localStorage.setItem("goToProjects", '1');
	location.href = "./index.html";
}

