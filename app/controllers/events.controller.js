const db = require("../models");
const Events = db.events;

exports.addEvent=(req,res)=>{

    const event = new Events({
        name: req.body.name,
        shortDescription : req.body.shortDescription,
        description:req.body.description,
        date : req.body.date,
        price :req.body.number,
        free : req.body.free ,
    });

    event.save((err) =>{
if(err){
    res.status(500).send({message:"Error in saving event! please try again later"});
}

   res.status(200).send({message:"Event added successfully" , event})

    });


}

exports.fetchOne=(req,res)=>{
    console.log("Fetch one");
console.log(req.params.id);
  Events.findById(req.params.id).exec((err , event)=>{
    console.log(event);
    if(event){
        res.status(200).send(event);
    }else{
        res.status(404).send({message:"No event found"})
    }

  });
 

}