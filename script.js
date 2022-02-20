let grid = [[0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0] ]


randomSpawn();
randomSpawn();


//The game 
document.querySelector('body').addEventListener('keydown', (e) => {

    switch(e.key){
        case 'ArrowUp':
            shiftUp();
            sumUp();
            shiftUp();
            break;
        case 'ArrowDown':
            shiftDown();
            sumDown();
            shiftDown();
            break;
        case 'ArrowLeft':
            shiftLeft();
            sumLeft();
            shiftLeft();
            break;
        case 'ArrowRight':
            shiftRight();
            sumRight();
            shiftRight();
            break;
    }
    
})

//functions for logic
function sumUp(){
    for(let col = 1; col <= 4; col++ ){    
        for(let row = 1; row <= 4; row++){
            if(grid[row][col] === grid[row+1][col]){

                grid[row][col] = (grid[row][col])*2
                grid[row+1][col] = 0;

            }
        }
    }
}
function shiftUp(){
    for(let col = 1; col <= 4; col++){
        for(let row = 1; row <= 4; row++){
            for(let pointer = row; pointer<= 4; pointer++){
                if(!grid[pointer][col]){
                    grid[pointer][col] = grid[pointer+1][col]
                    grid[pointer+1][col] = 0;
                }
            }
        }
    }
}

function sumDown(){
    for(let col = 1; col <= 4; col++ ){    
        for(let row = 4; row >= 1; row--){
            if(grid[row][col] === grid[row-1][col]){

                grid[row][col] = (grid[row][col])*2
                grid[row-1][col] = 0;

            }
        }
    }
}
function shiftDown(){
    for(let col = 1; col <= 4; col++){
        for(let row = 4; row >= 1; row--){
            for(let pointer = row; pointer >= 1; pointer--){
                if(!grid[pointer][col]){
                    grid[pointer][col] = grid[pointer-1][col]
                    grid[pointer-1][col] = 0;
                }
            }
        }
    }
}
function sumLeft(){
    for(let row = 1; row <= 4; row++ ){    
        for(let col = 1; col <= 4; col++){
            if(grid[row][col] === grid[row][col+1]){

                grid[row][col] = (grid[row][col])*2
                grid[row][col+1] = 0;

            }
        }
    }
}
function shiftLeft(){
    for(let row = 1; row <= 4; row++){
        for(let col = 1; col <= 4; col++){
            for(let pointer = col; pointer <= 4; pointer++){
                if(!grid[row][pointer]){
                    grid[row][pointer] = grid[row][pointer+1]
                    grid[row][pointer+1] = 0;
                }
            }
        }
    }
}
function sumRight(){
    for(let row = 1; row <= 4; row++ ){    
        for(let col = 4; col >= 1; col--){
            if(grid[row][col] === grid[row][col-1]){
                grid[row][col] = (grid[row][col])*2
                grid[row][col-1] = 0;
            }
        }
    }
}
function shiftRight(){
    for(let row = 1; row <= 4; row++){
        for(let col = 4; col >= 1; col--){
            for(let pointer = col; pointer >= 1; pointer--){
                if(!grid[row][pointer]){
                    grid[row][pointer] = grid[row][pointer-1]
                    grid[row][pointer-1] = 0;
                }
            }
        }
    }
}


function randomSpawn(){
    row = Math.floor(Math.random() * 4) + 1
    col = Math.floor(Math.random() * 4) + 1
    
    if(!grid[row][col]){
        grid[row][col] = 2;
        document.getElementById(`${row}-${col}`).innerHTML = 2;
        return;
    }
    randomSpawn();
}



