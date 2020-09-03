function getArticleGenerator(articles) {
  const content = document.querySelector("#content");
  function showNext() {
    if (articles.length > 0) {
      const article = document.createElement("article");
      article.textContent = articles.shift();
      content.appendChild(article);
    }
  }
  return showNext;
}
