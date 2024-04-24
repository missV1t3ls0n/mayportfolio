function dragover_handler(ev) {
	ev.preventDefault();
	ev.dataTransfer.dropEffect = 'move';
}
function drop_handler(ev) {
	// console.clear();
	ev.preventDefault();

	// if (ev.target.id === 'illustration-item') return;
	const id = ev.dataTransfer.getData('text');
	const draggableElement = document.getElementById(id);

	// const dropzone = ev.target;
	const dropzone = document.getElementById('target');
	// console.log(dropzone);
	const {offsetX, offsetY} = ev;

	const width = draggableElement.clientWidth;
	const height = draggableElement.clientHeight;
	const x = offsetX - width > 0 ? offsetX - width : 0;
	const y = offsetY - height > 0 ? offsetY - height : 0;
	console.log('drop_handler', {
		width,
		height,
		x,
		y,
		id,
		draggableElement,
		dropzone
	});

	draggableElement.setAttribute('style', `top:${y}px!important; left:${x}px!important;`);

	ev.dataTransfer.clearData();
}
function dragstart_handler(ev) {
	// console.log(ev.target.classList.value);
	ev.dataTransfer.setData('text/plain', ev.target.id);
}

// const left = offsetX || clientX - targetOffSetLeft;
// const top = offsetY || clientY - targetOffSetTop;
// dropzone.appendChild(draggableElement);
