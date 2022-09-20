'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /*[Done] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
 
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [Done] add class 'active' to the clicked link */
  console.log('clickedElement', clickedElement);
  this.classList.add('active');
  console.log(this);

  /* [Done]-remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');
  console.log(activeArticles)
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }


  /* [done] get 'href' attribute from the clicked link */
  let clickedArticleHref = this.getAttribute('href');
  console.log("href = " + clickedArticleHref);
  
  /* [done] find the correct article using the selector (value of 'href' attribute) */
  let clickedArticle = document.querySelector(clickedArticleHref);
  console.log(document.querySelector(clickedArticleHref));

  /* [done] add class 'active' to the correct article */
  clickedArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}