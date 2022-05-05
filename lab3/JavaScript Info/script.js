var btn = document.getElementById("btn");
var input = document.getElementById("input-note");
var tasks = document.getElementById("tasks");
var id = 1;

btn.addEventListener("click", addTask);
var inputContent="";

function addTask() {
    if (input.value === "") {
        alert("wrong input, write something down!");
    } else {
        inputContent = input.value;
        var item = `<li id="li-${id}"><input id="box-${id}" class="checkboxes" type="checkbox" onchange="statusCheck(this)">
        ${inputContent}<img src="recycle-bin.png" alt="recycle bin" title="recycle bin" ></li>`;
        tasks.insertAdjacentHTML("beforeend", item);
        document.getElementById("input-note").value = "";
        id++;
    }
}

tasks.addEventListener("click", isBoxChecked);

tasks.addEventListener("click", isImageClicked);

function isImageClicked(event) {
    var node = event.target;
    if (node.tagName === "IMG") {
        tasks.removeChild(node.parentNode);
    }
}

function statusCheck(status){
    if(status.checked){
      input.value = inputContent;
      
    }
}

function isBoxChecked(event) {
    var node = event.target;
    if (node.type === "checkbox") {
        if (node.parentNode.style.textDecoration === "line-through") {
            node.parentNode.style.textDecoration = "none";
        } else {
            node.parentNode.style.textDecoration = "line-through"
        }

    }
}
