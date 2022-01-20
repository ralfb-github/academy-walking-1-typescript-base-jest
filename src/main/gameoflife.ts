export class GameOfLife {
    grid:boolean[][];
    constructor(length: number = 10){
        this.grid= this.initializeGrid(length)
    }
    initializeGrid(length: number){
       // return new Array(length).fill(new Array(length)).map((row: boolean[]) => row.fill(false))
        return [...new Array(length)].map(()=> {
            return [...new Array(length)].map(()=>false)
    })
    }
    changeCellState(row:number, col:number){
       const state = this.grid[row][col] 
       this.grid[row][col] = !state
    }
    generateNextIteration(){

    }
}