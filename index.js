let animate=document.querySelectorAll('.animate')


let accessText = document.getElementById('accessText');
let lists = document.getElementById('lists');
let headP = document.getElementById('headP');
let dowloands = document.getElementById('download')
let describeP = document.getElementById('describeP')
let lastSectionOfMain = document.getElementById('lastSectionOfMain')
let right = document.getElementById('right')
        

function firstly(){
    lists.classList.add('show');
    headP.classList.add('show');
    lastSectionOfMain.classList.add('show'); 
}

function secondly(){
    accessText.classList.add('show');
    dowloands.classList.add('show');
    describeP.classList.add('show');
    right.classList.add('show');
}

setTimeout(firstly,150);
setTimeout(secondly,300)


window.onscroll = () => {
    animate.forEach(sec=>{
        let top = window.scrollY+600;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight+1000;

        if (top>= offset && top<offset+height){
            sec.classList.add('show')
        } else{
            sec.classList.remove('show')
        }
    })
}

/*
    O     
   <|>
   / \

*/