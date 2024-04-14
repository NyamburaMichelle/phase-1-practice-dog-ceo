console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',() => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    let image = document.querySelector("#dog-image-container");
    let breeds = document.querySelector("#breed-dropdown")

//image.createEvent('click', )


fetch(imgUrl)
.then(response => response.json())
.then(data => {
        const image= document.getElementById('dog-image-container');
        data.message.forEach(imgUrl => {
          const img = document.createElement('img');
          img.src = imgUrl;
          image.appendChild(img);
        });

 })
 //const breedUrl = "https://dog.ceo/api/breeds/list/all";
 fetch(breedUrl)
   .then(response => response.json())
   .then(data => {
     const breedList = document.getElementById('dog-breeds');
     for (const breed in data.message) {
       const breedItem = document.createElement('li');
       breedItem.textContent = breed;
       breedList.appendChild(breedItem);
     }

})
const breedItems = document.querySelectorAll('#dog-breeds li');
breedItems.forEach(item => {
  item.addEventListener('click', function() {
    item.style.color = 'black'; 
  });
  //const breeds= document.getElementById('breed-dropdown');
  breeds.addEventListener('change', function() {
      const selectedLetter = breeds.value.toLowerCase();
      breedItems.forEach(item => {
          const breedName = item.textContent.toLowerCase();
          if (breedName.startsWith(selectedLetter)) {
              item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
            
        });
})

    })
})
