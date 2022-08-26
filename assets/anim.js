var txtTodo = document.querySelector(".txtTodo");
var btnSend = document.querySelector(".btnSend");

var hataEkraniAll = document.querySelector(".hata-ekrani-all");
var hata = document.querySelector(".hata");

var btnOzur = document.querySelector(".btnOzur");

btnSend.addEventListener("click", () => {
  if (txtTodo.value == "") {
    hataEkraniAll.style.display = "flex";

    setTimeout(() => {
      hataEkraniAll.style.opacity = "1";
    }, 200);
    setTimeout(() => {
      hata.style.transform = "translateY(0px)";
    }, 300);
    setTimeout(() => {
      hata.style.opacity = "1";
    }, 500);
  }
});

btnOzur.addEventListener("click", () => {
  hata.style.transform = "translateY(-400px)";
  setTimeout(() => {
    hata.style.opacity = "0";
  }, 100);
  setTimeout(() => {
    hataEkraniAll.style.opacity = "0";
  }, 400);
  setTimeout(() => {
    hataEkraniAll.style.display = "none";
  }, 500);
});

setTimeout(() => {
  var pagesBaslik = document.querySelector(".pagesBaslik");
  pagesBaslik.style.opacity = "1";
  pagesBaslik.style.transform = "translateY(0px)";
}, 400);
