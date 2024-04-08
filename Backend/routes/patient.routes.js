const { Router } = require('express');
const router = Router();


const {
    validateAddPatient,
    isPatientExistsCreate,
    validateUpdatePatient,
    isPatientExistsUpdate,
    validateDeletePatient,
    validateAddDiagnosis,
    validateAddTreatment,
    validateUpdateTreatment,
} = require('../middlewares/patient.middleware');

const {	authenticateToken} = require('../middlewares/user.middleware');














const patientController = require('../controllers/patient.controller');

router.get('/patients/:UserId',[authenticateToken], patientController.getAllPatients);
router.get('/dashboard',[authenticateToken], patientController.getDoctorDashboardData);
router.get('/patient-info/:id',[authenticateToken], patientController.getOnePatient);
router.post(
	'/patients',
	[authenticateToken,validateAddPatient, isPatientExistsCreate],
	patientController.createPatient
);
router.put(
	'/patients',
	[authenticateToken,validateUpdatePatient, isPatientExistsUpdate],
	patientController.updatePatient
);
router.delete('/patients/:patientId', [authenticateToken,validateDeletePatient], patientController.deletePatient);

router.get('/patient-card/:patientId',[authenticateToken], patientController.getPatientCard);
router.post('/add-diagnosis',[authenticateToken,validateAddDiagnosis], patientController.addDiagnosis);
router.post('/add-treatment',[authenticateToken,validateAddTreatment], patientController.addTreatment);
router.put('/update-treatment',[authenticateToken,validateUpdateTreatment], patientController.updateTreatment);


module.exports = router;
