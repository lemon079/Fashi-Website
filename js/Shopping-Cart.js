// products code
let clutter = '';
let retrieveItems = sessionStorage.getItem('items'); // retrieving items array from sessionStorage
retrieveItems = JSON.parse(retrieveItems);

retrieveItems.forEach((item, index) => {
    clutter +=
        `<tr class='product' id="product-${index+1}">
    <td><img src="${item.image}" alt="product-${index+1}"></td>
    <td><h5>${item.productName}</h5></td>
    <td class="item-price">$${item.price}</td>
    <td class="qty">
    <button><i class="fa-solid fa-minus"></i></button>
    <span>${item.qty}</span>
    <button><i class="fa-solid fa-plus"></i></button>
    </td>
    <td class="total-products-price">$${item.total}</td>
    <td>
    <button class="delete-product-btn">
    <i class="fa-solid fa-x"></i>
    </button>
    </td>
    </tr>
    `
});

document.querySelector('.products-table tbody').innerHTML = clutter;

let productContainer = document.querySelectorAll('.qty');
let qty = document.querySelectorAll('.qty span');
let total = document.querySelectorAll('.total-products-price');
let price = document.querySelectorAll('.item-price');
let subTotal = document.getElementById('sub-total');
let grandTotal = document.getElementById('grand-total');
let deleteProduct = document.querySelectorAll('.delete-product-btn');

const calculations = (event, index) => {
    if (event.target.classList.contains('fa-plus')) {
        qty[index].innerText++;
        total[index].innerText = qty[index].innerText * Number.parseFloat(price[index].innerText.slice(1)).toFixed(2); // we did slice(1) so that the currency sign is not included in the calculation.
        total[index].innerText = '$' + total[index].innerText; // after calculations we again add currency sign
    }

    else if (event.target.classList.contains('fa-minus') && qty[index].innerText != 1) {
        qty[index].innerText--;
        total[index].innerText = qty[index].innerText * Number.parseFloat(price[index].innerText.slice(1)).toFixed(2); // we did slice(1) so that the currency sign is not included in the calculation.
        total[index].innerText = '$' + total[index].innerText; // after calculations we again add currency sign
    }

    if (qty[index].innerText != 1 && (event.target.classList.contains('fa-plus') || event.target.classList.contains('fa-minus'))) {
        // after we increment or decrement, add the currency sign with (sub-total) and (grand-total)
        subTotal.innerText = '$' + calculateGrandTotal(total);
        grandTotal.innerText = subTotal.innerText;
    }// this if statement is important to avoid any unusual behavior or change of grand and sub total amount when click anything beside + or -

}

// calculates grand-total
const calculateGrandTotal = (total) => {
    // 1- converting nodelist 'total' to an array
    // 2- using forEach method to iterate over each product's total amount and adding it.
    // 3- used slice(1) to get string except the currency sign so that we dont have any error in calculations since currency is not a number or anything on which we apply DMAS rule.
    // 4- eachProductTotal.innerText generates data in string so we used Number.parseInt/Float to convert it into Number.
    // 5- finally, returning the total of each product.

    // NOTE: didn't use reduce method since it was giving error due to slice() becuz slice() is used on string and reduce is only for arrays

    let value = 0;
    Array.from(total).forEach((eachProductTotal) => {
        value += Number.parseFloat(eachProductTotal.innerText.slice(1));
    })
    return value;
}

// when a user first comes on page, it will calculate the sub-total and grand-total of existing products
subTotal.innerText = '$' + calculateGrandTotal(total); // it will put currency sign on the amount
grandTotal.innerText = subTotal.innerText; // will show same as sub-total

productContainer.forEach((eachProduct, index) => {
    eachProduct.addEventListener('click', (event) => {

        calculations(event, index);
    });
});

// ------- to remove an item from cart
deleteProduct.forEach(delBtn => {
    delBtn.addEventListener('click', (e) => {
        let parentElement = e.target.parentElement;
        while (!parentElement.classList.contains('product')) {
            parentElement = parentElement.parentElement;
        }

       retrieveItems = retrieveItems.filter(item=>{
            if(item.productID === parentElement.getAttribute('id')){
                parentElement.remove();
            }
            else{
                return item;
            }
        })
        sessionStorage.setItem('items', JSON.stringify(retrieveItems));
    })
})
// ------- end
