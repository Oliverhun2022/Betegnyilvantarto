var db = require("../models");
var Patient = db.patient;
var Treatment = db.treatment;
var User = db.user;
const { Op, Sequelize} = require("sequelize");
const jwt = require('jsonwebtoken');


getDoctorDashboardData = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    let finalResult = {
      totalPatients: 0,
      malePatients: 0,
      femalePatients: 0,
      newPatients: 0,
      weeklyPatients: {
        days: [],
        visits: []
      },
    };
    let userId;

    if (token) {
      
      jwt.verify(
        token.replace(/^Bearer\s/, ""),
        process.env.AUTH_SECRET,
        (err, decoded) => {
          if (err) {
            throw new Error("Érvénytelen felhasználó");
          } else {
            userId = decoded.id;
          }
        }
      );

      const today = new Date();
      const oneWeekAgo = new Date(today);
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      
      const totalPatients = await Patient.count({
        where: {
          UserId: userId,
        },
      });
      finalResult.totalPatients = totalPatients;

      
      const totalMalePatients = await Patient.count({
        where: {
          UserId: userId,
          sex: 'male',
        },
      });
      finalResult.malePatients = totalMalePatients;

      
      const totalFemalePatients = await Patient.count({
        where: {
          UserId: userId,
          sex: 'female',
        },
      });
      finalResult.femalePatients = totalFemalePatients;

      
      const newPatientsToday = await Patient.count({
        where: {
          UserId: userId,
          createdAt: {
            [Op.gte]: new Date().setHours(0, 0, 0, 0),
          },
        },
      });
      finalResult.newPatients = newPatientsToday;

      
      const weeklyPatients = await Patient.findAll({
        where: {
          UserId: userId,
          createdAt: {
            [Op.gte]: oneWeekAgo,
          },
        },
        attributes: [
          [Sequelize.literal("DATE_FORMAT(createdAt, '%a')"), 'dayOfWeek'],
          [Sequelize.literal("COUNT(*)"), 'visitCount'],
        ],
        group: [Sequelize.literal("DATE_FORMAT(createdAt, '%a')")],
      });

      weeklyPatients.forEach(patient => {
        finalResult.weeklyPatients.days.push(patient.getDataValue('dayOfWeek'));
        finalResult.weeklyPatients.visits.push(patient.getDataValue('visitCount'));
      });

      
      const currentDate = new Date();
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 0; i < daysOfWeek.length; i++) {
        if (!finalResult.weeklyPatients.days.includes(daysOfWeek[i])) {
          finalResult.weeklyPatients.days.push(daysOfWeek[i]);
          finalResult.weeklyPatients.visits.push(0);
        }
      }

      return res.json({ status: "sikeres", result: finalResult });
    } else {
      const error = {
        message: "Érvénytelen felhasználó",
        field: "login",
      };
      return res.status(401).json({ error });
    }
  } catch (error) {
    return res.status(500).json({ error: { status: "fail", message: error.message } });
  }
};
getAllPatients = async (req, res, next) => {
  try {
    var userId = req.params.UserId;
    if (!userId) {
      return res.status(400).json({
        status: "error",
        message: "Nincs megadva felhasználói azonosító",
      });
    }

    const patients = await Patient.findAll({
      where: {
        UserId: userId,
      },
    });

    

    res.json({
      status: "sikeres",
      result: patients,
    });
  } catch (err) {
    return next(err);
  }
};
getOnePatient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const patient = await Patient.findOne({
      where: {
        id: id,
      },
    });
    if (!patient) {
      return res.status(404).json({
        status: "error",
        message: "Nem találtunk beteget ezzel az azonosítóval" + id,
      });
    }
    res.json({
      status: "sikeres",
      result: patient,
    });
  } catch (err) {
    return next(err);
  }
};
createPatient = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      motherName,
      idCardNumber,
      email,
      identifierType,
      tajNumber,
      nationality,
      placeOfBirth,
      dateOfBirth,
      sex,
      country,
      city,
      postalCode,
      address,
      UserId,
      drugAllergy,
      allergy,
      chronicIllness,
      constantMedication,
    } = req.body;

    
    const record = await Patient.create({
      firstName,
      lastName,
      motherName,
      idCardNumber,
      email,
      identifierType,
      tajNumber,
      nationality,
      placeOfBirth,
      dateOfBirth,
      sex,
      country,
      city,
      postalCode,
      address,
      UserId,
      drugAllergy,
      allergy,
      chronicIllness,
      constantMedication,
    });

    
    res.json({
      status: "sikeres",
      message: "Beteg sikeresen hozzáadva",
      result: {
        record: record,
      },
    });
  } catch (err) {
    return next(err);
  }
};
updatePatient = async (req, res, next) => {
  try {
    const {
      id,
      firstName,
      lastName,
      motherName,
      idCardNumber,
      email,
      identifierType,
      tajNumber,
      nationality,
      placeOfBirth,
      dateOfBirth,
      sex,
      country,
      city,
      postalCode,
      address,
      UserId,
      drugAllergy,
      allergy,
      chronicIllness,
      constantMedication,
    } = req.body;

    const record = await Patient.update(
      {
        firstName,
        lastName,
        motherName,
        idCardNumber,
        email,
        identifierType,
        tajNumber,
        nationality,
        placeOfBirth,
        dateOfBirth,
        sex,
        country,
        city,
        postalCode,
        address,
        UserId,
        drugAllergy,
        allergy,
        chronicIllness,
        constantMedication,
      },
      {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      }
    );

    if (record[0] == 0) {
      return res.status(404).json({
        status: "error",
        message: "Nincs beteg ilyen azonosítóval" + id,
      });
    }

    res.json({
      status: "success",
      message: "Beteg sikeresen frissítve",
      result: {
        record: req.body,
      },
    });
  } catch (err) {
    return next(err);
  }
};
deletePatient = async (req, res, next) => {
  try {
    const id = req.params.patientId

    const deleted = await Patient.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    if (deleted === 0) {
      return res.status(404).json({
        status: "error",
        message: "Nincs ilyen beteg ezzel az azonosítóval" + id,
      });
    }

    res.json({
      status: "sikeres",
      message: "Beteg törlése sikeres",
      result: {
        affectedRows: deleted,
      },
    });
  } catch (err) {
    return next(err);
  }
};
getPatientCard = async (req, res, next) => {
  try {
    const patientId = req.params.patientId;
    const patientCard = await Patient.findOne({
      include: [
        {
          model: Treatment,
          include: [
            {
              model: User,
              as: "DoctorDetails",
            },
          ],
        },
      ],
      where: {
        id: patientId,
      },
    });
    if (!patientCard) {
      return res.status(404).json({
        status: "error",
        message: "Nem talált beteget ezzel az id val" + id,
      });
    }
    res.json({
      status: "success",
      result: patientCard,
    });
  } catch (err) {
    return next(err);
  }
};
addDiagnosis = async (req, res, next) => {
  try {
    const id = req.body.id;
    const diagnosis = req.body.diagnosis;

    const record = await Patient.update(
      {
        diagnosis: diagnosis,
      },
      {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      }
    );

    if (record[0] == 0) {
      return res.status(404).json({
        status: "error",
        message: "Nem talált beteget ezzel az id val" + id,
      });
    }

    res.json({
      status: "sikeres",
      message: "Diagnózis hozzáadása sikeres.",
      result: {
        record: req.body,
      },
    });
  } catch (err) {
    return next(err);
  }
};
addTreatment = async (req, res, next) => {
  try {
    const { description, PatientId, UserId, dateOfTreatment } = req.body;

    
    const record = await Treatment.create({
      description,
      PatientId,
      UserId,
      dateOfTreatment,
    });

    if (!record) {
      return res.status(404).json({
        status: "error",
        //message: "Nem talált beteget ezzel az id-val" + id,
      });
    }

    
    res.json({
      status: "sikeres",
      message: "Kezelés sikeresen hozzáadva.",
      result: {
        record: record,
      },
    });
  } catch (err) {
    return next(err);
  }
};
updateTreatment = async (req, res, next) => {
  try {
    const {id,description, PatientId, UserId, dateOfTreatment } = req.body;

    const record = await Treatment.update(
      {
        description,
        PatientId,
        UserId,
        dateOfTreatment,
      },
      {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      }
    );

    if (record[0] == 0) {
        return res.status(404).json({
          status: "error",
          message: "Nem talált kezelést ezzel az id-val" + id,
        });
      }

   
    res.json({
      status: "sikeres",
      message: "Kezelés sikeresen módosítva.",
      result: {
        record: record,
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getDoctorDashboardData,
  getAllPatients,
  getOnePatient,
  createPatient,
  updatePatient,
  deletePatient,
  getPatientCard,
  addDiagnosis,
  addTreatment,
  updateTreatment,
};
