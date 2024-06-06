let buyButton = document.querySelectorAll('.buy-btn');

let items = [];
let id = 1;

buyButton.forEach(buyButton=>{
    buyButton.addEventListener('click',(e)=>{
        let parentElement = e.target.parentElement;
        let clothImageURL = parentElement.querySelector('.cloth-image img').getAttribute('src');
        let clothBrand = parentElement.querySelector('.cloth-brand h5').innerText;
        let clothName = parentElement.querySelector('.cloth-name h4').innerText;
        let clothPrice = parentElement.querySelector('.cloth-price > span').innerText.slice(1); // to remove dollar sign

        items.push(
            {image: `${clothImageURL}`,
            productName: `${clothName}`,
            price: `${clothPrice}`,
            qty: '1',
            total: `${clothPrice}`,
            productID : `product-${id}`
        }
        )

        prevItems.push(...items);
        id++;

        sessionStorage.setItem('items', JSON.stringify(items));
    })
})
