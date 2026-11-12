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
  { file: 'bunny-heart.png', label: 'Thỏ hồng nháy mắt', toast: 'Thỏ hồng bắn tim tới tấp cho iempéee nò ♥', icon: 'fe-rabbit-face.svg' },
  { file: 'chibi-girl.png', label: 'Péee dễ thương', toast: 'Tóc xoăn nơ hồng ôn bài siu xinh lun ✨', icon: 'fe-sparkling-heart.svg' },
  { file: 'kitty-bell.png', label: 'Mèo chuông vàng', toast: 'Leng keng! Mở cửa đón 10 điểm nè 🐱', icon: 'fe-cat-face.svg' },
  { file: 'backpack-daisy.png', label: 'Ba lô cúc họa mi', toast: 'Đeo ba lô cúc họa mi vào phòng thi tự tin nha 🌼', icon: 'fe-blossom.svg' },
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

const CHAOS_SVG_ICONS = [
  'fe-pink-heart.svg',
  'fe-sparkling-heart.svg',
  'fe-two-hearts.svg',
  'fe-heart-with-ribbon.svg',
  'fe-butterfly.svg',
  'fe-candy.svg',
  'fe-lollipop.svg',
  'fe-strawberry.svg',
  'fe-cherry-blossom.svg',
  'fe-blossom.svg',
  'fe-tulip.svg',
  'fe-ribbon.svg',
  'fe-crown.svg',
  'fe-sparkles.svg',
  'fe-glowing-star.svg',
  'fe-cupcake.svg',
  'fe-shortcake.svg',
  'fe-soft-ice-cream.svg',
  'fe-wrapped-gift.svg',
  'fe-confetti-ball.svg',
  'fe-party-popper.svg',
  'fe-teddy-bear.svg',
  'fe-cat-face.svg',
  'fe-rabbit-face.svg',
  'fe-love-letter.svg',
  'fe-hibiscus.svg',
  'fe-books.svg',
];

const CHAOS_DECAL_QUOTES = [
  'Ở đây có ♥ thật nhiều yêu thương',
  'Cốc cốc! Mời vào học ạ!',
  'Sweet Day ♥',
  'Đọc kỹ đề xíu nò ♥',
  'Cố lên iempéee ơi!',
  '10 điểm về chỗ ✨',
  'Học giỏi thương x1000',
  'Ỏooo cute xỉu ♥',
  'Não nở hoa 🌸',
  'Phép thuật qua môn!',
  'Hí utnhodangthuong ♥',
  'Nạp mood 100% 🍓',
  'Đỉnh nóc kịch trần ✨',
  'Bí kíp qua môn nò 🎀',
  'Ngọt xỉu lun á 🧁',
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
    pinnedStickers: [],
  },

  currentCourseCode: null,
  currentSectionId: null,
  activeQuestions: [],
  currentIndex: 0,
  tempMultiSelected: new Set(),
  searchFilter: 'ALL',

  toastTimer: null,
  chaosSeed: Math.floor(Math.random() * 1000000000),

  init() {
    this.loadState();
    this.applyTheme();
    this.renderHome();
    this.renderStickerShelf();
    this.renderChaoticAmbientStickers();
    this.renderSpawnedStickers();
    this.setupKeyboardAndTouch();
  },

  makePrng(seed) {
    let a = (seed >>> 0) || 1;
    return () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  },

  rerollChaosSideStickers(sourceEl = null) {
    this.chaosSeed = Math.floor(Math.random() * 1000000000);
    this.renderChaoticAmbientStickers();
    this.triggerStickerBoing(sourceEl);
    this.popCuteToast('Úm ba la! Đã xáo trộn hỗn loạn toàn bộ nhãn 2 bên cho iempéee ✨', 'fe-sparkles.svg');
  },

  renderChaoticAmbientStickers() {
    const leftRail = document.getElementById('side-rail-left');
    const rightRail = document.getElementById('side-rail-right');
    if (!leftRail || !rightRail) return;

    leftRail.innerHTML = '';
    rightRail.innerHTML = '';

    const vw = window.innerWidth;
    if (vw < 1120) return;

    const gutter = Math.max(0, (vw - 928) / 2);
    const rng = this.makePrng(this.chaosSeed);
    const movedKeys = new Set(
      (this.state.pinnedStickers || []).map((p) => p.sourceChaosKey).filter(Boolean)
    );

    const tier =
      gutter >= 340
        ? { chibi: 26, svg: 26, decal: 12, sizeScale: 1 }
        : gutter >= 200
          ? { chibi: 16, svg: 18, decal: 8, sizeScale: 0.8 }
          : { chibi: 9, svg: 12, decal: 4, sizeScale: 0.64 };

    const chibiSizes = [44, 50, 58, 68, 78, 92, 108, 122];

    [
      { rail: leftRail, railSide: 'left' },
      { rail: rightRail, railSide: 'right' },
    ].forEach(({ rail, railSide }) => {
      const frag = document.createDocumentFragment();
      const anchors = [];

      const bindAmbientItem = (meta, leftPx, topPct, z) => {
        if (movedKeys.has(meta.chaosKey)) return;
        const item = document.createElement('div');
        item.className = 'chaos-item pointer-events-auto group sticker-draggable';
        item.style.position = 'absolute';
        item.style.left = `${Math.round(leftPx)}px`;
        item.style.top = `${topPct.toFixed(1)}%`;
        item.style.zIndex = String(z);
        if (meta.opacity !== undefined) item.style.opacity = String(meta.opacity);

        const inner = this.buildStickerInnerEl(meta, true);
        item.appendChild(inner);

        let livePin = null;
        this.enableHoldDrag(item, inner, {
          onTap: () => {
            this.triggerStickerBoing(item);
            this.popCuteToast(meta.toast, meta.icon);
          },
          onDrop: (freeX, freeY) => {
            const zIdx = this.getNextStickerZ();
            if (!this.state.pinnedStickers) this.state.pinnedStickers = [];
            if (!livePin) {
              livePin = {
                uid: `st_${Date.now()}_${Math.floor(Math.random() * 99999)}`,
                sourceChaosKey: meta.chaosKey,
                kind: meta.kind,
                file: meta.file,
                label: meta.label,
                showBadge: !!meta.showBadge,
                badgeRibbon: !!meta.badgeRibbon,
                badgeRot: meta.badgeRot || 0,
                toast: meta.toast,
                icon: meta.icon,
                widthPx: meta.widthPx,
                opacity: meta.opacity,
                side: railSide,
                xRatio: 0.5,
                yPct: freeY,
                freeX,
                freeY,
                zIndex: zIdx,
                rot: meta.rot,
                scale: meta.scale || 1,
                dx: meta.dx,
                dy: meta.dy,
                dur: meta.dur,
                delay: meta.delay,
              };
              this.state.pinnedStickers.push(livePin);
              if (this.state.pinnedStickers.length > 90) this.state.pinnedStickers.shift();
              this.attachStickerDismissBtn(inner, livePin.uid);
              this.updateSpawnedClearBtn();
            } else {
              livePin.freeX = freeX;
              livePin.freeY = freeY;
              livePin.zIndex = zIdx;
            }
            item.classList.remove('chaos-item');
            item.style.zIndex = String(zIdx);
            this.saveState();
            this.popCuteToast('Đã kéo dán sticker tới chỗ mới nò ✨', meta.icon);
          },
        });

        frag.appendChild(item);
      };

      // 1. Chaotic layered Chibi PNGs across full side wing
      for (let i = 0; i < tier.chibi; i++) {
        const st = STICKER_SHELF[Math.floor(rng() * STICKER_SHELF.length)];
        const baseW = Math.round(chibiSizes[Math.floor(rng() * chibiSizes.length)] * tier.sizeScale);
        const maxLeft = Math.max(4, gutter - baseW - 4);

        let leftPx;
        let topPct;
        if (anchors.length > 0 && rng() < 0.34) {
          const anchor = anchors[Math.floor(rng() * anchors.length)];
          leftPx = Math.max(0, Math.min(maxLeft, anchor.x + (rng() * 110 - 55)));
          topPct = Math.max(0, Math.min(90, anchor.y + (rng() * 14 - 7)));
        } else {
          leftPx = rng() * maxLeft;
          topPct = rng() * 90;
        }
        anchors.push({ x: leftPx, y: topPct });

        const meta = {
          chaosKey: `${railSide}_chibi_${i}`,
          kind: 'chibi',
          file: st.file,
          label: st.label,
          showBadge: false,
          widthPx: baseW,
          toast: st.toast,
          icon: st.icon,
          rot: Number((rng() * 76 - 38).toFixed(1)),
          scale: 1,
          dx: Math.round(rng() * 32 - 16),
          dy: Math.round(-(5 + rng() * 16)),
          dur: (2.6 + rng() * 4.0).toFixed(2),
          delay: -(rng() * 5.5).toFixed(2),
        };
        const z = 2 + Math.floor(rng() * 18);
        bindAmbientItem(meta, leftPx, topPct, z);
      }

      // 2. Chaotic SVG sticker confetti & kawaii props everywhere
      for (let i = 0; i < tier.svg; i++) {
        const iconFile = CHAOS_SVG_ICONS[Math.floor(rng() * CHAOS_SVG_ICONS.length)];
        const sz = Math.max(16, Math.round((18 + rng() * 32) * tier.sizeScale));
        const maxLeft = Math.max(4, gutter - sz - 4);
        const leftPx = rng() * maxLeft;
        const topPct = rng() * 94;
        const quote = CHAOS_DECAL_QUOTES[Math.floor(rng() * CHAOS_DECAL_QUOTES.length)];

        const meta = {
          chaosKey: `${railSide}_svg_${i}`,
          kind: 'svg',
          file: iconFile,
          label: quote,
          showBadge: false,
          widthPx: sz,
          opacity: Number((0.78 + rng() * 0.22).toFixed(2)),
          toast: quote,
          icon: iconFile,
          rot: Number((rng() * 110 - 55).toFixed(1)),
          scale: 1,
          dx: Math.round(rng() * 26 - 13),
          dy: Math.round(-(4 + rng() * 14)),
          dur: (2.2 + rng() * 3.8).toFixed(2),
          delay: -(rng() * 5).toFixed(2),
        };
        const z = 1 + Math.floor(rng() * 20);
        bindAmbientItem(meta, leftPx, topPct, z);
      }

      // 3. Messy overlapping Vietnamese door-sticker quote decals & ribbons
      for (let i = 0; i < tier.decal; i++) {
        const text = CHAOS_DECAL_QUOTES[Math.floor(rng() * CHAOS_DECAL_QUOTES.length)];
        const iconFile = CHAOS_SVG_ICONS[Math.floor(rng() * CHAOS_SVG_ICONS.length)];
        const isRibbon = rng() < 0.45;
        const estW = Math.min(gutter - 12, Math.round(118 * tier.sizeScale + 44));
        const maxLeft = Math.max(4, gutter - estW);
        const leftPx = rng() * maxLeft;
        const topPct = 3 + rng() * 90;

        const meta = {
          chaosKey: `${railSide}_decal_${i}`,
          kind: 'decal',
          file: iconFile,
          label: text,
          showBadge: false,
          badgeRibbon: isRibbon,
          toast: text,
          icon: iconFile,
          rot: Number((rng() * 52 - 26).toFixed(1)),
          scale: Number((0.86 + rng() * 0.24).toFixed(2)),
          dx: Math.round(rng() * 20 - 10),
          dy: Math.round(-(4 + rng() * 11)),
          dur: (3.0 + rng() * 3.4).toFixed(2),
          delay: -(rng() * 5).toFixed(2),
        };
        const z = 7 + Math.floor(rng() * 16);
        bindAmbientItem(meta, leftPx, topPct, z);
      }

      rail.appendChild(frag);
    });
  },

  getNextStickerZ() {
    const list = this.state.pinnedStickers || [];
    let maxZ = 27;
    list.forEach((p) => {
      if ((p.zIndex || 0) > maxZ) maxZ = p.zIndex;
    });
    if (maxZ >= 38) {
      list.forEach((p) => {
        if ((p.zIndex || 28) > 28) p.zIndex -= 4;
      });
      maxZ -= 4;
    }
    return Math.min(39, maxZ + 1);
  },

  updateSpawnedClearBtn() {
    const clearBtn = document.getElementById('btn-clear-spawned');
    const countEl = document.getElementById('spawned-count');
    const list = this.state.pinnedStickers || [];
    if (clearBtn && countEl) {
      countEl.textContent = list.length;
      clearBtn.classList.toggle('hidden', list.length === 0);
    }
  },

  attachStickerDismissBtn(inner, uid) {
    if (inner.querySelector('.sticker-dismiss-btn')) return;
    const dismissBtn = document.createElement('button');
    dismissBtn.type = 'button';
    dismissBtn.title = 'Gỡ sticker này';
    dismissBtn.textContent = '✕';
    dismissBtn.className = 'sticker-dismiss-btn opacity-0 group-hover:opacity-100 absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow transition z-10 cursor-pointer';
    dismissBtn.onclick = (e) => {
      e.stopPropagation();
      this.removeSpawnedSticker(uid);
    };
    inner.appendChild(dismissBtn);
  },

  buildStickerInnerEl(p, hasWideGutter = true) {
    const appliedScale = hasWideGutter ? (p.scale || 1) : Math.min(p.scale || 1, 0.85);
    const inner = document.createElement('div');
    inner.style.setProperty('--rot', `${p.rot || 0}deg`);
    inner.style.setProperty('--sc', `${appliedScale}`);
    inner.style.setProperty('--dx', `${p.dx || 10}px`);
    inner.style.setProperty('--dy', `${p.dy || -12}px`);
    inner.style.setProperty('--dur', `${p.dur || 4.2}s`);
    if (p.delay) inner.style.animationDelay = `${p.delay}s`;

    if (p.kind === 'decal') {
      inner.className =
        'relative select-none spawned-sticker-inner inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold shadow-sm whitespace-nowrap ' +
        (p.badgeRibbon ? 'sticker-ribbon-pill' : 'sticker-decal');
      inner.innerHTML = `
        <img src="stickers/icons/${p.icon}" alt="" class="w-3.5 h-3.5 shrink-0">
        <span>${this.escapeHtml(p.label)}</span>
      `;
      return inner;
    }

    inner.className = 'relative flex flex-col items-center gap-0.5 spawned-sticker-inner select-none';
    const isSvg = p.kind === 'svg';
    const imgSrc = isSvg ? `stickers/icons/${p.file}` : `stickers/chibi/${p.file}`;
    const customSizeAttr = p.widthPx ? `style="width:${p.widthPx}px;height:${isSvg ? p.widthPx + 'px' : 'auto'}"` : '';
    const imgSizeCls = p.widthPx ? '' : isSvg ? 'w-10 sm:w-12 h-auto' : 'w-14 sm:w-20 h-auto';

    const badgeCls = p.badgeRibbon ? 'sticker-ribbon-pill' : 'sticker-decal';
    const badgeHtml =
      p.showBadge && !isSvg
        ? `<span style="transform: rotate(${p.badgeRot || 0}deg)" class="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeCls} shadow-sm whitespace-nowrap -mt-1">
            <img src="stickers/icons/${p.icon}" alt="" class="w-3 h-3 shrink-0">
            <span>${this.escapeHtml(p.label)}</span>
          </span>`
        : '';

    inner.innerHTML = `
      <img src="${imgSrc}" alt="${this.escapeHtml(p.label)}" ${customSizeAttr} class="${imgSizeCls} object-contain ${isSvg ? '' : 'sticker-drop'} group-hover:scale-110 transition">
      ${badgeHtml}
    `;
    return inner;
  },

  triggerStickerBoing(el) {
    if (!el || !el.classList) return;
    el.classList.remove('boing-pop');
    void el.offsetWidth;
    el.classList.add('boing-pop');
    clearTimeout(el._boingTimer);
    el._boingTimer = setTimeout(() => {
      el.classList.remove('boing-pop');
    }, 480);
  },

  spawnSparkTrail(inner, fullBurst = false) {
    if (!inner) return;
    const dirs = fullBurst
      ? [
          [-38, -42, -160, 'fe-pink-heart.svg'],
          [42, -36, 180, 'fe-sparkles.svg'],
          [-44, 18, -120, 'fe-blossom.svg'],
          [38, 28, 140, 'fe-two-hearts.svg'],
          [0, -52, 90, 'fe-butterfly.svg'],
          [-26, 40, -210, 'fe-lollipop.svg'],
          [26, -50, 220, 'fe-pink-heart.svg'],
          [48, 0, 110, 'fe-ribbon.svg'],
        ]
      : [
          [-26, -30, -110, 'fe-pink-heart.svg'],
          [28, -26, 130, 'fe-sparkles.svg'],
          [0, -38, 80, 'fe-two-hearts.svg'],
          [-22, 20, -140, 'fe-blossom.svg'],
          [24, 18, 120, 'fe-ribbon.svg'],
        ];
    dirs.forEach(([tx, ty, tr, iconFile]) => {
      const sp = document.createElement('img');
      sp.src = `stickers/icons/${iconFile}`;
      sp.alt = '';
      sp.className = 'w-4 h-4 absolute top-1/2 left-1/2 pointer-events-none spark-particle';
      sp.style.setProperty('--tx', `${tx}px`);
      sp.style.setProperty('--ty', `${ty}px`);
      sp.style.setProperty('--tr', `${tr}deg`);
      if (fullBurst) {
        sp.style.opacity = '0';
        sp.style.animation = 'sparkBurst 1.05s ease-out 0.85s forwards';
      }
      inner.appendChild(sp);
      setTimeout(() => sp.remove(), fullBurst ? 2000 : 1120);
    });
  },

  enableHoldDrag(wrap, inner, { onTap, onDrop }) {
    wrap.addEventListener('dragstart', (e) => e.preventDefault());
    wrap.addEventListener('contextmenu', (e) => e.preventDefault());

    let holdTimer = null;
    let glideTimer = null;
    let rafId = null;
    let activePointerId = null;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let baseX = 0;
    let baseY = 0;
    let curDx = 0;
    let curDy = 0;
    let maxMoved = 0;
    let pointerType = 'mouse';
    let samples = [];

    const onWinMove = (e) => {
      if (activePointerId !== e.pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const dist = Math.hypot(dx, dy);
      if (dist > maxMoved) maxMoved = dist;

      if (!isDragging) {
        if (pointerType === 'mouse') {
          if (dist > 6) {
            clearTimeout(holdTimer);
            activateDrag();
          }
        } else if (dist > 10) {
          // Finger moved before hold completed -> allow normal page scrolling
          cleanup();
          return;
        }
      }

      if (isDragging) {
        e.preventDefault();
        const now = performance.now();
        samples.push({ t: now, x: e.clientX, y: e.clientY });
        if (samples.length > 8) samples.shift();

        const minDx = -24 - baseX;
        const maxDx = window.innerWidth - 36 - baseX;
        const minDy = -baseY;
        const maxDy = window.innerHeight - 36 - baseY;
        curDx = Math.max(minDx, Math.min(maxDx, dx));
        curDy = Math.max(minDy, Math.min(maxDy, dy));

        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            rafId = null;
            if (isDragging) {
              wrap.style.transform = `translate3d(${curDx.toFixed(1)}px, ${curDy.toFixed(1)}px, 0)`;
            }
          });
        }
      }
    };

    const handleEnd = (e) => {
      if (activePointerId !== e.pointerId) return;
      const wasDragging = isDragging;
      const moved = maxMoved;
      const safeLeft = wasDragging ? baseX + curDx : parseFloat(wrap.style.left) || baseX;
      const safeTop = wasDragging ? baseY + curDy : parseFloat(wrap.style.top) || baseY;

      // Estimate release inertia from recent movement samples
      let vx = 0;
      let vy = 0;
      const now = performance.now();
      const recent = samples.filter((s) => now - s.t <= 120);
      if (recent.length >= 2) {
        const first = recent[0];
        const last = recent[recent.length - 1];
        const dt = (last.t - first.t) / 1000;
        if (dt > 0.008 && now - last.t < 95) {
          vx = (last.x - first.x) / dt;
          vy = (last.y - first.y) / dt;
        }
      }

      cleanup();

      if (wasDragging) {
        wrap.style.transform = '';
        wrap.style.left = `${Math.round(safeLeft)}px`;
        wrap.style.top = `${Math.round(safeTop)}px`;

        const vw = window.innerWidth || 1;
        const vh = window.innerHeight || 1;
        const clampThrow = (v) => Math.max(-96, Math.min(96, v * 0.12));
        const throwX = clampThrow(vx);
        const throwY = clampThrow(vy) + (Math.abs(vy) < 40 ? -10 : 0);

        const targetPxX = Math.round(Math.max(-16, Math.min(vw - 40, safeLeft + throwX)));
        const targetPxY = Math.round(Math.max(4, Math.min(vh - 40, safeTop + throwY)));
        const freeX = Number(((targetPxX / vw) * 100).toFixed(1));
        const freeY = Number(((targetPxY / vh) * 100).toFixed(1));

        const gdx = Math.max(-16, Math.min(16, Math.round(vx * 0.015) || 6));
        const grot = Math.max(-14, Math.min(14, Math.round(-vx * 0.015) || -7));
        wrap.style.setProperty('--gdx', `${gdx}px`);
        wrap.style.setProperty('--grot', `${grot}deg`);

        // Smooth px -> px momentum glide + buoyant settle while inner floatLoopFree resumes immediately
        if (inner) {
          inner.style.animationDelay = '0s';
        }
        wrap.classList.add('sticker-glide-ease');
        void wrap.offsetWidth;
        wrap.style.left = `${targetPxX}px`;
        wrap.style.top = `${targetPxY}px`;
        wrap.classList.add('sticker-drop-float');

        if (onDrop) onDrop(freeX, freeY);
        this.spawnSparkTrail(inner, false);

        clearTimeout(glideTimer);
        glideTimer = setTimeout(() => {
          wrap.classList.remove('sticker-glide-ease', 'sticker-drop-float');
          wrap.style.left = `${freeX}%`;
          wrap.style.top = `${freeY}%`;
        }, 1050);
      } else if (moved <= 8 && e.type === 'pointerup') {
        if (onTap) onTap();
      }
    };

    const cleanup = () => {
      clearTimeout(holdTimer);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      holdTimer = null;
      activePointerId = null;
      isDragging = false;
      samples = [];
      wrap.classList.remove('sticker-dragging');
      wrap.style.touchAction = '';
      window.removeEventListener('pointermove', onWinMove);
      window.removeEventListener('pointerup', handleEnd);
      window.removeEventListener('pointercancel', handleEnd);
    };

    const activateDrag = () => {
      if (activePointerId === null || isDragging) return;
      isDragging = true;
      curDx = 0;
      curDy = 0;
      clearTimeout(glideTimer);

      const midFlight = wrap.classList.contains('spawned-fly-ease') || wrap.classList.contains('spawned-fly-init');
      if (midFlight) {
        const r = wrap.getBoundingClientRect();
        baseX = r.left;
        baseY = r.top;
      } else {
        const parent = wrap.parentElement;
        if (parent && (parent.id === 'side-rail-left' || parent.id === 'side-rail-right')) {
          const pr = parent.getBoundingClientRect();
          baseX = pr.left + wrap.offsetLeft;
          baseY = pr.top + wrap.offsetTop;
          wrap.style.position = 'fixed';
          const layer = document.getElementById('spawned-sticker-layer');
          if (layer) layer.appendChild(wrap);
        } else {
          baseX = wrap.offsetLeft;
          baseY = wrap.offsetTop;
        }
      }

      wrap.classList.remove('spawned-fly-init', 'spawned-fly-ease', 'sticker-glide-ease', 'sticker-drop-float', 'boing-pop');
      wrap.style.transform = '';
      wrap.style.right = 'auto';
      wrap.style.bottom = 'auto';
      wrap.style.left = `${Math.round(baseX)}px`;
      wrap.style.top = `${Math.round(baseY)}px`;
      wrap.style.touchAction = 'none';
      wrap.classList.add('sticker-dragging');

      if (navigator.vibrate && pointerType !== 'mouse') {
        try { navigator.vibrate(12); } catch (_) {}
      }
    };

    wrap.addEventListener('pointerdown', (e) => {
      if (e.target && e.target.closest('button')) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;

      clearTimeout(glideTimer);
      wrap.classList.remove('sticker-glide-ease', 'sticker-drop-float');

      activePointerId = e.pointerId;
      pointerType = e.pointerType || 'mouse';
      isDragging = false;
      curDx = 0;
      curDy = 0;
      startX = e.clientX;
      startY = e.clientY;
      samples = [{ t: performance.now(), x: e.clientX, y: e.clientY }];
      maxMoved = 0;

      if (pointerType === 'mouse') e.preventDefault();
      clearTimeout(holdTimer);
      window.addEventListener('pointermove', onWinMove);
      window.addEventListener('pointerup', handleEnd);
      window.addEventListener('pointercancel', handleEnd);
      holdTimer = setTimeout(activateDrag, 180);
    });
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

  spawnFloatingSticker(st, sourceEl = null, silentToast = false, forcedKind = 'chibi') {
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const gutter = Math.max(0, (vw - 928) / 2);
    const hasWide = vw >= 1120;
    const usable = hasWide ? Math.max(16, gutter - 126) : 14;

    // Pure chaotic unordered placement — no neat spacing solver!
    const xRatio = Math.random();
    const yPct = 2 + Math.random() * 86;

    const showBadge = forcedKind === 'chibi' && Math.random() < 0.62;
    const badgeText = showBadge
      ? Math.random() < 0.45
        ? st.label
        : CHAOS_DECAL_QUOTES[Math.floor(Math.random() * CHAOS_DECAL_QUOTES.length)]
      : '';

    const pxTargetX = (hasWide ? 6 : 2) + xRatio * usable;
    const targetScreenX = side === 'left' ? pxTargetX : vw - pxTargetX - 88;
    const targetScreenY = (yPct / 100) * vh;

    let fx = 0;
    let fy = 40;
    if (sourceEl && sourceEl.getBoundingClientRect) {
      const sr = sourceEl.getBoundingClientRect();
      fx = Math.round(sr.left + sr.width / 2 - (targetScreenX + 44));
      fy = Math.round(sr.top + sr.height / 2 - (targetScreenY + 44));
    }

    const svgIcon = forcedKind === 'svg' ? CHAOS_SVG_ICONS[Math.floor(Math.random() * CHAOS_SVG_ICONS.length)] : st.icon;

    const newItem = {
      uid: `st_${Date.now()}_${Math.floor(Math.random() * 99999)}`,
      kind: forcedKind,
      file: forcedKind === 'svg' ? svgIcon : st.file,
      label: badgeText || st.label,
      showBadge,
      badgeRibbon: Math.random() < 0.4,
      badgeRot: Math.round(Math.random() * 24 - 12),
      toast: forcedKind === 'svg' ? CHAOS_DECAL_QUOTES[Math.floor(Math.random() * CHAOS_DECAL_QUOTES.length)] : st.toast,
      icon: svgIcon,
      side,
      xRatio,
      yPct,
      zIndex: 22 + Math.floor(Math.random() * 18),
      rot: Math.round((Math.random() * 84 - 42) * 10) / 10,
      scale: Math.round((0.62 + Math.random() * 0.82) * 100) / 100,
      dx: Math.round(Math.random() * 34 - 17),
      dy: Math.round(-(6 + Math.random() * 18)),
      dur: (2.5 + Math.random() * 3.6).toFixed(2),
      delay: -(Math.random() * 4).toFixed(2),
      fx,
      fy,
    };

    let trimmedOldest = false;
    if (!this.state.pinnedStickers) this.state.pinnedStickers = [];
    this.state.pinnedStickers.push(newItem);
    if (this.state.pinnedStickers.length > 90) {
      this.state.pinnedStickers.shift();
      trimmedOldest = true;
    }
    this.saveState();
    this.appendSpawnedSticker(newItem, trimmedOldest);
    if (!silentToast) {
      this.popCuteToast(`${st.label}! Nhảy sang bên ${side === 'left' ? 'trái' : 'phải'} nò ♥`, st.icon);
    }
  },

  chaosDropBurst(count = 10, sourceEl = null) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const pick = STICKER_SHELF[Math.floor(Math.random() * STICKER_SHELF.length)];
        const kind = Math.random() < 0.25 ? 'svg' : 'chibi';
        this.spawnFloatingSticker(pick, sourceEl, i < count - 1, kind);
        if (i === count - 1) {
          this.popCuteToast(`Xả lũ ${count} bé sticker hỗn loạn khắp 2 bên lun nè ✨`, 'fe-sparkles.svg');
        }
      }, i * 150);
    }
  },

  removeSpawnedSticker(uid) {
    const list = this.state.pinnedStickers || [];
    const target = list.find((p) => p.uid === uid);
    this.state.pinnedStickers = list.filter((p) => p.uid !== uid);
    this.saveState();
    if (target && target.sourceChaosKey) {
      this.renderChaoticAmbientStickers();
    }
    this.renderSpawnedStickers();
  },

  clearSpawnedStickers() {
    const hadAmbient = (this.state.pinnedStickers || []).some((p) => p.sourceChaosKey);
    this.state.pinnedStickers = [];
    this.saveState();
    if (hadAmbient) {
      this.renderChaoticAmbientStickers();
    }
    this.renderSpawnedStickers();
    this.popCuteToast('Đã dọn gọn hết nhãn dán tự do cho iempéee ✨', 'fe-sparkles.svg');
  },

  mountSpawnedStickerEl(p, isFreshSpawn, vw, hasWideGutter, gutter) {
    const layer = document.getElementById('spawned-sticker-layer');
    if (!layer) return;

    const wrap = document.createElement('div');
    wrap.className = 'fixed pointer-events-auto group sticker-draggable' + (isFreshSpawn ? ' spawned-fly-init' : '');
    wrap.style.zIndex = String(p.zIndex || 26);
    if (p.opacity !== undefined) wrap.style.opacity = String(p.opacity);
    if (isFreshSpawn) {
      wrap.style.setProperty('--fx', `${p.fx || 0}px`);
      wrap.style.setProperty('--fy', `${p.fy || 40}px`);
    }

    if (p.freeX !== undefined && p.freeY !== undefined) {
      wrap.style.left = `${p.freeX}%`;
      wrap.style.top = `${p.freeY}%`;
    } else {
      wrap.style.top = `${p.yPct}%`;
      if (hasWideGutter) {
        const usable = Math.max(16, gutter - 126);
        const pxOffset = Math.round(6 + p.xRatio * usable);
        if (p.side === 'left') wrap.style.left = `${pxOffset}px`;
        else wrap.style.right = `${pxOffset}px`;
      } else {
        const edgeOffset = Math.round(2 + p.xRatio * 10);
        if (p.side === 'left') wrap.style.left = `${edgeOffset}px`;
        else wrap.style.right = `${edgeOffset}px`;
      }
    }

    const inner = this.buildStickerInnerEl(p, hasWideGutter);
    this.attachStickerDismissBtn(inner, p.uid);

    this.enableHoldDrag(wrap, inner, {
      onTap: () => {
        this.triggerStickerBoing(wrap);
        this.popCuteToast(p.toast, p.icon);
      },
      onDrop: (freeX, freeY) => {
        const zIdx = this.getNextStickerZ();
        p.freeX = freeX;
        p.freeY = freeY;
        p.zIndex = zIdx;
        wrap.style.zIndex = String(zIdx);
        this.saveState();
        this.popCuteToast('Đã kéo dán sticker tới chỗ mới nò ✨', p.icon);
      },
    });

    if (isFreshSpawn) {
      this.spawnSparkTrail(inner, true);
    }

    wrap.appendChild(inner);
    layer.appendChild(wrap);

    if (isFreshSpawn) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!wrap.isConnected || wrap.classList.contains('sticker-dragging')) return;
          wrap.classList.add('spawned-fly-ease');
          wrap.classList.remove('spawned-fly-init');
        });
      });
      setTimeout(() => {
        wrap.classList.remove('spawned-fly-ease');
        wrap.style.willChange = 'auto';
      }, 1350);
    }
  },

  appendSpawnedSticker(newItem, trimmedOldest = false) {
    const layer = document.getElementById('spawned-sticker-layer');
    if (!layer) return;
    this.updateSpawnedClearBtn();
    if (trimmedOldest && layer.firstElementChild) {
      layer.firstElementChild.remove();
    }
    const vw = window.innerWidth;
    const hasWideGutter = vw >= 1120;
    const gutter = Math.max(0, (vw - 928) / 2);
    this.mountSpawnedStickerEl(newItem, true, vw, hasWideGutter, gutter);
  },

  renderSpawnedStickers() {
    const layer = document.getElementById('spawned-sticker-layer');
    if (!layer) return;

    this.updateSpawnedClearBtn();
    const list = this.state.pinnedStickers || [];

    layer.innerHTML = '';
    const vw = window.innerWidth;
    const hasWideGutter = vw >= 1120;
    const gutter = Math.max(0, (vw - 928) / 2);

    list.forEach((p) => {
      this.mountSpawnedStickerEl(p, false, vw, hasWideGutter, gutter);
    });
  },

  renderStickerShelf() {
    const shelf = document.getElementById('sticker-shelf');
    if (!shelf) return;
    shelf.innerHTML = '';
    STICKER_SHELF.forEach((st) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'p-2 rounded-xl card-alt border hover:border-pink-400 active:scale-95 transition flex flex-col items-center justify-center gap-1 group cursor-pointer';
      btn.onclick = () => this.spawnFloatingSticker(st, btn);
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
          pinnedStickers: Array.isArray(parsed.pinnedStickers) ? parsed.pinnedStickers : [],
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
      pinnedStickers: this.state.pinnedStickers || [],
    };
    this.saveState();
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

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.renderChaoticAmbientStickers();
        this.renderSpawnedStickers();
      }, 120);
    });
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
