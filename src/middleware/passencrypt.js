import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (req, res, next) => {
  bcrypt.hash(req.body, saltRounds, function (err, hash) {
    // HERE
    req.hashedPassword = hash;
    console.log("your hashed password", hash);
    next();
  });
};

export default hashPassword;
