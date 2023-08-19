const mongoose=require("mongoose");

module.exports.connect=()=>{
    mongoose.connect("mongodb+srv://yashsharma170201:Ys7409819336@cluster0.j2qrdfl.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }).then(()=>{
            console.log("Database Connected");
        }).catch((e)=>{
            console.log("No Database Connected");
        });
}
