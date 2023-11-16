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
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
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

// ///////////////////button tanımalamarı/////////////////

// All
const list=document.querySelector(".section-center");
const allBtn=document.getElementById("All");

// displayAllMenuItems(menu[])//bu şekilde olmadı


allBtn.addEventListener("click", function AllMenuItems(){
  list.innerHTML = "";

  menu.forEach((food) => {
    const newDiv = document.createElement("div");
    const h3=document.createElement("h3");
    const p=document.createElement("p");

      h3.innerHTML=` ${food.title}`
      p.innerHTML=`Fiyat: ${food.price}`
    newDiv.innerHTML = `
      ${food.category} <br>
      <img src="${food.img}" alt="${food.title} "class="img-class""> `;
       list.appendChild(h3);
      list.appendChild(newDiv);
      list.appendChild(p)
  });
})

// allBtn.addEventListener("click", AllMenuItems );//displayAllmenu bizim fonksiyonumuz

// ********************************* KOREAMENU***************************

const korea=document.getElementById("Korea");//buttonu tanımladık
  korea.addEventListener("click",  ()=>{ //buttona tıkladığında yemeklerin gelemsi için fonksiyon yazdık
  
    const koreaMenu=menu.filter(item=>item.category==="Korea")
    list.innerHTML = "";

    koreaMenu.forEach((item)=>{
    const newDiv = document.createElement("p");
    const h3=document.createElement("h3");
    const p=document.createElement("p");
      h3.innerHTML=` ${item.title}`
      p.innerHTML=`${item.price}`
    newDiv.innerHTML = `
      ${item.category} <br>
      <img src="${item.img}" alt="${item.title} "class="img-class""> `;
       list.appendChild(h3);
      list.appendChild(newDiv);
      list.appendChild(p);

  })
})

//******************************JAPANMENU*****************************************/
const japan=document.getElementById("Japan");//buttonumuz

japan.addEventListener("click",()=>{ //olay dinleyicmiz
const japanMenu=menu.filter(item1=>item1.category==="Japan"); //array içerisinde japan filterelemesi yapması için foksiyon
  list.innerHTML=""; //alanı boşaltmak için 
  // filtrelemeden sonra gerekli işlemleri yapmak için forEach ile array içerisinde gezip bulacaz
  japanMenu.forEach(item1=>{
    const newDiv = document.createElement("p");
    const h3=document.createElement("h3");
    const p=document.createElement("p");

      h3.innerHTML=` ${item1.title}`
      p.innerHTML=`${item1.price}`
    newDiv.innerHTML = `
      ${item1.category} <br>
      <img src="${item1.img}" alt="${item1.title} "class="img-class""> `;
       list.appendChild(h3);
      list.appendChild(newDiv);
      list.appendChild(p);
  })

})

// *****************************CHİNA MENU****************************************************

const china=document.getElementById("China");

    china.addEventListener("click",()=>{
       const chinaMenu=menu.filter(item2=>item2.category==="China");
       list.innerHTML="";

       chinaMenu.forEach(item2=>{
        const newDiv = document.createElement("p");
        const h3=document.createElement("h3");
        const p=document.createElement("p");
          h3.innerHTML=` ${item2.title}`
          p.innerHTML=`${item2.price}`
        newDiv.innerHTML = `
          ${item2.category} <br>
          <img src="${item2.img}" alt="${item2.title} "class="img-class""> `;
           list.appendChild(h3);
          list.appendChild(newDiv);
          list.appendChild(p);
       })
    })


