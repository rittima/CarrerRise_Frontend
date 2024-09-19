const express = require("express");
const router = express.Router();
const Consultant = require("../models/Consultant");
const fetchadmin = require('../middleware/Fetchadmin');
const { body, validationResult } = require("express-validator");

//ROUTER 1 :get all the consultants details : GET. Login required
router.get('/getConsultant', fetchadmin, async (req, res) => {
    try {
        const consultants = await Consultant.find({admin: req.admin.id});
        res.json(consultants)
    } catch (error) { 
        console.error(error.message);
        res.status(500).send("Internal error !")
    }
});


//ROUTER 2 :add consultants details : POST. login required
router.post("/addConsultant",fetchadmin,
    [
        body("name", "Enter a valid name").isLength({ min: 5 }),
        body("email", "Enter a valid email").isEmail(),
        body("role", "Enter a valid role").isLength({ min: 2 }),
        body("company", "Enter a valid company name").isLength({ min: 5 }),
    ],
    async (req, res) => {
  
      try {
          const {name,email,role,company}=req.body;
          //if there are error , return bad request
          const error = validationResult(req);
          if (!error.isEmpty()) {
          return res.status(400).json({ error: error.array() });
          }
          const consultants =new Consultant({
            name,email,role,company,admin: req.admin.id
          })
          const saveConsultant = await consultants.save();
          res.json(saveConsultant);
  
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal error !")        
      }
  })

  //ROUTER 3 : Update consultants details : PUT. login required
router.put("/updateconsultants/:id",fetchadmin,
    async (req, res) => {
        const {name,email,role,company}=req.body;
        try {
            //create new consultants
            const newConsultant ={};
            if (name) { newConsultant.name = name; };
            if (email) { newConsultant.email = email; };
            if (role) { newConsultant.role = role; };
            if (company) { newConsultant.company = company; };

            //find the consultant to be updated & update it
            let consultant = await Consultant.findById(req.params.id);
            if (!consultant) {
                return res.status(404).send("not found")
            }
            if (consultant.admin.toString() !== req.admin.id) {
                return res.status(404).send("not allowed")
            }
            consultant=await Consultant.findByIdAndUpdate(req.params.id,{$set:newConsultant},{new:true})
            res.json({consultant});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal error !")    
        }        
    })
    
    //ROUTER 4 : Delete existing consultants details : DELETE. login required
    router.delete("/delete/:id",fetchadmin,
    async (req, res) => {
        try {
            //find the consultant to be delete & delete it
            let consultant = await Consultant.findById(req.params.id);
            if (!consultant) {
                return res.status(404).send("not found")
            }
            //Allow delete only if admin own it 
            if (consultant.admin.toString() !== req.admin.id) {
                return res.status(404).send("not allowed")
            }
            consultant=await Consultant.findByIdAndDelete(req.params.id)
            res.json({"Success": "Succesfully deleted , " ,"consultant id" :consultant.id});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal error !")
        }        
    })

  
module.exports = router;
