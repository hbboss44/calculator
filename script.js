// console.log(document.getElementsByClassName("result")[0].value);
let result1=document.getElementsByClassName("result")[0].value

let display=(val)=>{
    document.getElementsByClassName("result")[0].value+=val
}
let clr=()=>[
document.getElementsByClassName("result")[0].value=""
]
let equate=()=>{
    let result=document.getElementsByClassName("result")[0].value
    let evaluation=eval(result)
    document.getElementsByClassName("result")[0].value=evaluation
    if (result=='') {
        document.getElementsByClassName("result")[0].value=""
    }
    
    
    
    
    
    
    
}

let dele=()=>{
    let answer=document.getElementsByClassName("result")[0].value.slice(0,-1)
    document.getElementsByClassName("result")[0].value=answer
    
}
