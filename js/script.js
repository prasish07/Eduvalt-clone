// Adding a event listener for user scrolling effect
window.addEventListener("scroll", () => {
  const scrolledRange = window.scrollY;

  const dpi = 98;
  const scrolledCm = scrolledRange / (dpi / 2.54);

  if (scrolledCm > 5) {
    const navBar = document.getElementById("header");
    navBar.style.position = "sticky";
    navBar.style.top = "0";
    navBar.style.backgroundColor = "white";
    navBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    navBar.style.padding = 0;
  } else {
    const navBar = document.getElementById("header");
    navBar.style.position = "absolute";
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";
    navBar.style.padding = "15px 0";
  }
});
console.log(data);

// making the brand logo slide from left to right
// after finishing the project
// const brandLogos = document.querySelectorAll(".slide");

// brandLogos.forEach((logo, index) => {
//   console.log(logo);
//   logo.style.left = `${index * 100}%`;
// });
