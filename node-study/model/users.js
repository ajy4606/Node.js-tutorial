export function user1 (sequelize, DataTypes){
    return sequelize.define('users', {
        idx: {
            type:DataTypes.INTEGER,
            autoIncrement:true, //식별값 primary key.nextval
            primaryKey:true,
            allowNull:false
        },
        user_id : {
            type:DataTypes.STRING(250)
        }
    })
}