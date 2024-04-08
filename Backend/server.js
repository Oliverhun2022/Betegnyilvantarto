require('dotenv').config();
const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const helmet = require('helmet');
require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('tiny'));

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'auth-token, Origin, X-requested-With, Content-Type, Accept');
  next();
});



app.get('/', (req, res, next) => {
	try {
		res.json({
			status: 'success',
			message: 'Welcome 🙏 to Patient Register APIs',
		});
	} catch (err) {
		return next(err);
	}
});
const userRoutes = require('./routes/user.routes');
const patientRoutes = require('./routes/patient.routes');
app.use([userRoutes,patientRoutes]);


app.get('*', function (req, res) {
	res.status(404).json({
		message: 'What?? 🙅',
	});
});


app.use((err, req, res, next) => {
	console.log('🐞 Error Handler');

	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		err: err,
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🐹 Patient Register Server is running on http://localhost:${PORT}`);
});
