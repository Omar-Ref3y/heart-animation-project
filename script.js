
const bodyEle = document.querySelector("Body")

bodyEle.addEventListener("mousemove", (event) => {
    const posX = event.offsetX;
    const posY = event.offsetY;
    const spanEle = document.createElement("span");
    spanEle.style.left = posX + "px"
    spanEle.style.top = posY + "px"
    bodyEle.appendChild(spanEle)
    const size=Math.random()*100;
    spanEle.style.height=size+"px"
    spanEle.style.width=size+"px"
    setTimeout(() => {
        spanEle.remove()
    }, 3000)
})