const navigation = document.querySelector('.navigation');

navigation.querySelector('.navigation_switch').addEventListener('click', e => {
    navigation.classList.toggle('-visible')
});

export default navigation;