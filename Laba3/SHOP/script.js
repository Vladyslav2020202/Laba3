for(let li of tree.querySelectorAll('li')){
    let span = document.createElement('span');
    span.classList.add('show');
    li.propend(span);
    span.append(span.nextSibling)
}