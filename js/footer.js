
function adjustIframeWidth() {
    var iframe = document.getElementById('footerIframe');
    var screenWidth = window.innerWidth;

    if (screenWidth <= 850) {  
        iframe.style.height = '450px';
    } else { 
        iframe.style.height = '200px';
    }
}

window.addEventListener('load', adjustIframeWidth);
window.addEventListener('resize', adjustIframeWidth);
