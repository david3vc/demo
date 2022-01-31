import PerfectScrollbar from 'perfect-scrollbar';

const elmBody = document.querySelector('body');

//=====================Methods
const fadeOutEffect = (fadeTarget) => {

    if (!fadeTarget) return;

    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            fadeTarget.style.display = 'none';
            clearInterval(fadeEffect);
        }
    }, 100);
}


const setResize = () => {
    let width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
    let topOffset = 35;

    const elmPageBody = document.querySelector('body');
    const elmNavbarBrand = document.querySelector('.navbar-brand span');
    const elmSidebartogglerIcon = document.querySelector('.sidebartoggler i');
    const elmPageWrapper = document.querySelector('.page-wrapper');

    // console.log(elmNavbarBrand, elmSidebartogglerIcon);

    if (width < 1170) {
        elmPageBody.classList.add('mini-sidebar');
        if (elmNavbarBrand) elmNavbarBrand.style.display = 'none';
        if (elmSidebartogglerIcon) elmSidebartogglerIcon.classList.add('fa-bars')
    } else {
        elmPageBody.classList.remove('mini-sidebar');
        if (elmNavbarBrand) elmNavbarBrand.style.display = 'block';
    }
    var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
        if (elmPageWrapper) elmPageWrapper.style.minHeight = (height) + "px";
    }
}

//=================Events
// window.addEventListener("DOMContentLoaded", setResize);
window.addEventListener("DOMContentLoaded", evtent => {
    setResize();

    const elmScrollSidebar = document.querySelector('.scroll-sidebar');
    let ps = null;

    if (elmScrollSidebar) {
        ps = new PerfectScrollbar(elmScrollSidebar, {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
    }

    const elmSidebartoggler = document.querySelector('.sidebartoggler');
    if (elmSidebartoggler) {
        elmSidebartoggler.addEventListener('click', evt => {
            evt.preventDefault();
            
            const elmNavbarBrand = document.querySelector('.navbar-brand span');

            if (elmBody.classList.contains('mini-sidebar')) {
                setResize();
                elmBody.classList.remove('mini-sidebar');
                if (elmNavbarBrand) elmNavbarBrand.style.display = 'block';
            } else {
                setResize();
                elmBody.classList.add('mini-sidebar');
                if (elmNavbarBrand) elmNavbarBrand.style.display = 'none';
            }

            //PerfectScrollbar
            if (ps) {
                ps.update();
            }

        });
    }

    const elmNavToggler = document.querySelector('.nav-toggler');
    if (elmNavToggler) {
        elmNavToggler.addEventListener('click', evt => {
            evt.preventDefault();

            const elmNavTogglerIcon = document.querySelector('.nav-toggler i');

            elmBody.classList.toggle('show-sidebar');

            if (elmNavTogglerIcon) {
                elmNavTogglerIcon.classList.toggle('fa-bars');
                elmNavTogglerIcon.classList.toggle('fa-times');
            }

            //PerfectScrollbar
            if (ps) {
                ps.update();
            }
        });
    }


});

window.addEventListener('resize', setResize);
elmBody.addEventListener('resize', setResize);

window.addEventListener("load", evt => {
    let fadeTarget = document.querySelector('.preloader');
    fadeOutEffect(fadeTarget);
});
