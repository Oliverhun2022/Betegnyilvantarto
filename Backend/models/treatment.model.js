module.exports = (sequelize, DataTypes, Model) => { 
    class Treatment extends Model {}

    Treatment.init(
      {
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        PatientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dateOfTreatment: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
      },
      {
        sequelize, 
        paranoid: true,
        deletedAt: 'softDelete',
        modelName: "Treatment", 
        tableName: "treatments",
      }
    );
  
    return Treatment;
}