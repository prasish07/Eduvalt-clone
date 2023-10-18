// Adding an event listener for user scrolling effect
window.addEventListener("scroll", () => {
  const scrolledRange = window.scrollY;
  const dpi = 98;
  const scrolledCm = scrolledRange / (dpi / 2.54);

  const navBar = document.getElementById("header");
  // if (navBar.style.position == "absolute") {
  //   navBar.style.padding = "15px 0px";
  // } else if (navBar.style.position == "fixed") {
  //   navBar.style.padding = "0px";
  // } else {
  //   navBar.style.padding = "15px 0px";
  // }

  // if (scrolledCm >= 4 && scrolledCm <= 9) {
  //   // Calculate the translateY value for a smoother sliding effect
  //   const translateYValue = -10 + 10 * Math.pow((scrolledCm - 4) / 5, 2);

  //   // Update styles for sliding effect
  //   navBar.style.position = "absolute";
  //   navBar.style.top = `${translateYValue}vh`; // Using vh units for more natural feel
  //   navBar.style.backgroundColor = "white";
  //   navBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  //   navBar.style.maxHeight = "100%";
  //   navBar.style.transform = `translateY(${translateYValue}%)`;
  //   navBar.style.transition = "all 0.5s ease-out"; // Applying easing for smoother transition
  // } else if (scrolledCm > 9) {
  //   // Reset styles for the fixed position
  //   navBar.style.position = "fixed";
  //   navBar.style.top = "0";
  //   navBar.style.backgroundColor = "white";
  //   navBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  //   navBar.style.maxHeight = "100%";
  //   navBar.style.transform = "translateY(0)";
  //   // navBar.style.transition = "none"; // Remove transition when fixed
  // } else {
  //   // Reset styles for the initial state
  //   navBar.style.position = "absolute";
  //   navBar.style.backgroundColor = "transparent";
  //   navBar.style.boxShadow = "none";
  //   navBar.style.maxHeight = "100%";
  //   navBar.style.transform = "translateY(0)";
  //   navBar.style.top = "0";
  //   navBar.style.transition = "none"; // Remove transition when resetting
  // }
  if (scrolledCm > 5) {
    navBar.classList.add("header-fix");
  } else {
    navBar.classList.remove("header-fix");
  }
});

// Adding a media query for max width of 1200px
const mediaQuery = window.matchMedia("(max-width: 1200px)");
// Function to handle media query changes
function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Apply padding of 15px
    navBar.style.padding = "15px";
  } else {
    // Remove padding
    navBar.style.padding = "0";
  }
}

// category
const category = document.querySelector(".category");
let clickedCategory = false;
const categoryList = document.querySelector(".header__category-dropdown");

category.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the window
  clickedCategory = !clickedCategory;
  if (clickedCategory) {
    categoryList.style.display = "block";
  } else {
    categoryList.style.display = "none";
  }
});

window.addEventListener("click", () => {
  if (clickedCategory) {
    clickedCategory = false;
    categoryList.style.display = "none";
  }
});

// Prevent clicks inside the categoryList from closing it
categoryList.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the window
});

//10 different color in array
const colors = ["red", "green", "blue", "orange", "purple", "pink"];

// making the brand logo slide from left to right
// const icons = document.querySelectorAll(".slide");
// const iconWidth = icons[0].clientWidth;

// icons.forEach((icon, index) => {
//   icon.style.left = `${index * iconWidth + 100}px`;
// });

// testimonial image slider
const images = document.querySelectorAll(".testimonial__img");
const contentItem = document.querySelectorAll(".testimonial__content-item");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
let slideCurrentIndex = 1;
let isTransitioning;

// loop through the array for testimonial item
images.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
});

contentItem.forEach((content, index) => {
  content.style.left = `${index * 100}%`;
  content.classList.add("testimonial__content-item-transition-effect");
});
const removeTransition = () => {
  contentItem.forEach((item) => {
    item.classList.remove("testimonial__content-item-transition-effect");
  });
};
const addTransition = () => {
  contentItem.forEach((item) => {
    item.classList.add("testimonial__content-item-transition-effect");
  });
};

// Function which next the image
const slide = () => {
  images.forEach((image) => {
    image.style.transform = `translateX(-${slideCurrentIndex * 100}%)`;
  });
  contentItem.forEach((content) => {
    content.style.transform = `translateX(-${slideCurrentIndex * 100}%)`;
  });
};
slide();

const first = contentItem[0];
const last = contentItem[contentItem.length - 1];

first.addEventListener("transitionend", () => {
  if (slideCurrentIndex === 0) {
    removeTransition();
    slideCurrentIndex = contentItem.length - 2;
    slide();
  }
  isTransitioning = false;
});

// Function to handle the transitionend event
const handleTransitionEnd = () => {
  if (slideCurrentIndex === contentItem.length - 1) {
    removeTransition();
    slideCurrentIndex = 1;
    slide();
  }
  isTransitioning = false;
};

last.addEventListener("transitionend", handleTransitionEnd);

// right and left button
rightButton.addEventListener("click", () => {
  if (!isTransitioning) {
    // Check if a transition is ongoing
    isTransitioning = true; 
    addTransition();
    slideCurrentIndex++;
    slide();
  }
});

leftButton.addEventListener("click", () => {
  if (!isTransitioning) {
    // Check if a transition is ongoing
    isTransitioning = true;
    addTransition();
    slideCurrentIndex--;
    slide();
  }
});

// loop through the array for course item
const courseItem = document.querySelector(".course__item-list");

// To clear the content of courseItem
function clearCourseItem() {
  const courseItem = document.querySelector(".course__item-list");
  courseItem.innerHTML = "";
}

const generateCourses = (from, to) => {
  clearCourseItem();
  for (let index = from; index <= to; index++) {
    let item = data[index];
    const courseItemWrapper = document.createElement("div");
    courseItemWrapper.classList.add("course__item-wrapper");
    const check = item.discountedPrice
      ? `<h3>${item.discountedPrice}</h3>`
      : "";
    const courseItemContent = `
          <div class="course__item">
              <div class="course__item-thumb">
                  <a href="#" class="course__item-tag" style="background:${colors[index]}">${item.courseName}</a>
                  <a href="#" class="course__item-thumb-img"><img src="${item.url}" alt="image"></a>
              </div>
              <div class="course__item-content">
                  <ul class="course__item-info-wrapper">
                      <li><i class="icon"><img src="./assets/svg/document.svg" alt="icon"></i>${item.lessons} Lessons</li>
                      <li><i class="icon"><img src="./assets/svg/clock.svg" alt="icon"></i>${item.duration}</li>
                      <li><i class="icon"><img src="./assets/svg/person.svg" alt="icon"></i> Students</li>
                  </ul>
                  <h5 class="title">${item.title}</h5>
                  <div class="course__item-rating">
                      <div class="star">
                          <i class="icon"><img src="./assets/svg/star.svg" alt="star"></i>
                          <i class="icon"><img src="./assets/svg/star.svg" alt="star"></i>
                          <i class="icon"><img src="./assets/svg/star.svg" alt="star"></i>
                          <i class="icon"><img src="./assets/svg/star.svg" alt="star"></i>
                          <i class="icon"><img src="./assets/svg/star.svg" alt="star"></i>
                      </div>
                      (${item.totalRating})
                  </div>
                  <div class="course__item-footer">
                      <div class="course__author">
                          <a href="#"><img src="${item.teacherProfile}" alt="profile"></a>
                          <a href="#">${item.instructor}</a>
                      </div>
                      <div class="course__price">
                        ${check}
                      <h5>${item.originalPrice}</h5>
                      </div>
                  </div>
              </div>
          </div>
      `;
    courseItemWrapper.innerHTML = courseItemContent;
    courseItem.appendChild(courseItemWrapper);
  }
};

generateCourses(0, data.length - 1);

// to add the active state in the nav bar button also change the content along with that
let navBarBtns = document.querySelectorAll(".course__nav-wrapper button");

navBarBtns.forEach((button) => {
  button.addEventListener("click", () => {
    navBarBtns.forEach((btn) => {
      btn.style.color = "#39557e";
    });
    button.style.color = "blue";
    if (button.textContent.includes("All Courses")) {
      courseItem.classList.add("hidden");
      generateCourses(0, data.length - 1);
      setTimeout(() => {
        courseItem.classList.remove("hidden");
      }, 100);
    } else if (button.textContent.includes("Design")) {
      courseItem.classList.add("hidden");
      generateCourses(2, 5);
      setTimeout(() => {
        courseItem.classList.remove("hidden");
      }, 100);
    } else if (button.textContent.includes("Marketing")) {
      courseItem.classList.add("hidden");
      generateCourses(1, 3);
      setTimeout(() => {
        courseItem.classList.remove("hidden");
      }, 100);
    } else {
      courseItem.classList.add("hidden");
      generateCourses(3, data.length - 1);
      setTimeout(() => {
        courseItem.classList.remove("hidden");
      }, 100);
    }
  });
});
