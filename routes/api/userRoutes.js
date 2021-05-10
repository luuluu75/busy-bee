const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// CREATE a new user
router.post('/', async (req, res) => {

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    // hash the password from 'req.body' and save to newUser
    user.password = await bcrypt.hash(req.body.password, 10);

    // create the newUser with the hashed password and save to DB
    const userData = await User.create(user);
    res.status(200).json(userData)
    catch { res.status(400).json(err)
    }; 
  });


module.exports = router;
