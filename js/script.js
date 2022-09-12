// Modal Image Gallery
function    onClick(element)    {
    document.getElementById("img01").src    =   element.src;
        document.getElementById("modal01").style.display    =   "block";
    var captionText =   document.getElementById("caption");
        captionText.innerHTML   =   element.alt;
}


// 13.1 - Alternancia entre mostrar e ocultar a barra lateral ao clicar no icone de menu
var mySidebar   =   document.getElementById(    "mySidebar" );

function    botaoAbre() {
    if  (   mySidebar.style.display    ===  'block' )   {
        mySidebar.style.display =   'none'  ;
    }   else    {
        mySidebar.style.display =   'block';
    }
}

// 13.2 - Feche a barra lateral com o botão Fechar
function    botaoFechar()   {
    mySidebar.style.display =   "none"  ;
}
