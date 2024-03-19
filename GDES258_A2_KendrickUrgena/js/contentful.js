console.log("hello world");

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
  });
});

var client = contentful.createClient({
    space: 'e8y2mnhzr0hg',
    accessToken: 'DpIhfob4bikEb5QaQomyjWxMsi6ovOT88rYL7_TXl4E',
  });

var sustainableLiving = document.getElementById('sustainable-living');


  client.getEntries().then(function (entries) {
    entries.items.forEach(function (entry) {
      var entryDiv = document.createElement('div');
      entryDiv.classList.add('entry-div');

      //if (entry.fields.name) {
          
      var name = document.createElement('h2');
      name.innerHTML = entry.fields.name;
      entryDiv.appendChild(name);

      var description = document.createElement('p');
      description.innerHTML = entry.fields.description;
      entryDiv.appendChild(description);

      var category = document.createElement('h3');
      category.innerHTML = entry.fields.category;
      entryDiv.appendChild(category);

      var image = document.createElement('img');
      image.src = 'https:' + entry.fields.image.fields.file.url;
      entryDiv.appendChild(image);

      var price = document.createElement('p');
      price.innerHTML = entry.fields.price;
      entryDiv.appendChild(price);

      var detailsButton = document.createElement('a');
      detailsButton.innerHTML = "Get Details";
      entryDiv.appendChild(detailsButton);
      detailsButton.href = "details.html?id="+entry.sys.id;
      console.log(entry);

      detailsButton.classList.add('my-class');

      if (entry.fields.category == 'tutorial'){
        
      }

      sustainableLiving.appendChild(entryDiv);
      // do whatever with the info in the field
      
    });
  });
