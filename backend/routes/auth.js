const express = require("express");
const Admin = require("../models/Admin");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchadmin = require('../middleware/Fetchadmin');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'XRb6$s9';

//ROUTER 1 :create a admin : POST
router.post("/register",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 3 }),
    // body("role", "Enter a valid role").exists(),
  ],async (req, res) => {
    let success = false;

    //if there are error , return bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({success, error: error.array() });
    }
    // check wheather the admin email exist already
    try {
      const {role } = req.body;
      let userRole;
        if (role === "1") {
          userRole = "Consultant";
        } else if (role === "2") {
          userRole = "User";
        } else {
          return res.status(400).json({ error: "Invalid role selected" });
        }

      let admin = await Admin.findOne({ email: req.body.email,role:userRole });
      if (admin) {
        return res.status(400).json({ success ,error: "Sorry the admin already exist" });
      }

      const salt = await bcryptjs.genSalt(10);
      const secPass = await bcryptjs.hash(req.body.password,salt);

      //create new admin
      admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        role: req.body.role,
      });
      const data = {
        admin:{
            id:admin._id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRET);
      success = true;
      res.json({success ,authtoken});

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal error !")        
    }
  });

//ROUTER 2 :authenticate a admin : POST nologin required
router.post("/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").exists(),
    body("role", "Enter a valid role").exists(),
  ],
  async (req, res) => {
    let success = false;
    //if there are error , return bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    } 
    
    const {email,password,role} = req.body;
    try {
      // const {role } = req.body;
      let userRole;
        if (role === "1") {
          userRole = "Consultant";
        } else if (role === "2") {
          userRole = "User";
        } else {
          return res.status(400).json({ error: "Invalid role selected" });
        }

      let admin=await Admin.findOne({email});
      if (!admin) {
          return res.status(400).json({ error: "Try to login with correct credentials" });
      }

      const passwordCompare = await bcryptjs.compare(password,admin.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({success, error: "Try to login with correct credentials" });
      }

      const data={
          admin:{
              id: admin._id,
          }
      }

      const authtoken = jwt.sign(data,JWT_SECRET);
      success = true;
      return res.json({success , authtoken, admin:{name:admin.name}});

    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal error !")      
    }
  }
);

//ROUTER 3 :get login admin details : POST login required
router.post("/getadmin",fetchadmin,async (req, res) => {
  try {
    let adminId = req.admin.id;
    const admin = await Admin.findById(adminId).select("-password");
    res.send(admin);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error !");
  }
}
);




module.exports = router;
