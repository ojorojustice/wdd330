const quiz = [    ["What is Superman's real name?","Clark Kent"],    ["What is Wonder Woman's real name?","Diana Prince"],    ["What is Batman's real name?","Bruce Wayne"]];
function start(quiz){    let score = 0;
    // main game loop    
    for(const [question,answer] of quiz){        const response = ask(question);        check(response,answer);    }    // end of main game loop
    gameOver();
    // function declarations    
    function ask(question){        return prompt(question);    }
    function check(response,answer){        if(response === answer){        alert('Correct!');        score++;        } else {        
        alert(`Wrong! The correct answer was ${answer}`);        }    }
    function gameOver(){        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);    }}


/*My objects I will be using these to keep my notes*/

const frontendDirectory = [{
    title : "Programming Basics: Making Computer Remember Me (localStorage)",
},
{
    title : "Arrays, Logic, Loops & Functions",
}
,
{
    title : "",
},
{
    title : "",
}
,
{
    title : "",     
},
{
    title : "",   
},
{

    title : "",  
}
,
{
    
    title : "", 
},
{
    title : "",
}
,
{
    title : "",
},
{
    title : "",

},
{

    title : "",
}
,
{
    title : "",  
},
{
    
    title : "",
         
}];


const linksList = document.getElementsByClassName('linksList')[0];




console.log(window.URL);

frontendDirectory.forEach((product,index)=>{
    index++
    product.url = `week${index}`
    product.label =`week ${index}`
    let atag = document.createElement('a');
    atag.setAttribute('href', product.url);  
    let linkTexts = document.createTextNode(`${product.label}:  ${product.title}`);
   let linkItem = document.createElement('li');
 
   
//append each of the created elements and nodes
    linkItem.appendChild(linkTexts);
    atag.appendChild(linkItem);
    linksList.appendChild(atag);
    

});


function quizNinja(){
    alert('Welcome to Quiz Ninja!');
}

console.log(`${[1]===[1]?"yes":"NOooo"}`);


const duplicate = [1,2,3,4,5,6,4,3,2,1];

const newset = [];

console.log(newset)

