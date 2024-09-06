const name = document.getElementById("name");
const tags = document.getElementById("tags");
const score = document.getElementById("score");
const button = document.getElementById("plus");
const data = document.getElementById("data");

button.addEventListener("click", addStartUp);

const arrayOfObjects = [];

function addStartUp() {
  const obj = {
    name: name.value,
    tags: tags.value.split(","),
    score: score.value
  }

  arrayOfObjects.push(obj);
  console.log(arrayOfObjects);

  name.value = ``;
  tags.value = ``;
  score.value = ``;

  creatingRow(obj);
}

function creatingRow(obj) {
  const row = document.createElement("div");
  row.classList.add("flex", "justify-between","align-center", "row")
  const nameDiv = document.createElement("div");
  const tagsDiv = document.createElement("div");
  const ratingDiv = document.createElement("div");
  const arrow = document.createElement("div");
  row.appendChild(nameDiv)
  row.appendChild(tagsDiv)
  row.appendChild(ratingDiv)
  row.appendChild(arrow)

  nameDiv.innerHTML = `<i class="fa-solid fa-check" style="color: #4DC8AE;"></i>`;

  const p = document.createElement('p');
  p.innerText = `${obj.name}`;
  p.classList.add("margin-left");
  nameDiv.appendChild(p);
  nameDiv.classList.add("flex", "align-center");

  tagsDiv.classList.add("flex");

  obj.tags.forEach(element => {
    const p1 = document.createElement("p");
    p1.innerText = `${element.trim()}`;
    tagsDiv.appendChild(p1);
    p1.classList.add("margin-left", "category", "grey");

    if (element.trim() == "fintech") {
      p1.classList.add("fintech");  
    } else if(element.trim() == "payment"){
      p1.classList.add("payment");    
    }
  });

  ratingDiv.innerText = obj.score;
  ratingDiv.classList.add("rating")
    
  arrow.innerHTML = `<i class="fa-solid fa-chevron-right" style="color: #552CF6;"></i>`;
  arrow.classList.add("arrow");

  data.appendChild(row);
}
