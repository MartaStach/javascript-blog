'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;

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

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}