function myFunction() {
    var element = document.body;
    element.classList.toggle("light__dark__mode");  
}

const sun = document.querySelector(".light__dark__mode--switch--sun");
const moon = document.querySelector(".light__dark__mode--switch--moon");

const toggleSwitch = document.querySelector('.botoes__dark__lang--switch input[type="checkbox"]'); // posso usar toggleSwitch.checked depois para verificar se foi selecionado

toggleSwitch.addEventListener("click", () => {
    if(toggleSwitch.checked) {
        sun.classList.remove("visible");
        moon.classList.add("visible");
    } else {
        sun.classList.add("visible");
        moon.classList.remove("visible");
    }
})