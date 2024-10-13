function Literal(a:number | string, b:number | string, type: "as-number" | "as-string"){

    if(type  === 'as-number')
    {
        return (+a) + (+b)
    }
    else{
        return a.toString() + b.toString()
    }
    

}


console.log(Literal(20, 30, "as-number"))
console.log(Literal("20", "30", "as-string"))
