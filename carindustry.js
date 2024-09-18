const availableCars =[
    {
        name: "Bugatti",
        features:{
        model: "Veyron",
        year: "2023",
        price: "2.6M",
        image: "/carIndustryimages/pexels-dante-juhasz-62201650-12964186.jpg",
        horsePower:"1479hp",
        maxSpeed:"267mph"
    }
},
{
    name: "Audi",
    features:{
        model: "R8",
        year: "2021",
        price: "3.5M",
        image: "/carIndustryimages/pexels-jay-johnson-3719210-6335848.jpg",
        horsePower:"3600hp",
        maxSpeed:"280mph"
    }
},
{
    name: "Ferrari",
    features:{
        model: "Enzo",
        year: "2022",
        price: "$1.1M",
        image: "/carIndustryimages/pexels-lynxexotics-3954444.jpg",
        horsePower:"789hp",
        maxSpeed:"220mph"
    }
},
{
    name: "Chevrolet",
    features:{
        model: "Corvette",
        year: "2021",
        price: "2.8M",
        image: "/carIndustryimages/pexels-jonathan-s-1623206-15677090.jpg",
        horsePower:"3600hp",
        maxSpeed:"280mph"
    }
},
{
    name: "Toyota",
    features:{
        model: "Camry",
        year: "2021",
        price: "2.2M",
        image: "/carIndustryimages/pexels-introspectivedsgn-27639778.jpg",
        horsePower:"2700hp",
        maxSpeed:"240mph"
    }
},
{
    name:"Rolls-Royce",
    features:{
        model: "Phantom",
        year: "2022",
        price: "$400k",
        image: "/carIndustryimages/pexels-abdul-rahman-2669315-5046305.jpg",
        horsePower:"563hp",
        maxSpeed:"150mph"
    }
},
{
    name: "Maserati",

    features:{
        model: "Quattroporte",
        year: "2021",
        price: "$520K",
        image: "/carIndustryimages/pexels-mikebirdy-977003.jpg",
        horsePower:"540hp",
        maxSpeed:"230mph"
    }
},
{
    name: "Tesla",
    features:{
        model: "Model S",
        year: "2022",
        price: "$850k",
        image: "/carIndustryimages/pexels-onbab-26546824.jpg",
        horsePower:"750hp",
        maxSpeed:"280mph",
        Electric: 'true',
    }
},
{
    name: "Lamborghini",
    features:{
        model: "Aventador",
        year: "2022",
        price: "$1.3M",
        image: "/carIndustryimages/pexels-maximilian-misera-627772628-17420994.jpg",
        horsePower:"5900hp",
        maxSpeed:"260mph"
    }
},
{
    name: "McLaren",
    features:{
        model: "P1",
        year: "2021",
        price: "$1.5M",
        image: "/carIndustryimages/pexels-lynxexotics-5050536.jpg",
        horsePower:"5900hp",
        maxSpeed:"260mph"
    }
}, 
{
    name: "Porsche",
    features:{
        model: "911",
        year: "2021",
        price: "$2.5M",
        image: "/carIndustryimages/pexels-wavyvisuals-377312923-17304859.jpg",
        horsePower:"5900hp",
        maxSpeed:"260mph"
    }
},
{
    name: "Nissan",
    features:{
        model: "Leaf",
        year: "2021",
        price: "1.8M",
        image: "nissan_leaf.jpg",
        horsePower:"3000hp",
        maxSpeed:"220mph"
    }
},
{
    name: "Jaguar",
    features:{
        model: "F-Type",
        year: "2022",
        price: "$1.8M",
        image: "jaguar_f_type.jpg",
        horsePower:"5600hp",
        maxSpeed:"260mph"
    }
},
{
    name: "Mercedes-Benz",
    features:{
        model: "E-Class",
        year: "2022",
        price: "$2.3M",
        image: "/carIndustryimages/pexels-kampratt-3457780.jpg",
        horsePower:"3600hp",
        maxSpeed:"240mph"
    }
},
{
    name: "BMW",
    features:{
        model: "X5",
        year: "2022",
        price: "$3.2M",
        image: "/carIndustryimages/pexels-mikebirdy-100653.jpg",
        horsePower:"5400hp",
        maxSpeed:"250mph"
    }
},
{
    name: "Volkswagen",
    features:{
        model: "Golf",
        year: "2022",
        price: "$2.2M",
        image: "/carIndustryimages/pexels-yoshi-lye-1597507927-27412642.jpg",
        horsePower:"2200hp",
        maxSpeed:"220mph"
    }
},
{
    name:"Toyota",
    features:{
        model: "Corolla",
        year: "2023",
        price: "$3.2M",
        image: "toyota_corolla.jpg",
        horsePower:"2200hp",
        maxSpeed:"220mph"
    }
},
{
    name: "Hyundai",
    features:{
        model: "Kona",
        year: "2023",
        price: "$2.9M",
        image: "/carIndustryimages/pexels-hyundaimotorgroup-11194510.jpg",
        horsePower:"3000hp",
        maxSpeed:"230mph"
    }
    
},
{
    name:"Lexus",
    features:{
        model: "lexus LC 500",
        Year: "2022" ,
        Price: "$93K" ,
        image: "/carIndustryimages/pexels-garvin-st-villier-719266-5581195.jpg" ,
        horsePower:"471hp",
        max_speed:"168mph"
    }
}
    ]
// const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById("search-input");
const carResult = document.getElementById("car-result");

document.addEventListener("DOMContentLoaded", () => {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchTerm = searchInput.value.toLowerCase();
      const matchingCar = availableCars.find(car => car.name.toLowerCase().includes(searchTerm));

      if (matchingCar) {
        carResult.innerHTML = `
          <h2>${matchingCar.name}</h2>
          <img src="${matchingCar.image}" alt="${matchingCar.name}">
          <ul>
            //  <li>year: ${matchingCar.properties.year}</li>
            <li>Price: ${matchingCar.properties.price}</li>
            <li>Horsepower: ${matchingCar.properties.horsepower}</li>
            <li>Max Speed: ${matchingCar.properties.maxSpeed}</li>
          </ul>
        `;
        // Change the background image or color here...
        document.body.style.backgroundImage = `url(${matchingCar.image})`;
      } else {
        carResult.innerHTML = "No matching car found.";
        document.body.style.backgroundImage = ""; // Reset background image
      }
    }
  });
});
// if (matchingCar) {
//     carResult.innerHTML = `
//       <h2>${matchingCar.name}</h2>
//       <img src="${matchingCar.image}" alt="${matchingCar.name}">
//       <ul>
//         <li>Year: ${matchingCar.properties.year}</li>
//         <li>Price: ${matchingCar.properties.price}</li>
//         <li>Horsepower: ${matchingCar.properties.horsepower}</li>
//         <li>Max Speed: ${matchingCar.properties.maxSpeed}</li>
//       </ul>
//     `;
//     // Change the background image or color here...
//     document.body.style.backgroundImage = `url(${matchingCar.image})`;
//   } else {
//     carResult.innerHTML = "No matching car found.";
//     document.body.style.backgroundImage = ""; // Reset background image
//   }