let moviesArr = [{
    name:"kgf",
    watched:false
},]

let input = document.querySelector('#movie');
let root = document.querySelector('.root');

function createUI(){
    root.innerHTML = '';
    moviesArr.forEach((m) => {
    let div = document.createElement('div');
    div.classList.add('.movie-list');
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.checked = m.watched;
    checkbox.addEventListener('click',handleCheck)
    function handleCheck(event){
        
    }
    let h3 = document.createElement('h3');
    h3.innerText = m.name;
    let h4 = document.createElement('h4');
    if(m.watched){
        h4.innerText = 'watched';
    } else{
        h4.innerText = "not watched";
    }
    div.append(checkbox,h3,h4);
    root.append(div);
    })
}

function handlekey(event){
    event.preventDefault();
    console.log(event.target.value);
    let data = {
        name:event.target.value,
        watched:false
    }

    moviesArr.push(data);
    createUI();
}


input.addEventListener('keyup',handlekey)