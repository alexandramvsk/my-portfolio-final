const pricingData = {
    'Personal Branding Video': {
        title: 'Personal Branding Video',
        sections: [
            {
                title: 'What\'s Included',
                content: [
                    'Pre-production planning and storyboarding',
                    'Professional cinematography and lighting',
                    'Sound recording and design',
                    'Color grading and post-production',
                    'Up to 3 rounds of revisions'
                ]
            },
            {
                title: 'Deliverables',
                content: [
                    'Final film in 4K resolution',
                    'Web-optimized versions',
                    'Behind-the-scenes content',
                    'Raw footage (upon request)'
                ]
            },
            {
                title: 'Timeline',
                content: [
                    'Pre-production: 1-2 weeks',
                    'Production: 1-3 days',
                    'Post-production: 2-4 weeks',
                    'Total project duration: 4-8 weeks'
                ]
            }
        ],
        highlight: 'Visual content for the individuals to enhance the personal branding and expand the online presence.'
    },

    'Fashion Video': {
        title: 'Fashion Video',
        sections: [
            {
                title: 'What\'s Included',
                content: [
                    'Brand consultation and concept development',
                    'Multi-format content creation',
                    'Professional crew and equipment',
                    'Location scouting and permits',
                    'Talent coordination (if needed)'
                ]
            },
            {
                title: 'Deliverables',
                content: [
                    'Main commercial (30-60 seconds)',
                    'Social media cut-downs',
                    'Behind-the-scenes content',
                    'Photography stills from shoot',
                    'Usage rights and licensing'
                ]
            },
            {
                title: 'Timeline',
                content: [
                    'Strategy & planning: 1-2 weeks',
                    'Production: 1-5 days',
                    'Post-production: 2-3 weeks',
                    'Total project duration: 4-8 weeks'
                ]
            }
        ],
        highlight: 'Creating atmosphere, evoking emotions, expressing creativity, and showcasing aesthetics without overt sales focus.'
    },

    'Commercial Campaign': {
        title: 'Commercial Campaign',
        sections: [
            {
                title: 'What\'s Included',
                content: [
                    'Creative concept development',
                    'Visual treatment and mood boarding',
                    'Professional cinematography',
                    'Choreography coordination (if needed)',
                    'Advanced post-production and VFX'
                ]
            },
            {
                title: 'Deliverables',
                content: [
                    'Full-length music video',
                    'Lyric video version',
                    'Behind-the-scenes footage',
                    'Social media teasers',
                    'High-resolution stills'
                ]
            },
            {
                title: 'Timeline',
                content: [
                    'Concept development: 1-2 weeks',
                    'Production: 1-3 days',
                    'Post-production: 2-4 weeks',
                    'Total project duration: 4-8 weeks'
                ]
            }
        ],
        highlight: 'Comprehensive commercial campaigns designed to elevate your brand with compelling visual storytelling.'
    },

    'Urban Creativity': {
        title: 'Urban Creativity',
        sections: [
            {
                title: 'What\'s Included',
                content: [
                    'Research and story development',
                    'Interview setup and filming',
                    'B-roll and archival footage',
                    'Narrative structure and editing',
                    'Sound design and mixing'
                ]
            },
            {
                title: 'Deliverables',
                content: [
                    'Complete documentary film',
                    'Trailer/promotional content',
                    'Extended interview footage',
                    'Photo documentation',
                    'Distribution-ready formats'
                ]
            },
            {
                title: 'Timeline',
                content: [
                    'Research & planning: 2-4 weeks',
                    'Production: 2-8 weeks',
                    'Post-production: 4-8 weeks',
                    'Total project duration: 8-20 weeks'
                ]
            }
        ],
        highlight: 'Refers to artistic activities within a city, often using public spaces and infrastructure as a canvas. These activities can be a form of social, commercial commentary, personal expression.'
    },

    'Reels': {
        title: 'Reels',
        sections: [
            {
                title: 'What\'s Included',
                content: [
                    'Research and story development',
                    'Interview setup and filming',
                    'B-roll and archival footage',
                    'Narrative structure and editing',
                    'Sound design and mixing'
                ]
            },
            {
                title: 'Deliverables',
                content: [
                    'Complete documentary film',
                    'Trailer/promotional content',
                    'Extended interview footage',
                    'Photo documentation',
                    'Distribution-ready formats'
                ]
            },
            {
                title: 'Timeline',
                content: [
                    'Research & planning: 2-4 weeks',
                    'Production: 2-8 weeks',
                    'Post-production: 4-8 weeks',
                    'Total project duration: 8-20 weeks'
                ]
            }
        ],
        highlight: 'Talking-head videos (personal storytelling), GRWM (Makeup routines, outfit changes, morning rituals), Product reviews (Unboxings), Mood video.'
    }
};

function openPricingModal(type) {
    const modal = document.getElementById('pricing-modal');
    const content = document.getElementById('modal-content');
    const data = pricingData[type];

    if (!data) return;

    // Используем перевод для заголовка или fallback
    const title = translations[currentLanguage][type] || data.title;

    let html = `
      <h3>${title}</h3>
      <button class="pricing-modal-close" onclick="closePricingModal()">
        ${translations[currentLanguage]['modal-close']}
      </button>
    `;

    if (data.highlight) {
        html += `<div class="pricing-highlight">${data.highlight}</div>`;
    }

    data.sections.forEach(section => {
        // Переводим заголовок секции
        const sectionTitle = translations[currentLanguage][`service-${section.title.toLowerCase()}`] || section.title;

        html += `
        <div class="pricing-modal-section">
          <h4>${sectionTitle}</h4>
          <ul>
      `;

        // Переводим каждый пункт списка
        section.content.forEach(item => {
            const translationKey = item.toLowerCase().replace(/\s+/g, '-');
            const translatedItem = translations[currentLanguage][translationKey] || item;
            html += `<li>${translatedItem}</li>`;
        });

        html += `
          </ul>
        </div>
      `;
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

// Функция для переключения меню
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const isOpen = sidebar.classList.toggle('open');

    // Обновляем состояние кнопки меню
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);

    // Управляем прокруткой тела документа
    if (isOpen) {
        document.body.classList.add('menu-open');
        // Блокируем скролл на iOS
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    } else {
        document.body.classList.remove('menu-open');
        // Разблокируем скролл на iOS
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

// Закрытие меню при изменении размера окна
window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open');
        document.body.classList.remove('menu-open');
        document.body.style.position = '';
        document.body.style.top = '';
    }
});


// Функция показа секций
function showSection(sectionName) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionName).classList.add('active');

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
    // Menu item clicks
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    // Закрытие модального окна по клику вне его
    document.getElementById('pricing-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            closePricingModal();
        }
    });

    // Закрытие модального окна по Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePricingModal();
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

// Закрытие меню при изменении размера окна
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open');
        document.body.classList.remove('menu-open');
        document.body.style.position = '';
        document.body.style.top = '';
    }
});