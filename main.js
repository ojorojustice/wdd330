


/*My objects I will be using these to keep my notes*/

const frontendDirectory = [{
    label : "Week 1",
    title : "Making Computer Remember Me",
    url: "week1.html",  
},
{
    label : "Week 2",
    title : "Programming Basics",
    url: "week2.html", 

}
,
{
    label : "Week 3",
    title : "Arrays, Logic and Loops",
    url: "week3.html",     

},
{
    label : "Week 4",
    title : "functions",
    url: "week4.html",      

}
,
{
    label : "Week 5",
    title : "Objects",
    url: "week5.html",     

},
{
    label : "Week 6",
    title : "Document Object Model",
    url: "week6.html",     

},
{
    label : "Week 7",
    title : "Events",
    url: "week7.html",  

}
,
{
    label : "Week 8",
    title : "Forms",
    url: "week8.html",  
},
{
    label : "Week 9",
    title : "Object Oriented Programming",
    url: "week9.html",  
}
,
{
    label : "Week 10",
    title : "Testing and Debugging",
    url: "week10.html",  
},
{
    label : "Week 11",
    title : "Ajax & Canvas",
    url: "week11.html",  
},
{
    label: "Week 12",
    title : "Transforms and Transitions",
    url: "week12.html",  
}
,
{
    label : "Week 13",
    title : "The Window Object",
    url: "week13.html",  
},
{
    label : "Week 14",
    title : "HTML5 APIS",
    url: "week14.html",      
}];


const linksList = document.getElementsByClassName('linksList')[0];

console.log(linksList);
frontendDirectory.forEach((product,index)=>{
    let atag = document.createElement('a');
    atag.setAttribute("href", product.url);
   let linkItem = document.createElement('li');
   let lintTexts = document.createTextNode(`${product.label}:  ${product.title}`);

    linkItem.appendChild(lintTexts);
    atag.appendChild(linkItem);
    linksList.appendChild(atag);
    

});
