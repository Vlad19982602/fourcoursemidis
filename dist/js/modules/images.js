const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.documents-slider'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('modal-2');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('previews')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.modal-2')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;