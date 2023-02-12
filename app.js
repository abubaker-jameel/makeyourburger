import RouterHandler from './router.js'

class App {
    constructor() {
        this.$btnToggle = document.querySelector('#btn__toggle')
        this.$faBars = document.querySelector('.fa-bars')
        this.$faXmark = document.querySelector('.fa-xmark')
        this.$toggleNavbar = document.querySelector('.toggle__navbar')
        this.$faXmark.style.display = 'none'
        this.$linkDiscovery = document.querySelectorAll('a')[0]
        this.$linkMakeYourBurger = document.querySelectorAll('a')[1]

        new RouterHandler();
        this.handleEventListeners()
        this.hasLocation()
        window.addEventListener('popstate', () => {
            this.hasLocation()
        })
    }
    handleEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleNavToggle(event)
        })
        const $avatar = document.querySelector('.avatar')
        $avatar.addEventListener('mouseover', this.handleHoverAvatarOver)
        $avatar.addEventListener('mouseout', this.handleHoverAvatarOut)
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
    handleHoverAvatarOver() {
        const $avatarDropDown = document.querySelector('.avatar__drop--down')
        $avatarDropDown.style.display = 'block'
    }
    handleHoverAvatarOut() {
        const $avatarDropDown = document.querySelector('.avatar__drop--down')
        $avatarDropDown.style.display = 'none'
    }

    hasLocation() {
        if (location.hash == '#/') {
            this.$linkDiscovery.classList.add('active')
            this.$linkMakeYourBurger.classList.remove('active')
        } else if (location.hash == '#/makeyourburger') {
            this.$linkDiscovery.classList.remove('active')
            this.$linkMakeYourBurger.classList.add('active')
        }
    }

}

new App();