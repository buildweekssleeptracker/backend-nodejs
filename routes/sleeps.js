const router = require('express').Router();

const Sleeps = require('../models/sleeps');
const restricted = require('../util/authenticator');

router.get('/', restricted, (req, res) => get(req, res));
router.get('/:id', restricted, (req, res) => getById(req, res));
router.post('/', restricted, (req, res) => post(req, res));
router.put('/:id', restricted, (req, res) => put(req, res));



const get = (req, res) => {
  console.log(req.decodedToken.subject)
  const user_id = req.decodedToken.subject
  console.log(user_id)
  Sleeps.findBy({user_id})
    .then(results => {
      return res.status(200).json(results);
    })
    .catch(err => res.send(err));
}

const getById = (req, res) => {
  const user_id = req.decodedToken.subject
  console.log(user_id)
  Sleeps.findBy({user_id, id: req.params.id})
    .then(results => {
      console.log(results)
      if (results[0]) {
        return res.status(200).json(results)
      }
      else {
        return res.status(404).json("Unauthorized Item");
      }
    })
    .catch(err => res.send(err));
}


const post = (req, res) => {
  // console.log(req.decodedToken.subject)
  const user_id = req.decodedToken.subject
  const sleepEntry = req.body
  const duration = Sleeps.getDuration(sleepEntry)
  // console.log(duration)
  Sleeps.add({ 
    ...sleepEntry, 
    duration, 
    user_id 
  })
    .then(results => {
      return res.status(201).json(results);
    })
    .catch(err => res.send(err));
}

const put = (req, res) => {

  console.log(req.decodedToken.subject)
  const sleep_id = req.params.id
  const user_id = req.decodedToken.subject

  Sleeps.findBy({user_id, id: sleep_id})
    .then(results => {
      console.log(results)
      if (results[0]) {
        const sleepEntry = req.body
        const duration = Sleeps.getDuration(sleepEntry)
        Sleeps.update(
          sleep_id, 
          { 
            ...sleepEntry, 
            duration, 
            user_id 
          })
          .then(result => {
            res.status(202).json(result) 
          })
          .catch(err => res.status(500).json(err));
      }
      else {
        return res.status(404).json("Unauthorized Item");
      }
    })
    .catch(err => res.send(err));
}



router.delete('/:id', restricted, (req, res) => {
  // console.log(req.decodedToken.subject)
  const user_id = req.decodedToken.subject
  Sleeps.findBy({user_id, id: req.params.id})
    .then(results => {
      // console.log(results)
      if (results[0]) {
        Sleeps.remove(req.params.id)
        .then(success => success == 1 ? res.status(200).json(success) : res.status(404).json({err: 'please try again'}))
        .catch(err => res.status(500).json(err))
      }
      else {
        return res.status(404).json("Unauthorized Item");
      }
    })
    .catch(err => res.send(err));
});



function checkRole(role) {
  return function(req, res, next) {
    if (
      req.decodedToken
    ) {
      next();
    } else {
      res.status(403).json({ message: "can't touch this!" });
    }
  };
}

// const scopes = 'student:read;student:write;student:delete;salary:read'

module.exports = router;
