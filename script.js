
const testimonials = [
    {
        name: "Ananya Sharma",
        role: "Student",
        message: "This platform made my learning journey easier and more enjoyable. I really love the simple and clean design!",
        photo: "https://i.pravatar.cc/100?img=47",
        stars: "★★★★★"
    },
    {
        name: "Rahul Verma",
        role: "Web Developer",
        message: "The experience was amazing. The design is attractive, easy to use and works smoothly on different devices.",
        photo: "https://i.pravatar.cc/100?img=12",
        stars: "★★★★★"
    },
    {
        name: "Priya Reddy",
        role: "Designer",
        message: "I really appreciate the creativity and attention to detail. Everything feels simple, modern and user friendly.",
        photo: "https://i.pravatar.cc/100?img=44",
        stars: "★★★★★"
    }
];

let currentIndex = 0;

const name = document.getElementById("name");
const role = document.getElementById("role");
const message = document.getElementById("message");
const photo = document.getElementById("photo");
const stars = document.getElementById("stars");
const dots = document.getElementById("dots");

function showTestimonial(index) {

    const person = testimonials[index];

    name.textContent = person.name;
    role.textContent = person.role;
    message.textContent = person.message;
    photo.src = person.photo;
    stars.textContent = person.stars;

    updateDots();
}

function updateDots() {

    dots.innerHTML = "";

    testimonials.forEach((person, index) => {

        const dot = document.createElement("span");

        dot.classList.add("dot");

        if (index === currentIndex) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });

        dots.appendChild(dot);
    });
}

document.getElementById("next").addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    showTestimonial(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }

    showTestimonial(currentIndex);
});

showTestimonial(currentIndex);
