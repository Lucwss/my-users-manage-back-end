'use strict';
const {
   Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      static associate(models) {
         this.belongsTo(models.Role, {
            foreignKey: 'role_id'
         })

         this.hasOne(models.UserData, {
            foreignKey: 'user_id'
         })
      }
   }
   User.init({
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: {
         type: DataTypes.STRING,
         unique: true,
         validate: {
            isEmail: {
               msg: 'Invalid type email sent'
            }
         }
      },
      role: DataTypes.STRING
   }, {
      sequelize,
      paranoid: true,
      modelName: 'User',
   },
      (async () => {
         await sequelize.sync()
      })()
   );
   return User;
};