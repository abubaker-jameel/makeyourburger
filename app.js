import RouterHandler from './router.js'

class App {
    constructor() {
        this.$btnToggle = document.querySelector('#btn__toggle')
        this.$faBars = document.querySelector('.fa-bars')
        this.$faXmark = document.querySelector('.fa-xmark')
        this.$toggleNavbar = document.querySelector('.toggle__navbar')
        this.$faXmark.style.display = 'none'

        new RouterHandler();
        this.handleEventListeners()
    }
    handleEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleNavToggle(event)
        })
    }

    handleNavToggle(event) {
        const isContainEvent = this.$btnToggle.contains(event.target)

        const hasHide = this.$toggleNavbar.classList.contains('hide')

        if (isContainEvent && hasHide) {
            this.$toggleNavbar.classList.remove('hide')
            this.$toggleNavbar.classList.add('show')
            this.$faBars.style.display = 'none'
            this.$faXmark.style.display = 'block'
        } else {
            this.$toggleNavbar.classList.remove('show')
            this.$toggleNavbar.classList.add('hide')
            this.$faBars.style.display = 'block'
            this.$faXmark.style.display = 'none'
        }
    }
}

new App();