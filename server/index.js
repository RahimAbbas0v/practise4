const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config()

const { Schema } = mongoose;

const productschema = new Schema(
    {
        img: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
)

const Products = mongoose.model("productss", productschema)


const app = express()

app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>")
})
app.get("/productss", (req, res) => {
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})
app.get("/productss", (req, res) => {
    Products.find({},(err,docs)=>{
        if(err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})

app.post("/productss", (req, res) => {
    const {id} =req.params
    const product= new Products({
        name:req.body.name,
        img:req.body.img,
        price:req.body.price
    })
    product.save()
    res.send({message:"Added"})
})
app.get("/productss/:id",(req,res)=>{
    const {id}=req.params
    Products.findById(id,(err,doc)=>{
        if(!err){
           if(doc){
            res.send(doc)

           }else{
            res.status(404).json({message:"NOT FOUND"})
           }
        }else{
            res.status(500).json({message:err})
        }
    })
})

app.delete("/productss/:id",(req,res)=>{

    const {id}=req.params
    Products.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
            
        }else{
            res.status(404).json({message:err})
        }
    })
})

const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("Db connect");
        app.listen(PORT,()=>{
            console.log("server Started");
        })
    }
})
