// импорт модуля fs
const fs = require('fs');

// чтение текущей папки 
const content = fs.readdirSync('./module');

// получить список файлов с расширением js
const result = content.filter((f)=> f.endsWith('.js'));

// запушить результаты в массив
const db = [];
db.push(...result);

// найти индекс файла и удалить этот файл из массива
const index = db.indexOf('index.js');
if (index !== -1) {
    db.splice(index, 1);
}
// экспорт 
module.exports = db;

