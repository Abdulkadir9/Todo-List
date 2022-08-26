var txtTodo = document.querySelector(".txtTodo");
var btnSend = document.querySelector(".btnSend");

document.onkeydown = function (e) {
  // F12 Engelle
  if (e.keyCode == 123) {
    return false;
  }

  // CTRL+I Engelle
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }

  // CTRL+J Engelle
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }

  // CTRL+U Engelle
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
};

const ListAll = () => {
  var todoListsDiv = document.querySelector(".todo-lists-div");
  todoListsDiv.innerHTML = "";

  JSON.parse(localStorage.getItem("todo")).forEach((e) => {
    todoListsDiv.innerHTML +=
      '<div class="todo-list"><div class="todo-left"><p class="todo-title">' +
      e.title +
      '</p></div><i class="fa-solid fa-trash-can"></i></div>';
  });

  var selam = document.querySelectorAll(".fa-trash-can");
  selam.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
      var todoClickedTitle = e.parentElement.firstChild.children[0].innerHTML;
      console.log(todoClickedTitle);

      JSON.parse(localStorage.getItem("todo")).forEach((t) => {
        if (t.title == todoClickedTitle) {
          var allTodos = JSON.parse(localStorage.getItem("todo"));

          allTodos = allTodos.filter((td) => td.title != todoClickedTitle);

          localStorage.setItem("todo", JSON.stringify(allTodos));
        }
      });
    });
  });
};

if (localStorage.getItem("todo") === null) {
  localStorage.setItem("todo", JSON.stringify([]));
} else {
  ListAll();
}

txtTodo.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    dataAdd();
  }
});

btnSend.addEventListener("click", () => {
  dataAdd();
});

function dataAdd() {
  if (txtTodo.value != "") {
    var todo = {
      reader: false,
      title: txtTodo.value,
    };

    var todos = JSON.parse(localStorage.getItem("todo"));
    todos.push(todo);

    localStorage.setItem("todo", JSON.stringify(todos));

    ListAll();

    txtTodo.value = " ";
  }
}
