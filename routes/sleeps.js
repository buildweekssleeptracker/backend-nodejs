const router = require('express').Router();

const Sleeps = require('../models/sleeps');
const restricted = require('../util/authenticator');
const asyncHandler = require('../util/asyncHandler')

router.get('/', restricted, (req, res) => get(req, res));
router.get('/:id', restricted, (req, res) => getById(req, res));
router.post('/', restricted, (req, res) => post(req, res));
router.put('/:id', restricted, asyncHandler(async (req, res) => await put(req, res)));
router.delete('/:id', restricted, (req, res) => remove(req, res));

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
  const score = Sleeps.getScore(sleepEntry)
  Sleeps.add({ 
    ...sleepEntry, 
    duration, 
    user_id,
    score
  })
    .then(results => {
      return res.status(201).json(results);
    })
    .catch(err => res.send(err));
}

const put = async (req, res) => {

  // console.log(req.body)
  const sleep_id = req.params.id
  const user_id = req.decodedToken.subject
  const result = await Sleeps.findBy({user_id, id: sleep_id}).first()
  
  if(!result) {
    return res.status(404).json("Unauthorized Item");
  }
  
  const pendingItem = { ...result, ...req.body } 
  // console.log(pendingItem)
  const duration = Sleeps.getDuration(pendingItem)
  const score = Sleeps.getScore(pendingItem)

  const newItem = { 
    ...pendingItem,
    user_id,
    duration,
    score,
  }

  const updatedItem = await Sleeps.update(result.id, newItem)
  if (updatedItem) {
    res.status(200).json(updatedItem)
  } else {
    res.status(500).json('Update Failed')
  }
}




const remove = (req, res) => {
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
}

// function checkRole(role) {
//   return function(req, res, next) {
//     if (
//       req.decodedToken
//     ) {
//       next();
//     } else {
//       res.status(403).json({ message: "can't touch this!" });
//     }
//   };
// }

// const scopes = 'student:read;student:write;student:delete;salary:read'

module.exports = router;
