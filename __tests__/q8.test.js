import * as funcs from '../q8/tasks.js'
import { describe, expect, it, jest } from '@jest/globals'

describe('Hello World', () => {
    it('should work fine', () => {
        // Проверка, что helloWorld является функцией
        expect(typeof funcs.helloWorld).toBe('function')
        
        // Мокируем метод console.log
        const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {})
        
        // Вызов функции helloWorld и проверка ее возвращаемого значения
        const str = funcs.helloWorld()
        expect(str).toBe('Hello World')

        // Проверка, что переменная str была консоль-залогирована
        expect(consoleLog).toHaveBeenCalledWith('Hello World')
        
        // Восстанавливаем оригинальный console.log
        consoleLog.mockRestore()
    })
})
describe('switchItUp', () => {
    it('should work fine', () => {
        expect(funcs.switchItUp(0)).toBe('Zero')
        expect(funcs.switchItUp(1)).toBe('One')
        expect(funcs.switchItUp(2)).toBe('Two')
        expect(funcs.switchItUp(3)).toBe('Three')
        expect(funcs.switchItUp(4)).toBe('Four')
        expect(funcs.switchItUp(5)).toBe('Five')
        expect(funcs.switchItUp(6)).toBe('Six')
        expect(funcs.switchItUp(7)).toBe('Seven')
        expect(funcs.switchItUp(8)).toBe('Eight')
        expect(funcs.switchItUp(9)).toBe('Nine')
    })
})

describe('Capitalize', () => {
    it('should capitalize the string', () => {
        expect(funcs.capitalize('hello')).toBe('Hello')
    })
    it('shouldnt capitalize the string', () => {
        expect(funcs.capitalize(null)).toBeUndefined()
    })
})

describe('Square', () => {
    it('should work fine', () => {
        expect(funcs.square(2)).toBe(4)
    })
})


describe('getChildren', () => {
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
        ]
        expect(funcs.getChildren(children)).toEqual(['Alice'])
    })
})