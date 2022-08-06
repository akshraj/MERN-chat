const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('i am from server');
});

router.post('/', (req, res) => {
  res.json(req.body);
})

module.exports = router;