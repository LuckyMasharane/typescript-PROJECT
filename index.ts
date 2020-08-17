// Import stylesheets
import './style.css';

// Write TypeScript code!


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let toDo_list: Array<any> = [{TaskName:"GRAPHQL",TaskDate:"12/july/2020",TaskStatus:"done"},
{TaskName:"HTML5",TaskDate:"18/july/2020",TaskStatus:"done"},
{TaskName:"CSS3",TaskDate:"22/july/2020",TaskStatus:"pending"},
{TaskName:"JAVASCRIPT",TaskDate:"28/july/2020",TaskStatus:"done"},
{TaskName:"TypeScript",TaskDate:"17/August/2020",TaskStatus:"done"},
{TaskName:"C++",TaskDate:"12/May/2020",TaskStatus:"done"},
{TaskName:"C#",TaskDate:"12/july/2019",TaskStatus:"done"},
{TaskName:"REACTJS",TaskDate:"12/February/2020",TaskStatus:"done"},
{TaskName:"ANGULERJS",TaskDate:"12/March/2020",TaskStatus:"pending"},
{TaskName:"IONIC",TaskDate:"12/july/2020",TaskStatus:"done"}]

for(var i= 0; i< toDo_list.length;i++){
  if(toDo_list[4].TaskStatus ==="done"){
    toDo_list[4].TaskStatus = "Pending";
  }
  else{
    toDo_list[4].TaskStatus = "Done";
  }
  console.log( toDo_list[i].TaskName + " | " + toDo_list[i].TaskDate + " : "+ toDo_list[i].TaskStatus)
}
// void four(toDo_list[5].TaskName){

// }