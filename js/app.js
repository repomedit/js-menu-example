const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const buttonContainer = document.getElementById('btn-container');
const listSection = document.getElementById('list-section');
const categories = ["All"];

function getCategories(){
  menu.forEach((item) => {
    if(!categories.includes(item.category)){
      categories.push(item.category);
    }
  })
}

function setupCategories(){
  categories.forEach((element) => {
    let button = document.createElement("button");
    button.classList.add("btn");  
    button.classList.add("btn-outline-dark");
    button.classList.add("btn-item");
    button.innerText = element;
    buttonContainer.appendChild(button);
    button.addEventListener("click", () => {
      setupItemList(element);
    });
  });
}

function setupItemList(name){
  listSection.innerHTML = "";
  menu.filter((item) => { 
    return (name === "All") ? true : item.category === name 
  }).forEach((element) => {
    let container = document.createElement("div");
    container.classList.add("menu-items");
    container.classList.add("col-lg-6");
    container.classList.add("col-sm-12");
    let image = document.createElement("img");
    image.classList.add("photo");
    image.src = element.img;
    let menuInfoDiv = document.createElement("div");
    menuInfoDiv.classList.add("menu-info");

    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    let menuTitleH4 = document.createElement("h4");
    menuTitleH4.innerText = element.title;
    let priceH4 = document.createElement("h4");
    priceH4.classList.add("price");
    priceH4.innerText = element.price;

    let menuTextDiv = document.createElement("div");
    menuTextDiv.classList.add("menu-text");
    menuTextDiv.innerText = element.desc;
    
    container.appendChild(image);
    menuTitle.appendChild(menuTitleH4);
    menuTitle.appendChild(priceH4);
    menuInfoDiv.appendChild(menuTitle);
    menuInfoDiv.appendChild(menuTextDiv);
    container.appendChild(menuInfoDiv);
    listSection.appendChild(container);
  });
}


getCategories();
setupCategories();
setupItemList("All");