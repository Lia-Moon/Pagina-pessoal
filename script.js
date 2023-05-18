function myFunction() {
    var element = document.body;
    element.classList.toggle("light__dark__mode");

    //var element = document.getElementById("logo-nav-nome--span");
    //element.classList.toggle("logo-nav-nome--span");
    //document.getElementById("logo-nav-nome--span").classList.remove("logo-nav-nome"); -> FUNCIONOU
    document.getElementById("id__logo-nav-nome").classList = "logo-nav-nome light__dark__mode";
}

console.log(document.getElementById("id__logo-nav-nome").classList);