const timelineEvents = [
  {
    year: "1936",
    label: "начало",
    title: "Основание заочного института",
    text:
      "История МГУПИ начинается с 1936 года, когда был создан Московский заочный институт металлообрабатывающей промышленности. В проекте эта точка открывает тему доступного инженерного образования и будущей специализации в области приборостроения.",
    quiz: {
      question: "С какого года начинается история МГУПИ?",
      options: ["1936", "1950", "1988", "2005"],
      answer: "1936",
      note: "1936 год выбран как исходная точка юбилейной хроники.",
    },
  },
  {
    year: "1950",
    label: "ВЗМИ",
    title: "Переименование во Всесоюзный заочный машиностроительный институт",
    text:
      "В 1950 году институт получил новое название - Всесоюзный заочный машиностроительный институт. В интерактивной хронике этот этап показывает расширение инженерной образовательной базы и связь с промышленной подготовкой специалистов.",
    quiz: {
      question: "Какой профиль сильнее всего отражает этап ВЗМИ?",
      options: ["машиностроение", "кинематограф", "медицина", "архитектура"],
      answer: "машиностроение",
      note: "Название ВЗМИ напрямую связано с машиностроительной подготовкой.",
    },
  },
  {
    year: "1988",
    label: "приборы",
    title: "Московский институт приборостроения",
    text:
      "В 1988 году вуз был преобразован в Московский институт приборостроения. Этот этап важен для образа проекта: точность, измерение, приборная эстетика и технологическая культура становятся визуальными мотивами интерфейса.",
    quiz: {
      question: "Какой визуальный образ лучше связан с приборостроением?",
      options: ["шкала измерения", "афиша концерта", "витрина магазина", "карта метро"],
      answer: "шкала измерения",
      note: "Шкалы, метки и индикаторы помогают передать идею точности.",
    },
  },
  {
    year: "1994",
    label: "академия",
    title: "Московская государственная академия приборостроения и информатики",
    text:
      "В 1994 году институт стал Московской государственной академией приборостроения и информатики. Для проекта это переход к сочетанию приборной инженерии и цифровых технологий.",
  },
  {
    year: "2005",
    label: "университет",
    title: "Статус университета",
    text:
      "В 2005 году академия получила статус университета и название МГУПИ. В сценарии капсулы времени этот этап используется как центральная точка идентичности проекта.",
    quiz: {
      question: "Как расшифровывается МГУПИ?",
      options: [
        "Московский государственный университет приборостроения и информатики",
        "Московская городская учебная площадка информатики",
        "Международная группа управления промышленными инновациями",
        "Московский гуманитарный университет прикладных искусств",
      ],
      answer: "Московский государственный университет приборостроения и информатики",
      note: "Это полное название вуза после получения статуса университета.",
    },
  },
  {
    year: "2015",
    label: "интеграция",
    title: "Вхождение в структуру МГТУ МИРЭА",
    text:
      "В 2015 году МГУПИ вошел в состав Московского государственного технического университета МИРЭА. В продукте этот этап связывает историческое наследие с современной образовательной экосистемой РТУ МИРЭА.",
  },
  {
    year: "2026",
    label: "90 лет",
    title: "Юбилейная точка",
    text:
      "К 2026 году от исходной точки 1936 года проходит 90 лет. Веб-капсула превращает юбилей в пользовательское действие: каждый участник может оставить короткое сообщение для будущей аудитории.",
    quiz: {
      question: "Что является главным действием пользователя в проекте?",
      options: ["оставить послание", "скачать приложение", "заполнить длинную анкету", "купить билет"],
      answer: "оставить послание",
      note: "Личное послание делает пользователя участником цифровой хроники.",
    },
  },
  {
    year: "2036",
    label: "будущее",
    title: "Адресат цифровой капсулы",
    text:
      "Финальная точка направлена в будущее. Архив посланий можно представить как материал для следующего юбилейного цикла, где нынешние студенты, выпускники и преподаватели обращаются к поколению 2036 года.",
  },
];

const seedMessages = [
  {
    name: "Аня",
    role: "Студент",
    message: "Сохраняйте любопытство к истории вуза: в ней много идей для будущих проектов.",
    createdAt: "2026-06-28",
  },
  {
    name: "Илья",
    role: "Выпускник",
    message: "Самое ценное в университете - люди, которые умеют превращать знания в реальные решения.",
    createdAt: "2026-06-28",
  },
  {
    name: "Ольга",
    role: "Преподаватель",
    message: "Технологии меняются, но внимательность, точность и ответственность остаются главным профессиональным фундаментом.",
    createdAt: "2026-06-28",
  },
];

const storageKey = "mgupi-time-capsule-messages";
const state = {
  currentView: "home",
  currentEvent: 0,
  answered: new Map(),
  score: 0,
  filter: "Все",
};

const viewElements = [...document.querySelectorAll("[data-view]")];
const viewLinks = [...document.querySelectorAll("[data-view-link]")];
const navTabs = [...document.querySelectorAll(".nav-tab")];
const yearRail = document.querySelector("#yearRail");
const stepLabel = document.querySelector("#stepLabel");
const scoreLabel = document.querySelector("#scoreLabel");
const eventYear = document.querySelector("#eventYear");
const eventTitle = document.querySelector("#eventTitle");
const eventText = document.querySelector("#eventText");
const quizBlock = document.querySelector("#quizBlock");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const prevEvent = document.querySelector("#prevEvent");
const nextEvent = document.querySelector("#nextEvent");
const messageForm = document.querySelector("#messageForm");
const messageName = document.querySelector("#messageName");
const messageText = document.querySelector("#messageText");
const messageCounter = document.querySelector("#messageCounter");
const formStatus = document.querySelector("#formStatus");
const archiveList = document.querySelector("#archiveList");
const totalMessages = document.querySelector("#totalMessages");
const studentShare = document.querySelector("#studentShare");
const resetArchive = document.querySelector("#resetArchive");
const filterButtons = [...document.querySelectorAll(".filter-chip")];

function loadMessages() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      localStorage.setItem(storageKey, JSON.stringify(seedMessages));
      return [...seedMessages];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...seedMessages];
  } catch {
    return [...seedMessages];
  }
}

function saveMessages(messages) {
  localStorage.setItem(storageKey, JSON.stringify(messages));
}

function showView(view) {
  state.currentView = view;
  viewElements.forEach((element) => {
    element.classList.toggle("is-visible", element.dataset.view === view);
  });
  navTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.viewLink === view);
  });
  if (view === "archive") {
    renderArchive();
  }
  window.location.hash = view === "home" ? "" : view;
}

function renderYearRail() {
  yearRail.innerHTML = timelineEvents
    .map(
      (event, index) => `
        <button class="year-button" type="button" data-event-index="${index}">
          <strong>${event.year}</strong>
          <span>${event.label}</span>
        </button>
      `,
    )
    .join("");

  yearRail.querySelectorAll(".year-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentEvent = Number(button.dataset.eventIndex);
      renderEvent();
    });
  });
}

function renderEvent() {
  const event = timelineEvents[state.currentEvent];
  stepLabel.textContent = `Точка ${state.currentEvent + 1} из ${timelineEvents.length}`;
  scoreLabel.textContent = `Верных ответов: ${state.score}`;
  eventYear.textContent = event.year;
  eventTitle.textContent = event.title;
  eventText.textContent = event.text;

  yearRail.querySelectorAll(".year-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.eventIndex) === state.currentEvent);
  });

  prevEvent.disabled = state.currentEvent === 0;
  nextEvent.textContent = state.currentEvent === timelineEvents.length - 1 ? "К капсуле ›" : "Дальше ›";

  renderQuiz(event);
}

function renderQuiz(event) {
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  if (!event.quiz) {
    quizBlock.classList.remove("is-visible");
    return;
  }

  quizBlock.classList.add("is-visible");
  quizQuestion.textContent = event.quiz.question;

  const savedAnswer = state.answered.get(event.year);
  event.quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.disabled = Boolean(savedAnswer);

    if (savedAnswer) {
      if (option === event.quiz.answer) button.classList.add("is-correct");
      if (option === savedAnswer && savedAnswer !== event.quiz.answer) button.classList.add("is-wrong");
    }

    button.addEventListener("click", () => answerQuiz(event, option));
    quizOptions.append(button);
  });

  if (savedAnswer) {
    quizFeedback.textContent = event.quiz.note;
  }
}

function answerQuiz(event, answer) {
  if (state.answered.has(event.year)) return;
  state.answered.set(event.year, answer);
  if (answer === event.quiz.answer) {
    state.score += 1;
  }
  renderEvent();
}

function moveEvent(direction) {
  const nextIndex = state.currentEvent + direction;
  if (nextIndex < 0) return;
  if (nextIndex >= timelineEvents.length) {
    showView("message");
    return;
  }
  state.currentEvent = nextIndex;
  renderEvent();
}

function sanitizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function addMessage(event) {
  event.preventDefault();
  const name = sanitizeText(messageName.value) || "Участник";
  const role = new FormData(messageForm).get("role") || "Студент";
  const message = sanitizeText(messageText.value);

  if (message.length < 12) {
    formStatus.textContent = "Послание слишком короткое.";
    return;
  }

  const messages = loadMessages();
  messages.unshift({
    name,
    role,
    message,
    createdAt: new Date().toISOString().slice(0, 10),
  });
  saveMessages(messages);

  messageForm.reset();
  messageCounter.textContent = "0 / 180";
  formStatus.textContent = "Послание сохранено в архиве.";
  state.filter = "Все";
  filterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === "Все"));
  renderArchive();
  setTimeout(() => showView("archive"), 350);
}

function renderArchive() {
  const messages = loadMessages();
  const filtered =
    state.filter === "Все" ? messages : messages.filter((message) => message.role === state.filter);

  totalMessages.textContent = String(messages.length);
  const studentCount = messages.filter((message) => message.role === "Студент").length;
  studentShare.textContent = messages.length ? `${Math.round((studentCount / messages.length) * 100)}%` : "0%";

  if (!filtered.length) {
    archiveList.innerHTML = `<div class="empty-state">В этой категории пока нет посланий.</div>`;
    return;
  }

  archiveList.innerHTML = filtered
    .map((message) => {
      const initial = message.name.slice(0, 1).toUpperCase();
      return `
        <article class="message-card">
          <div class="avatar" aria-hidden="true">${initial}</div>
          <div>
            <h3>${escapeHtml(message.name)} <span>${escapeHtml(message.role)} · ${escapeHtml(message.createdAt)}</span></h3>
            <p>${escapeHtml(message.message)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const view = link.dataset.viewLink;
    if (view) showView(view);
  });
});

prevEvent.addEventListener("click", () => moveEvent(-1));
nextEvent.addEventListener("click", () => moveEvent(1));
messageForm.addEventListener("submit", addMessage);

messageText.addEventListener("input", () => {
  messageCounter.textContent = `${messageText.value.length} / 180`;
  formStatus.textContent = "";
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderArchive();
  });
});

resetArchive.addEventListener("click", () => {
  if (!confirm("Сбросить архив до исходных сообщений?")) return;
  saveMessages(seedMessages);
  state.filter = "Все";
  filterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === "Все"));
  renderArchive();
});

renderYearRail();
renderEvent();
renderArchive();

const hashView = window.location.hash.replace("#", "");
if (["timeline", "message", "archive"].includes(hashView)) {
  showView(hashView);
} else {
  showView("home");
}
