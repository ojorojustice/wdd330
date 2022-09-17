


/*My objects I will be using these to keep my notes*/

const frontendDirectory = [{
    title : "Making Computer Remember Me",
},
{
    title : "Programming Basics",
}
,
{
    title : "Arrays, Logic and Loops",
},
{
    title : "functions",
}
,
{
    title : "Objects",     
},
{
    title : "Document Object Model",   
},
{

    title : "Events",  
}
,
{
    
    title : "Forms", 
},
{
    title : "Object Oriented Programming",
}
,
{
    title : "Testing and Debugging",
},
{
    title : "Ajax & Canvas",

},
{

    title : "Transforms and Transitions",
}
,
{
    title : "The Window Object",  
},
{
    
    title : "HTML5 APIS",
         
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
