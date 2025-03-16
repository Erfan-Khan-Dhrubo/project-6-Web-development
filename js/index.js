// loading the lesson buttons

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

//

function help() {
  fetch("https://openapi.programming-hero.com/api/level/1").then((response) =>
    response.json().then((info) => {
      const vocabulariesContainer = document.getElementById(
        "Vocabularies-container"
      );
      for (const item of info.data) {
        const divContainer = document.createElement("div");
        divContainer.innerHTML = `
          <div class="flex flex-col gap-6 items-center bg-[#FFFFFF] rounded-lg p-12">
            <h4 class="font-bold text-4xl">${item.word}</h4>
            <p class="text-xl font-medium">Meaning /pronunciation</p>
            <p class="font-semibold text-3xl text-[#18181B95]">
              "${item.meaning} / ${item.pronunciation}"
            </p>
            <div class="flex justify-between w-full">
                <div class="p-2 rounded-md bg-[#E8F3FE]">
                  <button>
                    <i class="fa-solid fa-circle-info text-xl"></i>
                  </button>
                </div>
                <div class="p-2 rounded-md bg-[#E8F3FE]">
                  <button>
                    <i class="fa-solid fa-volume-high text-xl"></i>
                  </button>
                </div>
            </div>
          </div>`;
        vocabulariesContainer.append(divContainer);
      }
    })
  );
}

help();
