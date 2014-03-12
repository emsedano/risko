
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("helloworld");
};

exports.usersIndex = function(db) {
    // Closure
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},{},function(e,users){
            res.render('user/index', {
                "users" : users
            });
        });
    };
};

exports.newuser = function(req, res){
  res.render('user/new', { title: 'Add New User' });
};


exports.create = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var userName = req.body.username;
        var userEmail = req.body.useremail;

        // Set our collection
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "username" : userName,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("/users");
                // And forward to success page
                res.redirect("/users");
            }
        });

    }
};
