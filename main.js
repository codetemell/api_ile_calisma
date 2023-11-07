


const cardContainer = document.getElementById('card-container');
function getPhotoRequest() {
    return fetch('https://dummyjson.com/products?limit=21', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        cardContainer.style.display = 'flex';
        cardContainer.style.flexWrap = 'wrap';
  
        data.products.forEach(photo => {
          const card = document.createElement('div');
          card.classList.add('card');
        card.classList.add('cardd')
  
          const image = document.createElement('img');
          image.classList.add('card-img-top');
          image.src = photo.images[0]; // İlk resmi kullan
          image.alt = photo.title;
          image.style.width = '200px'
          image.style.width = '200px'
          image.classList.add('active')
          card.appendChild(image);
  
          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = photo.title;
          cardBody.appendChild(title);
  
     

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = 'Açıklama: ' + photo.description;
        cardBody.appendChild(description);
  
        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = 'Fiyat: $' + photo.price;
        cardBody.appendChild(price);
  
  
          const link = document.createElement('a');
          link.classList.add('btn', 'btn-danger');
          link.href = '#';
          link.textContent = 'Delete card';
          cardBody.appendChild(link);
          // const deleteButton = document.createElement('button');
          // deleteButton.classList.add('btn', 'btn-primary');
          // deleteButton.textContent = 'Delete';
          // cardBody.appendChild(deleteButton);
    
          link.addEventListener('click', () => {
            deleteData(photo.id); // Silme işlemini gerçekleştir
            card.remove(); // Kartı arayüzden kaldır
          });
  
          card.appendChild(cardBody);
  
          cardContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.log('Hata:', error);
      });
  }
  
  getPhotoRequest();
  const deleteData = (photo) => {
    fetch(`https://dummyjson.com/products/${photo}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Veri başarıyla silindi.');
        } else {
          console.log('Veri silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.log('Hata:', error);
      });
  };
 