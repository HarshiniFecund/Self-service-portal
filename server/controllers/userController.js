const User = require('../collections/userCollection')
const bcrypt = require("bcrypt");
// login user
const loginUser = async (req, res) => {
  const { type, input, password } = req.body;

  const phoneRegex = /^[6-9]\d{9}$/; // 10-digit phone (India)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (phoneRegex.test(type)) {
    return res.json({ message: "Valid phone number" });
  } else if (emailRegex.test(type)) {
    return res.json({ message: "Valid email address" });
  } 


  // CHECKING IF THE USER ALREADY EXISTS
  let existingUser;
  try { 
    // Check based on type
    if (type === "Email address") {
      existingUser = await User.findOne({ email: input });
    } else if (type === "Phone number") {
      existingUser = await User.findOne({ phone: input });
    } else if (type === "Username") {
      existingUser = await User.findOne({ username: input });
    }

    if (!existingUser) {
      return res.status(404).json({ message: `${type} not found` });
    }

  } catch (error) {
    console.log(error.message);
  }
  
  const { firstName, role } = existingUser;

  // CHECKING IF THE PASSWORD IS CORRECT
  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Error: Invalid Password!" });
  }

  return res.status(201).json({ user: {firstName, role} });
};

const signupUser = async (req, res) => {
 
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone
    } = req.body;

           // combine first + last name
      let username = `${firstName} ${lastName}`;
      console.log(username);

      // ✅ optional: remove spaces and special characters
      username = username.replace(/\s+/g, "");


    // DOMIANCHECK
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail+\.com/;
    const validateEmail = emailRegex.test(email);
    if (!validateEmail){
      return res.status(400).json({ message: "Error: Invalid Email ID!" });
    }

    const phoneRegex = /^[6-9]\d{9}$/; 
    const validatePhone = phoneRegex.test(phone);
    if (!validatePhone) {
      return res.status(400).json({ message: "Error: Invalid Phone number" });
    }
    
    // CHECKING IF THE USER ALREADY EXISTS
    try {
      // Check if email exists
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: "Email already registered" });
      }

      // Check if phone exists
      const phoneExists = await User.findOne({ phone });
      if (phoneExists) {
        return res.status(400).json({ message: "Phone number already registered" });
      }

      // ✅ optional: check if username already exists
      const existingUser = await User.findOne({ username });
    
      if (existingUser) {
        username = "${username}${Math.floor(Math.random() * 1000)}";
      }

      if (existingUser) {
        return res.status(400).json({ message: "Username already registered" });
      }
    
    } catch (error) {
      console.log(error.message);
    }

     // Role management logic
   /// const haspermission = await permission.findOne({userPermissions: req.body.employeeID});    
    //const role = haspermission ? 'admin' : 'user'

    const role = 'admin';
    // HASHING THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATING A NEW USER
    const user = new User({
      firstName,
      lastName,
      email,
      role,
      password: hashedPassword,
      phone,
      username
    });
    await user.save();
    // authentication token
   // const token = createToken(user._id)
    return res.status(201).json({ firstName, email, role, phone });
  } catch (error) {
    console.log(error.message);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const {type, input , newPassword} = req.body
    
    let user;

    // Check based on type
    if (type === "email") {
      user = await User.findOne({ email: input });
    } else if (type === "phone") {
      user = await User.findOne({ phone: input });
    }

    if (!user) {
      return res.status(404).json({ error: `${type} not found` });
    }

    const hashednewPassword = await bcrypt.hash(newPassword, 10);
    // updating new password
    await User.updateOne({type}, {password: hashednewPassword})

    return res.status(200).json({message: "Password Reset Successful"})

  } catch (error) {
    console.log(error.message)
  }
};

module.exports = { loginUser, signupUser, forgotPassword};