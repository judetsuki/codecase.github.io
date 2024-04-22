import * as funcs from '../index.js';
import { describe, expect, it } from '@jest/globals';

describe("task1", () => {
    it('should work fine', () => {
        expect(funcs.square(2)).toBe(4);
    });
   
});

describe("task2", () => {
    it('should capitalize the string', () => {
        expect(funcs.capitalize('hello')).toBe('Hello');
    });
    it('shouldnt capitalize the string', () => {
        expect(funcs.capitalize(null)).toBeUndefined();
    })
});
describe("task3", () => {
        it('should work fine', () => {
            const children = [
                {
                    name: 'John',
                    age: 30
                },
                {
                    name: 'Jane',
                    age: 25
                },
                {
                    name: 'Bob',
                    age: 40
                },
                {
                    name: 'Alice',
                    age: 11
                },
                {
                    name: 'Mark',
                    age: 17
                },
            ];
            expect(funcs.getChildren(children)).toEqual(['Alice']);
    })
})