;(function () {
  const config = {
    username: "one",
    text: "Leave a feedback",
    btnSelector: "[data-testimonials-btn]",
    color: "blue",
    hover: "red",
  }

  const createWidget = async function () {
    const currentScript =
      document.currentScript ||
      document.querySelector('script[src*="widget.js"]')

    if (currentScript) {
      if (currentScript.getAttribute("username")) {
        config.username = currentScript.getAttribute("username")
      }
      if (currentScript.getAttribute("text")) {
        config.text = currentScript.getAttribute("text")
      }
      if (currentScript.getAttribute("color")) {
        config.color = currentScript.getAttribute("color")
      }
      if (currentScript.getAttribute("hover")) {
        config.hover = currentScript.getAttribute("hover")
      }
      if (currentScript.getAttribute("btnSelector")) {
        config.btnSelector = currentScript.getAttribute("btnSelector")
      }
    }

    const button = document.createElement("button")
    button.innerHTML = config.text
    button.style.padding = "10px 15px"
    button.style.backgroundColor = config.color
    button.style.color = "white"
    button.style.border = "none"
    button.style.borderRadius = "4px"
    button.style.cursor = "pointer"
    button.style.fontFamily = "Arial, sans-serif"

    button.onmouseover = function () {
      this.style.backgroundColor = config.hover
    }
    button.onmouseout = function () {
      this.style.backgroundColor = config.color
    }

    button.onclick = function () {
      window.open(
        `${process.env.APP_URL}/write-testimonial?username=${config.username}`,
        "_blank"
      )
    }

    // Try to find the custom container
    const customContainer = document.querySelector(config.btnSelector)

    if (customContainer) {
      // Make sure any existing content is cleared
      // customContainer.innerHTML = '';  // Uncomment if you want to clear existing content
      customContainer.appendChild(button)
      console.log("Button added to custom container:", config.btnSelector)
    } else {
      console.log("Custom container not found:", config.btnSelector)
      // Fallback to adding near the script or at body end
      if (currentScript && currentScript.parentNode) {
        currentScript.parentNode.insertBefore(button, currentScript)
        console.log("Button added near script tag")
      } else {
        // Position fixed in bottom left as last resort
        button.style.position = "fixed"
        button.style.bottom = "20px"
        button.style.left = "20px"
        button.style.zIndex = "9999"
        document.body.appendChild(button)
        console.log("Button added to body with fixed position")
      }
    }
  }

  // Ensure the DOM is fully loaded before trying to find elements
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget)
  } else {
    createWidget()
  }
})()
