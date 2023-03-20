import axios from 'axios';

const Card = (article) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  const author = document.createElement('div');
  author.classList.add('author');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('img-container');
  const image = document.createElement('img');
  image.src = article.authorPhoto;
  const name = document.createElement('span');
  name.textContent = `By ${article.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageDiv);
  imageDiv.appendChild(image);
  author.appendChild(name);

  card.addEventListener('click', () => {
    console.log(article.headline);
  })
  
  return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  axios.get('http://localhost:5001/api/articles')
    .then(res => {
      const articleObj = res.data.articles;
      console.log("articleObj", articleObj);
      
      const articleArr = Object.values(articleObj);
      console.log('articleArr', articleArr);

      for (let i = 0; i < articleArr.length; i++){
        let arr = articleArr[i];
        arr.forEach(obj => {
          document.querySelector(selector).appendChild(Card(obj));
        });
        
      }

    })
    .catch(err => console.error(err));

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
