import mongoose from "mongoose";
import validator from "validator";
import bcryt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate:{
        validator:validator.isEmail,
        message:`Please provide valid email`
    },
    unique:true
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6
  },
  lastName: {
     type: String,
     trim: true,
    minlength: 3,
    maxlength: 20,
    default:'LastName'
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default:'my city'
 },
})

UserSchema.pre('save',async function(){
  const salt = await bcryt.genSalt(10)
  this.password = await bcryt.hash(this.password,salt)

})

export default mongoose.model('User',UserSchema)
