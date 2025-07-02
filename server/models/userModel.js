export default (sequelize, DataTypes)=>{
    const User=sequelize.define('User',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cartData: {
             type: DataTypes.JSONB,    
             allowNull: true,
             defaultValue: {}           
        }

    })
    return User;
}