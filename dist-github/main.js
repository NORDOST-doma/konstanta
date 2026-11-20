const STORAGE_KEY = 'konstanta_content';
const INQUIRIES_KEY = 'konstanta_inquiries';

window.__staticContent = {
  "companyName": "ООО «Константа»",
  "tagline": "Управляющая компания для комфортного и безопасного проживания",
  "yearsOnMarket": 14,
  "groupCompanies": [
    "ООО «Бизнес плюс»",
    "ООО «Респектабельность К»"
  ],
  "services": [
    {
      "id": "srv-1",
      "title": "Управление многоквартирными домами (МКД)",
      "description": "Комплексное управление жилищным фондом: содержание, текущий ремонт, взаимодействие с собственниками и контроль качества выполняемых работ."
    },
    {
      "id": "srv-2",
      "title": "Техническая эксплуатация зданий и сооружений",
      "description": "Плановый осмотр, техническое сопровождение, поддержание исправного состояния инженерных систем и соблюдение нормативных требований."
    },
    {
      "id": "srv-3",
      "title": "Электротехнические работы",
      "description": "Диагностика, замена и обслуживание электросетей, освещения, распределительных устройств и систем безопасности."
    },
    {
      "id": "srv-4",
      "title": "Сантехническое обслуживание и отопление",
      "description": "Ремонт и профилактика водоснабжения, канализации, отопления, санитарного оборудования и внутренних сетей здания."
    },
    {
      "id": "srv-5",
      "title": "Аварийно-диспетчерская служба 24/7",
      "description": "Оперативное реагирование на обращения, координация аварийных бригад и контроль сроков устранения неисправностей."
    },
    {
      "id": "srv-6",
      "title": "Благоустройство придомовых территорий",
      "description": "Уборка дворов, уход за зелеными насаждениями, сезонное обслуживание и поддержание чистоты на прилегающей территории."
    }
  ],
  "objects": [
    {
      "id": 1,
      "name": "Борисовская, д. 1А",
      "address": "Борисовская, д. 1А",
      "description": "Жилой дом с регулярным обслуживанием, контролем состояния общего имущества и организацией текущего ремонта по графику.",
      "image": "public/images/gallery/borisovskay.jpg",
      "photo": "public/images/gallery/borisovskay.jpg"
    },
    {
      "id": 2,
      "name": "Химки, Береговая 1А",
      "address": "Химки, Береговая 1А",
      "description": "Комфортное содержание жилого комплекса, эксплуатация инженерных систем и поддержание надлежащего состояния общего имущества.",
      "image": "public/images/gallery/Beregov.jpg",
      "photo": "public/images/gallery/Beregov.jpg"
    },
    {
      "id": 3,
      "name": "Жилой квартал на Береговой",
      "address": "Химки, Береговая 1, 8, 6, 4, 5",
      "description": "Комплексное обслуживание жилого квартала с контролем дворовых территорий, инженерных систем и взаимодействием с собственниками.",
      "image": "public/images/gallery/Beregov.jpg",
      "photo": "public/images/gallery/Beregov.jpg"
    },
    {
      "id": 4,
      "name": "Преображенская площадь",
      "address": "Преображенская площадь",
      "description": "Объект общественного назначения с проведением регулярных осмотров, управлением техническим состоянием и поддержанием порядка.",
      "image": "public/images/gallery/preobrazh.jpg",
      "photo": "public/images/gallery/preobrazh.jpg"
    },
    {
      "id": 5,
      "name": "Большая Черкизовская, д. 1",
      "address": "Большая Черкизовская, д. 1",
      "description": "МКД с плановым обслуживанием, ремонтом инженерного оборудования и постоянным контролем качества выполнения работ.",
      "image": "public/images/gallery/cherkiz.jpg",
      "photo": "public/images/gallery/cherkiz.jpg"
    }
  ],
  "advantages": [
    "14 лет опыта в управлении жилыми и коммерческими объектами",
    "Прозрачная коммуникация с собственниками и подрядчиками",
    "Комплексный подход к содержанию и эксплуатации помещений",
    "Постоянный контроль качества и сроков выполнения работ"
  ],
  "gallery": [
    {
      "id": 1,
      "src": "public/images/gallery/borisovskay.jpg",
      "image": "public/images/gallery/borisovskay.jpg",
      "photo": "public/images/gallery/borisovskay.jpg",
      "alt": "Жилой дом по адресу: Борисовская, д. 1А"
    },
    {
      "id": 2,
      "src": "public/images/gallery/Beregov.jpg",
      "image": "public/images/gallery/Beregov.jpg",
      "photo": "public/images/gallery/Beregov.jpg",
      "alt": "Жилой комплекс в г. Химки, ул. Береговая"
    },
    {
      "id": 3,
      "src": "public/images/gallery/preobrazh.jpg",
      "image": "public/images/gallery/preobrazh.jpg",
      "photo": "public/images/gallery/preobrazh.jpg",
      "alt": "Объект на Преображенской площади"
    },
    {
      "id": 4,
      "src": "public/images/gallery/cherkiz.jpg",
      "image": "public/images/gallery/cherkiz.jpg",
      "photo": "public/images/gallery/cherkiz.jpg",
      "alt": "МКД Большая Черкизовская, д. 1"
    },
    {
      "id": 5,
      "src": "public/images/gallery/gallery-itp.jpg",
      "image": "public/images/gallery/gallery-itp.jpg",
      "photo": "public/images/gallery/gallery-itp.jpg",
      "alt": "Индивидуальный тепловой пункт (ИТП) и инженерные узлы"
    },
    {
      "id": 6,
      "src": "public/images/gallery/gallery-blago.jpg",
      "image": "public/images/gallery/gallery-blago.jpg",
      "photo": "public/images/gallery/gallery-blago.jpg",
      "alt": "Благоустройство придомовой территории и двора"
    }
  ],
  "team": [
    {
      "id": "team-1",
      "name": "Константинов Сергей Викторович",
      "role": "Генеральный директор",
      "experience": "Стаж в сфере ЖКХ более 16 лет",
      "image": "public/images/team/Sergey_Viktorovich.jpg",
      "photo": "public/images/team/Sergey_Viktorovich.jpg"
    },
    {
      "id": "team-2",
      "name": "Морозов Андрей Ильич",
      "role": "Главный инженер",
      "experience": "Аттестованный специалист по инженерным системам МКД",
      "image": "public/images/team/Morozov.jpg",
      "photo": "public/images/team/Morozov.jpg"
    },
    {
      "id": "team-3",
      "name": "Соколова Елена Павловна",
      "role": "Руководитель диспетчерской службы",
      "experience": "Контроль оперативного реагирования 24/7",
      "image": "public/images/team/Sokolova.jpg",
      "photo": "public/images/team/Sokolova.jpg"
    },
    {
      "id": "team-4",
      "name": "Иванов Игорь Николаевич",
      "role": "Главный энергетик",
      "experience": "Ответственный за электрохозяйство и безопасность",
      "image": "public/images/team/Igro_Nikolaevich.jpg",
      "photo": "public/images/team/Igro_Nikolaevich.jpg"
    }
  ],
  "news": [
    {
      "id": "news-1",
      "title": "Плановая подготовка к отопительному сезону завершена",
      "date": "10.10.2024",
      "text": "Инженерной службой проведена гидравлическая опрессовка сетей и ревизия запорной арматуры на всех обслуживаемых объектах."
    },
    {
      "id": "news-2",
      "title": "Внедрение единого регламента обработки диспетчерских заявок",
      "date": "24.09.2024",
      "text": "Диспетчерская служба переведена на усиленный круглосуточный режим с автоматическим контролем сроков закрытия заявок."
    }
  ],
  "contacts": {
    "phone": "+7 (495) 000-00-00",
    "email": "info@konstanta.ru",
    "officeAddress": "г. Москва, ул. Большая Черкизовская, д. 1",
    "workHours": "Пн-Пт: 09:00 - 18:00 (Аварийная служба: круглосуточно)"
  }
};

const KNOWN_OBJECT_COORDS = {
  'Борисовская, д. 1А': [55.792024, 37.735655],
  'Химки, Береговая 1А': [55.8984, 37.4695],
  'Жилой квартал на Береговой': [55.8935, 37.4432],
  'Химки, Береговая 1, 8, 6, 4, 5': [55.8935, 37.4432],
  'Преображенская площадь': [55.79637, 37.71535],
  'Большая Черкизовская, д. 1': [55.79791, 37.7205]
};

function getObjectCoords(obj, index) {
  if (obj && obj.coords && Array.isArray(obj.coords) && obj.coords.length === 2) {
    return obj.coords;
  }
  if (obj && KNOWN_OBJECT_COORDS[obj.name]) {
    return KNOWN_OBJECT_COORDS[obj.name];
  }
  if (obj && KNOWN_OBJECT_COORDS[obj.address]) {
    return KNOWN_OBJECT_COORDS[obj.address];
  }
  const nameLower = ((obj?.name || '') + ' ' + (obj?.address || '')).toLowerCase();
  if (nameLower.includes('борисовск')) return KNOWN_OBJECT_COORDS['Борисовская, д. 1А'];
  if (nameLower.includes('берегов') && nameLower.includes('1а')) return KNOWN_OBJECT_COORDS['Химки, Береговая 1А'];
  if (nameLower.includes('берегов') || nameLower.includes('квартал')) return KNOWN_OBJECT_COORDS['Жилой квартал на Береговой'];
  if (nameLower.includes('преображенск')) return KNOWN_OBJECT_COORDS['Преображенская площадь'];
  if (nameLower.includes('черкизовск')) return KNOWN_OBJECT_COORDS['Большая Черкизовская, д. 1'];
  return [55.79 + (index || 0) * 0.02, 37.65 + (index || 0) * 0.02];
}

function initDynamicHeader() {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('.main-nav');
  const navWrap = header?.querySelector('.nav-wrap');
  if (!header || !nav || !navWrap) return;

  const menuButton = document.createElement('button');
  menuButton.className = 'nav-menu-toggle';
  menuButton.type = 'button';
  menuButton.setAttribute('aria-label', 'Открыть меню');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = '<span></span><span></span><span></span>';

  navWrap.append(menuButton);

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a').forEach((link) => {
    const linkHref = link.getAttribute('href') || '';
    const linkFile = linkHref.split('#')[0].split('/').pop();
    if (linkFile && (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html'))) {
      if (!linkHref.includes('#') || linkHref === 'index.html') {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    }

    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
    });
  });

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
}

// Autonomous storage via localStorage (GitHub Pages mode)
async function fetchContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {}

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.__staticContent));
  } catch (e) {}
  return window.__staticContent;
}

function renderServices(services) {
  const container = document.getElementById('servicesGrid') || document.getElementById('servicesPageGrid');
  if (!container || !Array.isArray(services)) return;
  container.innerHTML = services.map(service => `
    <article class="service-card">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `).join('');
}

function resolveImagePath(p) {
  if (!p) return "";
  if (p.startsWith("http://") || p.startsWith("https://") || p.startsWith("data:")) return p;
  let clean = p.trim();
  while (clean.startsWith("/")) {
    clean = clean.slice(1);
  }
  return clean;
}

function renderObjects(objects) {
  const homeGrid = document.getElementById('objectGrid');
  const pageGrid = document.getElementById('objectsPageGrid');
  const target = homeGrid || pageGrid;
  if (!target || !Array.isArray(objects)) return;
  target.innerHTML = objects.map(obj => {
    const src = resolveImagePath(obj.image || obj.photo || '');
    return `
    <article class="object-card">
      <img src="${src}" alt="${obj.name}" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='public/'+this.src.split('/').pop();}" />
      <div class="object-card-content">
        <h3>${obj.name}</h3>
        <p><strong>${obj.address}</strong></p>
        <p>${obj.description}</p>
      </div>
    </article>
  `;
  }).join('');
}

function renderAdvantages(items) {
  const container = document.getElementById('advantagesList');
  if (!container || !Array.isArray(items)) return;
  container.innerHTML = items.map(item => `<div class="advantage">${item}</div>`).join('');
}

function renderTeam(team) {
  const container = document.getElementById('teamGrid');
  if (!container || !Array.isArray(team)) return;
  container.innerHTML = team.map(member => {
    const src = resolveImagePath(member.photo || member.image || '');
    return `
    <article class="team-card">
      <img src="${src}" alt="${member.name}" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='public/'+this.src.split('/').pop();}" />
      <div class="team-card-content">
        <h3>${member.name}</h3>
        <div class="team-role">${member.role}</div>
        <p class="team-exp">${member.experience}</p>
      </div>
    </article>
  `;
  }).join('');
}

function renderContacts(contacts) {
  if (!contacts) return;
  document.querySelectorAll('[data-contact-phone]').forEach((element) => {
    element.textContent = contacts.phone || '';
    if (element.tagName === 'A') element.href = `tel:${(contacts.phone || '').replace(/[^+\d]/g, '')}`;
  });
  document.querySelectorAll('[data-contact-email]').forEach((element) => {
    element.textContent = contacts.email || '';
    if (element.tagName === 'A') element.href = `mailto:${contacts.email || ''}`;
  });
  document.querySelectorAll('[data-contact-address]').forEach((element) => {
    element.textContent = contacts.officeAddress || '';
  });
  document.querySelectorAll('[data-contact-hours]').forEach((element) => {
    element.textContent = contacts.workHours || '';
  });
}

function renderNews(news) {
  const grid = document.getElementById('newsGrid');
  if (!grid || !Array.isArray(news)) return;

  if (news.length === 0) {
    grid.innerHTML = '<p class="text-muted">Новостей пока нет.</p>';
    return;
  }

  grid.innerHTML = news.map(item => {
    let formattedDate = item.date || '';
    try {
      if (item.date) {
        const d = new Date(item.date);
        if (!isNaN(d.getTime())) {
          formattedDate = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
        }
      }
    } catch (e) {}

    return `
      <article class="news-card">
        <div class="news-card-header">
          <span class="news-badge">📢 Объявление</span>
          ${formattedDate ? `<time class="news-date" datetime="${item.date}">${formattedDate}</time>` : ''}
        </div>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-text">${item.text}</p>
      </article>
    `;
  }).join('');
}

// --- Lightbox logic ---
function renderGallery(images) {
  const container = document.getElementById('galleryGrid');
  if (!container || !Array.isArray(images)) return;
  container.innerHTML = images.map((item, i) => `
    <figure class="gallery-item" data-index="${i}" title="${item.alt || 'Фото объекта'}" style="cursor: pointer;">
      <img src="${resolveImagePath(item.src || item.image)}" alt="${item.alt || 'Фото объекта'}" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='public/'+(this.src.split('/').pop()||'');}" />
    </figure>
  `).join('');

  container.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index, 10)));
  });
}

let currentLightboxIndex = 0;
let lightboxModal = null;

function getLightboxImages() {
  return (window.__siteData?.gallery || window.__staticContent?.gallery || []);
}

function openLightbox(index) {
  const images = getLightboxImages();
  if (!images.length) return;

  currentLightboxIndex = parseInt(index, 10) || 0;
  if (currentLightboxIndex < 0) currentLightboxIndex = 0;
  if (currentLightboxIndex >= images.length) currentLightboxIndex = 0;

  if (!lightboxModal) {
    lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightboxModal';
    lightboxModal.className = 'modal is-open';
    lightboxModal.style.display = 'grid';
    lightboxModal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true">
        <button type="button" class="close-btn" aria-label="Закрыть">&times;</button>
        <button type="button" class="modal-nav-btn modal-nav-prev prev-btn" aria-label="Предыдущее фото">&#8249;</button>
        <img id="lightboxImg" class="modal-img" src="" alt="" />
        <button type="button" class="modal-nav-btn modal-nav-next next-btn" aria-label="Следующее фото">&#8250;</button>
        <div class="modal-caption" id="lightboxCaption"></div>
      </div>
    `;
    document.body.appendChild(lightboxModal);

    lightboxModal.querySelector('.close-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
    lightboxModal.querySelector('.prev-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      stepLightbox(-1);
    });
    lightboxModal.querySelector('.next-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      stepLightbox(1);
    });
    lightboxModal.addEventListener('click', (event) => {
      if (event.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', handleLightboxKey);
  } else {
    lightboxModal.classList.add('is-open');
    lightboxModal.style.display = 'grid';
  }

  updateLightboxView();
}

function stepLightbox(step) {
  const images = getLightboxImages();
  if (!images.length) return;
  currentLightboxIndex = (currentLightboxIndex + step + images.length) % images.length;
  updateLightboxView();
}

function updateLightboxView() {
  if (!lightboxModal) return;
  const images = getLightboxImages();
  const item = images[currentLightboxIndex];
  if (!item) return;

  const modalImg = lightboxModal.querySelector('.modal-img') || lightboxModal.querySelector('#lightboxImg') || lightboxModal.querySelector('img');
  const modalCaption = lightboxModal.querySelector('.modal-caption') || lightboxModal.querySelector('#lightboxCaption');

  const imgSrc = resolveImagePath(item.src || item.image || item.photo || '');
  if (modalImg) {
    modalImg.src = imgSrc;
    modalImg.alt = item.alt || 'Фото объекта';
    modalImg.onerror = function() {
      if (!this.dataset.fallback) {
        this.dataset.fallback = '1';
        this.src = 'public/' + (this.src.split('/').pop() || '');
      }
    };
  }
  if (modalCaption) {
    modalCaption.textContent = item.alt ? `${item.alt} (${currentLightboxIndex + 1} / ${images.length})` : `Изображение ${currentLightboxIndex + 1} из ${images.length}`;
  }
}

function closeLightbox() {
  if (lightboxModal) {
    lightboxModal.classList.remove('is-open');
    lightboxModal.style.display = 'none';
  }
}

function handleLightboxKey(e) {
  if (!lightboxModal || lightboxModal.style.display === 'none' || !lightboxModal.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
}

// 2GIS Maps Integration (Ad-free, clean tiles, bounds fitting, scroll-zoom disabled)
function renderMap(objects) {
  const mapEl = document.getElementById('map');
  if (!mapEl || !Array.isArray(objects)) return;

  const pointsHtml = objects.map((obj, i) => `
    <li class="map-address-item" data-marker-index="${i}" tabindex="0" role="button" aria-label="Показать на карте: ${obj.name}">
      <div class="map-address-head">
        <span class="map-pin" aria-hidden="true">📍</span>
        <div class="map-address-copy">
          <strong>${obj.name}</strong>
          <span>${obj.address}</span>
        </div>
      </div>
      <a class="route-link" href="https://2gis.ru/search/${encodeURIComponent(obj.address)}" target="_blank" rel="noopener">Маршрут 2ГИС <span aria-hidden="true">→</span></a>
    </li>
  `).join('');

  mapEl.innerHTML = `
    <div class="map-canvas" id="map2gis"></div>
    <aside class="map-addresses">
      <h3>Объекты на карте</h3>
      <ul id="mapAddressList">${pointsHtml}</ul>
    </aside>
  `;

  function initDgMap() {
    if (typeof DG === 'undefined' || !DG.then) {
      return;
    }

    DG.then(function() {
      try {
        const container = document.getElementById('map2gis');
        if (!container) return;

        if (window.__dgMapInstance) {
          try { window.__dgMapInstance.remove(); } catch(e) {}
          window.__dgMapInstance = null;
        }

        const map = DG.map('map2gis', {
          center: [55.82, 37.60],
          zoom: 10,
          scrollWheelZoom: false,
          fullscreenControl: false
        });

        window.__dgMapInstance = map;

        if (map.scrollWheelZoom && typeof map.scrollWheelZoom.disable === 'function') {
          map.scrollWheelZoom.disable();
        }

        const markersGroup = DG.featureGroup();
        const markerRecords = [];

        objects.forEach((obj, idx) => {
          const latLng = getObjectCoords(obj, idx);
          const marker = DG.marker(latLng);

          const popupHtml = `
            <div class="map-popup-card">
              <strong class="map-popup-title">${obj.name}</strong>
              <p class="map-popup-address">${obj.address}</p>
              <a class="map-popup-route" href="https://2gis.ru/search/${encodeURIComponent(obj.address)}" target="_blank" rel="noopener">Маршрут 2ГИС →</a>
            </div>
          `;

          marker.bindPopup(popupHtml);
          markersGroup.addLayer(marker);
          markerRecords.push({ obj, marker, latLng });
        });

        markersGroup.addTo(map);

        if (markerRecords.length > 0) {
          const bounds = markersGroup.getBounds();
          if (bounds && bounds.isValid && bounds.isValid()) {
            map.fitBounds(bounds, { padding: [35, 35] });
          }
        }

        // Connect sidebar address items to markers
        const items = mapEl.querySelectorAll('.map-address-item');
        items.forEach((item) => {
          const idx = parseInt(item.dataset.markerIndex, 10);
          const rec = markerRecords[idx];
          if (!rec) return;

          function activateMarker(e) {
            if (e.target && e.target.classList.contains('route-link')) return;
            items.forEach(el => el.classList.remove('is-selected'));
            item.classList.add('is-selected');
            map.setView(rec.latLng, 14, { animate: true });
            rec.marker.openPopup();
          }

          item.addEventListener('click', activateMarker);
          item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              activateMarker(e);
            }
          });
        });

      } catch (err) {
        console.warn('2GIS Map init error:', err);
      }
    });
  }

  if (typeof DG !== 'undefined' && DG.then) {
    initDgMap();
  } else {
    const timer = setInterval(() => {
      if (typeof DG !== 'undefined' && DG.then) {
        clearInterval(timer);
        initDgMap();
      }
    }, 120);
    setTimeout(() => clearInterval(timer), 6000);
  }
}

// Local persistence for standalone GitHub Pages demo
async function sendContentUpdate(updatedData) {
  const status = document.getElementById('adminStatus');
  const saveBtn = document.getElementById('saveAllBtn');

  const phoneEl = document.getElementById('admPhone');
  if (phoneEl && updatedData) {
    updatedData.contacts = updatedData.contacts || {};
    if (phoneEl.value) updatedData.contacts.phone = phoneEl.value.trim();
    const emailEl = document.getElementById('admEmail');
    if (emailEl?.value) updatedData.contacts.email = emailEl.value.trim();
    const addrEl = document.getElementById('admAddress');
    if (addrEl?.value) updatedData.contacts.officeAddress = addrEl.value.trim();
    const hoursEl = document.getElementById('admHours');
    if (hoursEl?.value) updatedData.contacts.workHours = hoursEl.value.trim();
  }

  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.innerHTML = '⏳ Сохраняем...';
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    window.__siteData = updatedData;

    if (saveBtn) {
      saveBtn.innerHTML = '✅ Сохранено в localStorage!';
      saveBtn.classList.add('btn-saved');
      setTimeout(() => {
        saveBtn.innerHTML = '💾 Сохранить изменения';
        saveBtn.classList.remove('btn-saved');
        saveBtn.disabled = false;
      }, 1600);
    }

    if (status) {
      status.textContent = 'Изменения сохранены в localStorage браузера';
      status.style.color = '#16a34a';
      setTimeout(() => { status.textContent = ''; }, 3000);
    }
    return true;
  } catch (error) {
    if (saveBtn) {
      saveBtn.innerHTML = '❌ Ошибка';
      setTimeout(() => {
        saveBtn.innerHTML = '💾 Сохранить изменения';
        saveBtn.disabled = false;
      }, 2000);
    }
    if (status) {
      status.textContent = 'Ошибка сохранения в localStorage';
      status.style.color = '#dc2626';
    }
    return false;
  }
}

// Visual Admin Interface
function initVisualAdmin(data) {
  const tabs = document.querySelectorAll('.admin-tab');
  const panes = document.querySelectorAll('.admin-tab-pane');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      panes.forEach(p => p.style.display = 'none');
      tab.classList.add('is-active');
      const targetPane = document.getElementById(`tab-${tab.dataset.tab}`);
      if (targetPane) targetPane.style.display = 'block';
      if (tab.dataset.tab === 'inquiries') loadAdminInquiries();
    });
  });

  renderAdminObjects(data.objects || []);
  renderAdminServices(data.services || []);
  renderAdminTeam(data.team || []);
  renderAdminGallery(data.gallery || []);
  renderAdminNews(data.news || []);
  initAdminContacts(data.contacts || {});

  document.getElementById('addObjectBtn')?.addEventListener('click', () => openAdminModal('objects'));
  document.getElementById('addServiceBtn')?.addEventListener('click', () => openAdminModal('services'));
  document.getElementById('addTeamBtn')?.addEventListener('click', () => openAdminModal('team'));
  document.getElementById('addGalleryBtn')?.addEventListener('click', () => openAdminModal('gallery'));
  document.getElementById('addNewsBtn')?.addEventListener('click', () => openAdminModal('news'));

  document.getElementById('saveAllBtn')?.addEventListener('click', async () => {
    await sendContentUpdate(window.__siteData || {});
  });

  // Reset to default config button
  document.getElementById('resetDefaultsBtn')?.addEventListener('click', () => {
    if (!confirm('Вы уверены, что хотите сбросить все изменения и вернуть исходный демонстрационный контент?')) {
      return;
    }
    const freshDefaults = JSON.parse(JSON.stringify(window.__staticContent));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(freshDefaults));
    window.__siteData = freshDefaults;

    renderAdminObjects(freshDefaults.objects || []);
    renderAdminServices(freshDefaults.services || []);
    renderAdminTeam(freshDefaults.team || []);
    renderAdminGallery(freshDefaults.gallery || []);
    renderAdminNews(freshDefaults.news || []);
    initAdminContacts(freshDefaults.contacts || {});

    const status = document.getElementById('adminStatus');
    if (status) {
      status.textContent = 'Контент успешно сброшен к исходным настройкам';
      status.style.color = '#16a34a';
      setTimeout(() => { status.textContent = ''; }, 3000);
    }
  });

  // Download config.json button
  document.getElementById('downloadConfigBtn')?.addEventListener('click', () => {
    const dataToExport = window.__siteData || window.__staticContent;
    const jsonStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'config.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    const status = document.getElementById('adminStatus');
    if (status) {
      status.textContent = 'Файл config.json успешно скачан';
      status.style.color = '#16a34a';
      setTimeout(() => { status.textContent = ''; }, 2500);
    }
  });

  document.getElementById('refreshInquiriesBtn')?.addEventListener('click', loadAdminInquiries);
  document.getElementById('clearInquiriesBtn')?.addEventListener('click', clearAllInquiries);

  document.getElementById('adminModalClose')?.addEventListener('click', closeAdminModal);
  document.getElementById('adminModalCancel')?.addEventListener('click', closeAdminModal);

  document.getElementById('adminEntityForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveEntityModal();
  });
}

function renderAdminObjects(objects) {
  const list = document.getElementById('adminObjectsList');
  if (!list) return;
  if (!objects.length) {
    list.innerHTML = '<p class="text-muted">Список объектов пуст.</p>';
    return;
  }
  list.innerHTML = objects.map((obj, i) => {
    const src = resolveImagePath(obj.image || obj.photo || '');
    return `
    <div class="admin-row-item">
      <img src="${src}" class="admin-row-thumb" alt="${obj.name}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='public/'+(this.src.split('/').pop()||'');}" />
      <div class="admin-row-body">
        <h4>${obj.name}</h4>
        <div class="admin-row-subtitle">${obj.address}</div>
        <p class="admin-row-desc">${obj.description || ''}</p>
      </div>
      <div class="admin-row-actions">
        <button type="button" class="btn-sm btn-sm-edit" onclick="editEntity('objects', ${i})">Редактировать</button>
        <button type="button" class="btn-sm btn-sm-del" onclick="deleteEntity('objects', ${i})">Удалить</button>
      </div>
    </div>
  `;
  }).join('');
}

function renderAdminServices(services) {
  const list = document.getElementById('adminServicesList');
  if (!list) return;
  if (!services.length) {
    list.innerHTML = '<p class="text-muted">Список услуг пуст.</p>';
    return;
  }
  list.innerHTML = services.map((srv, i) => `
    <div class="admin-row-item">
      <div class="admin-row-body">
        <h4>${srv.title}</h4>
        <p class="admin-row-desc">${srv.description || ''}</p>
      </div>
      <div class="admin-row-actions">
        <button type="button" class="btn-sm btn-sm-edit" onclick="editEntity('services', ${i})">Редактировать</button>
        <button type="button" class="btn-sm btn-sm-del" onclick="deleteEntity('services', ${i})">Удалить</button>
      </div>
    </div>
  `).join('');
}

function renderAdminTeam(team) {
  const list = document.getElementById('adminTeamList');
  if (!list) return;
  if (!team.length) {
    list.innerHTML = '<p class="text-muted">Список сотрудников пуст.</p>';
    return;
  }
  list.innerHTML = team.map((member, i) => {
    const src = resolveImagePath(member.photo || member.image || '');
    return `
    <div class="admin-row-item">
      <img src="${src}" class="admin-row-thumb" style="border-radius: 50%;" alt="${member.name}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='public/'+(this.src.split('/').pop()||'');}" />
      <div class="admin-row-body">
        <h4>${member.name}</h4>
        <div class="admin-row-subtitle">${member.role}</div>
        <p class="admin-row-desc">${member.experience || ''}</p>
      </div>
      <div class="admin-row-actions">
        <button type="button" class="btn-sm btn-sm-edit" onclick="editEntity('team', ${i})">Редактировать</button>
        <button type="button" class="btn-sm btn-sm-del" onclick="deleteEntity('team', ${i})">Удалить</button>
      </div>
    </div>
  `;
  }).join('');
}

function renderAdminGallery(gallery) {
  const list = document.getElementById('adminGalleryList');
  if (!list) return;
  if (!gallery.length) {
    list.innerHTML = '<p class="text-muted">Галерея пуста.</p>';
    return;
  }
  list.innerHTML = gallery.map((item, i) => {
    const src = resolveImagePath(item.src || item.image || item.photo || '');
    return `
    <div class="admin-row-item">
      <img src="${src}" class="admin-row-thumb" alt="${item.alt}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='public/'+(this.src.split('/').pop()||'');}" />
      <div class="admin-row-body">
        <h4>${item.alt || 'Фотография без названия'}</h4>
        <p class="admin-row-desc" style="font-family: monospace; font-size: 0.85rem;">${src}</p>
      </div>
      <div class="admin-row-actions">
        <button type="button" class="btn-sm btn-sm-edit" onclick="editEntity('gallery', ${i})">Редактировать</button>
        <button type="button" class="btn-sm btn-sm-del" onclick="deleteEntity('gallery', ${i})">Удалить</button>
      </div>
    </div>
  `;
  }).join('');
}

function renderAdminNews(news) {
  const list = document.getElementById('adminNewsList');
  if (!list) return;
  if (!news.length) {
    list.innerHTML = '<p class="text-muted">Список новостей пуст.</p>';
    return;
  }
  list.innerHTML = news.map((item, i) => `
    <div class="admin-row-item">
      <div class="admin-row-body">
        <h4>${item.title} <span style="font-size: 0.85rem; font-weight: normal; color: #64748b;">(${item.date || ''})</span></h4>
        <p class="admin-row-desc">${item.text || ''}</p>
      </div>
      <div class="admin-row-actions">
        <button type="button" class="btn-sm btn-sm-edit" onclick="editEntity('news', ${i})">Редактировать</button>
        <button type="button" class="btn-sm btn-sm-del" onclick="deleteEntity('news', ${i})">Удалить</button>
      </div>
    </div>
  `).join('');
}

function initAdminContacts(contacts) {
  const form = document.getElementById('adminContactsForm');
  if (!form) return;
  const p = document.getElementById('admPhone');
  const e = document.getElementById('admEmail');
  const a = document.getElementById('admAddress');
  const h = document.getElementById('admHours');

  if (p) p.value = contacts.phone || '';
  if (e) e.value = contacts.email || '';
  if (a) a.value = contacts.officeAddress || '';
  if (h) h.value = contacts.workHours || '';

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const updatedContacts = {
      phone: p ? p.value.trim() : '',
      email: e ? e.value.trim() : '',
      officeAddress: a ? a.value.trim() : '',
      workHours: h ? h.value.trim() : ''
    };
    const currentData = window.__siteData || {};
    currentData.contacts = updatedContacts;
    await sendContentUpdate(currentData);
  });
}

function loadAdminInquiries() {
  const container = document.getElementById('adminInquiriesList');
  if (!container) return;

  let inquiries = [];
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    if (raw) {
      inquiries = JSON.parse(raw);
    } else {
      inquiries = [
        {
          id: 1729440000000,
          name: "Петров Михаил Сергеевич",
          phone: "+7 (916) 123-45-67",
          email: "petrov@example.com",
          subject: "Управление МКД",
          message: "Интересует смета на комплексное техническое обслуживание жилого дома.",
          date: new Date(Date.now() - 3600000 * 5).toISOString()
        }
      ];
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
    }
  } catch (e) {
    inquiries = [];
  }

  if (!Array.isArray(inquiries) || inquiries.length === 0) {
    container.innerHTML = '<p class="text-muted">Новых обращений пока нет (список пуст).</p>';
    return;
  }

  container.innerHTML = inquiries.map((item, index) => {
    const id = item.id !== undefined ? item.id : index;
    return `
      <div class="admin-row-item">
        <div class="admin-row-body">
          <h4>${item.name || 'Обращение'} <span style="font-size: 0.85rem; font-weight: normal; color: #64748b;">${item.date ? new Date(item.date).toLocaleString('ru-RU') : ''}</span></h4>
          <div class="admin-row-subtitle">Тема: ${item.subject || 'Общий вопрос'} | Тел: ${item.phone || '-'} | Email: ${item.email || '-'}</div>
          <p class="admin-row-desc">${item.message || ''}</p>
        </div>
        <div class="admin-actions">
          <button type="button" class="btn-sm btn-sm-del" onclick="deleteInquiry('${id}')">Удалить</button>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteInquiry = function(id) {
  if (!confirm('Вы уверены, что хотите удалить эту заявку?')) return;
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    let list = raw ? JSON.parse(raw) : [];
    list = list.filter((item, idx) => {
      if (item.id !== undefined && item.id !== null) {
        return String(item.id) !== String(id);
      }
      return String(idx) !== String(id);
    });
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(list));
    loadAdminInquiries();
  } catch (err) {
    alert('Не удалось удалить заявку.');
  }
};

window.clearAllInquiries = function() {
  if (!confirm('Вы точно хотите очистить ВСЕ заявки с сайта?')) return;
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify([]));
    loadAdminInquiries();
  } catch (err) {
    alert('Не удалось очистить заявки.');
  }
};

let modalContext = { entityType: null, editIndex: null };

function openAdminModal(type, index = null) {
  modalContext = { entityType: type, editIndex: index };
  const modal = document.getElementById('adminModal');
  const title = document.getElementById('adminModalTitle');
  const container = document.getElementById('adminFormFields');
  if (!modal || !container) return;

  const isEdit = index !== null;
  const siteData = window.__siteData || {};
  const item = isEdit && Array.isArray(siteData[type]) ? siteData[type][index] : {};

  const titles = {
    objects: isEdit ? 'Редактирование объекта' : 'Добавление нового объекта',
    services: isEdit ? 'Редактирование услуги' : 'Добавление новой услуги',
    team: isEdit ? 'Редактирование сотрудника' : 'Добавление нового сотрудника',
    gallery: isEdit ? 'Редактирование фото' : 'Добавление фото в галерею',
    news: isEdit ? 'Редактирование новости' : 'Добавление новой новости'
  };

  title.textContent = titles[type] || 'Редактирование';

  let fieldsHtml = '';
  if (type === 'objects') {
    fieldsHtml = `
      <div class="admin-form-group">
        <label>Название объекта *</label>
        <input type="text" name="name" class="admin-input" required value="${item.name || ''}" placeholder="Например: Борисовская, д. 1А" />
      </div>
      <div class="admin-form-group">
        <label>Адрес объекта *</label>
        <input type="text" name="address" class="admin-input" required value="${item.address || ''}" placeholder="г. Москва, ул. Борисовская, д. 1А" />
      </div>
      <div class="admin-form-group">
        <label>Путь к фото / изображение *</label>
        <input type="text" name="image" class="admin-input" required value="${item.image || item.photo || 'public/images/gallery/Beregov.jpg'}" />
      </div>
      <div class="admin-form-group">
        <label>Описание объекта</label>
        <textarea name="description" class="admin-input" rows="3">${item.description || ''}</textarea>
      </div>
    `;
  } else if (type === 'services') {
    fieldsHtml = `
      <div class="admin-form-group">
        <label>Название услуги *</label>
        <input type="text" name="title" class="admin-input" required value="${item.title || ''}" placeholder="Например: Эксплуатация инженерных сетей" />
      </div>
      <div class="admin-form-group">
        <label>Описание услуги *</label>
        <textarea name="description" class="admin-input" rows="4" required>${item.description || ''}</textarea>
      </div>
    `;
  } else if (type === 'team') {
    fieldsHtml = `
      <div class="admin-form-group">
        <label>ФИО сотрудника *</label>
        <input type="text" name="name" class="admin-input" required value="${item.name || ''}" placeholder="Иванов Иван Иванович" />
      </div>
      <div class="admin-form-group">
        <label>Должность *</label>
        <input type="text" name="role" class="admin-input" required value="${item.role || ''}" placeholder="Главный инженер" />
      </div>
      <div class="admin-form-group">
        <label>Опыт / Квалификация</label>
        <input type="text" name="experience" class="admin-input" value="${item.experience || ''}" placeholder="Стаж в ЖКХ более 10 лет" />
      </div>
      <div class="admin-form-group">
        <label>Фотография (URL или путь)</label>
        <input type="text" name="photo" class="admin-input" value="${item.photo || item.image || 'public/images/team/Sergey_Viktorovich.jpg'}" />
      </div>
    `;
  } else if (type === 'gallery') {
    fieldsHtml = `
      <div class="admin-form-group">
        <label>Путь к фото или URL *</label>
        <input type="text" name="src" class="admin-input" required value="${item.src || item.image || 'public/images/gallery/borisovskay.jpg'}" />
      </div>
      <div class="admin-form-group">
        <label>Подпись к фото (описание) *</label>
        <input type="text" name="alt" class="admin-input" required value="${item.alt || ''}" placeholder="Благоустройство дворовой территории" />
      </div>
    `;
  } else if (type === 'news') {
    fieldsHtml = `
      <div class="admin-form-group">
        <label>Заголовок новости *</label>
        <input type="text" name="title" class="admin-input" required value="${item.title || ''}" />
      </div>
      <div class="admin-form-group">
        <label>Дата новости *</label>
        <input type="text" name="date" class="admin-input" required value="${item.date || new Date().toLocaleDateString('ru-RU')}" />
      </div>
      <div class="admin-form-group">
        <label>Текст новости *</label>
        <textarea name="text" class="admin-input" rows="4" required>${item.text || ''}</textarea>
      </div>
    `;
  }

  container.innerHTML = fieldsHtml;
  modal.style.display = 'grid';
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) modal.style.display = 'none';
}

async function saveEntityModal() {
  const form = document.getElementById('adminEntityForm');
  if (!form || !modalContext.entityType) return;
  const formData = new FormData(form);
  const dataObj = Object.fromEntries(formData.entries());

  const { entityType, editIndex } = modalContext;
  const siteData = window.__siteData || {};
  if (!Array.isArray(siteData[entityType])) {
    siteData[entityType] = [];
  }

  if (editIndex !== null) {
    siteData[entityType][editIndex] = { ...siteData[entityType][editIndex], ...dataObj };
  } else {
    dataObj.id = Date.now();
    siteData[entityType].push(dataObj);
  }

  const success = await sendContentUpdate(siteData);
  if (success) {
    closeAdminModal();
    if (entityType === 'objects') renderAdminObjects(siteData.objects);
    if (entityType === 'services') renderAdminServices(siteData.services);
    if (entityType === 'team') renderAdminTeam(siteData.team);
    if (entityType === 'gallery') renderAdminGallery(siteData.gallery);
    if (entityType === 'news') renderAdminNews(siteData.news);
  }
}

window.editEntity = function(type, index) {
  openAdminModal(type, index);
};

window.deleteEntity = async function(type, index) {
  if (!confirm('Вы уверены, что хотите удалить эту запись?')) return;
  const siteData = window.__siteData || {};
  if (!Array.isArray(siteData[type])) return;
  siteData[type].splice(index, 1);
  const success = await sendContentUpdate(siteData);
  if (success) {
    if (type === 'objects') renderAdminObjects(siteData.objects);
    if (type === 'services') renderAdminServices(siteData.services);
    if (type === 'team') renderAdminTeam(siteData.team);
    if (type === 'gallery') renderAdminGallery(siteData.gallery);
    if (type === 'news') renderAdminNews(siteData.news);
  }
};

// 152-FZ Compliant Local Form Emulation (ZERO network calls)
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.submit-btn') || form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (submitBtn) {
      submitBtn.disabled = true;
    }
    if (status) {
      status.innerHTML = '⏳ Отправка заявки...';
      status.style.color = '#0284c7';
    }

    // 500 ms emulation delay without ANY network fetch (152-FZ demo compliance)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Store inquiry locally in localStorage for demo review in admin panel
    try {
      const stored = localStorage.getItem(INQUIRIES_KEY);
      const list = stored ? JSON.parse(stored) : [];
      list.unshift({
        id: Date.now(),
        name: payload.name || 'Заявитель',
        phone: payload.phone || '',
        email: payload.email || '',
        subject: payload.subject || 'Общий вопрос',
        message: payload.message || '',
        date: new Date().toISOString()
      });
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(list));
    } catch (e) {}

    form.reset();

    if (submitBtn) {
      submitBtn.disabled = false;
    }
    if (status) {
      status.textContent = 'Спасибо! Заявка успешно принята (демо-режим проверки).';
      status.style.color = '#16a34a';
    }
  });
}

async function boot() {
  initDynamicHeader();
  const content = await fetchContent();
  const data = content || window.__staticContent;
  window.__siteData = data;

  renderServices(data.services);
  renderObjects(data.objects);
  renderAdvantages(data.advantages);
  renderTeam(data.team);
  renderGallery(data.gallery);
  renderContacts(data.contacts);
  renderNews(data.news);
  renderMap(data.objects);

  if (document.querySelector('.admin-shell')) {
    initVisualAdmin(data);
  }

  initContactForm();
}

window.addEventListener('DOMContentLoaded', boot);
