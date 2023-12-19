const start = document.getElementById('start');
const end = document.getElementById('stop');
const faster = document.getElementById('faster');
let bgc = document.querySelector('body');
let go = '';

const random_color = () => {

    const hexcode = '0123456789ABCDEF';
    let color = '#';
    
    for(let i=0; i<6; i++){
        color += hexcode[Math.floor(Math.random()*16)];
    }
    bgc.style.backgroundColor = color;
        return color;

}

start.addEventListener('click' , () => {
   go = setInterval(random_color , 300)
})

end.addEventListener('click' , () => {    clearInterval(go)
    bgc.style.backgroundColor = '#fff';


})