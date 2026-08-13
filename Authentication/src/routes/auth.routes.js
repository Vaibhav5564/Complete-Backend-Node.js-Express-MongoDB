const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();


/*
 POST /api/auth/register  
=> Here need to use /api/auth/ is compulsory 
Then use actual path for api that you created 
If we Created api throgh routes
*/
router.post('/register', authController.registerUser)

module.exports = router;