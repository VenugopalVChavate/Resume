    const modals = document.querySelectorAll('.modal');
    const closeModal = document.querySelectorAll('.close');
    const experienceBtn = document.querySelector('.Experience');
    const skillsBtn = document.querySelector('.Skills');
    const achievementsBtn = document.querySelector('.achievements');
    const qualificationBtn = document.querySelector('.qualification');
    const mumbaiBtn = document.querySelector('.mumbai');
    const historyBtn = document.querySelector('.history');
    const organizeBtn = document.querySelector('.organize');
    const cookingBtn = document.querySelector('.cooking');
    
    function showModal(modal) {
        modal.style.display = 'block';
    }

    function hideModal(modal) {
        modal.style.display = 'none';
    }

    closeModal.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            hideModal(modals[index]);
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach((modal) => {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    });

    // Show modals on button clicks
    experienceBtn.addEventListener('click', () => {
        showModal(modals[0]);
    });

    skillsBtn.addEventListener('click', () => {
        showModal(modals[1]);
    });

    achievementsBtn.addEventListener('click', () => {
        showModal(modals[2]);
    });

    qualificationBtn.addEventListener('click', () => {
        showModal(modals[3]);
    });

    mumbaiBtn.addEventListener('click', () => {
        showModal(modals[4]);
    });

    historyBtn.addEventListener('click', () => {
        showModal(modals[5]);
    });

    organizeBtn.addEventListener('click', () => {
        showModal(modals[6]);
    });

    cookingBtn.addEventListener('click', () => {
        showModal(modals[7]);
    });
    const mobileBtn = document.getElementById('mobile-cta');
          nav = document.querySelector('nav');
          mobileBtnexit = document.getElementById('mobile-exit');

          mobileBtn.addEventListener('click', ()=>{
              nav.classList.add('menu-btn');
          })
          mobileBtnexit.addEventListener('click', ()=>{
              nav.classList.remove('menu-btn');
          })
