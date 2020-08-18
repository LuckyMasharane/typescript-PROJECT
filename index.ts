// Import stylesheets
import './style.css';

// Write TypeScript code!


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let toDo_list: Array<any> = [{TaskName:"GRAPHQL",TaskDate:"12/july/2020",TaskStatus:"Done"},
{TaskName:"HTML5",TaskDate:"18/july/2020",TaskStatus:"Done"},
{TaskName:"CSS3",TaskDate:"22/july/2020",TaskStatus:"Pending"},
{TaskName:"JAVASCRIPT",TaskDate:"28/july/2020",TaskStatus:"Done"},
{TaskName:"TypeScript",TaskDate:"17/August/2020",TaskStatus:"Done"},
{TaskName:"C++",TaskDate:"12/May/2020",TaskStatus:"Done"},
{TaskName:"C#",TaskDate:"12/july/2019",TaskStatus:"Done"},
{TaskName:"REACTJS",TaskDate:"12/February/2020",TaskStatus:"Done"},
{TaskName:"ANGULERJS",TaskDate:"12/March/2020",TaskStatus:"Pending"},
{TaskName:"IONIC",TaskDate:"12/july/2020",TaskStatus:"Done"}];

update(toDo_list);

function update(toDo_list){
  if(toDo_list[4].TaskStatus ==="Done"){
    return toDo_list[4].TaskStatus = "Pending";
  }
  else{
    return toDo_list[4].TaskStatus = "Done";
  }
}

console.log( toDo_list[4].TaskName + " | " + toDo_list[4].TaskDate + " : " + toDo_list[4].TaskStatus)
// list(toDo_list);

// function list(todo){
//   for(var i= 0; i< todo.length;i++){
//     if(todo[4].TaskStatus ==="Done"){
//       todo[4].TaskStatus = "Pending";
//     }
//     else{
//       todo[4].TaskStatus = "Done";
//     }
//     console.log( todo[4].TaskName + " | " + todo[4].TaskDate + " : "+ todo[4].TaskStatus)
//   }
// }