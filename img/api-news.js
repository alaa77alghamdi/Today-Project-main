console.log("hee");

const apiNkey="091e5b923da54a2ea89ae577bfd8f52c"


const ApiNew='https://newsapi.org/v2/everything?q=bitcoin&apiKey=091e5b923da54a2ea89ae577bfd8f52c'

let cat="Health"


let catApi=`https://newsapi.org/v2/top-headlines?=&apiKey=${apiNkey}&category`

let headings=document.querySelectorAll("#heading a");
for(let heading of headings){
heading.addEventListener("click", (event)=>{
 
    let cat=event.target.id;
    catApi=`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=091e5b923da54a2ea89ae577bfd8f52c`
    
    searchN()
})

}
 

function searchN(){


fetch(catApi)
  .then(response => response.json())
  .then(data => {

    console.log(data.articles)


    document.getElementById("news").innerHTML= data.articles.map(news =>
        
        `
        <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${news.author}</strong>
            <h3 class="mb-0">${news.title}</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">${news.description}</p>
            <a href="${news.url}" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
  <img src="${news.urlToImage}">
          </div>
        </div>
      </div>
        `
        
        
        ).join('')
  }
    
    
  );}
  searchN()





  let weather=` http://api.weatherbit.io/v2.0/current?key=abd4fbbf6c484a7dba3cb2c3f094e683&city=Raleigh&country=US&city_id=8953360`




  fetch(weather)
  .then(response => response.json())
  .then(data => {

    console.log(data.data)

    document.getElementById("waether").innerHTML= data.data.map(waether =>
    `
    <div class="col-md-6 px-0">
   
      </div>
    
    `


    ).join('')
}

    
    
    
    
    );
