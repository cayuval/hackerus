const gallery = [
    {
        image: '/public/birds.png',
        name: 'A Great picture',
        author: 'Bruno Brave',
        price: 200,
        inStock: true
    },
    {
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'Another Picture',
        author: 'Bruno Brave',
        price: 360,
        inStock: false
    },
    {
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'Morning Good',
        author: 'Carlla Uno',
        price: 295,
        inStock: true
    },
    {
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'Old Picture',
        author: 'Camilla Hart',
        price: 522,
        inStock: false
    },
]


function getProductsTemplate() {
    let html = ''
    let stockHtml = ''

    // const IMG_PATH = 'https://cdn.pixabay.com/photo'//configuration
    gallery.forEach(product => {
        stockHtml = ''
        if (product.inStock === false) {
            stockHtml = 'not aviable'
        }
        html += `<div class="card" style="margin:5px;width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <h6 class="card-title">${product.author}</h6>
                        <p class="card-text">$${product.price}</p>
                        <span class="card-text text-danger">${stockHtml}<span>
                    </div>
                </div>`;
    })
    return html

}

function displayProduct() {
    const container = document.getElementById('products-container')
    const productHtml = getProductsTemplate()
    container.innerHTML = productHtml;
}

displayProduct()