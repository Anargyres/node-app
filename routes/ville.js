var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var ville = req.body.nom_ville;
  var desc = req.body.desc;
  res.render('ville', {title: 'Node App', ville: ville, desc: desc});
})
module.exports = router;
