let yup = require('yup');
var db=require('../models');
var Patient = db.patient;
var User = db.user;
const { Op } = require("sequelize");




let schemaAddPatient = yup.object().shape({
	firstName: yup
		.string()
		.required('Vezetéknév megadása kötelező'),
    lastName: yup
		.string()
		.required('Keresztnév megadása kötelező'),
    motherName: yup
		.string()
		.required('Anyja nevének megadása kötelező'),
    idCardNumber: yup
		.string()
		.required('Személyigazolvány szám megadása kötelező'),
	email: yup
		.string()
		.required('Email-cím megadása kötelező')
		.email('valid Email'),
    identifierType: yup
		.string()
		.required('Személyazonosító típusának megadása kötelező'),
    tajNumber: yup
		.string()
		.required('Taj szám megadása kötelező'),
	nationality: yup
		.string()
		.required('Nemzetiség megadása kötelező'),
    placeOfBirth: yup
		.string()
		.required('Születési hely megadása kötelező'),
    dateOfBirth: yup
		.date()
		.required('Születési idő megadása kötelező'),
    sex: yup
		.string()
		.required('Nem megadása kötelező'),      
    country: yup
		.string()
		.required('Ország megadása kötelező'),      
    city: yup
		.string()
		.required('Lakhely megadása kötelező'),      
    postalCode: yup
		.string()
		.required('Irányítószám megadása kötelező'),      
    address: yup
		.string()
		.required('Lakcím megadása kötelező'),      
    UserId: yup
		.number()
		.required('Doktor megadása kötelező'),      
});

validateAddPatient = (req, res, next) => {

	console.log('🐞 validateAddPatient');

	schemaAddPatient
		.validate(
			{
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				motherName: req.body.motherName,
				idCardNumber: req.body.idCardNumber,
				email: req.body.email,
				identifierType: req.body.identifierType,
				tajNumber: req.body.tajNumber,
				nationality: req.body.nationality,
				placeOfBirth: req.body.placeOfBirth,
				dateOfBirth: req.body.dateOfBirth,
				sex: req.body.sex,
				country: req.body.country,
				city: req.body.city,
				postalCode: req.body.postalCode,
				address: req.body.address,
				UserId: req.body.UserId,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ error: err });

		});
};

isPatientExistsCreate = async (req, res, next) => {
	try {
        let userId=parseInt(req.body.UserId);
        const user = await User.findByPk(userId);

        if (!user) {
            const error = {
                message: 'Orvos nem létezik ezzel az azonosítóval '+userId,
                field: 'id' 
            };
            return res.status(404).json({ error});
		}

		const patient = await Patient.findOne({
			where: {
				email: req.body.email,
				UserId: req.body.UserId,
			},
		});

		if (patient) {
            const error = {
                message: 'Beteg már létezik',
                field: 'email' 
            };
            return res.status(409).json({ error});
		}

		next();
	} catch (err) {
        return res.status(400).json({ error: err });
	}
};










let schemaUpdatePatient = yup.object().shape({
	id: yup.number()
    .required('Beteg azonosítójánsk megadása kötelező'),
    firstName: yup
		.string()
		.required('Vezetéknév megadása kötelező'),
    lastName: yup
		.string()
		.required('Keresztnév megadása kötelező'),
    motherName: yup
		.string()
		.required('Anyja nevének megadása kötelező'),
    idCardNumber: yup
		.string()
		.required('Személyigazolvány szám megadása kötelező'),
	email: yup
		.string()
		.required('Email-cím megadása kötelező')
		.email('Érvényes email-cím'),
    identifierType: yup
		.string()
		.required('Személyazonosító típusának megadása kötelező'),
    tajNumber: yup
		.string()
		.required('Taj szám megadása kötelező'),
    placeOfBirth: yup
		.string()
		.required('Születési hely megadása kötelező'),
    dateOfBirth: yup
		.date()
		.required('Születési idő megadása kötelező'),
    sex: yup
		.string()
		.required('Nem megadása kötelező'),      
    country: yup
		.string()
		.required('Ország megadása kötelező'),      
    city: yup
		.string()
		.required('Város megadása kötelező'),      
    postalCode: yup
		.string()
		.required('Irányítószám megadása kötelező'),      
    address: yup
		.string()
		.required('Lakhely megadás kötelező'),      
    UserId: yup
		.number()
		.required('Doktor linkjének megadása kötelező'),
});

validateUpdatePatient = (req, res, next) => {

	console.log('🐞 validateUpdatePatient');

	schemaUpdatePatient
		.validate(
			{
				id: req.body.id,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				motherName: req.body.motherName,
				idCardNumber: req.body.idCardNumber,
				email: req.body.email,
				identifierType: req.body.identifierType,
				tajNumber: req.body.tajNumber,
				placeOfBirth: req.body.placeOfBirth,
				dateOfBirth: req.body.dateOfBirth,
				sex: req.body.sex,
				country: req.body.country,
				city: req.body.city,
				postalCode: req.body.postalCode,
				address: req.body.address,
				UserId: req.body.UserId,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ error: err });
		});
};

isPatientExistsUpdate = async (req, res, next) => {
	try {
		const patient = await Patient.findOne({
			where: {
				email: req.body.email,
				id: {
					[Op.ne]: req.body.id,
				},
			},
		});


		if (patient) {
            const error = {
                message: 'Beteg már létezik',
                field: 'patient' 
            };
            return res.status(409).json({ error});
		}

		next();
	} catch (err) {
        return res.status(400).json({ error: err });
	}
};



let schemaPatientDelete = yup.object().shape({
	id: yup.number().required(),
});

validateDeletePatient = (req, res, next) => {

	console.log('🐞 validateDeletePatient');

	schemaPatientDelete
		.validate(
			{
				id: req.params.patientId,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ error: err });
		});
};





let schemaAddDiagnosis = yup.object().shape({
	id: yup.number().
    required('Beteg azonosítójának megadása kötelező'),
	diagnosis: yup.string()
    .required('Diagnózis megadása kötelező'),
});

validateAddDiagnosis = (req, res, next) => {
	
	console.log('🐞 validateAddDiagnosis');

	schemaAddDiagnosis
		.validate(
			{
				id: req.body.id,
                diagnosis: req.body.diagnosis,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ error: err });
		});
};









let schemaAddTreatment = yup.object().shape({
	description: yup.string()
    .required('Kezelés leírásának megadása kötelező'),
    PatientId: yup.number().
    required('Beteg id-jának megadása kötelező'),
    UserId: yup.number().
    required('Doktor megadása kötelező'),
    dateOfTreatment: yup.date().
    required('Kezelés dátumának megadása kötelező'),
});

validateAddTreatment = (req, res, next) => {
	
	console.log('🐞 validateAddTreatment');

	schemaAddTreatment
		.validate(
			{
                description: req.body.description,
                PatientId: req.body.PatientId,
                UserId: req.body.UserId,
                dateOfTreatment: req.body.dateOfTreatment,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ error: err });
		});
};

















let schemaUpdateTreatment = yup.object().shape({
    id: yup.number()
    .required('Kezelés id jának megadása kötelező'),
	description: yup.string()
    .required('Kezelés leírásának megadása kötelező'),
    PatientId: yup.number().
    required('Beteg id-jának megadása kötelező'),
    UserId: yup.number().
    required('Doktor id-jának megadása kötelező'),
    dateOfTreatment: yup.date().
    required('Kezelés dátumának megadása kötelező'),
});

validateUpdateTreatment = (req, res, next) => {
	
	console.log('🐞 validateUpdateTreatment');

	schemaUpdateTreatment
		.validate(
			{
                id: req.body.id,
                description: req.body.description,
                PatientId: req.body.PatientId,
                UserId: req.body.UserId,
                dateOfTreatment: req.body.dateOfTreatment,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ error: err });
		});
};








module.exports = {
    validateAddPatient,
    isPatientExistsCreate,
    validateUpdatePatient,
    isPatientExistsUpdate,
    validateDeletePatient,
    validateAddDiagnosis,
    validateAddTreatment,
    validateUpdateTreatment
}