flag = true;
document.querySelector('#add_remove').addEventListener('click',function () {
    if(flag){ 
        chnge('Friend','green','Remove','black');
        let heart_icon = document.createElement('i')
        heart_icon.className = 'ri-heart-line';//creating a new element
        document.querySelector('.nav').appendChild(heart_icon);//appending it into the nav
        heart();
    }
    else {
        chnge('Stranger','red','Add Friend','cadetblue');
        document.querySelector('.nav i').remove();
    };

    flag = !flag;
})

function chnge(status,color,action,bgcolor) {
    document.querySelector('.panel h5').innerHTML = status;
    document.querySelector('.panel h5').style.color = color;
    document.querySelector('#add_remove').innerHTML = action;
    document.querySelector('#add_remove').style.backgroundColor = bgcolor;
}

function heart(){
    let heart_flag = true;
    let heart_icon = document.querySelector('.nav i');
    document.querySelector('.nav i').addEventListener('click',function () {
        if(heart_flag){
            heart_icon.className = `ri-heart-fill`;
            heart_icon.style.color = `red`;
        }
        else{
            heart_icon.className = `ri-heart-line`;
            heart_icon.style.color = `black`;
        }
        heart_flag = !heart_flag;
    })

}


document.querySelector('.main').addEventListener('mousemove',function (dets) {
    document.querySelector('.cursor').style.left = dets.x+'px';
    document.querySelector('.cursor').style.top = dets.y+'px';
    console.log('hi');
});