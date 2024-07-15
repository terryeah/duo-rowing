export default function Testimonial() {
    const section = document.createElement('section');

    section.className = 'home-testimonial';
    section.innerHTML = `
        <div>Testimonial section</div>  
    `;

    return section;
}