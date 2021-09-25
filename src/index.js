import styles from './scss/app.scss'
import form from './js/components/form/formHandler'
import navigation from './js/components/navigation/navigationHandler'

window.addEventListener("load", function(event) {
    const loader = document.querySelector('.preloader');
    loader.style.opacity = 0;
    this.setTimeout(() => {loader.remove()} , 500)
})