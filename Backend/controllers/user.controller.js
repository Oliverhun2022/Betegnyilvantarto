var db = require("../models");
var User = db.user;
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { log } = require("console");

signUp = async (req, res, next) => {
  try {
    const email = req.body.email;
   
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const password = hash;

    const token = crypto.randomBytes(16).toString("hex");

    const record = await User.create({
      fullName: req.body.fullName,
      email: email,
      password: password,
      token: token,
    });

    
    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });
    var verificationLink = `${process.env.CLIENT_URL}/signup-verify/?token=${token}`;

    var mailOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Köszönjük a regisztrációdat a betegnyilvántartó rendszer oldalára!",
      html: `Gratulálunk!<br/><br/>
        Sikeresen regisztráltál a betegnyilvántartó rendszerbe! Kérjük kattintson alábbi linkre fiókja megerősítéséhez!:<br/>
        <a href="${verificationLink}" target="_blank">Email-cím megerősítése</a><br/><br/>
        Köszönjük.<br/> Üdvözlettel <br/> Betegellátó csapat`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      status: "sikeres",
      message: "Felhasználó sikeresen regisztrált. Kérlek erősítsd meg az email-címedet.",
      result: {
        record: record,
      },
    });
  } catch (err) {
    return next(err);
  }
};
signUpVerify = async (req, res, next) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({
      where: {
        token: token,
        isVerified: 0,
      },
    });

    if (user) {
      const record = await User.update(
        {
          token: "",
          isVerified: 1,
        },
        {
          where: {
            id: {
              [Op.eq]: user.id,
            },
          },
        }
      );
      console.log(record);

      if (record[0] === 1) {
        return res.json({
          status: "sikeres",
          message: "Felhasználó sikeresen megerősítve.",
          result: user,
        });
      } else {
        const error = {
          message: "Felhasználó nincs megerősítve..",
          field: "token",
        };
        return res.status(403).json({ error });
      }
    } else {
      const error = {
        message: "Érvénytelen a megadott token vagy a felhasználó már meg lett erősítve",
        field: "token",
      };
      return res.status(403).json({ error });
    }
  } catch (err) {
    return next(err);
  }
};
login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);

    const checkUserVerification = await User.findOne({
      where: {
        email: email
      },
    });

    if (checkUserVerification!==null) {
      const user = await User.findOne({
        where: {
          email: email,
          isVerified: 1,
        },
      });
      if (user === null) {
        const error = {
          message: "Felhasználó nincs megerősítve. Kérlek erősítsd meg az email-címedet.",
          field: "login",
        };
        return res.status(401).json({ error });
        
      }
      const isMatched = await bcrypt.compare(password, user.password);

      if (isMatched === true) {
        var userData = {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
        };
        return res.json({
          user: userData,
          token: jwt.sign(userData, process.env.AUTH_SECRET, {
            expiresIn: "7d",
          }), 
        });
      } else {
        const error = {
          message: "Érvénytelen email-cím vagy jelszó",
          field: "login",
        };
        return res.status(401).json({ error });
      }
    } else {
      const error = {
        message: "Nincs ilyen felhasználó ezzel az email-címmel",
        field: "login",
      };
      return res.status(404).json({ error });
    }
  } catch (err) {
    return next(err);
  }
};
getLoggedInUser = (req, res, next) => {
  var token = req.headers.authorization;
  if (token) {
    
    jwt.verify(
      token.replace(/^Bearer\s/, ""),
      process.env.AUTH_SECRET,
      (err, decoded) => {
        if (err) {
          const error = {
            message: "Jogosulatlan felhasználó",
            field: "login",
          };
          return res.status(401).json({ error });
        } else {
          return res.json({ status: "sikeres", user: decoded });
        }
      }
    );
  } else {
    const error = {
      message: "Jogosulatlan felhasználó",
      field: "login",
    };
    return res.status(401).json({ error });
  }
};
forgotPassword = async (req, res, next) => {
  try {
    var email = req.body.email;
    var token = crypto.randomBytes(16).toString("hex");

    const result = await User.update(
      {
        token: token,
      },
      {
        where: {
          email: {
            [Op.eq]: email,
          },
        },
      }
    );

  
    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_POST,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    var verificationLink = `${process.env.CLIENT_URL}/forgot-password-verify/?token=${token}`;

    var mailOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Új jelszó beállítása",
      html: `Helló! <br/><br/>
			Kérlek kattints a linkre új jelszó beállításához:<br/>
			<a href="${verificationLink}" target="_blank">${verificationLink}</a><br/><br/>
			Köszönjük.<br/> Üdvözlettel <br/> Betegellátó csapat`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      status: "sikeres",
      message: "Email sikeresen elküldve. Kérlek ellenőrizd az email-címedet.",
      result: result,
    });
  } catch (err) {
    return next(err);
  }
};
forgotPasswordVerify = async (req, res, next) => {
  try {
    var token = req.params.token;

    const user = await User.findOne({
      where: {
        token: token,
      },
    });

    if (user) {
      return res.json({
        message: "Érvényes token",
        type: "success",
      });
    } else {
      const error = {
        message: "Érvénytelen token",
        field: "token",
      };
      return res.status(401).json({ error });
    }
  } catch (err) {
    return next(err);
  }
};
resetPassword = async (req, res, next) => {
  try {
    var token = req.body.token;
   
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.newPassword, salt);
    const new_password = hash;

    const result = await User.update(
      {
        password: new_password,
        isVerified: 1,
        token: "",
      },
      {
        where: {
          token: {
            [Op.eq]: token,
          },
        },
      }
    );

    return res.json({
      status: "sikeres",
      message: "Jelszó beállítása sikeresen megtörtént.",
      result: result,
    });
  } catch (err) {
    return next(err);
  }
};
changePassword = (req, res, next) => {
  try {
    var id = req.user.id;

    
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.newPassword, salt);
    const new_password = hash;

    const result = User.update(
      {
        password: new_password,
      },
      {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      }
    );

    return res.json({
      status: "sikeres",
      message: "Jelszó sikeresen megváltoztatva.",
      result: req.user,
    });
  } catch (err) {
    return next(err);
  }
};
updateProfile = async (req, res, next) => {
  try {
    var id = req.user.id;
    var fullName = req.body.fullName;
    console.log(fullName);
    console.log(id);

    const result = User.update(
      {
        fullName: fullName,
      },
      {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      }
    );

    if (result) {
      return res.json({
        status: "sikeres",
        message: "Profil sikeresen megváltoztatva.",
        result: req.body,
      });
    } else {
      const error = {
        message: "Profil megváltoztatása sikertelen.",
        field: "profile",
      };
      return res.status(401).json({ error });
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp,
  signUpVerify,
  login,
  getLoggedInUser,
  updateProfile,
  changePassword,
  forgotPassword,
  forgotPasswordVerify,
  resetPassword,
};
