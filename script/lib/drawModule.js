// (Revealing) module pattern
// Deze iife || self evocing function maakt een 'state' aan en is dus een closure.
const draw = (function () {
	let ctx = null;
 
	// Ready to reuse
	const mathCanvasToWindow = (canvasElement) => {
		canvasElement.width = document.documentElement.clientWidth;
		canvasElement.height = document.documentElement.clientHeight;
	};
 
	const setup = (canvasElement) => {
		window.addEventListener('resize', function () {
			mathCanvasToWindow(canvasElement);
		});
 
		mathCanvasToWindow(canvasElement);
		ctx = canvasElement.getContext('2d');
		return ctx;
	};
 
	const circle = (x, y, { size, color }) => {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI * 2);
		ctx.fill();
	};
 
	const clearArea = () => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	};
 
	return {
		setup,
		circle,
		clearArea,
	};
})();