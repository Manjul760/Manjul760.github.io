class primitive_prime
{
    constructor()
    {
        document.getElementById("primitive-prime").innerHTML=`
            <h1 class="h1">A simple calculator to check primitive primes</h1>
            <input type="number" class="h1" id="v1_pp" onkeyup="prim_prime_finder.set_v1(this.value)" onchange="prim_prime_finder.set_v1(this.value)">
            <span class="h1"> &nbsp;and &nbsp;</span>
            <input type="number" class="h1" id="v2_pp" onkeyup="prim_prime_finder.set_v2(this.value)" onchange="prim_prime_finder.set_v2(this.value)">
            <span class="h1"> &nbsp; primitive prime?</span>
            <h1 class="h1">Answer = <span id="answer_prim_prime"></span></h1>

        `
        this.v1=0
        this.v2=0
        document.getElementById("v2_pp").value=this.v2
        document.getElementById("v1_pp").value=this.v1
        this.Result()
    }

    Mod(a,b)
    {
        while(a<0)
        {
            a+=b
        }
        return a%b
    }
    set_v1(v1)
    {
        if(v1==""){this.v1=0;document.getElementById("v1_pp").value=v1;this.Result();return undefined}
        if(Number.parseInt(v1)>0){this.v1=Number.parseInt(v1)}
        else{this.v1=0;document.getElementById("v1_pp").value=this.v1.toString()}
        
        this.Result()
        
    }

    set_v2(v2)
    {
        if(v2==""){this.v2=0;document.getElementById("v2_pp").value=v2;this.Result();return undefined}
        if(Number.parseInt(v2)>0){this.v2=Number.parseInt(v2)}
        else{this.v2=0}
        
        document.getElementById("v2_pp").value=this.v2
        this.Result()
        
    }

    Result()
    {
        if(this.v1==0 || this.v2==0)
        {
            document.getElementById("answer_prim_prime").innerHTML="  No";
            return undefined
        }
        else if(this.v1==this.v2)
        {
            document.getElementById("answer_prim_prime").innerHTML="  No"
            return undefined
        }
        var a=0,b=0
        if(this.v1>this.v2){a=this.v1;b=this.v2}
        else{a=this.v2;b=this.v1}

        var list_of_nums = []        

        for(var i=1;i<a;i++)
        {
            var checkvalue =this.Mod((Math.pow(b,i)),a)
            if(list_of_nums.indexOf(checkvalue)>-1)
            {
                document.getElementById("answer_prim_prime").innerHTML="  No"
                return undefined
            }
            list_of_nums.push(checkvalue)
            
        }
        document.getElementById("answer_prim_prime").innerHTML="  Yes"


    }
}

var prim_prime_finder = new primitive_prime()
