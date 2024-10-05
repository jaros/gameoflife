import { expect, test } from "bun:test";
import { getCellState } from "./game";

test("underpopulation", () => {
    expect(getCellState([
        [1, 0],
        [1, 0]
    ], 0, 0)).toBe(0);
});

test("2 neighbors staying alive", () => {
    expect(getCellState([
        [1, 1],
        [1, 0]
    ], 0, 0)).toBe(1);
});

test("3 neighbors staying alive", () => {
    expect(getCellState([
        [1, 1],
        [1, 1]
    ], 0, 0)).toBe(1);
});

test("overpopulation", () => {
    expect(getCellState([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], 1, 1)).toBe(0);
});
