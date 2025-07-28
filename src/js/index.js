export class ErrorRepository {
    constructor() {
        this.errorMap = new Map([
            [100, 'Общая ошибка системы'],
            [200, 'Ошибка ввода пользователя'],
            [300, 'Потеря соединения сети'],
            [400, 'Ошибка базы данных'],
            [500, 'Отказано в доступе']
        ]);
    }

    translate(code) {
        return this.errorMap.get(code) || 'Unknown error';
    }
}