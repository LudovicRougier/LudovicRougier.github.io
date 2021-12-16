const darkModeEle = document.getElementById('darkradio');
const headerEle = document.querySelector('header');
const bodyEle = document.body;
const contactMenuEle = document.getElementById('contact-menu');
const contactMenuLinksEle = document.querySelectorAll('.contact-menu a');
const contactInfoEle = document.getElementById('contact-info');
const skillEle = document.querySelectorAll('.skill');
const arrowEle = document.querySelector('#arrow');
const contactEle = document.querySelector('#contact');
const contactInfoBtnEle = document.querySelector('#contact-info-btn');

const bodySwitchMode = () => {
  bodyEle.classList.toggle('dark-mode');
  contactInfoEle.classList.toggle('dark-mode');
  contactInfoBtnEle.classList.toggle('dark-mode');
  headerEle.classList.toggle('dark-mode');

  skillEle.forEach((skill) => {
    skill.classList.toggle('darker');
  });
  contactMenuLinksEle.forEach((link) => {
    link.classList.toggle('dark-mode');
  });

  if (!contactInfoBtnEle.classList.contains('dark-mode')) {
    contactInfoBtnEle.classList.remove('darker');
    contactEle.classList.remove('darker');
    contactInfoEle.classList.remove('darker');
    contactMenuLinksEle.forEach((link) => {
      link.classList.remove('darker');
    });
  }
  if (contactInfoBtnEle.classList.contains('dark-mode') && contactEle.classList.contains('open')) {
    contactInfoBtnEle.classList.add('darker');
    contactEle.classList.add('darker');
    contactInfoEle.classList.add('darker');
    contactMenuLinksEle.forEach((link) => {
      link.classList.add('darker');
    });
  }
};

darkModeEle.addEventListener('change', (event) => {
  bodySwitchMode();
});

contactInfoEle.addEventListener('click', (event) => {
  contactMenuEle.classList.toggle('hidden');
  if (contactMenuEle.classList.contains('hidden')) {
    arrowEle.textContent = '▼';
  } else {
    arrowEle.textContent = '▲';
  }
  if (bodyEle.classList.contains('dark-mode')) {
    contactInfoBtnEle.classList.toggle('darker');
    contactEle.classList.toggle('darker');
    contactEle.classList.toggle('open');
    contactInfoEle.classList.toggle('darker');
    contactMenuLinksEle.forEach((link) => {
      link.classList.toggle('darker');
    });
  }
  if (!bodyEle.classList.contains('dark-mode')) {
    contactEle.classList.toggle('open');
  }
});
