const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

/*create a function makeGrid(size): size is number of squares per side
    have a for loop that create div belongs to class "grid-item"
                        append the grid -item div to the container div

*/

function makeGrid(size = 16) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);

    let squares = size*size;

    for (let i = 0; i < squares; i++) 
    {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }

}

function resetSize() {
    let size = prompt("Enter you new sketch size: ");

    //remove old sketch
    const divs = document.querySelectorAll('.gridItem');
    divs.forEach(div => {
        container.removeChild(div);         
    });

    //make new sketch
    if (isNaN(size) || size < 0) 
    {
        makeGrid();
    }

    else 
    {
        makeGrid(size);
    }
    changeColor();
}

function changeColor(){
    const divs = document.querySelectorAll('.gridItem');
    divs.forEach(div => {
        div.addEventListener("mouseover", (e) => {
            div.classList.add('changeColor');
            console.log(div);
        })
    });
}

//========================================
btn.addEventListener("click", resetSize);
makeGrid();
changeColor();