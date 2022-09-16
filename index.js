//импорт
const db = require('./module/index');
//вывод массива 
console.log('массив',db);

const users = require('./seed-users')
const bcrypt = require('bcrypt');

//function hashFunction(data){
//    const hashData = data.map((el)=>bcrypt.hashSync(el.passwordHash,10))
//    return hashData    
//}
//console.log(hashFunction(users));

const hash1 = bcrypt.hashSync(users[0].passwordHash,10);
const hash2 = bcrypt.hashSync(users[1].passwordHash,10);
const hash3 = bcrypt.hashSync(users[2].passwordHash,10);

console.log({hash1, hash2, hash3})
