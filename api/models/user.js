'use strict';
const {
   Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         this.belongsTo(models.Role, {
            foreignKey: 'role_id'
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
      modelName: 'User',
   },
      (async () => {
         await sequelize.sync()
      })()
   );
   return User;
};