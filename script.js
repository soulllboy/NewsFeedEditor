var btnAddEl = document.getElementById("btn_add_new");
var sep_or = document.querySelector("#separator");

var onClickDelete = function () {
  var formLegacy = this.parentElement.parentElement;
  formLegacy.remove();
};

var onClickSave = function () {
  var formCurr = this.parentElement.parentElement;
  var formLegacy = formCurr.nextSibling;
  var boolChecker = true;
  var field01 = formCurr.querySelector(".field_title");
  if (field01.value == "") {
    boolChecker = false;
    field01.style.border = "1px solid red";
  } else {
    field01.style.border = "1px solid #d9d9d9";
  }
  var field02 = formCurr.querySelector(".field_author");
  if (field02.value == "") {
    boolChecker = false;
    field02.style.border = "1px solid red";
  } else {
    field02.style.border = "1px solid #d9d9d9";
  }
  var field03 = formCurr.querySelector(".field_text");
  if (field03.value == "") {
    boolChecker = false;
    field03.style.border = "1px solid red";
  } else {
    field03.style.border = "1px solid #d9d9d9";
  }
  if (boolChecker == true) {
    formLegacy.querySelector("h1").innerHTML = field01.value;
    formLegacy.querySelector("h2").innerHTML = field02.value;
    let dateX = formLegacy.querySelector("h3").innerHTML;
    let editX = " (edited " + new Date().toLocaleString() + ")";
    formLegacy.querySelector("h3").innerHTML =
      dateX.indexOf("edited") > -1
        ? dateX.slice(0, -30) + editX
        : dateX + editX;
    formLegacy.querySelector(".paragraphs_part").innerHTML = field03.value;
    formLegacy.style.display = "flex";
    formCurr.remove();
  }
};

var onClickEdit = function () {
  var formLegacy = this.parentElement.parentElement;
  var form2 = document.querySelector(".form_edit_post").cloneNode(true);
  form2.style.display = "flex";
  form2.querySelector(".field_title").value = formLegacy
    .querySelector("h1")
    .textContent.replace(/\s+/g, " ")
    .trim();
  form2.querySelector(".field_author").value = formLegacy
    .querySelector("h2")
    .textContent.replace(/\s+/g, " ")
    .trim();
  form2.querySelector(".field_text").value = formLegacy
    .querySelector(".paragraphs_part")
    .textContent.replace(/\s+/g, " ")
    .trim();
  form2.querySelector(".field_text").style.height = "150px";
  form2
    .querySelectorAll(".btn_default")[0]
    .addEventListener("click", onClickSave);
  formLegacy.before(form2);
  formLegacy.style.display = "none";
};

var onClickAdd = function () {
  var formLegacy = btnAddEl.parentElement.parentElement;
  var form2 = document.querySelector(".form_post").cloneNode(true);
  var boolChecker = true;
  var field01 = formLegacy.querySelector(".field_title");
  if (field01.value == "") {
    boolChecker = false;
    field01.style.border = "1px solid red";
  } else {
    field01.style.border = "1px solid #d9d9d9";
  }
  var field02 = formLegacy.querySelector(".field_author");
  if (field02.value == "") {
    boolChecker = false;
    field02.style.border = "1px solid red";
  } else {
    field02.style.border = "1px solid #d9d9d9";
  }
  var field03 = formLegacy.querySelector(".field_text");
  if (field03.value == "") {
    boolChecker = false;
    field03.style.border = "1px solid red";
  } else {
    field03.style.border = "1px solid #d9d9d9";
  }
  if (boolChecker == true) {
    form2.querySelector("h1").innerHTML = field01.value;
    field01.value = "";
    form2.querySelector("h2").innerHTML = field02.value;
    field02.value = "";
    form2.querySelector("h3").innerHTML = new Date().toLocaleString();
    form2.querySelector(".paragraphs_part").innerHTML = field03.value;
    field03.value = "";
    form2
      .querySelectorAll(".btn_default")[0]
      .addEventListener("click", onClickEdit);
    form2
      .querySelectorAll(".btn_default")[1]
      .addEventListener("click", onClickDelete);
    sep_or.before(form2);
  }
};

btnAddEl.addEventListener("click", onClickAdd);

var btnsEdit = document.querySelectorAll(
  ".form_post .form_footer .btn_default:first-child"
);
var btnsDelete = document.querySelectorAll(
  ".form_post .form_footer .btn_default:last-child"
);
for (var i = 0; i < 3; i += 1) {
  btnsEdit[i].addEventListener("click", onClickEdit);
  btnsDelete[i].addEventListener("click", onClickDelete);
}
