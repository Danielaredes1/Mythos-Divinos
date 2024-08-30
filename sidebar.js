var header = document.getElementById('header');
var nav = document.getElementById('pags');
var content = document.getElementById('titulo');
var showSidebar = false;

function toggleSidebar() 
{
    showSidebar = !showSidebar;
    if (showSidebar) 
    {
        nav.style.marginLeft = '0vw';
        nav.style.animationName = 'sidebar';
        
    } 
    else 
    {
        nav.style.marginLeft = '100vw';
        nav.style.animationName = '';
    }
}

function closeSidebar() {
    if(showSidebar) {
        toggleSidebar();
    }
}
