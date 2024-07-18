  function updateTime() {
            const timeElement = document.getElementById('time');
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        setInterval(updateTime, 1000);
        updateTime();




let flag = 0;

function controller(x){
  
  flag = flag + x;
  slideshow(flag);
  
}

slideshow(flag);




function slideshow(num){
let slides = document.getElementsByClassName('slide');


if(num == slides.length){
  flag = 0;
  num = 0;
  
}

if(num < 0){
  flag = slides.length-1;
  num = slides.length-1;
  
  
  
}
for(let y of slides){
  y.style.display = "none";
  
  
}

  


slides[num].style.display = "block";

  
}