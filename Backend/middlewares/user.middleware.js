let yup = require('yup');
const jwt = require('jsonwebtoken');

var db=require('../models');
var User = db.user;
const { Op } = require("sequelize");


//Teljes név
//Email cím
//Jelszó
let schemaSignup = yup.object().shape({
	fullName: yup
		.string()
		.required('Teljes név megadása kötelező!'),
	email: yup
		.string()
		.required('Email-cím megadása kötelező')
		.email('Érvényteken email-cím formátum'),
	password: yup
		.string()
		.required('Új jelszó megadása kötelező')
		.min(6, 'Jelszónak minimum 6 karakternek kell lennie'),
});
//Ez validálja
validationSignup = (req, res, next) => {
	
	console.log('🐞 validationSignup');

	schemaSignup
		.validate(
			{
                fullName: req.body.fullName,
				email: req.body.email,
				password: req.body.password,
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
//Regisztrált e már?
isUserExistsSignup = async (req, res, next) => {
	console.log('🐞 isUserExistsSignup');

	try {
		const user = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (user) {
			const error = {
                message: 'Felhasználó már regisztrált',
                field: 'email' 
            };
            return res.status(409).json({ error});
		}

		next();
	} catch (err) {
        return res.status(400).json({ error: err });
	}
};












let schemaLogin = yup.object().shape({
	email: yup
		.string()
		.required('Email-cím megadása kötelező')
		.email('Kérlek érvényes email-címet adj meg'),
	password: yup
		.string()
		.required('Jelszó megadása kötelező')
		.min(6, 'Kérlek jelszó minimum 6 karakter'),
});
validateLogin = (req, res, next) => {
	console.log('🐞 Bejelentkezés validálása');

	schemaLogin
		.validate(
			{
				email: req.body.email,
				password: req.body.password,
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
authenticateToken = (req, res, next) => {
	var token = req.headers.authorization;
	if (token) {
		
		jwt.verify(
			token.replace(/^Bearer\s/, ''),
			process.env.AUTH_SECRET,
			(err, decoded) => {
				if (err) {
                    const error = {
                        message: 'Érvénytelen felhasználó',
                        field: 'login' 
                    };
                    return res.status(401).json({ error});
				} else {
					req.user = decoded;
					return next();
				}
			}
		);
	} else {
		const error = {
            message: 'Érvénytelen felhasználó',
            field: 'login' 
        };
        return res.status(401).json({ error});
	}
};




let schemaUpdateProfile = yup.object().shape({
	fullName: yup.string().required('Kérlek írdd be a teljes neved'),
    email: yup
    .string()
    //.required()
    .required('Kérlek írd be az email-címedet')
    .email('Kérlek érvényes email-címet adj meg'),
});
validationUpdateProfile = (req, res, next) => {
	
	console.log('🐞 validationUpdateProfile');

	schemaUpdateProfile
		.validate(
			{
				fullName: req.body.fullName,
                email: req.body.email,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(404).json({ err});
		});
};
isUserExistsUpdate = async (req, res, next) => {
	console.log('🐞 isUserExistsUpdate');

	try {
		const user = await User.findOne({
			where: {
				email: req.body.email,
				id: {
					[Op.ne]: req.user.id,
				},
			},
		});

		if (user) {
            const error = {
                message: 'Ezzel az email-címmel már regisztráltak',
                field: 'email' 
            };

            return res.status(409).json({ error});   
		}

		next();
	} catch (err) {
		return next(err);
	}
};


















let schemaForgotPassword = yup.object().shape({
	email: yup
		.string()
		.required('Kérlek írdd be a regisztrált email-címedet')
		.email('Kérlek írdd be az érvényes email-címedet'),
});
validationForgotPassword = (req, res, next) => {



	console.log('🐞 validationForgotPassword');

	schemaForgotPassword
		.validate(
			{
				email: req.body.email,
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


let schemaChangePassword = yup.object().shape({

	newPassword: yup
		.string()
		.required('Kérlek írdd be az új jelszót')
		.min(6, 'Kérlek jelszó minimum 6 karakter'),
	confirmPassword: yup
		.string()
		.required('Kérlek erősítsd meg az új email-címedet')
		.min(6, 'Kérlek jelszó minimum 6 karakter')
		.oneOf(
			[yup.ref('newPassword'), null],
			'Az új jelszó és megerősítése nem egyezik'
		),
});
validationChangePassword = (req, res, next) => {
	
	console.log('🐞 validationChangePassword');

	schemaChangePassword
		.validate(
			{
				newPassword: req.body.newPassword,
				confirmPassword: req.body.confirmPassword,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ err});
		});
};


isEmailRegistered = async (req, res, next) => {



	
	console.log('🐞 isEmailRegistered');

	try {
		const user = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (user) {
			next();
		} else {
            const error = {
                message: 'Nincs felhasználó regisztrálva ezzel az email-címmel',
                field: 'email' 
            };
            return res.status(404).json({ error});
		}
	} catch (err) {
		return next(err);
	}
};





let schemaResetPassword = yup.object().shape({
	newPassword: yup
		.string()
		.required('Kérlek írj be egy új jelszót')
		.min(6, 'Kérlek jelszó minimum 6 karakter'),
	confirmPassword: yup
		.string()
		.required('Kérlek ismételd meg az új jelszót')
		.min(6, 'Kérlek jelszó minimum 6 karakter')
		.oneOf(
			[yup.ref('newPassword'), null],
			'Az új jelszó és a megerősítése nem egyezik'
		),
	token: yup.string().required('Jelszó visszaállító token nem létezik'),
});
validationResetPassword = (req, res, next) => {

	console.log('🐞 validationResetPassword');

	schemaResetPassword
		.validate(
			{
				newPassword: req.body.newPassword,
				confirmPassword: req.body.confirmPassword,
				token: req.body.token,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
            return res.status(400).json({ err});
		});
};
isResetTokenValid = async (req, res, next) => {
	
	console.log('🐞 isResetTokenValid');

	try {
		const user = await User.findOne({
			where: {
				token: req.body.token,
			},
		});

		if (user) {
			next();
		} else {
            const error = {
                message: 'Érvénytelen link vagy token',
                field: 'email' 
            };
            return res.status(400).json({ error});
		}
	} catch (err) {
		return next(err);
	}
};







module.exports = {
    validationSignup,
    isUserExistsSignup,
    validateLogin,
    authenticateToken,
    validationUpdateProfile,
    isUserExistsUpdate,
    validationChangePassword,
    validationForgotPassword,
    isEmailRegistered,
    validationResetPassword,
    isResetTokenValid
}