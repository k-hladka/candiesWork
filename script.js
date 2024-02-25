let rightArrow = document.getElementsByClassName('right_arrow')[0];
let leftArrow = document.getElementsByClassName('left_arrow')[0];

let slider = document.getElementsByClassName('choco')[0];
rightArrow.addEventListener('click', function (){
    slider.style.backgroundImage = `url('img/candiesPhoto.jpg')`;
});
leftArrow.addEventListener('click', function (){
    slider.style.backgroundImage=`url('img/choco.png')`;
})
