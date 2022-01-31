window.addEventListener("DOMContentLoaded", evtent => {
    const sidebarnav = document.getElementById('sidebarnav');
    
    if (sidebarnav) {
        sidebarnav.addEventListener('click', evt => {
            let elmA = evt.target.closest('a');

            if (!elmA) return;

            let addressValue = elmA.getAttribute('href');

            if ('#' === addressValue || '' === addressValue || '/#' === addressValue || '#/' === addressValue || 'javascript:void(0)' === addressValue) evt.preventDefault();

            let elmUls = Array.from(sidebarnav.querySelectorAll('ul'));
            let elmAs = Array.from(sidebarnav.querySelectorAll('a'));

            if (!elmA.classList.contains('active')) {
                let prevElem = null;
                let nextElem = elmA.nextElementSibling;

                if (!nextElem) nextElem = elmA.closest('ul');
                if (nextElem) prevElem = nextElem.previousElementSibling;

                //Remove active class on all elements ul
                elmUls.forEach(itemUl => {
                    itemUl.classList.remove('in');
                });

                //Remove active class on all elements a
                elmAs.forEach(itemA => {
                    itemA.classList.remove('active');
                });

                //Ul Parent            
                let elmUlParent = elmA.closest('ul');
                if (elmUlParent.id !== sidebarnav.id) {
                    elmUlParent.classList.add('in');

                    let prevParentElem = elmUlParent.previousElementSibling;
                    if (prevParentElem) {
                        prevParentElem.classList.add('active');

                        //Ul Granfather
                        let elmGranfather = prevParentElem.closest('ul');
                        if (elmGranfather.id !== sidebarnav.id) {
                            elmGranfather.classList.add('in');

                            let prevGranfather = elmGranfather.previousElementSibling;
                            if (prevGranfather) prevGranfather.classList.add('active');
                        }
                    }
                }

                if (nextElem) nextElem.classList.add('in');
                if (prevElem) prevElem.classList.add('active');
                elmA.classList.add('active');

            } else if (elmA.classList.contains('active')) {

                let nextElem = elmA.nextElementSibling;

                if (!nextElem) nextElem = elmA.closest('ul');

                //Remove active class on all elements ul
                elmUls.forEach(itemUl => {
                    itemUl.classList.remove('in');
                });

                //Remove active class on all elements a
                elmAs.forEach(itemA => {
                    itemA.classList.remove('active');
                });

                if (nextElem) nextElem.classList.remove('in');
                elmA.classList.remove('active');
            }

        });
    }
})