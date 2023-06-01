const fs=require("fs")
const http=require("http")
const url=require("url")
const f1=require("./funforlogin")

const server=http.createServer(function(req,resp){
        var q=url.parse(req.url,true);
        resp.writeHeader(200,{"content-type":"text/html"})

        switch(q.pathname)
        {
            case "/loginform":
                var rs=fs.createReadStream("./loginform.html");
                rs.pipe(resp);
                break;

            case "/regform":
                var rs=fs.createReadStream("./regform.html");
                rs.pipe(resp);
                break;

            case "/submitdetails":

                if(q.query.btn==="log")
                {
                    var n=q.query.name;
                   
                    var p=q.query.pass;
                    
                    var ans=f1.validateuser(n,p);
                    if(ans)
                    {
                        resp.write("<h3>Successfully Login....Khatrnak...!</h3>")
                        resp.end()
                    }
                    else
                    {
                        resp.write("<h3>You Dont have an account<h3><br>"); 
                       resp.write("<a href='/regform'>Register</a> <a href='/regform'>Cancel</a>")
                       resp.end(); 
                    }
                }
                else if(q.query.btn==="reg")
                {
                    var n=q.query.name;
                    var p=q.query.pass;
                    var ans=f1.adduser(n,p);
                    if(ans)
                    {
                        resp.write("You are succesfully registered Now")
                        resp.write("<a href='/loginform'>Login</a>")
                        resp.end()
                    }
                }

                break;

                case "/register":
                    var n=q.query.namer;
                    var p=q.query.passr;
                    var ans=f1.adduser(n,p);
                    if(ans)
                    {
                        resp.write("You are succesfully registered Now")
                        resp.write("<a href='/loginform'>Login</a>")
                        resp.end()
                    }
                    break;



                default:
                   resp.write("<h3>Pls login or register</h3>");
                   resp.write("<a href='/loginform'>login</a>/ <a href='/regform'>registre me</a>");
                    resp.end()




        }
})

server.listen(1122,function()
{
    console.log("Chala...He server pn suru zal");
})