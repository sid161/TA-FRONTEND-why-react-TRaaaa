let input = document.querySelector('#movie');
let rootElm = document.querySelector('.movies__list');


let allMovies = [{
    name:"Inception",
    watched: false
},
{
    name:"kgf",
    watched: true
},
]

input.addEventListener('keyup',handlekey)
function handlekey(event){
    if(event.keyCode === 13){
        allMovies.push({                         // whenever change data createUI called
            name:event.target.value,
            watched:false
        });

        event.target.value = '';
        createMovieUI(allMovies,rootElm);
    }
}

function handleChange(event){
    let id = event.target.id;

    allMovies[id].watched = !allMovies[id];
    createMovieUI(allMovies,rootElm);
}

function createMovieUI(data,root){
      root.innerHTML = '';
      data.forEach((movie,i) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        
        button.id = i;
        button.innerText = movie.watched ? "watched" : "to watch";
        button.addEventListener('click',handleChange)
        let label = document.createElement('label');
        label.for = i;
        label.innerText = movie.name;
        li.append(label,button)

        rootElm.append(li)
    })
}

createMovieUI(allMovies,rootElm);



