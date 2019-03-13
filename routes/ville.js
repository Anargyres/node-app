var express = require('express');
var router = express.Router();
var request = require("request");


router.post('/', function(req, res, next) {
  var authKey = "1659614250754433523x1968";
  var ville = req.body.nom_ville;
  var desc = req.body.desc;
  var villeUrl = "https://geocode.xyz/"+ville+"?json=1&auth="+authKey;
  var latti;
  var long;
  request(villeUrl, function (error, response, body) {
    var jsonReq = JSON.parse(body);
    long = jsonReq.longt;
    latti = jsonReq.latt;

    res.render('ville', {title: 'Node App', ville: ville, desc: desc, lattitude: latti, longitude: long});
  });

  console.log(villeUrl);


})
module.exports = router;
