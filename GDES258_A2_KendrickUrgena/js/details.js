document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Toggle menu visibility when menuToggle is clicked
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Fetch Contentful entry details based on the 'id' parameter in the URL
    var textInURL = window.location.search;
    var parametersInURL = new URLSearchParams(textInURL);
    var id = parametersInURL.get('id');

    console.log(id);

    if (id) {
        var client = contentful.createClient({
            space: 'e8y2mnhzr0hg',
            accessToken: 'DpIhfob4bikEb5QaQomyjWxMsi6ovOT88rYL7_TXl4E',
        });

        client.getEntry(id)
            .then(function(entry) {
                var details = document.getElementById('details');

                var name = document.createElement('h2');
                name.textContent = entry.fields.name;
                details.appendChild(name);

                var image = document.createElement('img');
                image.classList.add('product-image');
                image.src = 'https:' + entry.fields.image.fields.file.url;
                details.appendChild(image);

                var category = document.createElement('h3');
                category.classList.add('product-category');
                category.textContent = entry.fields.category;
                details.appendChild(category);

                var description = document.createElement('p');
                description.classList.add('product-description');
                description.textContent = entry.fields.description;
                details.appendChild(description);

                var price = document.createElement('p');
                price.classList.add('product-price');
                price.textContent = entry.fields.price;
                details.appendChild(price);
            })
            .catch(function(error) {
                console.error('Error fetching Contentful entry:', error);
            });
    } else {
        console.error('No ID parameter found in the URL');
    }
});