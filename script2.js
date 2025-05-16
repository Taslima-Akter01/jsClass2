
function showMath(a, b, c, pi)
{
    var d = a + b + c;
    console.log(d);
    console.log(pi)

    document.getElementById("showMath").innerHTML= "d="+d+"<br>pi="+pi;
}

function showMyProfile()
{
    let person = "CSE ";
    let person1 = " subject";
    let fun = "yes right";
    document.getElementById("demo").innerHTML= "<br>"+ person + "is a painfull "+ person1 +"<br>"+ fun;

}

function showConst()
{
  const di= 3.1416;
  console.log(di);
  document.getElementById("d").innerHTML=di; 
}