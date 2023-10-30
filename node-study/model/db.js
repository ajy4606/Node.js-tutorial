import { DataTypes, Sequelize  } from "sequelize";
import path from "path";
const __dirname = path.resolve(); //상대주소
var sequelize;

sequelize = new Sequelize("class101", "root", "1234", {
    host:"localhost",
    port:3306,
    dialect: "mysql",
    timezone: "+00:00",
    define: {
        charset:"utf8mb4",
        collate:"utf8mb4_general_ci",
        timestamps:true, //sysdate
        freezeTableName:true // 이름을 마음대로 만들겠다
    }
}); //mysql에서 생성한 class101 db

import { user1 } from "./users.js";

var db = {};
db.users = user1(sequelize, DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//module.exports = db;
export default db;
