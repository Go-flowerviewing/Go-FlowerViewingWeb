exports.render = function(req, res){
	res.render('player',{
		version : req.param('version')
	});

}