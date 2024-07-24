export function initialiseForm() {
	console.log("Initialising form...")
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseForm);
} else {
    initialiseForm();
}
