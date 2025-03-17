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
  const noVocabulary = document.getElementById("No-vocabulary");
  noVocabulary.innerHTML = "";
  const emptyMsg = document.getElementById("empty-msg");
  emptyMsg.innerHTML = "";
  const vocabulariesContainer = document.getElementById(
    "Vocabularies-container"
  );
  vocabulariesContainer.innerHTML = "";
  const activeBtn = document.getElementById(`btn-${id}`);
  activeBtn.classList.add("active");
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");

  setTimeout(() => {
    spinner.classList.add("hidden"); // Hide spinner

    const URL = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(URL).then((response) =>
      response.json().then((info) => {
        // const vocabulariesContainer = document.getElementById(
        //   "Vocabularies-container"
        // );
        // vocabulariesContainer.innerHTML = "";
        if (info.data.length === 0) {
          const divContainer = document.createElement("div");
          divContainer.innerHTML = `
            <div class=" bg-[#F8F8F8] flex flex-col justify-center items-center">
              <img src="assets/alert-error.png" alt="" />
              <p class="text-base p-4">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
              </p>
              <p class="text-4xl font-medium">নেক্সট Lesson এ যান</p>
            </div>`;
          noVocabulary.append(divContainer);
        } else {
          for (const item of info.data) {
            const divContainer = document.createElement("div");
            divContainer.innerHTML = `
              <div class="flex flex-col gap-6 items-center bg-[#FFFFFF] rounded-lg p-12 h-full">
                <h4 class="font-bold text-4xl">${item.word}</h4>
                <p class="text-xl font-medium">Meaning /pronunciation</p>
                <p class="font-semibold text-3xl text-[#18181B95]">
                  " ${
                    item.meaning === null ||
                    item.meaning === undefined ||
                    Number.isNaN(item.meaning)
                      ? "অর্থ নেই"
                      : item.meaning
                  }/ ${item.pronunciation}"
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
        }
      })
    );
  }, 1000); // Hides spinner after 1 seconds and starts fetching
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
  loadInfo(
    "meaning",
    info.meaning === null ||
      info.meaning === undefined ||
      Number.isNaN(info.meaning)
      ? "কোন অর্থ খুঁজে পাওয়া যায়নি"
      : info.meaning
  );
  loadInfo("sentence", info.sentence);
  const targetId = document.getElementById("synonyms");
  targetId.innerHTML = "";
  if (info.synonyms.length === 0) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
       <p class="text-xl bg-[#EDF7FF] p-2 rounded-lg">কোনো সমার্থক শব্দ পাওয়া যায়নি</p>`;
    targetId.append(newDiv);
  } else {
    for (const item of info.synonyms) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
       <p class="text-xl bg-[#EDF7FF] p-2 rounded-lg">${item}</p>`;
      targetId.append(newDiv);
    }
  }
  my_modal_5.showModal();
}

function loadInfo(id, info) {
  const data = document.getElementById(id);
  data.innerText = info;
}

// handling Login

document.getElementById("btn-str").addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  if (name) {
    if (password == 123456) {
      swal("Good job!", "You Have Successfully Login", "success");
      loadHidden("voca-section", "hidden", "dummy-class");
      loadHidden("fqa-section", "hidden", "dummy-class");
      loadHidden("nav-section", "hidden", "dummy-class");
      loadHidden("banner_section", "dummy-class", "hidden");
    } else {
      console.log(password);
      swal("Wrong Password! Contact admin to get your Login Code");
    }
  } else {
    swal("Please Write Your Name First");
  }
});

function loadHidden(id, remove, add) {
  const targetId = document.getElementById(id);
  targetId.classList.remove(remove);
  targetId.classList.add(add);
}

// smooth scrolling

document.getElementById("btn-fqa").addEventListener("click", function () {
  document.getElementById("fqa-section").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("btn-learn").addEventListener("click", function () {
  document.getElementById("voca-section").scrollIntoView({
    behavior: "smooth",
  });
});

// handling Logout

document
  .getElementById("logout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loadHidden("voca-section", "dummy-class", "hidden");
    loadHidden("fqa-section", "dummy-class", "hidden");
    loadHidden("nav-section", "dummy-class", "hidden");
    loadHidden("banner_section", "hidden", "dummy-class");
  });
