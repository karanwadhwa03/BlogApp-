const Blogs=require('./../models/blogs')


exports.get=(req,res)=>{
    res.render('create');
}

exports.post=(req,res)=>{
    const title=req.body.title;
    const describe=req.body.describe;
    const name=req.body.name;
    const email=req.body.email;
    
    const blog=new Blogs({
        title:title,
        describe:describe,
        name:name,
        email:email
    });
    blog.save();
    res.redirect('/')
}
