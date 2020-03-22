const container = document.querySelector('.container');

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

//makeGrid(25);
makeGrid();