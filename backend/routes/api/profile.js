 
const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');


router.get('/', async (req, res) => {
  try {
    const profile = await Profile.find().sort({ date: -1 });
    console.log('profile get');
    
    res.json(profile);
     
  
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error', err);
  }
});

router.post(
  '/',
  async (req, res) => {

    try {
        const newProfile = new Profile({
          company: req.body.company,
          website: req.body.website,
          location: req.body.location,
          status: req.body.status,
       });
      const profile = await newProfile.save();
      console.log('profile saved')
      io.emit('postprofile', req.body)

      res.json(profile);
    
      } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);





module.exports = router;