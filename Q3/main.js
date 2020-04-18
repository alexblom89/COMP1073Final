let section = document.querySelector('section');

let button = document.querySelector('button');

button.addEventListener('click', function(){
    fetch('https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json')
        .then(response => response.json())
        .then(function(response){
            let cats = response.cats;

            for(let i = 0; i < cats.length; i++){

                let article = document.createElement('article');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');

                p1.textContent = 'Name: ' + cats[i].name;
                p2.textContent = 'Species: ' + cats[i].species;

                let join = cats[i].favFoods.join(", ");
                p3.innerHTML = 'Favourite Foods: ' + join;

                p4.textContent = 'Age: ' + cats[i].age;

                article.appendChild(p1);
                article.appendChild(p2);
                article.appendChild(p3);
                article.appendChild(p4);
                section.appendChild(article);
            }
        })
});