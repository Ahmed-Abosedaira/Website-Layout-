// nav bar functionality

$("#show").click(function(){
     $("#nav-bar").show(200);
    });
$("#hide").click(function(){
     $("#nav-bar").hide(200);
    });
$("li").click(function(){
    $("#nav-bar").hide(200);
  });
  
//////////////////////////////////////////////////////

function showLanding(){
    
    document.getElementsByTagName("main")[0].removeAttribute("class");
    document.getElementsByTagName("main")[0].setAttribute("class", "landing");

    document.getElementsByTagName("main")[1].removeAttribute("class");
    document.getElementsByTagName("main")[1].setAttribute("class", "section");

    document.getElementsByTagName("main")[2].removeAttribute("class");
    document.getElementsByTagName("main")[2].setAttribute("class", "section");

    document.getElementsByTagName("main")[3].removeAttribute("class");
    document.getElementsByTagName("main")[3].setAttribute("class", "section");

    document.getElementsByTagName("main")[4].removeAttribute("class");
    document.getElementsByTagName("main")[4].setAttribute("class", "section");

    document.getElementsByTagName("li")[0].removeAttribute("class");
    document.getElementsByTagName("li")[0].setAttribute("class", "active");

    document.getElementsByTagName("li")[1].removeAttribute("class");

    document.getElementsByTagName("li")[2].removeAttribute("class");

    document.getElementsByTagName("li")[3].removeAttribute("class");

    document.getElementsByTagName("li")[4].removeAttribute("class");
};
function showServices(){
    document.getElementsByTagName("main")[0].removeAttribute("class");
    document.getElementsByTagName("main")[0].setAttribute("class", "section");

    document.getElementsByTagName("main")[1].removeAttribute("class");
    document.getElementsByTagName("main")[1].setAttribute("class", "services");

    document.getElementsByTagName("main")[2].removeAttribute("class");
    document.getElementsByTagName("main")[2].setAttribute("class", "section");

    document.getElementsByTagName("main")[3].removeAttribute("class");
    document.getElementsByTagName("main")[3].setAttribute("class", "section");

    document.getElementsByTagName("main")[4].removeAttribute("class");
    document.getElementsByTagName("main")[4].setAttribute("class", "section");

    document.getElementsByTagName("li")[0].removeAttribute("class");

    document.getElementsByTagName("li")[1].removeAttribute("class");
    document.getElementsByTagName("li")[1].setAttribute("class", "active");

    document.getElementsByTagName("li")[2].removeAttribute("class");

    document.getElementsByTagName("li")[3].removeAttribute("class");

    document.getElementsByTagName("li")[4].removeAttribute("class");
}
function showPortfolio(){
    document.getElementsByTagName("main")[0].removeAttribute("class");
    document.getElementsByTagName("main")[0].setAttribute("class", "section");

    document.getElementsByTagName("main")[1].removeAttribute("class");
    document.getElementsByTagName("main")[1].setAttribute("class", "section");

    document.getElementsByTagName("main")[2].removeAttribute("class");
    document.getElementsByTagName("main")[2].setAttribute("class", "portfolio");

    document.getElementsByTagName("main")[3].removeAttribute("class");
    document.getElementsByTagName("main")[3].setAttribute("class", "section");

    document.getElementsByTagName("main")[4].removeAttribute("class");
    document.getElementsByTagName("main")[4].setAttribute("class", "section");

    document.getElementsByTagName("li")[0].removeAttribute("class");

    document.getElementsByTagName("li")[1].removeAttribute("class");

    document.getElementsByTagName("li")[2].removeAttribute("class");
    document.getElementsByTagName("li")[2].setAttribute("class", "active");

    document.getElementsByTagName("li")[3].removeAttribute("class");

    document.getElementsByTagName("li")[4].removeAttribute("class");
}
function showAbout(){
    document.getElementsByTagName("main")[0].removeAttribute("class");
    document.getElementsByTagName("main")[0].setAttribute("class", "section");

    document.getElementsByTagName("main")[1].removeAttribute("class");
    document.getElementsByTagName("main")[1].setAttribute("class", "section");

    document.getElementsByTagName("main")[2].removeAttribute("class");
    document.getElementsByTagName("main")[2].setAttribute("class", "section");

    document.getElementsByTagName("main")[3].removeAttribute("class");
    document.getElementsByTagName("main")[3].setAttribute("class", "about");

    document.getElementsByTagName("main")[4].removeAttribute("class");
    document.getElementsByTagName("main")[4].setAttribute("class", "section");

    document.getElementsByTagName("li")[0].removeAttribute("class");

    document.getElementsByTagName("li")[1].removeAttribute("class");

    document.getElementsByTagName("li")[2].removeAttribute("class");

    document.getElementsByTagName("li")[3].removeAttribute("class");
    document.getElementsByTagName("li")[3].setAttribute("class", "active");

    document.getElementsByTagName("li")[4].removeAttribute("class");
}
function showContact(){
    document.getElementsByTagName("main")[0].removeAttribute("class");
    document.getElementsByTagName("main")[0].setAttribute("class", "section");

    document.getElementsByTagName("main")[1].removeAttribute("class");
    document.getElementsByTagName("main")[1].setAttribute("class", "section");

    document.getElementsByTagName("main")[2].removeAttribute("class");
    document.getElementsByTagName("main")[2].setAttribute("class", "section");

    document.getElementsByTagName("main")[3].removeAttribute("class");
    document.getElementsByTagName("main")[3].setAttribute("class", "section");

    document.getElementsByTagName("main")[4].removeAttribute("class");
    document.getElementsByTagName("main")[4].setAttribute("class", "contact");

    document.getElementsByTagName("li")[0].removeAttribute("class");

    document.getElementsByTagName("li")[1].removeAttribute("class");

    document.getElementsByTagName("li")[2].removeAttribute("class");

    document.getElementsByTagName("li")[3].removeAttribute("class");

    document.getElementsByTagName("li")[4].removeAttribute("class");
    document.getElementsByTagName("li")[4].setAttribute("class", "active");
}