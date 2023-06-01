const fs=require("fs")
const http=require("http")
const f1=require("./modfunctions.js")
const url=require("url")

const serv=http.createServer(function(req,resp){

    var m=url.parse(req.url,true)
    console.log(m);

    resp.writeHeader(200,{"content-type":"text/html"})

    switch(m.pathname)
    {
        case "/Additionform":
            
        var rs=fs.createReadStream("./Additionform.html")
        rs.pipe(resp);
        break;

        case "/submit":
            if(m.query.batane==="add")
            {
            var a=parseInt(m.query.num1)
            var b=parseInt(m.query.num2)
            resp.write("<h3>"+f1.addition(a,b)+"  jml re jml"+"</h3>");
             }
             else
             {
             var a=parseInt(m.query.num1);
             resp.write("Factorial is : "+f1.factorial(a));
            }
            resp.end();
            break;
    }
})

serv.listen(1234,function(){
    console.log("chalu zal ba server")
})