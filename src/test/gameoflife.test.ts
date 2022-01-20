import {GameOfLife} from "../main/gameoflife";

describe('game of life', () => {
    
    it("game of life is initialized", () => {
        const game = new GameOfLife()
        expect(game).toBeDefined();
    })
    it("there should be a grid", () => {
        const game = new GameOfLife()
        expect(Array.isArray(game.grid)).toBe(true);
    })
    it("should be initialized with correct row count", () => {
        const game = new GameOfLife(10)
        expect(game.grid.length).toBe(10);
    })
    it("should be initialized with correct column count", () => {
        const game = new GameOfLife(10)
        const areRowsOfSameLength = game.grid.every((row)=> row.length === 10)
        expect(areRowsOfSameLength).toBe(true)
    })
    it('should initialize the grid fulfilling every cell as killed', () => {
        const game = new GameOfLife(10)
        const allCellsDead  = game.grid.map(row => row.every(cell => !cell)).every(rowAllDead => rowAllDead)
        expect(allCellsDead).toBe(true)
    })

    it('should be able to turn a cell alive', () => {
        const game = new GameOfLife(4)
        game.changeCellState(2,2)
        expect(game.grid[2][2]).toBe(true)
    })
    it('should be able to turn a cell dead', () => {
        const game = new GameOfLife(4)
        game.changeCellState(1,2)
        game.changeCellState(1,2)
        expect(game.grid[1][2]).toBe(false)
    })
    it('should retuned the same grid in the next iteration when all cells are dead', () => {
        const game = new GameOfLife(4)
        const expectedGrid = game.grid
        game.generateNextIteration()
        expect(game.grid).toEqual(expectedGrid)
    })

     it('should return a grid where all cells are dead in the next iteration when only one cell is alive', () => {
        const game = new GameOfLife(4)
        const expectedGrid = [...game.grid.map(row => [...row] )]
        game.changeCellState(1,2)
        game.generateNextIteration()
        expect(game.grid).toEqual(expectedGrid)
    })
})