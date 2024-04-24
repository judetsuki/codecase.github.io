import * as funcs from '../tasks/q8/firstTask.js';
import { describe, expect, it, jest } from '@jest/globals';

describe("Tests", () => {
    it("test", () => {
        // Проверка, что helloWorld является функцией
        expect(typeof funcs.helloWorld).toBe('function');
        
        // Мокируем метод console.log
        const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
        
        // Вызов функции helloWorld и проверка ее возвращаемого значения
        const str = funcs.helloWorld();
        expect(str).toBe('Hello World');

        // Проверка, что переменная str была консоль-залогирована
        expect(consoleLog).toHaveBeenCalledWith('Hello World');
        
        // Восстанавливаем оригинальный console.log
        consoleLog.mockRestore();
    });
});
