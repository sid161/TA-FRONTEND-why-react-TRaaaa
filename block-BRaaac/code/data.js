let li = document.createElement('li');
data.forEach((movie,i) => {
    let li = createElement('li',{},createElement('label',movie.name),createElement('button', {id:i},movie.watched ? 'Watched' : 'To watch'));
    let button = document.createElement('button');
    button.id = i;
    button.innerText = movie.watched ? 'Watched' : 'To watch'
    button.addEventListener('click',handleChange);
    let label = document.createElement('label');
    label.for = i;
    label.innerText = movie.name;

    li.append(label,button);
    rootElm.append(li);
})