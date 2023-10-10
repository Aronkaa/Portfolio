document.querySelector("#push").addEventListener("click", function () {
  var inputField = document.querySelector("#newtask input");
  if (inputField.value.length == 0) {
    alert("Adj meg egy feladatot");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                   ${inputField.value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>
                </button>
            </div>
        `;
    inputField.value = "";

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }
  }
});
