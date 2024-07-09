export default function createDivider(dividerClassName = '') {
	const wrapper = document.createElement('div');
	wrapper.className = `divider-wrapper`;

	const divider = document.createElement('div');
	divider.className = `divider ${dividerClassName}`;

	wrapper.appendChild(divider);
	return wrapper;
}
