
function Generate(min, max) {
   
    let btn = document.querySelector('button')
    let min_num = document.getElementById('min').value;
    let max_num = document.getElementById('max').value;

    let res;


    res = max_num * Math.random() + min_num;
    let res2 = Math.trunc(res);
    let p = document.querySelector('p').innerHTML = res2 ;
    
    return res2;
}
