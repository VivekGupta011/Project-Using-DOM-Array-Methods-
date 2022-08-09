const adduser = document.querySelector("#add-user");
const double = document.querySelector("#double");
const showmillionaires = document.querySelector("#show-millionaires");
const sort = document.querySelector("#sort");
const calculatewealth = document.querySelector("#calculate-wealth");

let data1 = [];

getRandomUser();
getRandomUser();
// fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  // storing data in formate json

  const data = await res.json();
  console.log(data);
  const user = await data.results[0];

  const newuser = {
    name: `${user.name.first}  ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newuser);
  console.log(newuser);
  console.log(data1);
}

//add data into our array
function addData(obj) {
  data1.push(obj);
  updateDOM();
}

// update dom
function updateDOM(provideDAta = data1) {
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";
}
