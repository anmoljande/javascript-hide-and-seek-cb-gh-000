function getFirstSelector(selector)
{
  console.log("Hiiii"+selector);
  var ele=document.querySelector(selector);
  return ele;
}
function nestedTarget()
{
 
 return document.querySelector('#nested .target ') 

  
}

function increaseRankBy(n)
{
  var ele=document.querySelectorAll('ul.ranked-list li');
  for(let i=0;i<ele.length;i++)
  {
    var a=parseInt(ele[i].innerHTML,10);
    a=a+n;
    ele[i].innerHTML=a;
  }
  
}

function deepestChild()
{
  var curr=document.getElementById('grand-node');
  var next=curr.children[0];
  
  
}
