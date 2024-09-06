// get Variables
const name = document.getElementById("name");
const tags = document.getElementById("tags");
const score = document.getElementById("score");
const buttonPlus = document.getElementById("plus");
const data = document.getElementById("data");

// addEventListener 
buttonPlus.addEventListener("click",addStartup);

// declare array
const arrayObject = [];
// function on click work
function addStartup() {
    // get vlue in object
    obj = {
        name : name.value,
        tags : tags.value.split(","),
        score : score.value
    }
    // push Object in array
    arrayObject.push(obj);
    // console object
    // console.log(obj);
    // for making empty input
    name.value = '';
    tags.value = '';
    score.value = '';    
    // call function
    renderAll();
    
}
// use function to create rowDiv to store the object values 
function renderAll() {
    data.innerHTML="";
    arrayObject.forEach((element,index) => {
        creatingRow(element,index);
    })

}

function creatingRow(obj, index) {
    const row = document.createElement("div");
    row.classList.add("flex", "justify-between", "align-center", "row")
    
    const nameDiv = document.createElement("div");
    nameDiv.innerHTML = `<i class="fa-solid fa-check" style="color: #4DC8AE;"></i>`
    nameDiv.classList.add("flex", "align-center" , "width-30");
    row.appendChild(nameDiv);
    const p = document.createElement("p");
    p.classList.add("margin-left")
    p.innerText = `${obj.name}`;
    nameDiv.appendChild(p);
    
    const tagsDiv = document.createElement("div");   
    tagsDiv.classList.add("flex");
    row.appendChild(tagsDiv); 

    obj.tags.forEach((element, index) => {
        const p1 = document.createElement('p');
        if(index%3==0){
            p1.classList.add("margin-left", "yellow", "category");
        }else if (index%2 == 0) {
            p1.classList.add("margin-left", "fintech", "category");
        }
        else
        {
            p1.classList.add("margin-left", "payment", "category");
        }
        p1.innerText = `${element}`;
        tagsDiv.appendChild(p1);
    });
    
    const ratingDiv = document.createElement("div");  
    ratingDiv.classList.add("rating");
    ratingDiv.innerText = `${obj.score}`;
    row.appendChild(ratingDiv);  

    const arrow = document.createElement("div"); 
    row.appendChild(arrow)
    arrow.classList.add("arrow");
    arrow.innerHTML = `<i class="fa-solid fa-chevron-right" style="color: #552CF6;"></i>`
    

    // addEventListener to click on arrow to show modify option

    arrow.addEventListener("click", modify)
    
    function modify() {
        arrow.innerHTML = ``;
        const modifyDiv = document.createElement("div");

        const delBtn = document.createElement("button");
        delBtn.innerText = 'Delete'
        modifyDiv.appendChild(delBtn);

        delBtn.addEventListener("click", (e)=>{
            // console.log(e.target.parentElement.parentElement.parentElement.remove());
            arrayObject.splice(index,1)
            console.log(arrayObject);
            renderAll();
        })

        const editBtn = document.createElement("button");
        editBtn.innerText = 'Edit'
        modifyDiv.appendChild(editBtn);
        arrow.appendChild(modifyDiv);
    }
    data.appendChild(row)
}       








