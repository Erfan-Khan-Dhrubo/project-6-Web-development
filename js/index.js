function loadLesson() {
  fetch("https://openapi.programming-hero.com/api/levels/all").then(
    (response) => response.json().then((info) => displayLesson(info.data))
  );
}

function displayLesson(lesson) {
  const lessonContainer = document.getElementById("Lesson-container");
  for (const item of lesson) {
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `<button
            class="btn btn-outline btn-primary font-semibold text-base px-6"
          >
            <i
              class="fa-solid fa-book-open"
              style="transform: rotate(180deg)"
            ></i
            >Lesson-${item.level_no}
          </button>`;
    lessonContainer.append(divContainer);
  }
}

loadLesson();
