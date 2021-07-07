let allMovies = [
    {
        name:"Inception",
        watched:"false"
    },
    {
        name:"kgf",
        watched:"false"
    }
]

let input = document.querySelector('#movie');
let root = document.querySelector('.root');

let elem = React.createElement;

function createUI(){
    // root.innerHTML = '';
    let newArr = allMovies.map((movie) => {
    let div = elem('div',{className:"movie-list"}, elem('input',{type:'checkbox',checked:movie.watched}),elem('h3',{},movie.name),elem('h4',{}, movie.watched ? 'watched' : 'notwatched'))
    
    return div;
    // div.classList.add('movie-list');
    // let input = document.createElement('input');
    // input.type = 'checkbox';
    // input.checked = movie.watched;
    // input.addEventListener('click', handleClick)
    // function handleClick(event){
    //     if(event.target.checked){
    //         movie.watched = 'true'
    //     } else{
    //         movie.watched = 'false'
    //     }
    // }
    // let h3 = document.createElement('h3');
    // h3.innerText = movie.name;
    // let h4 = document.createElement('h4');
    // if (movie.watched){
    //     h4.innerText = 'watched'
    // } else{
    //     h4.innertext = 'notwatched'
    // }

    // div.append(input,h3,h4);
   
    })

    ReactDOM.render(newArr,root)
}

function handleKey(event){
    event.preventDefault();
    if(event.keyCode === 13){
        console.log(event.target.value);
        let data = {
            name: event.target.value,
            watched: false
        }

        allMovies.push(data);
        createUI();
    }
}

input.addEventListener('keyup',handleKey);
createUI();