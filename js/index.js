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
    divContainer.innerHTML = `<button id="btn-${item.level_no}" onclick="loadVocabulary(${item.level_no})"
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

// loading vocabulary when button is pressed

function loadVocabulary(id) {
  removeActive();
  const activeBtn = document.getElementById(`btn-${id}`);
  activeBtn.classList.add("active");
  const URL = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(URL).then((response) =>
    response.json().then((info) => {
      const vocabulariesContainer = document.getElementById(
        "Vocabularies-container"
      );
      vocabulariesContainer.innerHTML = "";
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
                  <button onclick="vocabularyDetails(${item.id})">
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

// removing active

function removeActive() {
  const activeBtn = document.getElementsByClassName("active");
  for (let i of activeBtn) {
    i.classList.remove("active");
  }
}

//loading Vocabulary Details

function vocabularyDetails(id) {
  const URL = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(URL).then((response) =>
    response.json().then((info) => loadVocabularyDetails(info.data))
  );
}

function loadVocabularyDetails(info) {
  loadInfo("word", info.word);
  loadInfo("pronunciation", info.pronunciation);
  loadInfo("meaning", info.meaning);
  loadInfo("sentence", info.sentence);
  const targetId = document.getElementById("synonyms");
  targetId.innerHTML = "";
  for (const item of info.synonyms) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class="text-xl bg-[#EDF7FF] p-2 rounded-lg">${item}</p>`;
    targetId.append(newDiv);
  }
  my_modal_5.showModal();
}

function loadInfo(id, info) {
  const data = document.getElementById(id);
  data.innerText = info;
}
