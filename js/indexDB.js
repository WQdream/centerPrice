// 创建数据库
// import Dexie from 'dexie'
// 创建表
// import type { Table } from 'dexie'
function openIDB() {
  const db = new Dexie('price');
  db.version(1).stores({
    centerPrice: 'id,product_name,price',
  });

  //   let users: Table<StoreLevelData>
  let centerPrice = ''
  centerPrice = db.table('centerPrice')
}



// 添加数据
function addDb(data) {
  db.centerPrice.add(data)
}

//删除

//修改

//查询

