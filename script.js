const circle = document.querySelector('#circle');

const MousePosition = window.addEventListener('mousemove',(e)=>{
    let X = e.clientX ;
    let Y = e.clientY ;
    setTimeout(() => {
        circle.style.top = `${Y}px` ;
        circle.style.left = `${X}px` ;
    }, 100);
   
});

