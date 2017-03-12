
function store() {
    this.products = [

    {
      "category": "fruitsvegetables",
      "subcategory": "vegetables",
      "name" : "Tomato",
      "Price" : 45 ,
      "DiscPrice" : 40 ,
      "quantity" : 0,
      "picture": "images/tomato.jpeg",
      "measure" : "Kg"
    },
    {
      "category": "fruitsvegetables",
      "subcategory": "vegetables",
      "name" : "Onion",
      "Price" : 25 ,
      "DiscPrice" : 20 ,
      "quantity" : 0,
      "picture": "images/onion.jpg",
      "measure" : "Kg"
    },
    {
      "category": "fruitsvegetables",
      "subcategory": "vegetables",
      "name" : "Potato",
      "Price" : 34 ,
      "DiscPrice" : 31 ,
      "quantity" : 0,
      "picture": "images/potato.jpg",
      "measure" : "Kg"
    },
    {
      "category": "fruitsvegetables",
      "subcategory": "vegetables",
      "name" : "Potato",
      "Price" : 34 ,
      "DiscPrice" : 31 ,
      "quantity" : 0,
      "picture": "images/potato.jpg",
      "measure" : "Kg"
    },
    {
      "category": "fruitsvegetables",
      "subcategory": "Fruits",
      "name" : "Carrot",
      "Price" : 24 ,
      "DiscPrice" : 21 ,
      "quantity" : 0,
      "picture": "images/Carrot.jpg",
      "measure" : "Kg"
    },
    {
      "category": "milkdiary",
      "subcategory": "milk",
      "name" : "Cheese",
      "Price" : 125 ,
      "DiscPrice" : 100 ,
      "quantity" : 0,
      "picture": "images/cheese.jpeg",
      "measure" : "Kg"
    },

    {
      "category": "milkdiary",
      "subcategory": "milk",
      "name" : "Paneer",
      "Price" : 155 ,
      "DiscPrice" : 140 ,
      "quantity" : 0,
      "picture": "images/paneer.jpeg",
      "measure" : "Kg"
    },

    {
      "category": "milkdiary",
      "subcategory": "milk",
      "name" : "Butter",
      "Price" : 225 ,
      "DiscPrice" : 200 ,
      "quantity" : 0,
      "picture": "images/butter.jpeg",
      "measure" : "Kg"
    },
    {
      "category": "milkdiary",
      "subcategory": "milk",
      "name" : "Lassi",
      "Price" : 55 ,
      "DiscPrice" : 40 ,
      "quantity" : 0,
      "picture": "images/lassi.jpeg",
      "measure" : "L"
    }


  ];
}


store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
