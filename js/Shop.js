// products code
const products = [
    {
        image: '../images/Home-Page/women-cloth-1.jpg',
        brandName: 'Pure Pineapple',
        productName: 'Pure Pineapple',
        oldPrice: ' <s>35.00</s>',
        newPrice: '14.00',
        id: 'women-product',
        onSale : '<span class="sale">SALE</span>'
    },
    
    {
        image: '../images/Home-Page/women-cloth-2.jpg',
        brandName: 'SHOES',
        productName: 'Guangzhou sweater',
        oldPrice: '',
        newPrice: '14.00',
        id: 'women-product',
        onSale: '',
    },
    
    {
        image: '../images/Home-Page/women-cloth-3.jpg',
        brandName: 'TOWEL',
        productName: 'Converse Shoes',
        oldPrice: '',
        newPrice: '34.00',
        id: 'women-product',
        onSale: '',
    },
    
    {
        image: '../images/Home-Page/women-cloth-4.jpg',
        brandName: 'TOWEL',
        productName: 'Pure Pineaple',
        oldPrice: '',
        newPrice: '34.00',
        id: 'women-product',
        onSale: '',
    },
    
    {
        image: '../images/Home-Page/men-cloth-1.jpg',
        brandName: 'Pure Pineapple',
        productName: 'Pure Pineapple',
        oldPrice: ' <s>35.00</s>',
        newPrice: '14.00',
        id: 'men-product',
        onSale : '<span class="sale">SALE</span>'
    },
    
    {
        image: '../images/Home-Page/men-cloth-2.jpg',
        brandName: 'SHOES',
        productName: 'Guangzhou sweater',
        oldPrice: '',
        newPrice: '14.00',
        id: 'men-product',
        onSale: '',
    },
    
    {
        image: '../images/Home-Page/men-cloth-3.jpg',
        brandName: 'TOWEL',
        productName: 'Converse Shoes',
        oldPrice: '',
        newPrice: '34.00',
        id: 'men-product',
        onSale: '',
    },

    {
        image: '../images/Home-Page/women-cloth-4.jpg',
        brandName: 'TOWEL',
        productName: 'Pure Pineaple',
        oldPrice: '',
        newPrice: '34.00',
        id: 'women-product',
        onSale: '',
    },
    
    {
        image: '../images/Home-Page/men-cloth-4.jpg',
        brandName: 'TOWEL',
        productName: 'Pure Pineaple',
        oldPrice: ' <s>35.00</s>',
        newPrice: '14.00',
        id: 'men-product',
        onSale : '<span class="sale">SALE</span>'
    },
];

let clutter = '';

products.forEach((item, index) => {
    clutter +=
        `
        <article class="cloth-card" id="${item.id}-${index+1}">
                            <figure class="cloth-image"><img src="${item.image}" alt="${item.id}" />${item.onSale}</figure>
                            <div class="cloth-brand cloth-info"><h5>${item.brandName}</h5></div>
                            <div class="cloth-name cloth-info"><h4>${item.productName}</h4></div>
                            <div class="cloth-price cloth-info"><span>$${item.newPrice}</span> &nbsp; ${item.oldPrice}</div>
                        </article>
    `
})

document.querySelector('.clothing-card-container').innerHTML = clutter;
console.log(clutter);
// ------- end