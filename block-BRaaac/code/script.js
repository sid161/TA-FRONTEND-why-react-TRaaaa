let input = document.querySelector('#movie');
let rootElm = document.querySelector('.root');

let allMovies = [{
    movie:"KGF",
    watched:false,
},
{ 
    movie:"Tarzan",
    watched:true

},]

function elm(type,attr = {},...children){
    let element = document.createElement('type');
    for(let key in attr){
        if(key.startsWith ("data-")){
            element.setAttribute(key,attr[key])
        } else{
            elm[key] === attr[key]
        }
    }
    children.forEach((child) => {
        if(typeof child === "object"){
            element.append(child)
        }
        if(typeof child === "string"){
            let node = document.createTextNode(child);
            element.append(node);
        }
    })
}


function createUI(){
    rootElm.innerHTML = '';
    allMovies.forEach((movie) => {

        let div = elm("li",{className:"movie-block"}, elm("h4",{},),)
        let div = document.createElement('div');
        div.classList.add('movie-block');
        let h4 = document.createElement('h4');
        if(movie.watched){
            h4.innerText = "watched"
        } else{
            h4.innerText = "to watch"
        }
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = movie.watched;
        input.addEventListener('click',handleCheck)
        function handleCheck(event){
            if(movie.watched){
                
            } else{
                movie.watched === false;
            }
        }
        let h3 = document.createElement('h3');
        h3.innerText = movie.name;
        
        div.append(h4,input,h3)
        rootElm.append(div);
    })
}

function handleKey(event){
    event.preventDefault();
    if(event.keyCode === 13){
        let data = {
            name:event.target.value,
            watched:event.target.checked
        };

        allMovies.push(data);
        createUI()

    }
   
}


input.addEventListener('keyup',handleKey)
createUI();