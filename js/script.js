'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  generateTitleLinks();

  /*[Done] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [Done] add class 'active' to the clicked link */
  this.classList.add('active');

  /* [Done]-remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }


  /* [done] get 'href' attribute from the clicked link */
  let clickedArticleHref = this.getAttribute('href');

  /* [done] find the correct article using the selector (value of 'href' attribute) */
  let clickedArticle = document.querySelector(clickedArticleHref);

  /* [done] add class 'active' to the correct article */
  clickedArticle.classList.add('active');

}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListelector = '.titles';

function generateTitleLinks() {
  const titleList = document.querySelector(optTitleListelector);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for (let article of articles) {
    const articleID = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
