const {usercollection}=require('../db').collection('users')
const validator=require('validator')
let User=function(data){
    this.data=data
    this.errors=[]
}

User.prototype.cleanUp=function(){
    if (typeof(this.data.uname)!='string'){this.data.uname=""}
    if (typeof(this.data.password)!='string'){this.data.password=""}
    if (typeof(this.data.email)!='string'){this.data.email=""}
}

/// ab hum ye chahty hain ke koi bhi apne pass se koi property na de to isko manually set krdegy apne data ko

//this.data={
    //uname:this.data.uname.trim().toLowerCase(),
    ///password:this.data.password,
    ///email:this.data.email.trim().toLowerCase()
    // }




User.prototype.validate = function(){
    if (this.data.uname == "" ){this.errors.push('you must be provided username babes')}
    if (this.data.password == "" ){this.errors.push('you must be provided password babes')}
    if (this.data.email == "" ){this.errors.push('you must be provided email babes')}
    if (this.data.password.length<8){this.errors.push('password must exceed 8 chars')}
    //if (this.data.uname.length>0 && this.data.uname.length<8){this.errors.push('password must exceed 8 chars')}
    if (!validator.isEmail(this.data.email)){this.errors.push('email should be properly added')}
    if (this.data.uname!="" && !validator.isAlphanumeric(this.data.uname)){this.errors.push('username always contain letters and number')}
    
}



User.prototype.register = function(){
    this.cleanUp()
    this.validate()

    if (!this.errors.length){
        usercollection.insertOne(this.data)
    }

}
module.exports=Userconst {usercollection}=require('../db').collection('users')
const validator=require('validator')
let User=function(data){
    this.data=data
    this.errors=[]
}

User.prototype.cleanUp=function(){
    if (typeof(this.data.uname)!='string'){this.data.uname=""}
    if (typeof(this.data.password)!='string'){this.data.password=""}
    if (typeof(this.data.email)!='string'){this.data.email=""}
}

/// ab hum ye chahty hain ke koi bhi apne pass se koi property na de to isko manually set krdegy apne data ko

//this.data={
    //uname:this.data.uname.trim().toLowerCase(),
    ///password:this.data.password,
    ///email:this.data.email.trim().toLowerCase()
    // }




User.prototype.validate = function(){
    if (this.data.uname == "" ){this.errors.push('you must be provided username babes')}
    if (this.data.password == "" ){this.errors.push('you must be provided password babes')}
    if (this.data.email == "" ){this.errors.push('you must be provided email babes')}
    if (this.data.password.length<8){this.errors.push('password must exceed 8 chars')}
    //if (this.data.uname.length>0 && this.data.uname.length<8){this.errors.push('password must exceed 8 chars')}
    if (!validator.isEmail(this.data.email)){this.errors.push('email should be properly added')}
    if (this.data.uname!="" && !validator.isAlphanumeric(this.data.uname)){this.errors.push('username always contain letters and number')}
    
}



User.prototype.register = function(){
    this.cleanUp()
    this.validate()

    if (!this.errors.length){
        usercollection.insertOne(this.data)
    }

}
module.exports=User