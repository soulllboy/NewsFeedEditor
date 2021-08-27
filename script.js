var btnAddEl = document.getElementById("btn_add_new");
var sep_or = document.querySelector("#separator");

var onClickDelete = function () {
  var formLegacy = this.parentElement.parentElement;
  formLegacy.remove();
};

var onClickSave = function () {
  var formCurr = this.parentElement.parentElement;
  var formLegacy = formCurr.nextSibling;
  formLegacy.querySelector("h1").innerHTML =
    formCurr.querySelector(".field_title").value;
  formLegacy.querySelector("h2").innerHTML =
    formCurr.querySelector(".field_author").value;
  let dateX = formLegacy.querySelector("h3").innerHTML;
  let editX = " (edited " + new Date().toLocaleString() + ")";
  formLegacy.querySelector("h3").innerHTML =
    dateX.indexOf("edited") > -1 ? dateX.slice(0, -30) + editX : dateX + editX;
  formLegacy.querySelector(".paragraphs_part").innerHTML =
    formCurr.querySelector(".field_text").value;
  formLegacy.style.display = "flex";
  formCurr.remove();
};

var onClickEdit = function () {
  var formLegacy = this.parentElement.parentElement;
  var form2 = document.querySelector(".form_edit_post").cloneNode(true);
  form2.style.display = "flex";
  form2.querySelector(".field_title").value =
    formLegacy.querySelector("h1").innerHTML;
  form2.querySelector(".field_author").value =
    formLegacy.querySelector("h2").innerHTML;
  form2.querySelector(".field_text").value =
    formLegacy.querySelector(".paragraphs_part").innerHTML;
  form2
    .querySelectorAll(".btn_default")[0]
    .addEventListener("click", onClickSave);
  formLegacy.before(form2);
  formLegacy.style.display = "none";
};

var onClickAdd = function () {
  var formLegacy = btnAddEl.parentElement.parentElement;
  var form2 = document.querySelector(".form_post").cloneNode(true);
  form2.querySelector("h1").innerHTML =
    formLegacy.querySelector(".field_title").value;
  form2.querySelector("h2").innerHTML =
    formLegacy.querySelector(".field_author").value;
  form2.querySelector("h3").innerHTML = new Date().toLocaleString();
  form2.querySelector(".paragraphs_part").innerHTML =
    formLegacy.querySelector(".field_text").value;
  form2
    .querySelectorAll(".btn_default")[0]
    .addEventListener("click", onClickEdit);
  form2
    .querySelectorAll(".btn_default")[1]
    .addEventListener("click", onClickDelete);
  sep_or.before(form2);
};

btnAddEl.addEventListener("click", onClickAdd);
