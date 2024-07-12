const sql = require('mysql');

const db = sql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456'
});

//更新数据
// const sqlStrTwo = 'update my_schema.user SET age=?,name=?,phone=? where id=?';
// const user = { id: 2, name: 'Falin', age: 21, phone: '113xxxx0000' };
// db.query(sqlStrTwo, [user.age, user.name, user.phone, user.id], (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   if (result.affectedRows === 1) {
//     console.log('修改成功');
//   }
// });

//上面代码简写方式
// const sqlStrThree = 'update my_schema.user SET ? WHERE id=?';
// const user = { id: 3, name: 'Grace', age: 21, phone: '153xxxx0000' };
// db.query(sqlStrThree, [user, user.id], (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   if (result.affectedRows === 1) {
//     console.log('修改成功');
//   }
// });

//删除数据
// const sqlDelete = 'delete from my_schema.user where id=?';
// db.query(sqlDelete, 3, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   if (result.affectedRows === 1) {
//     console.log('删除成功');
//   }
// });

//查询数据
const sqlStr = 'select * from my_schema.user;';
db.query(sqlStr, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
