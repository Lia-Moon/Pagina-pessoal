function myFunction() {
    var element = document.body;
    element.classList.toggle("light__dark__mode");
    //Salva seleção no localStorage
    if (element.classList.contains("light__dark__mode")) {
        localStorage.setItem('selectedLightDarkMode', 'dark');
    } else {
        localStorage.setItem('selectedLightDarkMode', 'light');
    }
}

var selectedMode = localStorage.getItem('selectedLightDarkMode'); //Verifica se o dark mode está selecionado (se possui a class light__dark__mode)
if(selectedMode === 'dark') {
  var element = document.body;
  element.classList.add("light__dark__mode");
} else {
  var element = document.body;
  element.classList.remove("light__dark__mode");
}

const sun = document.querySelector(".light__dark__mode__switch__option.sun");
const moon = document.querySelector(".light__dark__mode__switch__option.moon");

const toggleSwitch = document.querySelector('.botoes__dark__lang--switch input[type="checkbox"]'); // posso usar toggleSwitch.checked depois para verificar se foi selecionado

// Verifica se já existe localStorage para selectedLightDarkMode
if(localStorage.getItem('selectedLightDarkMode') === 'dark') {
  sun.classList.remove("visible");
  moon.classList.add("visible");
  toggleSwitch.checked = true;
} else {
  sun.classList.add("visible");
  moon.classList.remove("visible");
  toggleSwitch.checked = false;
}

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
function selectText() {
  var toggleLanguageSwitch = document.getElementById('lang-switch');
  var lang = toggleLanguageSwitch.checked ? 'en' : 'pt';

  switch (lang) {
    case 'en':
      $('[lang]').hide();
      $('[lang="en"]').show();
      $('[lang="pt"]').hide();
      break;
    case 'pt':
      $('[lang]').hide();
      $('[lang="en"]').hide();
      $('[lang="pt"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
      $('[lang="pt"]').hide();
  }

  //Salva seleção no localStorage
  localStorage.setItem('selectedLanguage', lang); //Criei a string selectedLanguage e defini o valor 'lang' para a string
};

document.addEventListener('DOMContentLoaded', function() {
  var toggleLanguageSwitch = document.getElementById('lang-switch');
  
  //Verifica se existe seleção anterior ao carregar a página
  var selectedLanguage = localStorage.getItem('selectedLanguage');
  
  if(selectedLanguage) {
    toggleLanguageSwitch.checked = selectedLanguage === 'en';    
  } else {
    selectedLanguage = toggleLanguageSwitch.checked ? 'en' : 'pt';
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }

  // Disparar o evento para definir o estado inicial do idioma
  selectText();
});

// Definir qual ícone fica visível
const portugueseButton = document.querySelector(".language__switch__option.portuguese");
const englishButton = document.querySelector(".language__switch__option.english");

const toggleLanguageSwitch = document.querySelector('.botoes__dark__lang--switch.language input[type="checkbox"]'); // posso usar toggleSwitch.checked depois para verificar se foi selecionado

// Verifica se já existe localStorage para selectedLanguage
if(localStorage.getItem('selectedLanguage') == 'en') {
  portugueseButton.classList.remove("visible");
  englishButton.classList.add("visible");
  toggleLanguageSwitch.checked;
} else {
  portugueseButton.classList.add("visible");
  englishButton.classList.remove("visible");
}

//Verifica se há clique no botão
toggleLanguageSwitch.addEventListener("click", () => {
  if(toggleLanguageSwitch.checked) {
      portugueseButton.classList.remove("visible");
      englishButton.classList.add("visible");
  } else {
      portugueseButton.classList.add("visible");
      englishButton.classList.remove("visible");
  }
})
