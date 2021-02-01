var tableComment = {};
const comContent = document.querySelector("#comment");
var displayList = document.getElementById("listComment");
// var pseudo = document.getElementById('pseudo')

function display() {
  var ul = document.createElement("ul");
  var li;

  li = document.createElement("li");
  li.innerText = tableComment;
  ul.appendChild(li);
  displayList.appendChild(ul);
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(comContent.value);
  tableComment = comContent.value;
  display();
});
