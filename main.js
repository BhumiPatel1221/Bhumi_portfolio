// preloader script............
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
})

function settingtoggle() {
  document.getElementById("setting-container").classList.toggle('settingactivate');
}

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach(li => {
    li.classList.remove('activeThismobiletab');
    if (li.classList.contains(current)) {
      li.classList.add('activeThismobiletab')
    }
  })
  navLi.forEach(li => {
    li.classList.remove('activeThistab');
    if (li.classList.contains(current)) {
      li.classList.add('activeThistab')
    }
  })
})
console.log('%c Designed and Developed by Bhumi Patel ', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');

let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("contextmenu", function (e) {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);

let Pupils = document.getElementsByClassName('footer-pupil');
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
  let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

  pupilsArr.forEach((curPupil) => {
    curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  })
}

const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);

// --- Project Modal Functionality ---
function openProjectModal(title, description, githubLink, liveLink, imageSrc, techStack) {
  // Create modal HTML if it doesn't exist
  if (!document.getElementById('projectModal')) {
    const modalHTML = `
      <div id="projectModal" class="project-modal">
        <div class="modal-content">
          <span class="close-modal" onclick="closeProjectModal()">&times;</span>
          <div class="modal-image-container">
            <img id="modalImage" src="" alt="Project Image" />
          </div>
          <div class="modal-info">
            <h2 id="modalTitle" class="modal-title"></h2>
            <p id="modalDescription" class="modal-description"></p>
            <div id="modalTechStack" class="modal-tech-stack"></div>
            <div class="modal-buttons">
              <a id="modalGithubLink" href="" target="_blank" class="github-redirect">
                <img src="src/svg/github.svg" alt="github redirect button" class="needtobeinvert ${document.body.classList.contains('light-mode') ? 'invertapplied' : ''}" style="width: 45px;" />
              </a>
              <a id="modalLiveLink" href="" target="_blank" class="cta">
                <span id="modalLiveText">Live view</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Close modal when clicking outside of it
    window.onclick = function(event) {
      const modal = document.getElementById('projectModal');
      const certModal = document.getElementById('certModal');
      if (event.target == modal) {
        closeProjectModal();
      }
      if (event.target == certModal) {
        closeCertModal();
      }
    }
  }

  // Populate data
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalGithubLink').href = githubLink;
  
  const liveLinkBtn = document.getElementById('modalLiveLink');
  const liveText = document.getElementById('modalLiveText');
  if (liveLink && liveLink !== '#') {
    liveLinkBtn.href = liveLink;
    liveLinkBtn.style.opacity = '1';
    liveLinkBtn.style.pointerEvents = 'auto';
    liveText.textContent = 'Live view';
  } else {
    liveLinkBtn.href = '#';
    liveLinkBtn.style.opacity = '0.5';
    liveLinkBtn.style.pointerEvents = 'none';
    liveText.textContent = 'Waitlisted';
  }

  // Populate tech stack
  const techStackContainer = document.getElementById('modalTechStack');
  techStackContainer.innerHTML = '';
  if (techStack && techStack.length > 0) {
    techStack.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      techStackContainer.appendChild(span);
    });
  }

  // Show modal
  document.body.classList.add('stopscrolling');
  document.getElementById('projectModal').classList.add('show');
  
  // Push state for back button functionality
  history.pushState({modal: 'project'}, '');
}

function closeProjectModal(fromHistory = false) {
  document.body.classList.remove('stopscrolling');
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('show');
    if (!fromHistory) {
      // If closing via button/click, go back to clear the state
      const state = history.state;
      if (state && state.modal === 'project') {
        history.back();
      }
    }
  }
}

// --- Certificate Modal Functionality ---
function openCertModal(imageSrc) {
  if (!document.getElementById('certModal')) {
    const certModalHTML = `
      <div id="certModal" class="cert-modal" onclick="closeCertModal()">
        <div class="cert-modal-content">
          <span class="close-cert-modal">&times;</span>
          <img id="certModalImage" src="" alt="Certificate" />
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', certModalHTML);
  }

  document.getElementById('certModalImage').src = imageSrc;
  document.body.classList.add('stopscrolling');
  document.getElementById('certModal').classList.add('show');
  
  // Push state for back button functionality
  history.pushState({modal: 'certificate'}, '');
}

function closeCertModal(fromHistory = false) {
  document.body.classList.remove('stopscrolling');
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('show');
    if (!fromHistory) {
      // If closing via button/click, go back to clear the state
      const state = history.state;
      if (state && state.modal === 'certificate') {
        history.back();
      }
    }
  }
}

// --- Browser Back Button Handler ---
window.addEventListener('popstate', (event) => {
  // If no state (user went back from modal), close any open modals
  const projectModal = document.getElementById('projectModal');
  const certModal = document.getElementById('certModal');
  
  if (projectModal && projectModal.classList.contains('show')) {
    closeProjectModal(true);
  }
  if (certModal && certModal.classList.contains('show')) {
    closeCertModal(true);
  }
});