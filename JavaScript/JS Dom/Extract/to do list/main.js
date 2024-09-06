// const list = document.getElementById("list-items");
// const input = document.getElementById("input");
// const btn  = document.getElementById("btn");

// function add() {  
//   console.log(input.value);
  
//   const li = document.createElement("li");

//   const div = document.createElement("div");

//   div.classList.add("flex");
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   const p = document.createElement("p");
//   p.classList.add("font")

//   p.innerText = input.value;
//   div.appendChild(checkbox);
//   div.appendChild(p);



//   li.appendChild(div);
//   li.classList.add("border-bottom")
  
//   const div2 = document.createElement("div");

//   const button = document.createElement("button");
//   button.innerText = "Delete";
//   const button2 = document.createElement("button");
//   button2.innerText = "Edit";

//   div2.appendChild(button)
//   div2.appendChild(button2);
//   button.classList.add("span","font")
//   button2.classList.add("span1","font")
  
//   li.appendChild(div2);

//   li.classList.add("flex", "justify-between");

//   list.appendChild(li);

// }

// btn.addEventListener("click", add);


const cont = document.getElementById("list-render");

const input=document.getElementById("input")
const btn=document.getElementById("btn")

let array = [];

function add(){
  
  const taskToBeAdded = {
    checked: false,
    task: input.value,
  }

  array.push(taskToBeAdded);
  console.log(array);

  renderAll();
  
}

function renderAll(){
  cont.innerHTML = ``; 
  array.forEach((element , index) => {
    render(element, index);
  })

}

function render(obj, index){

  const container= document.createElement("div");

  console.log(obj.task);
  const li=document.createElement("div");

  const checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.classList.add("font")
   checkbox.addEventListener("click", () => {
    if (obj.checked == true) {
      obj.checked = false;
    } 
    else{
      obj.checked = true;
    }
  });
  
  if (obj.checked == true) {
    checkbox.checked = true;  
  }

   

  const span=document.createElement("span");
  span.innerText=obj.task;
  span.classList.add("font")

  li.appendChild(checkbox);
  li.appendChild(span);
  li.classList.add("box");

  container.appendChild(li);
  container.classList.add("flex", "justify-between","border-bottom")


  const li2=document.createElement("div");
  const button1=document.createElement("button");
  button1.innerText="Delete";


  button1.addEventListener("click", (e) => {
    // e.target.parentElement.parentElement.remove();

    array.splice(index, 1);
    renderAll();

  }, false);


  button1.classList.add("span","font", "delete");
  const button=document.createElement("button");
  button.innerText="Edit";

  button.addEventListener("click", (e) => {
    let text = e.target.parentElement.previousSibling.children[1].innerText;

    const inputTag = document.createElement("input");
    inputTag.type = "text";
    inputTag.value = text;

    const updateBtn = document.createElement("button");
    updateBtn.innerText = `Update`;
    
    e.target.parentElement.previousSibling.innerHTML = '';

    e.target.parentElement.previousSibling.appendChild(inputTag);
    e.target.parentElement.previousSibling.appendChild(updateBtn);


    updateBtn.addEventListener("click", (e) => {
      obj.task = inputTag.value;
      renderAll();
    })


  })

  button.classList.add("span1","font")
  console.log(button1)
  console.log(button)
  
  li2.appendChild(button1);
  li2.appendChild(button);
  container.appendChild(li2);

  console.log(li2);

  cont.appendChild(container);
  li2.classList.add("box");
}

btn.addEventListener("click", add)

  





// delete.addEventListener("click",function(e){
//   if (e.target.tagName==="button1"){
//     e.target.parentElement.remove();
//   }
// })
