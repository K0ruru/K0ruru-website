// nav active and scroll behavior
document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav-link a");

	window.addEventListener("scroll", () => {
		let current = "";

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (window.scrollY >= sectionTop - sectionHeight / 3) {
				current = section.getAttribute("id");
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
		});

		if (current) {
			const activeLink = document.querySelector(
				`.nav-link a[href="#${current}"]`
			);
			activeLink.classList.add("active");
		}
	});

	// Smooth scrolling when clicking on a navigation link
	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();

			const targetId = link.getAttribute("href").substring(1);
			const targetSection = document.getElementById(targetId);

			window.scrollTo({
				top: targetSection.offsetTop - 20, // Adjusted for visual purposes
				behavior: "smooth",
			});
		});
	});

	// nav stick
	window.addEventListener("scroll", function () {
		var nav = document.querySelector("nav");
		var scrolled = window.scrollY;

		if (scrolled > 80) {
			nav.classList.add("sticky");
		} else {
			nav.classList.remove("sticky");
		}
	});
});
