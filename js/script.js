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

// Função relacionada a mudança de linguagem
window.selectText = function() {
    var toggleLanguageSwitch = document.getElementById('lang-switch');
    var lang = toggleLanguageSwitch.checked ? 'en' : 'pt';

    switch (lang) {
      case 'en':
        $('[lang]').hide();
        $('[lang="en"]').show();
        break;
      case 'pt':
        $('[lang]').hide();
        $('[lang="pt"]').show();
        break;
      default:
        $('[lang]').hide();
        $('[lang="en"]').show();
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var toggleLanguageSwitch = document.getElementById('lang-switch');
    
    toggleLanguageSwitch.addEventListener('click', window.selectText);
    
    // Disparar o evento para definir o estado inicial do idioma
    window.selectText();
  });


const portugueseButton = document.querySelector(".language__switch__option.portuguese");
const englishButton = document.querySelector(".language__switch__option.english");

const toggleLanguageSwitch = document.querySelector('.botoes__dark__lang--switch.language input[type="checkbox"]'); // posso usar toggleSwitch.checked depois para verificar se foi selecionado


toggleLanguageSwitch.addEventListener("click", () => {
  if(toggleLanguageSwitch.checked) {
      portugueseButton.classList.remove("visible");
      englishButton.classList.add("visible");
  } else {
      portugueseButton.classList.add("visible");
      englishButton.classList.remove("visible");
  }
})