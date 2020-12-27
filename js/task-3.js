// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
class Storage {
    constructor(array) {
        this.array = array;
    }
    getItems() {
        return this.array;
    }
    addItem(item) {
        if (this.array.includes(item)) {
            return this.array;
        } this.array.push(item);
    }
    removeItem(item) {
        for (const element of this.array) {
            if (element === item) {
                const elementIndex = this.array.indexOf(element);
                this.array.splice(elementIndex, 1);
            } 
        } 
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.getItems()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.getItems()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Дроид');
console.table(storage.getItems()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор"]