'use strict';
const {
   Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class UserData extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         this.belongsTo(models.User, {
            foreignKey: 'user_id'
         })
      }
   }
   UserData.init({
      cpf: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      gender: DataTypes.STRING
   }, {
      sequelize,
      modelName: 'UserData',
   });
   return UserData;
};