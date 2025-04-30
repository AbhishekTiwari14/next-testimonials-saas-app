;(function () {
  const config = {
    apiUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials?username=one`,
    carouselSelector: "[data-testimonials-carousel]",
    username: "one",
  }

  const currentScript =
    document.currentScript ||
    document.querySelector('script[src*="testimonials-widget"]')

  if (currentScript && currentScript.getAttribute("username")) {
    config.username = currentScript.getAttribute("username")
  }

  const createCarouselStyles = function () {
    const styleEl = document.createElement("style")
    styleEl.textContent = `
          .testimonials-carousel-container {
            position: relative;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            overflow: hidden;
            padding: 20px 0;
            box-sizing: border-box;
          }
          
          .testimonials-carousel-track {
            display: flex;
            transition: transform 0.5s ease;
          }
          
          .testimonials-carousel-card {
            flex: 0 0 300px;
            margin: 0 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            background-color: white;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .testimonials-carousel-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          }
          
          .lazydev-card-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
            display: block;
            margin: 20px auto 0;
            border: 3px solid #f0f0f0;
          }
          
          .lazydev-card-content {
            padding: 10px 20px 20px;
            text-align: center;
          }
          
          .lazydev-card-name {
            margin: 0 0 10px;
            font-size: 20px;
            font-weight: bold;
            color: #333;
          }
          
          .lazydev-card-text {
            margin: 0;
            color: #666;
            line-height: 1.5;
            font-size: 14px;
          }
          
          .testimonials-carousel-nav {
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 50%;
            left: 10px;
            right: 10px;
            transform: translateY(-50%);
            z-index: 10;
          }
          
          .lazydev-nav-button {
            background-color: rgba(255,255,255,0.7);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: background-color 0.3s ease;
          }
          
          .lazydev-nav-button:hover {
            background-color: rgba(255,255,255,0.9);
          }
          
          .lazydev-dots-container {
            display: flex;
            justify-content: center;
            margin-top: 15px;
          }
          
          .lazydev-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ccc;
            margin: 0 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          .lazydev-dot.active {
            background-color: #555;
          }
          
          .lazydev-loading {
            text-align: center;
            padding: 40px;
            color: #666;
          }
          
          .lazydev-error {
            text-align: center;
            padding: 40px;
            color: #e74c3c;
          }
          
          @media (max-width: 768px) {
            .testimonials-carousel-card {
              flex: 0 0 calc(100% - 30px);
            }
          }
        `
    return styleEl
  }

  const fetchTestimonials = async function () {
    try {
      const url = config.apiUrl.replace("one", config.username)
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Failed to fetch testimonials: ${response.status}`)
      }

      const data = await response.json()
      return data.data || []
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      throw error
    }
  }

  const createCarousel = function (testimonials) {
    const container = document.createElement("div")
    container.className = "testimonials-carousel-container"

    const track = document.createElement("div")
    track.className = "testimonials-carousel-track"

    testimonials.forEach((item) => {
      const card = document.createElement("div")
      card.className = "testimonials-carousel-card"

      const imageUrl = item.image || "/api/placeholder/200/200"

      card.innerHTML = `
            <img class="lazydev-card-image" src="${imageUrl}" alt="${item.name}">
            <div class="lazydev-card-content">
              <h3 class="lazydev-card-name">${item.name}</h3>
              <p class="lazydev-card-text">${item.message}</p>
            </div>
          `
      track.appendChild(card)
    })

    container.appendChild(track)

    const nav = document.createElement("div")
    nav.className = "testimonials-carousel-nav"

    const prevButton = document.createElement("button")
    prevButton.className = "lazydev-nav-button lazydev-prev"
    prevButton.innerHTML = "&#10094;"

    const nextButton = document.createElement("button")
    nextButton.className = "lazydev-nav-button lazydev-next"
    nextButton.innerHTML = "&#10095;"

    nav.appendChild(prevButton)
    nav.appendChild(nextButton)
    container.appendChild(nav)

    const dotsContainer = document.createElement("div")
    dotsContainer.className = "lazydev-dots-container"

    for (let i = 0; i < testimonials.length; i++) {
      const dot = document.createElement("div")
      dot.className = "lazydev-dot"
      if (i === 0) dot.className += " active"
      dot.dataset.index = i
      dotsContainer.appendChild(dot)
    }

    container.appendChild(dotsContainer)

    return container
  }

  const initCarousel = function (carousel, testimonials) {
    const track = carousel.querySelector(".testimonials-carousel-track")
    const cards = carousel.querySelectorAll(".testimonials-carousel-card")
    const prevButton = carousel.querySelector(".lazydev-prev")
    const nextButton = carousel.querySelector(".lazydev-next")
    const dots = carousel.querySelectorAll(".lazydev-dot")
    if (!cards.length) return

    let cardWidth = cards[0].offsetWidth + 30
    let currentIndex = 0
    let autoplayInterval

    testimonials.forEach((_, index) => {
      if (index < 2) {
        const lastCard = cards[cards.length - 1 - index].cloneNode(true)
        track.insertBefore(lastCard, track.firstChild)
      }
      if (index < 2) {
        const firstCard = cards[index].cloneNode(true)
        track.appendChild(firstCard)
      }
    })

    track.style.transform = `translateX(-${cardWidth * 2}px)`

    window.addEventListener("resize", () => {
      cardWidth = cards[0].offsetWidth + 30
      track.style.transform = `translateX(-${cardWidth * (currentIndex + 2)}px)`
    })

    const updateDots = (index) => {
      dots.forEach((dot) => dot.classList.remove("active"))
      const normalizedIndex =
        (index + testimonials.length) % testimonials.length
      dots[normalizedIndex].classList.add("active")
    }

    const moveTo = (index) => {
      currentIndex = index
      track.style.transition = "transform 0.5s ease"
      track.style.transform = `translateX(-${cardWidth * (index + 2)}px)`
      updateDots(index)
    }

    track.addEventListener("transitionend", () => {
      if (currentIndex < -1) {
        track.style.transition = "none"
        currentIndex = testimonials.length - 1
        track.style.transform = `translateX(-${
          cardWidth * (currentIndex + 2)
        }px)`
      } else if (currentIndex > testimonials.length - 2) {
        track.style.transition = "none"
        currentIndex = -2
        track.style.transform = `translateX(-${
          cardWidth * (currentIndex + 2)
        }px)`
      }
    })

    prevButton.addEventListener("click", () => {
      if (currentIndex > -2) {
        moveTo(currentIndex - 1)
      }
      resetAutoplay()
    })

    nextButton.addEventListener("click", () => {
      if (currentIndex < testimonials.length - 1) {
        moveTo(currentIndex + 1)
      }
      resetAutoplay()
    })

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        moveTo(index - 2)
        resetAutoplay()
      })
    })

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        if (currentIndex < testimonials.length - 1) {
          moveTo(currentIndex + 1)
        }
      }, 5000)
    }

    const resetAutoplay = () => {
      clearInterval(autoplayInterval)
      startAutoplay()
    }

    startAutoplay()

    carousel.addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval)
    })

    carousel.addEventListener("mouseleave", () => {
      startAutoplay()
    })
  }

  // Show loading state
  const showLoading = function (container) {
    const loadingElement = document.createElement("div")
    loadingElement.className = "lazydev-loading"
    loadingElement.textContent = "Loading testimonials..."
    container.appendChild(loadingElement)
    return loadingElement
  }

  const showError = function (container, message) {
    const errorElement = document.createElement("div")
    errorElement.className = "lazydev-error"
    errorElement.textContent = `Error: ${message}`
    container.appendChild(errorElement)
    return errorElement
  }

  const initWidget = async function () {
    const containers = document.querySelectorAll(config.carouselSelector)

    document.head.appendChild(createCarouselStyles())

    if (containers.length > 0) {
      for (const container of containers) {
        try {
          const containerUsername =
            container.dataset.username || config.username

          if (containerUsername) {
            config.username = containerUsername
          }

          const loadingElement = showLoading(container)

          const testimonials = await fetchTestimonials()

          container.removeChild(loadingElement)

          if (testimonials && testimonials.length > 0) {
            const carousel = createCarousel(testimonials)
            container.appendChild(carousel)

            setTimeout(() => {
              initCarousel(carousel, testimonials)
            }, 100)
          } else {
            showError(container, "No testimonials found")
          }
        } catch (error) {
          const loadingElement = container.querySelector(".lazydev-loading")
          if (loadingElement) {
            container.removeChild(loadingElement)
          }

          showError(container, error.message || "Failed to load testimonials")
        }
      }
    } else {
      const currentScript =
        document.currentScript ||
        document.querySelector('script[src*="testimonials-widget"]')

      const container = document.createElement("div")
      container.className = "testimonials-carousel-container"
      currentScript.parentNode.insertBefore(container, currentScript)

      try {
        const loadingElement = showLoading(container)

        const testimonials = await fetchTestimonials()

        container.removeChild(loadingElement)

        if (testimonials && testimonials.length > 0) {
          const carousel = createCarousel(testimonials)
          container.appendChild(carousel)
          setTimeout(() => {
            initCarousel(carousel, testimonials)
          }, 100)
        } else {
          showError(container, "No testimonials found")
        }
      } catch (error) {
        const loadingElement = container.querySelector(".lazydev-loading")
        if (loadingElement) {
          container.removeChild(loadingElement)
        }

        showError(container, error.message || "Failed to load testimonials")
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWidget)
  } else {
    initWidget()
  }
})()
