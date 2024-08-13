flag = true;
document.querySelector('#add_remove').addEventListener('click',function () {
    if(flag) chnge('Friend','green','Remove','black');    
    else chnge('Stranger','red','Add Friend','cadetblue');
    function chnge(status,color,action,bgcolor) {
        document.querySelector('.panel h5').innerHTML = status;
        document.querySelector('.panel h5').style.color = color;
        document.querySelector('#add_remove').innerHTML = action;
        document.querySelector('#add_remove').style.backgroundColor = bgcolor;
    }
    flag = !flag;
})