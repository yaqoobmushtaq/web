const data = document.getElementById("data");
const name = document.getElementById("name");
const tags = document.getElementById("tags");
const score = document.getElementById("score");
const buttonPlus = document.getElementById("plus");
buttonPlus.addEventListener("click", addStartup);

const arrayObject = [];
let isEdit = false;

function addStartup() {
  obj = {
    name: name.value,
    tags: tags.value.split(","),
    score: score.value,
  };

  arrayObject.push(obj);

  name.value = "";
  tags.value = "";
  score.value = "";
  renderAll();
}

function renderAll() {
  data.innerHTML = "";
  arrayObject.forEach((element, index) => {
    ceatingRow(element, index);
  });
  console.log(arrayObject);
}

function ceatingRow(obj, index) {
  const row = document.createElement("div");
  row.classList.add("flex", "justify-between", "align-center", "row");

  const nameDiv = document.createElement("div");
  nameDiv.innerHTML = `<i class="fa-solid fa-check" style="color: #4DC8AE;"></i>`;
  nameDiv.classList.add("flex", "align-center", "width-30");
  row.appendChild(nameDiv);
  const p = document.createElement("p");
  p.classList.add("margin-left");
  p.innerText = `${obj.name}`;
  nameDiv.appendChild(p);

  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("flex");
  row.appendChild(tagsDiv);
  const p1 = document.createElement("p");
  p1.classList.add("margin-left", "fintech", "category");
  p1.innerText = `${obj.tags[0]}`;
  tagsDiv.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerText = `${obj.tags[1]}`;
  tagsDiv.appendChild(p2);
  p2.classList.add("margin-left", "category", "payment");
  obj.tags.forEach((element, index) => {
    const p1 = document.createElement("p");
    if (index % 3 == 0) {
      p1.classList.add("margin-left", "yellow", "category");
    } else if (index % 2 == 0) {
      p1.classList.add("margin-left", "fintech", "category");
    } else {
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
  arrow.innerHTML = `<i class="fa-solid fa-chevron-right" style="color: #552CF6;"></i>`;
  arrow.classList.add("arrow");

  arrow.addEventListener("click", (e) => {
    const delDiv = document.createElement("div");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", (e) => {
      //    e.target.parentElement.parentElement.parentElement.remove();
      arrayObject.splice(index, 1);
      renderAll();
    });
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => {
      isEdit = true;
      name.value = obj.name;
      let tagsText = "";
      obj.tags.forEach((element) => {
        tagsText += element;
        tagsText += ",";
      });

      tags.value = tagsText;

      score.value = obj.score;

      if (isEdit == true) {
        buttonPlus.addEventListener("click", () => {
          obj.name = name.value;
          obj.tags = tags.value.split(",");
          obj.score = score.value;
          isEdit = false;
          renderAll();
        });
      }
    });
    delDiv.appendChild(delBtn);
    delDiv.appendChild(editBtn);
    arrow.innerText = "";

    arrow.appendChild(delDiv);
  });
  row.appendChild(arrow);

  data.appendChild(row);
}
