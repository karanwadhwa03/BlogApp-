const Model=require('./../models/blogs')

exports.get=(req,res)=>{
    const items=Model.fetchall();
    res.render('home',{items:items})


}


exports.getsingle=(req,res)=>{
    console.log(req.params.id);
    const item=Model.fetchsingle(req.params.id);
    console.log(item)
    res.render('single',{item:item});


}


exports.update=(req,res)=>{
    //console.log(req.params.id);
    const item=Model.fetchsingle(req.params.id);
    //console.log(item)
    res.render('update',{item:item});


}

exports.updatepost=(req,res)=>{
    //console.log(req.params.id);
    const title=req.body.titleupdate;
    const describe=req.body.describeupdate;
    const name=req.body.nameupdate;
    const email=req.body.emailupdate;
    //console.log(title)
    Model.updateAtid(req.body.id,title,describe,name,email);
    res.redirect('/');
}


exports.delete=(req,res)=>{
   Model.delete(req.body.id);
   console.log(req.body.id)
   res.redirect('/');

}