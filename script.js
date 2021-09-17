const searchInput = document.getElementById('searchInput');
const randomMeal = document.getElementById('randomMeal');
const results = document.getElementById('results');

let url = ``;

const fetchSearch = async() =>{
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/${url}`)
        .then(res => res.json())
        .then(res => res.meals)
}


const searchDisplay = async() =>{
    await fetchSearch(url);

    if(meals == null)
    {
        results.innerHTML = '<span class="noResult">Aucun résulta</span>';
    }
    results.innerHTML = (meals.map(meal =>(
        `
        <div class="searchContainer">
            <h2>${meal.strMeal}</h2>
            <div class="infos">
                <div>Origine:${meal.strArea}</div>
                <div>Catégorie: ${meal.strCategory}</div>
            </div>
            <img src="${meal.strMealThumb}" /><br>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
        `
        )).join('')
    );
};

const randomMealDisplay = async() =>{
    await fetchSearch(url);
    results.innerHTML = (meals.map(meal =>(
        `
        <div class="randomContainer">
            <h2>${meal.strMeal}</h2>
            <div class="infos">
                <div>Origine:${meal.strArea}</div>
                <div>Catégorie: ${meal.strCategory}</div>
            </div>
            <img src="${meal.strMealThumb}" /><br>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
        `
        )).join('')
    );
};




searchInput.addEventListener('input', (e)=>{
   url =`search.php?s=${e.target.value}`;
   searchDisplay()   
})


randomMeal.addEventListener('click', ()=>{
    url ='random.php';
    randomMealDisplay()   
 })

