/* stack - FIFO or LILO */
/* queue - FIFO or LILO */


/* Call stack */

/* js engine uses callstack to manage the execution context */


const multiply=(x,y)=>x*y

const square=(x)=>multiply(x,x)

const  isRightAngleTriangle = (a,b,c)=>{
    if(square(a)+ square(b) === square(c)){
        console.log("yea the triangle is a right angle triangle")
    }else{
        console.log("It is not a right angle triangle")
    }
} 

isRightAngleTriangle(3,4,5) 


/* A call stack is a meachanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of the */


/* GEC - global excution context */

function one(){
    console.log("I'm the first")
}
function two(){
    one()
    console.log("Two come second")
}