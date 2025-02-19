/**
 * adjacent cells including diagonals: [y, x]
 */
const neighbors = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], /* self */[0, 1],
    [1, -1], [1, 0], [1, 1]
];

export function getCellState(grid: number[][], x: number, y: number): number {
    let count = 0;
    const currentState = grid[y][x];
    for (let [dy, dx] of neighbors) {
        let ny = dy + y;
        let nx = dx + x;
        if (ny >= 0 && nx >= 0 && ny < grid.length && nx < grid.length && grid[ny][nx]) {
            count++;
        }
    }
    if (currentState === 1) {
        return count >= 2 && count <= 3 ? 1 : 0;
    }
    return count === 3 ? 1 : 0; 
}
