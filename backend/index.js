const express = require('express');
const zod = require('zod')
const {todoitems} = require('./db.js')
const app = express();
const cors = require('cors')
const {creatodo,updatetodo}=require('./types.js');
app.use(cors());
app.use(express.json());


app.post('/todo', (req,res)=>{
  const validbody = creatodo.safeParse(req.body)
  if(!validbody){
    res.status(411).josn({
      msg: "please check your inputs again"
    });
    return 
  }else{
      const addedtodo = new todoitems({
        title: req.body.title,
        description : req.body.description,
        status : false
      })
    addedtodo.save();
    res.status(200).json({
      msg:"todo item has been added"
    })
  }  
})
  
app.get('/todo' , async (req,res)=>{
  const todos = await todoitems.find({})
  res.json({
    todos : todos
  })
})

app.put('/completed' , async (req,res)=>{
  const idvalid = updatetodo.safeParse(req.body)
  if(idvalid.success){
    await todoitems.findOneAndUpdate({_id:req.body.id},{
      status: true
    });
    res.send("update completed")
  }else{
    res.send("something is wrong")
  }
})

app.listen(3000, () => {
  console.log('server started');
})
