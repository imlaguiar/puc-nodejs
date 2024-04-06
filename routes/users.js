var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let users = { items: [] }
router.post('/', function(req, res, next) {
  const body = req.body;
  var name = req.body.name;
  var email = req.body.email;
  var address = req.body.address;
  users.items.push({"name" : name, "email": email, "address" : address });
  res.redirect('/users/all');
  return;
});


router.get('/all', function(req, res, next) {
  res.render('users', {
    users: users.items
  });
});

router.post('/delete', function(req, res, next) { //html n suporta delete
  var user = users.items.find((item) => {
    return item.email == req.body.email
  })

  var userIndex = users.items.indexOf(user);

  users.items.splice(userIndex, 1);
  res.send('Deleted');
});

module.exports = router;
