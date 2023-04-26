
const getAllProperty = async (req,res)=>{
    res.send('getAllProperty')
}

const addProperty =async (req,res)=>{
    res.send('addProperty')
}

const deleteProperty =async (req,res)=>{
    res.send(`deleteProperty`)
}

const getProperty =async (req,res)=>{
    res.send(`getProperty`)
}

const stats =async (req,res)=>{
    res.send(`stats`)
}

export  {getAllProperty,addProperty,deleteProperty,getProperty,stats}