 
const express = require('express');
const router = express.Router();

const Signal = require('../../models/Signal');


router.get('/', async (req, res) => {
  try {
    const signal = await Signal.find().sort({ date: -1 });
    console.log('get signal')

    res.json(signal);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  async (req, res) => {

    try {
        const newSignal = new Signal({
        text: req.body.text,
       });
      const post = await newSignal.save();
      console.log('saved signal')
      res.json(post);
      } catch (err) {
    
      res.status(500).send('Server Error');
    }
  }
);





module.exports = router;