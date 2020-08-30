function createArticle() {
  let titleArticle = document.getElementById("createTitle");
  let textArticle = document.getElementById("createContent");
  if (titleArticle.value != "" && textArticle.value != "") {
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.innerHTML = titleArticle.value;
    p.innerHTML = textArticle.value;
    let article = document.createElement("article");
    article.appendChild(h3);
    article.appendChild(p);
    let section = document.getElementById("articles");
    section.appendChild(article);
    titleArticle.value = "";
    textArticle.value = "";
  }
}
