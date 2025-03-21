const mongo_database = require('../model/content_desc');
exports.Insert_Content = async(req,res)=>{
    try
    {
        const { Poster, Movie, Features, Genres, Description, Dir, Cast, Language, Year, Rating, Age, Image, Video} = req.body;
        const content = await mongo_database.Content.findOne({Movie})
        if(content)
        {
            res.status(400).send('Content already exists');
        }
        const Val = await mongo_database.Content.create({
        Poster,
        Movie,
        Features,
        Genres,
        Description,
        Dir,
        Cast,
        Language,
        Year,
        Rating,
        Age,
        Image,
        Video
        })
        res.send(Val)
        console.log(req.body)
    }
    catch(error)
    {
        res.send(`${error}`)
    }
}
exports.Get_Content = async(req,res)=>
    {
    try{
        const Val  = await mongo_database.Content.find({})

        res.send(Val)
    }
    catch(error)
    {
        res.send(`${error}`)
    }

}
exports.Get_Particular = async(req,res)=>{
    try{
        const name = req.params.name
        const Val  = await mongo_database.Content.find({Movie:{ $regex: name, $options: "i" }})
        console.log(name)
        res.send(Val)
    }
    catch(error)
    {
        res.send(`${error}`)
    }
}

