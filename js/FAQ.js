let plus = document.querySelectorAll('button .fa-plus');
let minus = document.querySelectorAll('button .fa-minus');
let question = document.querySelectorAll('button h2');
let paragraph = document.querySelectorAll('button + p');

question.forEach((eachQuestion, index) => {
    eachQuestion.addEventListener('click', () => {
        const isActive = paragraph[index].style.height;
        
        paragraph.forEach(p=>{
            p.style.height = '0px';
            plus[index].style.display = 'inline';
            minus[index].style.display = 'none';
        })
        
        if(isActive === '100px'){
                paragraph[index].style.height = '0px';
                plus[index].style.display = 'inline';
                minus[index].style.display = 'none';
        }

        else{
            paragraph[index].style.height = '100px';
            plus[index].style.display = 'none';
            minus[index].style.display = 'inline';
        }

    });
});
