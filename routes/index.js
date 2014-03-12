
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!' });
};


exports.usersIndex = function(db) {
    // Closure
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},{},function(e,users){
            res.render('users', {
                "users" : users
            });
        });
    };
};