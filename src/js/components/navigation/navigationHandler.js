const navigation = document.querySelector('.navigation');
const links = navigation.querySelectorAll('.navigation_link')

navigation.querySelector('.navigation_switch').addEventListener('click', e => {
    navigation.classList.toggle('-visible')
    if(e.target.checked) {
        links.forEach(link => link.addEventListener('click', e => navigation.classList.remove('-visible')))
    }
});

export default navigation;