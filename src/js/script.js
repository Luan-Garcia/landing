document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item")

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header")

        header.addEventListener("click", () => {
            accordionItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active")
                }
            })

            item.classList.toggle("active")
        })
    })

    if (accordionItems.length > 0) {
        accordionItems[0].classList.add("active")
    }

    const navLinks = document.querySelectorAll("nav a")

    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "var(--accent-color)"
        })

        link.addEventListener("mouseleave", () => {
            link.style.color = "var(--text-color)"
        })
    })

    const heroImage = document.querySelector(".blue-circle")
    let scale = 1
    let growing = true

    function pulseAnimation() {
        if (growing) {
            scale += 0.001
            if (scale >= 1.05) growing = false
        } else {
            scale -= 0.001
            if (scale <= 0.95) growing = true
        }

        heroImage.style.transform = `scale(${scale})`
        requestAnimationFrame(pulseAnimation)
    }

    pulseAnimation()

    const hamburgerMenu = document.querySelector(".hamburger-menu")
    const mobileNav = document.querySelector(".mobile-nav")

    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    document.body.appendChild(overlay)

    function toggleMenu() {
        hamburgerMenu.classList.toggle("active")
        mobileNav.classList.toggle("active")
        overlay.classList.toggle("active")

        if (mobileNav.classList.contains("active")) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }

    hamburgerMenu.addEventListener("click", toggleMenu)
    overlay.addEventListener("click", toggleMenu)

    const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (mobileNav.classList.contains("active")) {
                toggleMenu()
            }
        })
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
            toggleMenu()
        }
    })
})
