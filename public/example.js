document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const result = document.getElementById('results');
    
    if (!form || !result) {
        console.error('Required elements not found!')
        return
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const titleValue = document.getElementById('title').value;
        const priceValue = document.getElementById('price').value;

        if (!titleValue && !priceValue) {
            result.innerHTML = "<p>Please enter at least one search criteria.</p>";
            result.style.display = 'block'
            return;
        }

        const URL = generateURL(titleValue, priceValue);

        try {
            const response = await fetch(URL);
            const data = await response.json();

            displayResults(data);
        } catch (error) {
            result.innerHTML = `<p>Error fetching data: ${error}</p>`;
        };
    });

    const generateURL = (title, price) => {
        const params = new URLSearchParams();
        if (title) params.append('title', title);
        if (price) params.append('price', price);
    
        return `/api/search?${params.toString()}`;
    };
    
    const displayResults = (data) => {
        result.innerHTML = '';
    
        if (data.error) {
            result.innerHTML = `<p>${data.error}</p>`;
            return;
        };
    
        if (data.length === 0) {
            result.innerHTML = `<p>No results found.</p>`;
            return;
        };
    
        data.forEach(product => {
            result.innerHTML += `
                    <li class='result'>
                        <h1>${product.title}</h1>
                        <img src="${product.image}" alt="${product.title}" width="350">
                        <h1><strong>Price:</strong> $${product.price}</h1>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Rating:</strong> ${product.rating.rate} (from ${product.rating.count} reviews)</p>
                    </li>
                `;
        });
    
        result.style.display = 'block'
    };
});
