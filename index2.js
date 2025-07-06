// Объект с переводами для всех языков
const translations = {
    en: {
        'language': 'Language',
        'about-alexandra': 'Alexandra Maevskaya',
        'about-text': 'Alexandra Maevskaya is a videographer, creator and painter currently based in Minsk, Belarus. Inspired by legendary directors, she crafts a signature style defined by sophistication and intimacy. Through deliberate framing and an incisive gaze, she reveals the essence of each subject — capturing allure, power, and vulnerability in equal measure.',
        'education-text': 'As a young adult she quickly developed a love for experimenting with different creative directions: chess, dance, piano, sewing. It was in adulthood that she truly encountered the visual arts — image-making predominantly through video, but also painting.',
        'achievements-text': 'Now, her work is recognized for its intimate, authentic staging. She strives to push drive the industry forward with bold, emotion-driven projects that blurs the line between art and advertising.',
        'contact-title': 'Contact',
        'general-inquiries': 'General Inquiries',
        'studio': 'Studio',
        'instagram': 'Instagram',
        'pricing-title': 'Pricing',
        'film-video-title': 'Video Production',
        'short-film': 'Short Film (1-5 minutes)',
        'commercial-campaign': 'Commercial Campaign',
        'music-video': 'Music Video',
        'documentary': 'Documentary',
        'Reels': 'Reels',
        'photography-title': 'Photography Services',
        'portrait-session': 'Portrait Session',
        'street-style-doc': 'Street Style Documentation',
        'event-coverage': 'Event Coverage',
        'art-works-title': 'Art Works',
        'original-paintings': 'Original Paintings',
        'ceramic-pieces': 'Ceramic Pieces',
        'custom-commissions': 'Custom Commissions',
        'contact-quote': 'Contact for Quote',
        'pricing-note': 'All prices are starting rates and may vary based on project scope, timeline, and specific requirements. Please contact for detailed quotes.',
        'modal-close': 'Close',
        'service-included': 'What\'s Included',
        'service-deliverables': 'Deliverables',
        'service-timeline': 'Timeline',
        'contact-for-details': 'Contact for details',
        'creative-concept': 'Creative concept development',
        'visual-treatment': 'Visual treatment and mood boarding',
        'professional-cinema': 'Professional cinematography',
        'choreography': 'Choreography coordination (if needed)',
        'post-production': 'Advanced post-production and VFX',
        'full-length-music-video': 'Full-length music video',
        'lyric-video-version': 'Lyric video version',
        'behind-the-scenes-footage': 'Behind-the-scenes footage',
        'social-media-teasers': 'Social media teasers',
        'high-resolution-stills': 'High-resolution stills',
    },
    ru: {
        'language': 'Язык',
        'about-alexandra': 'Александра Маевская',
        'about-text': 'Александра Маевская — видеограф, художник и креатор, находящаяся в Минске. Вдохновляясь великими режиссёрами, она создает авторский стиль, сочетающий изысканность и интимность. Через продуманную композицию и вниманию к деталям, она раскрывает суть каждого образа, передавая в равной мере обаяние, силу и уязвимость.',
        'education-text': 'В юности стремительно развилась страсть к экспериментам в различных творческих сферах: шахматы, хореография, фортепиано, шитье. Однако подлинное погружение в визуальные искусства — создание образов преимущественно через видеоискусство, а также живопись — произошло уже в зрелом возрасте.',
        'achievements-text': 'Сегодня её работы узнаваемы благодаря интимной (близостью и личным пространством) и подлинной манере постановки (истории созданной за кадром). Она стремится двигать индустрию вперёд через смелые, эмоционально заряженные проекты, стирающие грань между искусством и рекламой.',
        'contact-title': 'Контакты',
        'general-inquiries': 'Общие вопросы',
        'studio': 'Студия',
        'instagram': 'Инстаграм',
        'pricing-title': 'Прайс-лист',
        'film-video-title': 'Производство видео',
        'short-film': 'Короткометражный фильм (1-5 минут)',
        'commercial-campaign': 'Рекламная кампания',
        'music-video': 'Музыкальное видео',
        'documentary': 'Документальный фильм',
        'Reels': 'Reels',
        'photography-title': 'Фотографические услуги',
        'portrait-session': 'Портретная сессия',
        'street-style-doc': 'Документирование уличного стиля',
        'event-coverage': 'Освещение мероприятий',
        'art-works-title': 'Произведения искусства',
        'original-paintings': 'Оригинальные картины',
        'ceramic-pieces': 'Керамические изделия',
        'custom-commissions': 'Индивидуальные заказы',
        'contact-quote': 'Свяжитесь для расчета',
        'pricing-note': 'Все цены являются стартовыми и могут варьироваться в зависимости от масштаба проекта, сроков и конкретных требований. Пожалуйста, свяжитесь с нами для получения подробных расценок.',
        'modal-close': 'Закрыть',
        'service-included': 'Что включено',
        'service-deliverables': 'Результаты',
        'service-timeline': 'Сроки',
        'contact-for-details': 'Контакты для уточнений',
        'creative-concept': 'Разработка креативной концепции',
        'visual-treatment': 'Визуальное решение и moodboard',
        'professional-cinema': 'Профессиональная видеосъемка',
        'choreography': 'Координация хореографии (при необходимости)',
        'post-production': 'Продвинутый пост-продакшн и VFX',
        'full-length-music-video': 'Полноформатное музыкальное видео',
        'lyric-video-version': 'Версия с текстом песни',
        'behind-the-scenes-footage': 'Закадровые материалы',
        'social-media-teasers': 'Тизеры для соцсетей',
        'high-resolution-stills': 'Фото высокого разрешения',
    },
    tr: {
        'language': 'Dil',
        'about-alexandra': 'Alexandra Maevskaya',
        'about-text': 'Alexandra Maevskaya, video yapımcısı, içerik üreticisi ve ressam olarak şu anda Belarus un Minsk kentinde yaşıyor. Efsanevi yönetmenlerden ilham alarak, zarafet ve samimiyetle tanımlanan kendine özgü bir tarz yaratıyor. Bilinçli kadrajlama ve keskin bakış açısıyla her öznenin özünü ortaya çıkarıyor; çekiciliği, gücü ve kırılganlığı eşit ölçüde yakalıyor.',
        'education-text': 'Alexandra, NYU Tisch School of the Arts\'tan Film Yapımcılığı alanında MFA derecesine ve Parsons School of Design\'dan Fotoğrafçılık alanında BFA derecesine sahiptir. Çalışmaları Cannes Film Festivali, New York Fotoğraf Haftası ve Metropolitan Müzesi\'nin gelişmekte olan sanatçılar programı dahil olmak üzere uluslararası çok sayıda sergide ve film festivalinde yer almıştır.',
        'achievements-text': 'Bugün çalışmaları samimi (yakın ve kişisel alan) ve otantik sahneleme tarzıyla (sahne arkasında yaratılan hikaye) tanınıyor. Sanat ve reklam arasındaki çizgiyi bulanıklaştıran cesur, duygu yüklü projelerle sektörü ileriye taşımak için çabalıyor.',
        'contact-title': 'İletişim',
        'general-inquiries': 'Genel Sorular',
        'studio': 'Stüdyo',
        'instagram': 'Instagram',
        'pricing-title': 'Fiyatlandırma',
        'film-video-title': 'Video Prodüksiyon',
        'short-film': 'Kısa Film (1-5 dakika)',
        'commercial-campaign': 'Ticari Kampanya',
        'music-video': 'Müzik Videosu',
        'documentary': 'Belgesel',
        'Reels': 'Reels',
        'photography-title': 'Fotoğrafçılık Hizmetleri',
        'portrait-session': 'Portre Çekimi',
        'street-style-doc': 'Sokak Stili Belgeleme',
        'event-coverage': 'Etkinlik Çekimi',
        'art-works-title': 'Sanat Eserleri',
        'original-paintings': 'Orijinal Tablolar',
        'ceramic-pieces': 'Seramik Eserler',
        'custom-commissions': 'Özel Siparişler',
        'contact-quote': 'Fiyat İçin İletişime Geçin',
        'pricing-note': 'Tüm fiyatlar başlangıç fiyatlarıdır ve proje kapsamı, zaman çizelgesi ve özel gereksinimlere göre değişebilir. Detaylı fiyat teklifleri için lütfen iletişime geçin.',
        'modal-close': 'Kapat',
        'service-included': 'Dahil Olanlar',
        'service-deliverables': 'Teslimatlar',
        'service-timeline': 'Zaman Çizelgesi',
        'contact-for-details': 'Detaylar için iletişim',
        'creative-concept': 'Yaratıcı konsept geliştirme',
        'visual-treatment': 'Görsel işleme ve mood board',
        'professional-cinema': 'Profesyonel sinematografi',
        'choreography': 'Koreografi koordinasyonu (gerekirse)',
        'post-production': 'Gelişmiş post prodüksiyon ve VFX',
        'full-length-music-video': 'Tam uzunlukta müzik videosu',
        'lyric-video-version': 'Şarkı sözleri versiyonu',
        'behind-the-scenes-footage': 'Kamera arkası görüntüleri',
        'social-media-teasers': 'Sosyal medya tanıtımları',
        'high-resolution-stills': 'Yüksek çözünürlüklü fotoğraflar',
    }


};

const pricingContent = {
    en: [
        { key: 'Personal Branding Videos', price: '$200 - $300', note: '' },
        { key: 'Fashion Video', price: '$200 - $300', note: '' },
        { key: 'Commercial Campaign', price: '$300 - $400', note: '' },
        { key: 'Urban Creativity', price: '$150 - $250', note: '' },
        { key: 'Reels', price: '$100 - $150', note: '' },
    ],
    ru: [
        { key: 'Personal Branding Videos', price: '$100 - $150', note: '' },
        { key: 'Fashion Video', price: '$100 - $150', note: '' },
        { key: 'Commercial Campaign', price: '$100 - $200', note: '' },
        { key: 'Urban Creativity', price: '$70 - $100', note: '' },
        { key: 'Reels', price: '$40 - $90', note: '' },
    ],
    tr: [
        { key: 'Personal Branding Videos', price: '$200 - $300', note: '' },
        { key: 'Fashion Video', price: '$200 - $300', note: '' },
        { key: 'Commercial Campaign', price: '$300 - $400', note: '' },
        { key: 'Urban Creativity', price: '$200 - $250', note: '' },
        { key: 'Reels', price: '$100', note: '' },
    ]
};

// Текущий активный язык
let currentLanguage = 'en';
let currentPaintingIndex = 0;
let paintingsData = [];

// Функция переключения языка
function changeLanguage(lang) {
    currentLanguage = lang;

    // Обновляем все элементы с data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Обновление прайса
    const pricingItems = document.querySelectorAll('.price-item');
    const localizedPrices = pricingContent[lang];

    if (pricingItems.length && localizedPrices) {
        pricingItems.forEach(item => {
            const nameSpan = item.querySelector('.service-name');
            const priceSpan = item.querySelector('.service-price');
            const key = nameSpan?.getAttribute('data-lang-key');

            const localized = localizedPrices.find(p => p.key === key);
            if (localized) {
                priceSpan.textContent = localized.price;

                // Удаляем старое примечание, если было
                const existingNote = item.querySelector('.price-note');
                if (existingNote) existingNote.remove();

                // Добавляем новое примечание, если есть
                if (localized.note) {
                    const note = document.createElement('div');
                    note.className = 'price-note';
                    note.textContent = localized.note;
                    note.style.fontSize = '12px';
                    note.style.color = '#888';
                    note.style.marginTop = '4px';
                    item.appendChild(note);
                }
            }
        });
    }


    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Функция инициализации языкового переключателя
function initializeLanguageSwitcher() {
    // Добавляем обработчики событий для кнопок языков
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Инициализируем язык по умолчанию
    changeLanguage(currentLanguage);
}

// Функция для переключения секций
function showSection(sectionName) {
    // Скрываем все секции
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Показываем выбранную секцию
    document.getElementById(sectionName).classList.add('active');

    // Обновляем активное состояние меню
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    // Закрываем меню на мобильных после выбора
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

// Функция для переключения меню
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const isOpen = sidebar.classList.toggle('open');

    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
        document.body.classList.add('menu-open');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    } else {
        document.body.classList.remove('menu-open');
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

// Функции для работы с модальными окнами pricing
function openPricingModal(type) {
    const modal = document.getElementById('pricing-modal');
    const content = document.getElementById('modal-content');
    const data = pricingData[type];

    if (!data) return;

    let html = `<h3>${data.title}</h3>`;

    if (data.highlight) {
        html += `<div class="pricing-highlight">${data.highlight}</div>`;
    }

    data.sections.forEach(section => {
        html += `<div class="pricing-modal-section">`;
        html += `<h4>${section.title}</h4>`;

        if (Array.isArray(section.content)) {
            html += `<ul>`;
            section.content.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += `</ul>`;
        } else {
            html += `<p>${section.content}</p>`;
        }

        html += `</div>`;
    });

    content.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePricingModal() {
    const modal = document.getElementById('pricing-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Функции для работы с видео
function openFullscreenVideo(url) {
    const iframe = document.getElementById('fullscreenIframe');
    iframe.src = url;
    document.getElementById('fullscreenVideoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreenVideo() {
    const modal = document.getElementById('fullscreenVideoModal');
    modal.classList.remove('active');
    document.getElementById('fullscreenIframe').src = '';
    document.body.style.overflow = 'auto';
}

// Функции для работы с картинами
function openPaintingModal(imageSrc, title, details, index) {
    const modal = document.getElementById('paintingModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const modalNavigation = document.getElementById('modalNavigation');

    currentPaintingIndex = index;

    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDetails.textContent = details;

    modalNavigation.innerHTML = '';
    paintingsData.forEach((painting, i) => {
        const dot = document.createElement('div');
        dot.className = `modal-dot ${i === index ? 'active' : ''}`;
        dot.onclick = () => navigateToPainting(i);
        modalNavigation.appendChild(dot);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function navigatePainting(direction) {
    const newIndex = currentPaintingIndex + direction;
    if (newIndex < 0) {
        navigateToPainting(paintingsData.length - 1);
    } else if (newIndex >= paintingsData.length) {
        navigateToPainting(0);
    } else {
        navigateToPainting(newIndex);
    }
}

function navigateToPainting(index) {
    const painting = paintingsData[index];
    if (painting) {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDetails = document.getElementById('modalDetails');
        const dots = document.querySelectorAll('.modal-dot');

        modalImage.src = painting.imageSrc;
        modalImage.alt = painting.title;
        modalTitle.textContent = painting.title;
        modalDetails.textContent = painting.details;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentPaintingIndex = index;
    }
}

function closePaintingModal() {
    const modal = document.getElementById('paintingModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    const supported = ['en', 'ru', 'tr'];
    const defaultLang = supported.includes(langCode) ? langCode : 'en';
    changeLanguage(defaultLang);

    // Инициализация языкового переключателя
    initializeLanguageSwitcher();

    // Собираем данные о картинах
    const paintingItems = document.querySelectorAll('.painting-item');
    paintingsData = Array.from(paintingItems).map((item, index) => {
        return {
            imageSrc: item.querySelector('.painting-image').src,
            title: item.querySelector('.painting-title').textContent,
            details: item.querySelector('.painting-details').textContent,
            index: index
        };
    });

    // Обработчики для картин
    paintingItems.forEach((item, index) => {
        item.onclick = () => {
            const imgSrc = item.querySelector('.painting-image').src;
            const title = item.querySelector('.painting-title').textContent;
            const details = item.querySelector('.painting-details').textContent;
            openPaintingModal(imgSrc, title, details, index);
        };
    });

    // Обработчики для пунктов меню
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    // Обработчики для модальных окон
    document.getElementById('pricing-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            closePricingModal();
        }
    });

    // Обработчики клавиатуры
    document.addEventListener('keydown', function (e) {
        // Закрытие модальных окон по Escape
        if (e.key === 'Escape') {
            closePricingModal();
            closeFullscreenVideo();
            closePaintingModal();
        }

        // Навигация по картинам
        const paintingModal = document.getElementById('paintingModal');
        if (paintingModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                navigatePainting(-1);
            } else if (e.key === 'ArrowRight') {
                navigatePainting(1);
            }
        }
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function (event) {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.querySelector('.menu-toggle');

        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('open') &&
            !sidebar.contains(event.target) &&
            event.target !== menuToggle &&
            !menuToggle.contains(event.target)) {
            toggleMenu();
        }
    });
});

// Обработчик изменения размера окна
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open');
        document.body.classList.remove('menu-open');
        document.body.style.position = '';
        document.body.style.top = '';
    }
});