const mobileToggle = document.querySelector('#mobile-toggle');
const navigation = document.querySelector('nav');

function toggleHandler() {
    if (mobileToggle.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navigation.classList.remove('opened');
    } else {
        mobileToggle.classList.add('active');
        navigation.classList.add('opened');
    }
}

mobileToggle.addEventListener('click', toggleHandler);