const type = document.getElementById("type");
const amount = document.getElementById("amount");
const title = document.getElementById("title");
const description = document.getElementById("description");
const add = document.getElementById("add");
const calc = document.getElementById("calc");
const date = document.getElementById("date");
const show = document.getElementById("showCal");
const content = document.getElementById("content");
const balance = document.getElementById("balance-id");
const income = document.getElementById("income-id")
const expense = document.getElementById("expense-id");
const history = document.getElementsByClassName("history-item")[0];

const amountArr = [];
  

add.addEventListener("click",function addFun() {
  console.log(type.value)
  console.log(parseInt(amount.value));
  console.log(title.value);
  console.log(description.value);
  console.log(date.value);
  
  let obj = {
    type : type.value,
    date : date.value,
    amount : parseInt(amount.value),
    title : title.value,
    description : description.value

  }
  amountArr.push(obj)
  console.log(amountArr);

  let totalIncome = 0 ;
  let totalExpense = 0 ;

  amountArr.forEach(element => {
    if (element.type === "income") {
      totalIncome += element.amount
    }else {
      totalExpense += element.amount
    }
  });

  income.innerText = totalIncome;
  expense.innerText = totalExpense;
  balance.innerText = `${totalIncome - totalExpense}`;


  // history
  history.innerHTML = "";

  amountArr.forEach(element => {
    
    const itemDiv = document.createElement("div");
    const itemDiv1 = document.createElement("div");
    const itemDiv2 = document.createElement("div");

    itemDiv.appendChild(itemDiv1);
    itemDiv.appendChild(itemDiv2);

    itemDiv1.innerText = element.title;
    
    if (element.type === "income") {
      itemDiv2.innerText = `+ $${element.amount}`;
    } else{
      itemDiv2.innerText = `- $${element.amount}`;
    }

    
    
    if (element.type === "income") {
      itemDiv.classList.add("item-green", "flex", "justify-between");
    } else{
      itemDiv.classList.add("item-red", "flex", "justify-between");

    }

    history.appendChild(itemDiv);

  })

})
