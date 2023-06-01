exports.addition=function(a,b)
{
    return a+b;
}

exports.factorial=function(a)
{
    var f=1;
    for(var i=1;i<=a;i++)
    {
        f=f*i;
    }
    return f;
}