import { ErrorRepository } from '../index.js';

describe('ErrorRepository tests', () => {
    let repository;

    beforeEach(() => {
        repository = new ErrorRepository();
    });

    test('Должен вернуть правильное сообщение для существующего кода ошибки', () => {
        const message = repository.translate(200); 
        expect(message).toBe('Ошибка ввода пользователя');
    });

    test('Должен вернуть "Unknown error" для несуществующего кода ошибки', () => {
        const unknownMessage = repository.translate(800); 
        expect(unknownMessage).toBe('Unknown error');
    });
});