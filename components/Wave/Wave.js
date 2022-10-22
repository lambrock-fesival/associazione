import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

const inc = 0.005;
let start = 0;

export default function Wave() {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.clear();
		// p5.background(255);
		p5.noFill();
		let offset1 = start;

		p5.beginShape();
		for (let x = 0; x < p5.width; x += 1) {
			const delta = 100;
			const s = p5.map(p5.sin(offset1), -1, 1, p5.height - delta, delta);
			const n = p5.map(p5.noise(offset1), 0, 1, delta, -delta);
			const y = s + n;
			p5.vertex(x, y);
			offset1 += inc;
		}
		p5.endShape();

		start += inc;
	};

	const windowResized = (p5) => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight);
	};

	return (
		<>
			<Sketch style={{ position: "absolute", zIndex: -1 }} setup={setup} draw={draw} windowResized={windowResized} />
		</>
	);
}
