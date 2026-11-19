/**
 * =========================================================================
 * 🌸 4EXAM AUTO GRABBER & SCREENSHOT TOOL
 * Dành riêng cho Đức Giáo Chủ cào trọn bộ đề thi SSG trên 4EXAM về máy!
 * =========================================================================
 * 
 * CÁCH DÙNG:
 * 1. Mở tab 4EXAM đang xem đề thi (đang mở modal xem ảnh câu hỏi 1/30).
 * 2. Bấm phím F12 (hoặc Chuột phải -> Kiểm tra / Inspect) -> Chọn tab "Console".
 * 3. Copy toàn bộ code file này, dán vào Console và ấn ENTER.
 * 4. Bảng điều khiển màu hồng sẽ hiện ở góc trên bên phải màn hình:
 *    - Tự động lướt qua 30 câu hỏi
 *    - Tự động lấy link ảnh gốc chất lượng cao nhất
 *    - Nén thành 1 file ZIP duy nhất: [Tên_Đề].zip (VD: SSG105_SU26_FE_225597.zip)
 *    - Tải thẳng về thư mục Downloads!
 */

(async function run4ExamAutoGrabber() {
  console.log('%c🌸 KHỞI ĐỘNG TOOL CÀO ĐỀ 4EXAM CHO ĐỨC GIÁO CHỦ...', 'color: #ec4899; font-size: 16px; font-weight: bold;');

  // Gỡ HUD cũ nếu có
  const oldHud = document.getElementById('crawler-hud-root');
  if (oldHud) oldHud.remove();

  // Tạo UI Mini-HUD điều khiển trực tiếp trên web
  const hud = document.createElement('div');
  hud.id = 'crawler-hud-root';
  hud.style.cssText = `
    position: fixed;
    top: 18px;
    right: 18px;
    z-index: 9999999;
    background: linear-gradient(135deg, #fff5f8 0%, #ffe4ee 100%);
    border: 2px solid #f472b6;
    border-radius: 18px;
    box-shadow: 0 12px 35px rgba(225, 29, 72, 0.28);
    padding: 16px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #881337;
    min-width: 290px;
    max-width: 360px;
    transition: all 0.3s ease;
  `;

  hud.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 8px;">
      <span style="font-weight: 800; font-size: 14px; color: #be185d;">🌸 4Exam Auto Grabber</span>
      <button id="btn-close-hud" style="border:none; background:#fda4af; color:#881337; border-radius:50%; width:22px; height:22px; cursor:pointer; font-weight:bold; font-size:11px;">✕</button>
    </div>
    <div id="hud-post-title" style="font-size: 12px; font-weight: 700; color: #4c0519; margin-bottom: 6px; word-break: break-all;">Đang nhận diện đề...</div>
    <div id="hud-status" style="font-size: 12px; color: #9f1239; margin-bottom: 10px;">Chuẩn bị quét...</div>
    <div id="hud-progress-bar-bg" style="width: 100%; height: 8px; background: #fce7f3; border-radius: 6px; overflow: hidden; margin-bottom: 12px; display: none;">
      <div id="hud-progress-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #f472b6, #ec4899); transition: width 0.2s ease;"></div>
    </div>
    <div style="display:flex; gap: 8px;">
      <button id="btn-start-grab" style="flex:1; background: #ec4899; color:white; border:none; padding: 8px 12px; border-radius: 12px; font-weight: bold; font-size: 12px; cursor: pointer; box-shadow: 0 4px 10px rgba(236, 72, 153, 0.35);">
        🚀 Cào & Tải ZIP 30 Câu
      </button>
    </div>
  `;
  document.body.appendChild(hud);

  document.getElementById('btn-close-hud').onclick = () => hud.remove();

  const titleEl = document.getElementById('hud-post-title');
  const statusEl = document.getElementById('hud-status');
  const progressBg = document.getElementById('hud-progress-bar-bg');
  const progressBar = document.getElementById('hud-progress-bar');
  const startBtn = document.getElementById('btn-start-grab');

  // 1. Nhận diện tiêu đề đề thi (VD: SSG105_SU26_FE_225597)
  let postTitle = 'SSG_Exam_Source';
  const textNodes = [
    document.querySelector('h1'),
    document.querySelector('h2'),
    document.querySelector('h3'),
    ...document.querySelectorAll('div, span, p')
  ];
  for (const el of textNodes) {
    if (el && el.innerText) {
      const match = el.innerText.trim().match(/SSG\d+_[A-Za-z0-9_]+/i);
      if (match) {
        postTitle = match[0];
        break;
      }
    }
  }

  // Nhận diện tổng số ảnh
  let totalImages = 30;
  const matchTotal = document.body.innerText.match(/(\d+)\s*\/\s*(\d+)/);
  if (matchTotal && parseInt(matchTotal[2], 10) > 0) {
    totalImages = parseInt(matchTotal[2], 10);
  }

  titleEl.innerHTML = `📚 Đề: <b style="color:#db2777;">${postTitle}</b> (${totalImages} câu)`;
  statusEl.textContent = 'Bấm nút "Cào & Tải ZIP" để bắt đầu nò ✨';

  // Hàm chờ ms
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  // Hàm load JSZip
  const ensureJSZip = async () => {
    if (typeof JSZip !== 'undefined') return true;
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
      s.onload = () => resolve(true);
      s.onerror = () => {
        const s2 = document.createElement('script');
        s2.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
        s2.onload = () => resolve(true);
        s2.onerror = () => resolve(false);
        document.head.appendChild(s2);
      };
      document.head.appendChild(s);
    });
  };

  // Hàm lấy URL ảnh câu hỏi lớn đang xem
  const getActiveQuestionImg = () => {
    // 1. Tìm thẻ img to nhất đang hiển thị trong vùng xem
    const imgs = Array.from(document.querySelectorAll('img')).filter(img => {
      const src = img.currentSrc || img.src || '';
      if (!src || src.startsWith('data:') || src.includes('avatar') || src.includes('icon') || src.includes('logo')) {
        return false;
      }
      const r = img.getBoundingClientRect();
      return r.width > 220 && r.height > 220;
    });

    if (imgs.length > 0) {
      imgs.sort((a, b) => (b.offsetWidth * b.offsetHeight) - (a.offsetWidth * a.offsetHeight));
      return imgs[0].currentSrc || imgs[0].src;
    }
    return null;
  };

  // Hàm bấm Next chuyển slide
  const nextSlide = () => {
    // 1. Gửi phím ArrowRight
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', keyCode: 39, code: 'ArrowRight', bubbles: true }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', keyCode: 39, code: 'ArrowRight', bubbles: true }));

    // 2. Tìm nút mũi tên bên phải trong viewer
    const arrows = Array.from(document.querySelectorAll('button, div, span, a')).filter(el => {
      const r = el.getBoundingClientRect();
      const inRightZone = r.left > window.innerWidth * 0.65;
      const inMidVertical = r.top > window.innerHeight * 0.25 && r.bottom < window.innerHeight * 0.75;
      const hasArrow = el.textContent.includes('>') || el.querySelector('svg');
      return inRightZone && inMidVertical && hasArrow;
    });
    if (arrows.length > 0) {
      arrows[0].click();
    }
  };

  // Xử lý khi bấm nút Cào
  startBtn.onclick = async () => {
    startBtn.disabled = true;
    startBtn.style.opacity = '0.6';
    progressBg.style.display = 'block';

    statusEl.innerHTML = '🔍 Đang tự động lướt qua 30 câu...';

    const collectedMap = new Map(); // index -> url
    let lastSrc = '';
    let duplicateRounds = 0;

    for (let step = 1; step <= totalImages + 8; step++) {
      const src = getActiveQuestionImg();
      if (src) {
        if (!Array.from(collectedMap.values()).includes(src)) {
          collectedMap.set(collectedMap.size + 1, src);
          lastSrc = src;
          duplicateRounds = 0;
        } else if (src === lastSrc) {
          duplicateRounds++;
        }
      }

      const currentCount = collectedMap.size;
      const pct = Math.round((currentCount / totalImages) * 50);
      progressBar.style.width = `${pct}%`;
      statusEl.innerHTML = `Đã gom được: <b>${currentCount}/${totalImages}</b> ảnh câu hỏi...`;

      if (currentCount >= totalImages || duplicateRounds >= 4) {
        break;
      }

      nextSlide();
      await sleep(350); // Đợi ảnh webp đổi
    }

    const finalUrls = Array.from(collectedMap.values());
    console.log('🌸 Danh sách link ảnh thu thập:', finalUrls);

    if (finalUrls.length === 0) {
      statusEl.innerHTML = '❌ Chưa mở ảnh câu hỏi! Hãy click mở ảnh câu 1 trước rồi ấn lại nha.';
      startBtn.disabled = false;
      startBtn.style.opacity = '1';
      return;
    }

    // Tải JSZip
    statusEl.innerHTML = '📦 Đang chuẩn bị đóng gói file ZIP...';
    const hasZip = await ensureJSZip();
    const zip = (hasZip && typeof JSZip !== 'undefined') ? new JSZip() : null;
    const folder = zip ? zip.folder(postTitle) : null;

    // Tải từng ảnh
    for (let i = 0; i < finalUrls.length; i++) {
      const url = finalUrls[i];
      const qNum = String(i + 1).padStart(3, '0');
      let ext = 'webp';
      if (url.includes('.png')) ext = 'png';
      else if (url.includes('.jpg') || url.includes('.jpeg')) ext = 'jpg';

      const fileName = `${postTitle}_q${qNum}.${ext}`;
      const pct = 50 + Math.round(((i + 1) / finalUrls.length) * 45);
      progressBar.style.width = `${pct}%`;
      statusEl.innerHTML = `Đang tải: <b>${i + 1}/${finalUrls.length}</b> (${fileName})...`;

      try {
        const resp = await fetch(url).catch(() => null);
        if (resp && resp.ok) {
          const blob = await resp.blob();
          if (folder) {
            folder.file(fileName, blob);
          } else {
            // Tải từng file lẻ nếu không nén được zip
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            a.remove();
            await sleep(200);
            URL.revokeObjectURL(blobUrl);
          }
        } else {
          // Direct fallback
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          a.target = '_blank';
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      } catch (e) {
        console.warn(`Lỗi tải ảnh câu ${i + 1}:`, e);
      }
    }

    // Xuất file ZIP
    if (zip) {
      statusEl.innerHTML = '🌸 Đang nén file ZIP...';
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipUrl = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = zipUrl;
      a.download = `${postTitle}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(zipUrl), 3500);
    }

    progressBar.style.width = '100%';
    statusEl.innerHTML = `✨ <b>THÀNH CÔNG!</b> Đã tải ${finalUrls.length} câu về máy!`;
    startBtn.textContent = '🎉 Đã Hoàn Thành!';
    startBtn.style.background = '#10b981';

    // In log chi tiết
    console.log(`%c🎉 HOÀN THÀNH TẢI BỘ ĐỀ: ${postTitle}`, 'color: #10b981; font-size: 14px; font-weight: bold;');
    console.table(finalUrls.map((u, idx) => ({ Câu: idx + 1, Link: u })));
  };
})();
