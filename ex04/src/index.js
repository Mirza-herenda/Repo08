
function function1()
{
myLocalVariable=5;    
}
var myGlobalVariable=10;


function function2()
{
    var results = "";
    if( typeof myGlobalVariable !=undefined)
    {
        results+= "myGlobalVariable :"+myGlobalVariable +"\n";
    }

    if( typeof myLocalVariable !=undefined)
    {
        results+= "myLocalVariable:"+myLocalVariable;
    }
    console.log(results);
}
function1();
function2();

module.exports={function1,function2};
