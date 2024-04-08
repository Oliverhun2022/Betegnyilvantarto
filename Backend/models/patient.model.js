module.exports = (sequelize, DataTypes, Model) => {
  class Patient extends Model {}

  Patient.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "Vezetéknév csak az abc betűit tartalmazhatják",
          },
          len: {
            args: [2, 20],
            msg: "Vezetéknévnek 2-20 karakter hosszúnak kell lennie",
          }
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "A keresztnévnek 2-20 karakter hosszónak kell lennie",
          },
          len: {
            args: [2, 20],
            msg: "A keresztnévnek 2-20 karakter hosszúnak kell lennie",
          }
        },
      },
      fullName:{
        type: DataTypes.VIRTUAL,
        get(){
          return `${this.firstName} ${this.lastName}`;
        },
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idCardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Érvénytelen email formátum",
          },
        },
      },
      identifierType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tajNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type:DataTypes.DATEONLY,
        allowNull: false,
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      drugAllergy: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      allergy: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      chronicIllness: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      constantMedication: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      diagnosis: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize, 
      paranoid: true,
      deletedAt: 'softDelete',
      modelName: "Patient", 
      tableName: "patients",
    }
  );

  return Patient;
};
