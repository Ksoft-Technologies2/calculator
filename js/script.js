function addTask(){
  const inputBox = document.getElementById("inputText");
  const listParent = document.getElementById("listParent");

  if(inputBox.value === ""){
    alert("input a task");
  }
 else{
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;

  const span = document.createElement("span");
  span.innerHTML = "&times;";
  span.classList.add("span")
  li.appendChild(span);
  listParent.append(li);
 }
 inputBox.value = "";
 saveData();
} 
 
listParent.addEventListener("click", function(e){
  console.log(e.target);
if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData();
}
if (e.target.tagName === "LI"){
  e.target.classList.toggle("checked")
  saveData();
}
});


function saveData(){
  localStorage.setItem("data", listParent.innerHTML)
}

function getData(){
  listParent.innerHTML = localStorage.getItem("data")
}

getData();