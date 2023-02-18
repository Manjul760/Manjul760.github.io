
function add_text(str)
{
    document.getElementById("Equation").value+=str
}

function clear_text()
{
    document.getElementById("Equation").value=""
}

function answer_display()
{
    eval(`document.getElementById("Equation").value=`+document.getElementById("Equation").value)
}

function pow(a,b)
{
    return Math.pow(a,b)
}

function factorial(a)
{
    var b=1
    for(var i=a;i>0;i--)
    {
        b*=i;
    }
    return b
}

function per(a,r=0)
{
    return factorial(a)/factorial(a-r)
}

function comb(a,r=0)
{
    return factorial(a)/(factorial(a-r)*factorial(r))
}

function mod(a,m)
{
    while(a<0){a+=m}return a%m
}

function pi()
{
    return Math.PI
}

function e(p=1)
{
    return Math.pow(Math.E,p)
}

function modinv(a,m)
{
    for(var i =1;i<m;i++)
    {
        if(mod((a*i),m)==1){return i}
    }
    return undefined
    
}

function sin(deg)
{
    return Math.sin(deg * pi()/180)
}

function cos(deg)
{
    return Math.cos(deg * pi()/180)
}

function tan(deg)
{
    return Math.tan(deg * pi()/180)
}

function cosec(deg)
{
    return Math.cosec(deg * pi()/180)
}

function sec(deg)
{
    return Math.sec(deg * pi()/180)
}

function cot(deg)
{
    return Math.cot(deg * pi()/180)
}

function asin(x)
{
    return Math.asin(x)*180/pi()
}

function acos(x)
{
    return Math.acos(x) * 180/pi()
}

function atan(x)
{
    return Math.atan(x) * 180/pi()
}


function acosec(x)
{
    return Math.asin(1/x)*180/pi()
}

function asec(x)
{
    return Math.acos(1/x) * 180/pi()
}

function acot(x)
{
    return Math.atan(1/x) * 180/pi()
}

function backspaceAtCursor(id)
{
     var field = document.getElementById(id);
     field.focus();
     var startPos = field.selectionStart;
     var endPos = field.selectionEnd;

     if(field.selectionStart == field.selectionEnd)
    {
      field.value = field.value.substring(0, startPos - 1) + field.value.substring(endPos, field.value.length);

      field.focus(); 
      field.setSelectionRange(startPos - 1, startPos - 1); 
    }
    else
    {
      field.value = field.value.substring(0, startPos) + field.value.substring(endPos, field.value.length);

      field.focus(); 
      field.setSelectionRange(startPos, startPos); 
    }
}
