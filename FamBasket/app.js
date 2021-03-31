const productsList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
var products = [];

//  products display and search functionality. 

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchString) 
        );
    });
    displayProducts(filteredProducts);
});

const loadProducts = async () => {
    try {
        const res = await fetch('products.json');
        products = await res.json();
        displayProducts(products);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (products) => {
    const htmlString = products
        .map((product) => {
            console.log(product);
            return `
            <li class="product" onclick="string()">
                <img src="${product.image}"></img>
                <h2 class="name">${product.name}</h2>
                <p>Price: ${product.price}$</p>
                <p class="contacts">Purchased by <a href="/chatBox/chatBox.html">${product.purchased}</a></p>
            </li>
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};

loadProducts();










