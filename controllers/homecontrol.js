const Model=require('./../models/blogs')

exports.get=(req,res)=>{
    Model.find().then(
        blogs=>{
            res.render('home',{items:blogs})
        }
    );
    


}


exports.getsingle=(req,res)=>{
    console.log(req.params.id);
    Model.findById(req.params.id).then(
        item=>{
       // console.log(item)
        res.render('single',{item:item});

         } );
    


}


exports.update=(req,res)=>{
    //console.log(req.params.id);
    Model.findById(req.params.id).then(
        item=>{
      //  console.log(item)
        res.render('update',{item:item});
         } );
    


}

exports.updatepost=(req,res)=>{
    //console.log(req.params.id);
    const title=req.body.titleupdate;
    const describe=req.body.describeupdate;
    const name=req.body.nameupdate;
    const email=req.body.emailupdate;
    //console.log(title)
    const use={id:req.params.id};
    Model.findOneAndUpdate(use, { name: name,title:title,describe:describe,email:email })
    .then(
        (query)=>{
            console.log(query)
            res.redirect('/');
        }
    )
   // Model.updateAtid(req.body.id,title,describe,name,email);
    
}


exports.delete=(req,res)=>{
   Model.findOneAndRemove(req.body.id).then(
       
    ()=>{
   console.log(req.body.id)
   res.redirect('/');
    })
}