import Sketch from '../components/sketch';

const index = () => {
	const canvas = document.querySelector('#container');
	if (canvas) {
		const sketch = new Sketch({
			dom: canvas,
		});
	}
};

export default index;
