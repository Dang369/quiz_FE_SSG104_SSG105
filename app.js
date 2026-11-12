/**
 * SSG Quiz Hub SPA - Interactive Study Engine for utnhodangthuong
 */

const STORAGE_KEY = 'ssg_quiz_utnhodangthuong_v1';

const COURSE_META = {
  SSG104: {
    icon: '🎀',
    sticker: 'stickers/chibi/bunny-heart.png',
    miniSticker: 'stickers/chibi/gingham-bow.png',
    cuteBadge: 'Nhiều câu hay nò ♥',
    heroSticker: 'stickers/chibi/chibi-girl.png',
    name: 'SSG104',
    subtitle: 'Ngân hàng nền tảng • Đủ 19 câu ảnh & 18 đa lựa chọn',
  },
  SSG105: {
    icon: '🌷',
    sticker: 'stickers/chibi/kitty-bell.png',
    miniSticker: 'stickers/chibi/daisy-blossom.png',
    cuteBadge: 'Sweet Day ♥ Tình huống mới',
    heroSticker: 'stickers/chibi/kitty-crown.png',
    name: 'SSG105',
    subtitle: 'Tình huống thực chiến mới • Không trùng SSG104',
  },
  ALL: {
    icon: '🍓',
    sticker: 'stickers/chibi/backpack-daisy.png',
    miniSticker: 'stickers/chibi/kitty-crown.png',
    cuteBadge: 'Chăm ngoan 10 điểm nè ✨',
    heroSticker: 'stickers/chibi/study-notebook.png',
    name: 'Tổng Ôn SSG',
    subtitle: 'Gộp 412 câu • Đủ 8 mảng + 19 ảnh + 18 đa lựa chọn',
  },
};

const STICKER_SHELF = [
  { file: 'bear-strawberry.png', label: 'Ôm tim cổ vũ', toast: 'Gấu hồng ôm dâu chúc iempéee học siu dzui ♥', icon: 'fe-strawberry.svg' },
  { file: 'bunny-boba.png', label: 'Trà sữa tiếp sức', toast: 'Uống ngụm trà sữa dâu rùi cày tiếp nò! ✨', icon: 'fe-rabbit-face.svg' },
  { file: 'kitty-crown.png', label: 'Mèo công chúa', toast: 'iempéee đội vương miện chăm chỉ nè 👑', icon: 'fe-crown.svg' },
  { file: 'cupcake-cherry.png', label: 'Ngọt ngào mỗi ngày', toast: 'Hôm nay thật ngọt ngào nha Sweet Day ♥', icon: 'fe-cupcake.svg' },
  { file: 'love-envelope.png', label: 'Thư iu thương', toast: 'Ở đây có ♥ thật nhiều yêu thương ♥ gửi iempéee!', icon: 'fe-love-letter.svg' },
  { file: 'study-notebook.png', label: 'Sổ tay 10 điểm', toast: 'Ghi nhớ kiến thức nhẹ tênh trong 1 nốt nhạc ✨', icon: 'fe-books.svg' },
  { file: 'gingham-bow.png', label: 'Nơ hồng đáng iu', toast: 'Xinh xỉu lun á iempéee ơi 🎀', icon: 'fe-ribbon.svg' },
  { file: 'puppy-star.png', label: 'Thưởng ngôi sao', toast: 'Ôn xong nhớ nghỉ ngơi thật ngoan nò 🌟', icon: 'fe-glowing-star.svg' },
  { file: 'strawberry-milk.png', label: 'Sữa dâu nạp mood', toast: 'Nạp 100% vitamin đáng yêu liền nè 🍓', icon: 'fe-pink-heart.svg' },
  { file: 'crown-cloud.png', label: 'Cốc cốc vào học', toast: 'Cốc cốc! Mời iempéee vào học ạ! 👑', icon: 'fe-crown.svg' },
  { file: 'daisy-blossom.png', label: 'Hoa nở điểm cao', toast: 'Từng câu từng chữ nở hoa điểm A+ nha 🌸', icon: 'fe-blossom.svg' },
  { file: 'heart-wand.png', label: 'Đũa phép qua môn', toast: 'Úm ba la! Đề SSG dễ ợt với iempéee ✨', icon: 'fe-sparkles.svg' },
];

const SECTION_ICONS = [
  'fe-books.svg',
  'fe-ribbon.svg',
  'fe-cherry-blossom.svg',
  'fe-crown.svg',
  'fe-teddy-bear.svg',
  'fe-sparkles.svg',
  'fe-butterfly.svg',
  'fe-tulip.svg',
  'kw-book-open-check.svg',
  'kw-heart-balloon.svg',
];

const BUDDY_STICKERS = [
  'bunny-boba.png',
  'kitty-bell.png',
  'bear-strawberry.png',
  'study-notebook.png',
  'puppy-star.png',
  'strawberry-milk.png',
  'cupcake-cherry.png',
  'kitty-crown.png',
];

const app = {
  state: {
    answers: {},
    mistakes: { SSG104: [], SSG105: [] },
    bookmarks: {},
    theme: 'pink-light', // 'pink-light' | 'pink-dark'
  },

  currentCourseCode: null,
  currentSectionId: null,
  activeQuestions: [],
  currentIndex: 0,
  tempMultiSelected: new Set(),
  searchFilter: 'ALL',

  toastTimer: null,

  init() {
    this.loadState();
    this.applyTheme();
    this.renderHome();
    this.renderStickerShelf();
    this.setupKeyboardAndTouch();
  },

  popCuteToast(msg, iconFile = 'fe-sparkling-heart.svg') {
    const el = document.getElementById('cute-toast');
    const txt = document.getElementById('cute-toast-text');
    const ico = document.getElementById('cute-toast-icon');
    if (!el || !txt || !ico) return;
    txt.textContent = msg;
    ico.src = `stickers/icons/${iconFile}`;
    el.classList.remove('hidden');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      el.classList.add('hidden');
    }, 2600);
  },

  renderStickerShelf() {
    const shelf = document.getElementById('sticker-shelf');
    if (!shelf) return;
    shelf.innerHTML = '';
    STICKER_SHELF.forEach((st) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'p-2 rounded-xl card-alt border hover:border-pink-400 transition flex flex-col items-center justify-center gap-1 group cursor-pointer';
      btn.onclick = () => this.popCuteToast(st.toast, st.icon);
      btn.innerHTML = `
        <img src="stickers/chibi/${st.file}" alt="${this.escapeHtml(st.label)}" class="w-11 h-11 sm:w-12 sm:h-12 object-contain sticker-drop group-hover:scale-110 transition">
        <span class="text-[10px] font-semibold text-sec text-center leading-tight">${this.escapeHtml(st.label)}</span>
      `;
      shelf.appendChild(btn);
    });
  },

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = {
          answers: parsed.answers || {},
          mistakes: {
            SSG104: (parsed.mistakes && parsed.mistakes.SSG104) || [],
            SSG105: (parsed.mistakes && parsed.mistakes.SSG105) || [],
          },
          bookmarks: parsed.bookmarks || {},
          theme: parsed.theme === 'pink-dark' ? 'pink-dark' : 'pink-light',
        };
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
    }
  },

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'pink-light' ? 'pink-dark' : 'pink-light';
    this.saveState();
    this.applyTheme();
  },

  applyTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    const metaTheme = document.querySelector('meta[name="theme-color"]');

    if (this.state.theme === 'pink-dark') {
      html.classList.add('dark');
      icon.textContent = '🌸';
      label.textContent = 'Hồng Nhạt';
      if (metaTheme) metaTheme.setAttribute('content', '#1b1018');
    } else {
      html.classList.remove('dark');
      icon.textContent = '🌙';
      label.textContent = 'Hồng Đêm';
      if (metaTheme) metaTheme.setAttribute('content', '#fdf4f7');
    }
  },

  getRawCourses() {
    return window.SSG_COURSES || {};
  },

  getCourseData(code) {
    const raw = this.getRawCourses();
    if (code !== 'ALL') return raw[code] || null;

    const c104 = raw.SSG104;
    const c105 = raw.SSG105;
    if (!c104 || !c105) return null;

    const mergedSections = c104.sections.map((sec104) => {
      const sec105 = c105.sections.find((s) => s.id === sec104.id);
      return {
        id: sec104.id,
        title: sec104.title,
        tag: sec104.tag,
        questions: [...sec104.questions, ...(sec105 ? sec105.questions : [])],
      };
    });

    const allUnique = this.getAllCourseQuestions('ALL');
    const visualQs = allUnique.filter((q) => q.has_visual);
    const multiQs = allUnique.filter((q) => q.correct && q.correct.length > 1);

    mergedSections.push({
      id: 'filter_images',
      title: 'Lọc riêng: Câu hỏi có hình ảnh minh họa',
      tag: 'Hình ảnh',
      questions: visualQs,
    });
    mergedSections.push({
      id: 'filter_multi',
      title: 'Lọc riêng: Câu chọn nhiều đáp án (2–4)',
      tag: 'Nhiều đáp án',
      questions: multiQs,
    });

    return { code: 'ALL', sections: mergedSections };
  },

  getAllCourseQuestions(code) {
    const raw = this.getRawCourses();
    if (code === 'ALL') {
      const q104 = raw.SSG104 ? raw.SSG104.sections.flatMap((s) => s.questions) : [];
      const q105 = raw.SSG105 ? raw.SSG105.sections.flatMap((s) => s.questions) : [];
      return [...q104, ...q105];
    }
    const course = raw[code];
    if (!course) return [];
    return course.sections.flatMap((s) => s.questions);
  },

  getCourseMistakeIds(code) {
    if (code === 'ALL') {
      return [...(this.state.mistakes.SSG104 || []), ...(this.state.mistakes.SSG105 || [])];
    }
    return this.state.mistakes[code] || [];
  },

  showScreen(screenId) {
    ['screen-home', 'screen-course', 'screen-quiz', 'screen-search'].forEach((id) => {
      document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  goHome() {
    this.currentCourseCode = null;
    this.currentSectionId = null;
    this.renderHome();
    this.showScreen('screen-home');
  },

  backToCourse() {
    if (!this.currentCourseCode) return this.goHome();
    this.renderCourse(this.currentCourseCode);
    this.showScreen('screen-course');
  },

  renderHome() {
    const grid = document.getElementById('courses-grid');
    grid.innerHTML = '';

    Object.keys(COURSE_META).forEach((code) => {
      const meta = COURSE_META[code];
      const data = this.getCourseData(code);
      const allQs = this.getAllCourseQuestions(code);
      const total = allQs.length;

      let done = 0;
      allQs.forEach((q) => {
        if (this.state.answers[q.id]) done++;
      });

      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const numSections = data ? data.sections.length : 0;
      const mistakeCount = this.getCourseMistakeIds(code).length;

      const card = document.createElement('div');
      card.className =
        'card-surface border rounded-2xl p-5 sm:p-6 hover:border-pink-500 dark:hover:border-pink-400 transition duration-200 cursor-pointer group flex flex-col justify-between';
      card.onclick = () => this.openCourse(code);

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between mb-3">
            <div class="relative w-16 h-16 rounded-2xl accent-pill border flex items-center justify-center group-hover:scale-105 transition">
              <img src="${meta.sticker}" alt="${meta.name}" class="w-14 h-14 object-contain sticker-drop">
              <img src="${meta.miniSticker}" alt="" class="w-7 h-7 object-contain sticker-drop absolute -bottom-1.5 -right-2 pointer-events-none">
            </div>
            <div class="flex flex-col items-end gap-1">
              ${
                mistakeCount > 0
                  ? `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30">⚠️ ${mistakeCount} câu sai</span>`
                  : `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold accent-pill border">${numSections} bộ</span>`
              }
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold sticker-ribbon-pill">${meta.cuteBadge}</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-main group-hover:text-pink-600 dark:group-hover:text-pink-400 transition flex items-center gap-1.5">
            <span>${meta.name}</span>
            <img src="stickers/icons/fe-pink-heart.svg" alt="" class="w-4 h-4">
          </h3>
          <p class="text-xs text-sec mt-1 mb-4">${meta.subtitle}</p>

          <div class="space-y-2 text-xs text-sec mb-5 p-3.5 rounded-xl card-alt border">
            <div class="flex justify-between">
              <span>Ngân hàng:</span>
              <span class="font-bold text-main">${total} câu (${numSections} bộ)</span>
            </div>
            <div class="flex justify-between">
              <span>Đã ôn:</span>
              <span class="font-bold text-pink-600 dark:text-pink-400">${done} / ${total} (${pct}%)</span>
            </div>
            <div class="w-full h-2 rounded-full progress-track overflow-hidden mt-1">
              <div class="h-full bg-pink-600 dark:bg-pink-400 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
            </div>
          </div>
        </div>

        <button class="w-full py-2.5 rounded-xl card-alt border text-main card-action-btn font-semibold text-sm transition flex items-center justify-center gap-1.5">
          <span>Vào học bộ này</span>
          <span>➔ ♥</span>
        </button>
      `;

      grid.appendChild(card);
    });

    const grandTotal = this.getAllCourseQuestions('ALL').length;
    document.getElementById('total-badge').textContent = `2 Đề • ${grandTotal} Câu`;
  },

  openCourse(code) {
    this.currentCourseCode = code;
    this.renderCourse(code);
    this.showScreen('screen-course');
  },

  renderCourse(code) {
    const meta = COURSE_META[code];
    const course = this.getCourseData(code);
    if (!course) return;

    ['SSG104', 'SSG105', 'ALL'].forEach((c) => {
      const btn = document.getElementById(`switch-${c}`);
      if (!btn) return;
      btn.className =
        c === code
          ? 'px-2.5 py-1 rounded-lg btn-primary text-xs font-semibold transition'
          : 'px-2.5 py-1 rounded-lg card-alt border text-xs font-semibold text-sec hover:border-pink-400 transition';
    });

    document.getElementById('course-badge').textContent = code === 'ALL' ? '412 CÂU' : code;
    document.getElementById('course-title').textContent = `${meta.icon} ${meta.name}`;
    document.getElementById('course-subtitle').textContent = meta.subtitle;
    const heroImg = document.getElementById('course-hero-sticker');
    if (heroImg && meta.heroSticker) heroImg.src = meta.heroSticker;

    const mistakesList = this.getCourseMistakeIds(code);
    document.getElementById('course-mistake-count').textContent = mistakesList.length;

    const btnMistakes = document.getElementById('btn-mistakes');
    btnMistakes.classList.toggle('opacity-50', mistakesList.length === 0);

    document.getElementById('course-total-sections').textContent = `${course.sections.length} bộ câu hỏi`;

    const grid = document.getElementById('sections-grid');
    grid.innerHTML = '';

    course.sections.forEach((sec, idx) => {
      const total = sec.questions.length;
      let done = 0;
      sec.questions.forEach((q) => {
        if (this.state.answers[q.id]) done++;
      });

      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const colorBadge = this.getSectionColorClass(sec.tag);
      const secIcon = SECTION_ICONS[idx % SECTION_ICONS.length];

      const card = document.createElement('div');
      card.className =
        'card-surface border rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-pink-500 dark:hover:border-pink-400 transition cursor-pointer group';
      card.onclick = () => this.startSection(sec.id);

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${colorBadge}">
              <img src="stickers/icons/${secIcon}" alt="" class="w-3.5 h-3.5 shrink-0">
              <span>${sec.tag || `Phần ${idx + 1}`}</span>
            </span>
            <span class="text-[11px] text-mut flex items-center gap-1">
              <span>${total} câu</span>
              <img src="stickers/icons/fe-pink-heart.svg" alt="" class="w-3 h-3">
            </span>
          </div>
          <h4 class="font-bold text-sm sm:text-base text-main group-hover:text-pink-600 dark:group-hover:text-pink-400 transition">${sec.title}</h4>
          <p class="text-xs text-sec mt-1">${total} câu hỏi trắc nghiệm</p>
        </div>

        <div class="mt-4 pt-3 border-t border-opacity-60" style="border-color: var(--border-color)">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="text-sec">Đã làm: <strong class="text-main">${done}/${total}</strong> (${pct}%)</span>
            <span class="text-pink-600 dark:text-pink-400 font-semibold group-hover:translate-x-0.5 transition">Học ngay ➔ ♥</span>
          </div>
          <div class="w-full h-1.5 rounded-full progress-track overflow-hidden">
            <div class="h-full bg-pink-600 dark:bg-pink-400 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    const bookmarkedQs = this.getAllCourseQuestions(code).filter((q) => this.state.bookmarks[q.id]);
    if (bookmarkedQs.length > 0) {
      const bCard = document.createElement('div');
      bCard.className =
        'card-surface border border-pink-300 dark:border-pink-500/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-pink-500 dark:hover:border-pink-400 transition cursor-pointer group';
      bCard.onclick = () => this.startCustomList('⭐ Câu đã đánh dấu (Bookmark)', bookmarkedQs);
      bCard.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold accent-pill border">
              <img src="stickers/icons/fe-heart-with-ribbon.svg" alt="" class="w-3.5 h-3.5">
              <span>Bookmark yêu thích</span>
            </span>
          </div>
          <h4 class="font-bold text-sm sm:text-base text-main group-hover:text-pink-600 dark:group-hover:text-pink-400 transition">Các câu đã đánh dấu</h4>
          <p class="text-xs text-sec mt-1">${bookmarkedQs.length} câu hỏi cần lưu ý</p>
        </div>
        <div class="mt-4 pt-3 border-t border-opacity-60 text-right text-xs text-pink-600 dark:text-pink-400 font-semibold" style="border-color: var(--border-color)">
          Ôn tập ngay ➔ ♥
        </div>
      `;
      grid.appendChild(bCard);
    }
  },

  getSectionColorClass(tag) {
    const t = (tag || '').toLowerCase();
    if (t.includes('hình ảnh')) return 'bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/30';
    if (t.includes('nhiều')) return 'bg-purple-50 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30';
    if (t.includes('xung đột')) return 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/30';
    if (t.includes('lãnh đạo')) return 'bg-fuchsia-50 dark:bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-500/30';
    return 'bg-pink-50 dark:bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-500/30';
  },

  startSection(sectionId) {
    const course = this.getCourseData(this.currentCourseCode);
    const sec = course.sections.find((s) => s.id === sectionId);
    if (!sec || sec.questions.length === 0) return;

    this.currentSectionId = sectionId;
    this.activeQuestions = sec.questions;

    let resumeIdx = this.activeQuestions.findIndex((q) => !this.state.answers[q.id]);
    if (resumeIdx === -1) resumeIdx = 0;

    this.currentIndex = resumeIdx;
    document.getElementById('quiz-section-badge').textContent = `${this.currentCourseCode === 'ALL' ? 'SSG' : this.currentCourseCode} • ${sec.tag || sec.title}`;
    this.renderQuestion();
    this.showScreen('screen-quiz');
  },

  startMistakesQuiz() {
    const code = this.currentCourseCode;
    const mistakeIds = this.getCourseMistakeIds(code);
    if (mistakeIds.length === 0) {
      alert('Tuyệt vời! utnhodangthuong chưa có câu làm sai nào trong bộ này!');
      return;
    }
    const allQs = this.getAllCourseQuestions(code);
    const mistakeQs = allQs.filter((q) => mistakeIds.includes(q.id));
    if (mistakeQs.length === 0) return;

    mistakeQs.forEach((q) => {
      delete this.state.answers[q.id];
    });
    this.saveState();

    this.startCustomList(`⚠️ Ôn câu sai (${mistakeQs.length} câu)`, mistakeQs);
  },

  startAllSequential() {
    const allQs = [...this.getAllCourseQuestions(this.currentCourseCode)].sort((a, b) => {
      const ca = a.id.startsWith('SSG105_') ? 1 : 0;
      const cb = b.id.startsWith('SSG105_') ? 1 : 0;
      if (ca !== cb) return ca - cb;
      return (a.index || 0) - (b.index || 0);
    });
    let resumeIdx = allQs.findIndex((q) => !this.state.answers[q.id]);
    if (resumeIdx === -1) resumeIdx = 0;
    this.startCustomList(`📖 Làm tuần tự (${allQs.length} câu)`, allQs, resumeIdx);
  },

  startAllShuffled() {
    const allQs = [...this.getAllCourseQuestions(this.currentCourseCode)];
    for (let i = allQs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQs[i], allQs[j]] = [allQs[j], allQs[i]];
    }
    this.startCustomList(`🔀 Xáo trộn (${allQs.length} câu)`, allQs);
  },

  startCustomList(label, questions, startIdx = 0) {
    this.currentSectionId = 'custom';
    this.activeQuestions = questions;
    this.currentIndex = startIdx;
    const prefix = this.currentCourseCode === 'ALL' ? 'SSG' : this.currentCourseCode || 'SSG';
    document.getElementById('quiz-section-badge').textContent = `${prefix} • ${label}`;
    this.renderQuestion();
    this.showScreen('screen-quiz');
  },

  renderQuestion() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;

    this.tempMultiSelected.clear();

    const total = this.activeQuestions.length;
    const num = this.currentIndex + 1;

    document.getElementById('quiz-counter-top').textContent = `${num}/${total}`;
    document.getElementById('q-number-label').textContent = `Câu ${num} / ${total}`;
    document.getElementById('q-id-ref').textContent = q.id;

    const pct = Math.round((num / total) * 100);
    document.getElementById('quiz-progress-bar').style.width = `${pct}%`;

    const buddyEl = document.getElementById('quiz-buddy-sticker');
    if (buddyEl) {
      buddyEl.src = `stickers/chibi/${BUDDY_STICKERS[this.currentIndex % BUDDY_STICKERS.length]}`;
    }

    const isMulti = q.correct && q.correct.length > 1;
    const multiBadge = document.getElementById('q-multi-badge');
    if (isMulti) {
      multiBadge.classList.remove('hidden');
      multiBadge.textContent = `Chọn ${q.correct.length} đáp án`;
    } else {
      multiBadge.classList.add('hidden');
    }

    const bmBtn = document.getElementById('btn-bookmark');
    if (this.state.bookmarks[q.id]) {
      bmBtn.textContent = '★';
      bmBtn.classList.add('accent-pill', 'text-pink-600', 'dark:text-pink-400', 'border-pink-400');
    } else {
      bmBtn.textContent = '☆';
      bmBtn.classList.remove('accent-pill', 'text-pink-600', 'dark:text-pink-400', 'border-pink-400');
    }

    const inlineBox = document.getElementById('inline-image-box');
    const inlineImg = document.getElementById('inline-image-el');
    const zoomBtn = document.getElementById('btn-zoom-img');
    const imgUrl = q.image_local || (q.images && q.images[0]) || '';
    const isQuestionImg = q.has_visual && imgUrl && q.visual_role === 'question';

    if (isQuestionImg) {
      inlineImg.src = imgUrl;
      inlineBox.classList.remove('hidden');
      zoomBtn.classList.remove('hidden');
    } else {
      inlineBox.classList.add('hidden');
      zoomBtn.classList.add('hidden');
    }

    document.getElementById('question-text').textContent = q.question || '';

    const savedAns = this.state.answers[q.id];
    const optList = document.getElementById('options-list');
    optList.innerHTML = '';

    const keys = Object.keys(q.options || {});
    keys.forEach((key) => {
      const val = q.options[key];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.key = key;

      let baseClass =
        'w-full text-left p-3.5 sm:p-4 rounded-xl border transition flex items-start space-x-3 text-sm sm:text-base ';

      if (!savedAns) {
        baseClass += 'card-alt hover:border-pink-500 dark:hover:border-pink-400 text-main cursor-pointer active:scale-[0.99]';
        btn.onclick = () => this.onOptionClick(key, isMulti, btn);
      } else {
        btn.disabled = true;
        const isCorrectKey = q.correct.includes(key);
        const wasSelected = savedAns.selected.includes(key);

        if (isCorrectKey && wasSelected) {
          baseClass += 'border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 text-main font-medium';
        } else if (isCorrectKey) {
          baseClass += 'border-2 border-emerald-500/80 bg-emerald-50/80 dark:bg-emerald-500/15 text-main font-medium';
        } else if (wasSelected) {
          baseClass += 'border-2 border-rose-500 bg-rose-50 dark:bg-rose-500/15 text-rose-800 dark:text-rose-200';
        } else {
          baseClass += 'card-alt opacity-60 text-sec';
        }
      }

      btn.className = baseClass;

      let badgeClass = 'card-surface border text-sec';
      let badgeContent = key;

      if (savedAns) {
        if (q.correct.includes(key)) {
          badgeClass = 'bg-emerald-600 text-white font-bold';
          badgeContent = '✓';
        } else if (savedAns.selected.includes(key)) {
          badgeClass = 'bg-rose-600 text-white font-bold';
          badgeContent = '✕';
        }
      }

      btn.innerHTML = `
        <span class="opt-badge w-7 h-7 rounded-lg ${badgeClass} flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition">
          ${badgeContent}
        </span>
        <span class="flex-1 leading-snug break-words">${this.escapeHtml(val)}</span>
      `;

      optList.appendChild(btn);
    });

    const multiWrap = document.getElementById('multi-submit-wrap');
    multiWrap.classList.toggle('hidden', !(isMulti && !savedAns));

    const expBox = document.getElementById('explanation-box');
    const peekWrap = document.getElementById('peek-wrap');

    if (savedAns) {
      expBox.classList.remove('hidden');
      peekWrap.classList.add('hidden');

      const statusEl = document.getElementById('explanation-status');
      if (savedAns.isCorrect) {
        expBox.className = 'rounded-xl p-4 border border-emerald-400/60 bg-emerald-50 dark:bg-emerald-500/15 text-xs sm:text-sm space-y-2 mb-4';
        statusEl.className = 'font-bold text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5';
        statusEl.textContent = `✨ Chính xác rồi iempéee ơi! Đáp án: ${q.correct.join(', ')}`;
      } else {
        expBox.className = 'rounded-xl p-4 border border-rose-400/60 bg-rose-50 dark:bg-rose-500/15 text-xs sm:text-sm space-y-2 mb-4';
        statusEl.className = 'font-bold text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1.5';
        statusEl.textContent = `🌷 Hong sao nò iempéee! Đáp án chuẩn là: ${q.correct.join(', ')}`;
      }

      document.getElementById('explanation-vi-detail').textContent =
        q.vi_explanation || 'iempéee có thể xem lại phần tóm tắt kiến thức của câu này nhé.';

      const expImgBox = document.getElementById('exp-image-box');
      const expImgEl = document.getElementById('exp-image-el');
      if (q.has_visual && imgUrl && q.visual_role !== 'question') {
        expImgEl.src = imgUrl;
        expImgBox.classList.remove('hidden');
        zoomBtn.classList.remove('hidden');
      } else {
        expImgBox.classList.add('hidden');
      }
    } else {
      expBox.classList.add('hidden');
      document.getElementById('exp-image-box').classList.add('hidden');
      peekWrap.classList.remove('hidden');
    }

    document.getElementById('btn-prev').disabled = this.currentIndex === 0;
    document.getElementById('btn-next').disabled = this.currentIndex === total - 1;

    this.renderDesktopPills();
  },

  onOptionClick(key, isMulti, btnEl) {
    if (!isMulti) {
      this.evaluateAnswer([key]);
      return;
    }

    const badge = btnEl.querySelector('.opt-badge');
    if (this.tempMultiSelected.has(key)) {
      this.tempMultiSelected.delete(key);
      btnEl.classList.remove('border-pink-600', 'bg-pink-50', 'dark:border-pink-400', 'dark:bg-pink-500/15');
      badge.classList.remove('bg-pink-600', 'dark:bg-pink-500', 'text-white');
    } else {
      this.tempMultiSelected.add(key);
      btnEl.classList.add('border-pink-600', 'bg-pink-50', 'dark:border-pink-400', 'dark:bg-pink-500/15');
      badge.classList.add('bg-pink-600', 'dark:bg-pink-500', 'text-white');
    }
  },

  submitMultiChoice() {
    if (this.tempMultiSelected.size === 0) {
      alert('utnhodangthuong ơi, hãy chọn ít nhất 1 đáp án trước nhé!');
      return;
    }
    this.evaluateAnswer(Array.from(this.tempMultiSelected).sort());
  },

  evaluateAnswer(selectedArr) {
    const q = this.activeQuestions[this.currentIndex];
    const correctSorted = [...(q.correct || [])].sort();
    const selectedSorted = [...selectedArr].sort();

    const isCorrect =
      correctSorted.length > 0 &&
      correctSorted.length === selectedSorted.length &&
      correctSorted.every((v, i) => v === selectedSorted[i]);

    this.state.answers[q.id] = {
      selected: selectedSorted,
      isCorrect,
    };

    const ownerCode = q.id.startsWith('SSG105_') ? 'SSG105' : 'SSG104';
    if (!this.state.mistakes[ownerCode]) this.state.mistakes[ownerCode] = [];
    const mList = this.state.mistakes[ownerCode];

    if (!isCorrect) {
      if (!mList.includes(q.id)) mList.push(q.id);
    } else {
      const idx = mList.indexOf(q.id);
      if (idx !== -1) mList.splice(idx, 1);
    }

    this.saveState();
    this.renderQuestion();
  },

  revealAnswer() {
    const q = this.activeQuestions[this.currentIndex];
    this.state.answers[q.id] = {
      selected: q.correct || [],
      isCorrect: true,
    };
    this.saveState();
    this.renderQuestion();
  },

  toggleBookmark() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;
    if (this.state.bookmarks[q.id]) {
      delete this.state.bookmarks[q.id];
    } else {
      this.state.bookmarks[q.id] = true;
    }
    this.saveState();
    this.renderQuestion();
  },

  resetCurrentSection() {
    if (!confirm('Xóa trạng thái đã làm của bộ câu hỏi đang học để làm lại từ đầu?')) return;
    this.activeQuestions.forEach((q) => {
      delete this.state.answers[q.id];
    });
    this.saveState();
    this.currentIndex = 0;
    this.renderQuestion();
  },

  resetAllProgress() {
    if (!confirm('utnhodangthuong có chắc muốn xóa toàn bộ tiến độ & câu làm sai của SSG104 + SSG105?')) return;
    localStorage.removeItem(STORAGE_KEY);
    this.state = {
      answers: {},
      mistakes: { SSG104: [], SSG105: [] },
      bookmarks: {},
      theme: this.state.theme,
    };
    this.renderHome();
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
    }
  },

  nextQuestion() {
    if (this.currentIndex < this.activeQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    }
  },

  renderDesktopPills() {
    const container = document.getElementById('desktop-pills');
    container.innerHTML = '';

    const start = Math.max(0, this.currentIndex - 4);
    const end = Math.min(this.activeQuestions.length, start + 9);

    for (let i = start; i < end; i++) {
      const q = this.activeQuestions[i];
      const ans = this.state.answers[q.id];
      const pill = document.createElement('button');
      pill.textContent = i + 1;

      let cls = 'w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition ';
      if (i === this.currentIndex) {
        cls += 'bg-pink-600 dark:bg-pink-500 text-white ring-2 ring-pink-300 dark:ring-pink-400/50';
      } else if (ans) {
        cls += ans.isCorrect
          ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40'
          : 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40';
      } else {
        cls += 'card-alt text-sec hover:border-pink-500 dark:hover:border-pink-400 border';
      }

      pill.className = cls;
      pill.onclick = () => {
        this.currentIndex = i;
        this.renderQuestion();
      };
      container.appendChild(pill);
    }
  },

  openPillDrawer() {
    const grid = document.getElementById('drawer-pills-grid');
    grid.innerHTML = '';

    this.activeQuestions.forEach((q, i) => {
      const ans = this.state.answers[q.id];
      const btn = document.createElement('button');
      btn.textContent = i + 1;

      let cls = 'py-2 rounded-xl text-xs font-bold border transition ';
      if (i === this.currentIndex) {
        cls += 'bg-pink-600 dark:bg-pink-500 text-white border-pink-600 dark:border-pink-400';
      } else if (ans) {
        cls += ans.isCorrect
          ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40'
          : 'bg-rose-50 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-500/40';
      } else {
        cls += 'card-alt text-sec hover:border-pink-500 dark:hover:border-pink-400';
      }

      btn.className = cls;
      btn.onclick = () => {
        this.currentIndex = i;
        this.closePillDrawer();
        this.renderQuestion();
      };
      grid.appendChild(btn);
    });

    document.getElementById('pill-drawer').classList.remove('hidden');
  },

  closePillDrawer() {
    document.getElementById('pill-drawer').classList.add('hidden');
  },

  openImageModal() {
    const q = this.activeQuestions[this.currentIndex];
    const url = q && (q.image_local || (q.images && q.images[0]));
    if (!q || !url) return;
    document.getElementById('modal-image-label').textContent = q.id;
    document.getElementById('modal-image-el').src = url;
    document.getElementById('image-modal').classList.remove('hidden');
  },

  closeImageModal() {
    document.getElementById('image-modal').classList.add('hidden');
  },

  openSearch() {
    this.showScreen('screen-search');
    this.renderSearchResults();
    setTimeout(() => {
      const inp = document.getElementById('search-input');
      if (inp) inp.focus();
    }, 60);
  },

  setSearchFilter(mode) {
    this.searchFilter = mode;
    ['ALL', 'SSG104', 'SSG105', 'IMG'].forEach((m) => {
      const btn = document.getElementById(`sf-${m}`);
      if (!btn) return;
      btn.className =
        m === mode
          ? 'px-3 py-2 rounded-xl text-xs font-bold btn-primary transition'
          : 'px-3 py-2 rounded-xl text-xs font-bold card-alt border text-sec hover:border-pink-400 transition';
    });
    this.renderSearchResults();
  },

  renderSearchResults() {
    const kw = (document.getElementById('search-input').value || '').trim().toLowerCase();
    const allQs = this.getAllCourseQuestions('ALL');

    const filtered = allQs.filter((q) => {
      if (this.searchFilter === 'SSG104' && !q.id.startsWith('SSG104_')) return false;
      if (this.searchFilter === 'SSG105' && !q.id.startsWith('SSG105_')) return false;
      if (this.searchFilter === 'IMG' && !q.has_visual) return false;
      if (!kw) return true;
      const haystack = `${q.id} ${q.question} ${Object.values(q.options || {}).join(' ')} ${q.vi_explanation || ''}`.toLowerCase();
      return haystack.includes(kw);
    });

    document.getElementById('search-count-label').textContent = `Tìm thấy ${filtered.length} / ${allQs.length} câu`;
    const box = document.getElementById('search-results');
    const shown = filtered.slice(0, 60);

    if (shown.length === 0) {
      box.innerHTML = `<div class="text-sm text-mut py-6 text-center">Không tìm thấy câu hỏi nào khớp với "${this.escapeHtml(kw)}".</div>`;
      return;
    }

    box.innerHTML = '';
    shown.forEach((q) => {
      const item = document.createElement('div');
      item.className = 'p-3.5 rounded-xl card-alt border hover:border-pink-500 cursor-pointer transition space-y-1.5 text-xs';
      item.onclick = () => {
        this.currentCourseCode = q.id.startsWith('SSG105_') ? 'SSG105' : 'SSG104';
        this.startCustomList('🔍 Kết quả tra cứu', filtered, filtered.indexOf(q));
      };
      const firstLineQ = (q.question || '').split('\n')[0];
      const firstLineExp = (q.vi_explanation || '').split('\n')[0];
      item.innerHTML = `
        <div class="flex items-center justify-between text-mut">
          <span class="font-bold text-pink-600 dark:text-pink-400">${q.id} ${q.has_visual ? '🖼️' : ''}</span>
          <span>Đáp án: <strong class="text-main">${(q.correct || []).join(', ')}</strong></span>
        </div>
        <div class="font-semibold text-sm text-main">${this.escapeHtml(firstLineQ)}</div>
        <div class="text-sec">${this.escapeHtml(firstLineExp)}</div>
      `;
      box.appendChild(item);
    });

    if (filtered.length > 60) {
      const note = document.createElement('div');
      note.className = 'text-center text-xs text-mut py-2';
      note.textContent = `Đang hiển thị 60/${filtered.length} kết quả đầu — gõ thêm từ khóa để thu hẹp nhé utnhodangthuong!`;
      box.appendChild(note);
    }
  },

  setupKeyboardAndTouch() {
    document.addEventListener('keydown', (e) => {
      if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const quizVisible = !document.getElementById('screen-quiz').classList.contains('hidden');
      if (!quizVisible) return;

      const modalOpen =
        !document.getElementById('image-modal').classList.contains('hidden') ||
        !document.getElementById('pill-drawer').classList.contains('hidden');

      if (e.key === 'Escape') {
        this.closeImageModal();
        this.closePillDrawer();
        return;
      }

      if (modalOpen) return;

      if (e.key === 'ArrowRight') {
        this.nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        this.prevQuestion();
      } else {
        const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F' };
        const letter = keyMap[e.key.toLowerCase()];
        if (letter) {
          const optBtn = document.querySelector(`#options-list button[data-key="${letter}"]`);
          if (optBtn && !optBtn.disabled) optBtn.click();
        }
      }
    });

    let touchStartX = 0;
    let touchStartY = 0;
    const quizEl = document.getElementById('screen-quiz');
    quizEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    quizEl.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      const dy = e.changedTouches[0].screenY - touchStartY;
      if (Math.abs(dx) > 75 && Math.abs(dy) < 50) {
        if (dx < 0) this.nextQuestion();
        else this.prevQuestion();
      }
    }, { passive: true });
  },

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());
