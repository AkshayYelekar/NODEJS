userdata={"u1":"p1","u2":"p2","u3":"p3"}

exports.validateuser=(uname,passwd)=>
{
    var p=userdata[uname];
    return p===passwd;
}

exports.adduser=(uname,passwd)=>
{
    var p=userdata[uname]
    if(p!==undefined)
    {
        return false;}
    else{
       userdata[uname]=passwd;
       console.log(userdata);
       return true;
    }
}