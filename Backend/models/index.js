const {Sequelize, DataTypes, Model} = require('sequelize');
require('dotenv').config();

const sequelize= new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host:process.env.DB_HOST,
    logging: true, 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialect:'mysql'
});

try{
    sequelize.authenticate();
    console.log('💾 Adatbáziskapcsolat kiépítve.');
}catch (error){
    console.error('🐞Sikertelen a kapcsolat kiépítése az adatbázissal:', error);
}

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.user = require('./user.model')(sequelize,DataTypes,Model);
db.treatment = require('./treatment.model')(sequelize,DataTypes,Model);
db.patient = require('./patient.model')(sequelize,DataTypes,Model);

db.user.hasMany(db.patient, { foreignKey: 'UserId' });
db.patient.belongsTo(db.user, { foreignKey: 'UserId' });

db.user.hasMany(db.treatment, { foreignKey: 'UserId',as:'TreatmentDetails' });
db.treatment.belongsTo(db.user, { foreignKey: 'UserId',as:'DoctorDetails' });

db.patient.hasMany(db.treatment, { foreignKey: 'PatientId' });
db.treatment.belongsTo(db.patient, { foreignKey: 'PatientId' });



if (process.env.MIGRATE_DB == 'TRUE') {
    //db.sequelize.sync({force:true}); 
	db.sequelize.sync({force:true}).then(() => {
		console.log(`All tables synced!`);
		process.exit(0);
	});
}

module.exports = db
