export let products = [
    {
        name: "T-Shirt",
        description: "This sublimated shirt combines quality and style in a single garment.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/t-shirtWhite.jpg",
        price: 100,
        stock: 10,
        size: [
            { name: "XS", instock: true },
            { name: "S", instock: true  },
            { name: "M", instock: true  },
            { name: "L", instock: true  },
            { name: "XL", instock: false},
            { name: "XXL", instock: true }, 
            { name: "XXXL", instock: false }
        ],
        color: [
            { name: "White", class: "bg-white" , selectedClass: "ring-gray-400"},
            { name: "Gray", class: "bg-gray-200" , selectedClass: "ring-gray-400"},
            {name: "Black", class: "bg-gray-900" , selectedClass: "ring-gray-900"}
        ],
        category_id: "64334db95c595e5f0e296577", 
        
    },
    {
        name: "T-Shirt Pack",
        description: "This pack includes 3 high-quality cotton t-shirts.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/t-shirt.jpg",
        price: 250,
        stock: 12,
        size: [
            { name: "XS", instock: true },
            { name: "S", instock: true  },
            { name: "M", instock: true  },
            { name: "L", instock: true  },
            { name: "XL", instock: false},
            { name: "XXL", instock: true }, 
            { name: "XXXL", instock: false }
        ],
        color: [
            { name: "White", class: "bg-white" , selectedClass: "ring-gray-400"},
            { name: "Gray", class: "bg-gray-200" , selectedClass: "ring-gray-400"},
            {name: "Black", class: "bg-gray-900" , selectedClass: "ring-gray-900"}
        ],
        category_id: "64334e2c5190c1fc4b19a9ae"
    },
    
    {
        name: "Mug",
        description: "This mug is perfect for your morning coffee or tea.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/mug.jpg",
        price: 115,
        stock: 50,
        size: [],
        category_id: "64334f59606584c1846f29db"
    },
    {
        name: "Mug Set",
        description: "This set includes 3 ceramic mugs with unique designs.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/3mug.jpg",
        price: 235,
        stock: 8,
        size: ["Standard"],
        category_id: "64334f59606584c1846f29db"
    },

    {
        name: "Cap",
        description: "This cap will keep you cool and stylish all day long.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/cap.jpg",
        price: 125,
        stock: 20,
        size: [
            { name: "S/M", instock: true },
            { name: "L/XL", instock: true  }, 
        ],
        category_id: "64334fb19cd5877e65819b12"
    },
    {
        name: "Cap Set",
        description: "This set includes 3 high-quality caps with different designs.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/3cap.jpg",
        price: 260,
        stock: 5,
        size: [
            { name: "S/M", instock: true },
            { name: "L/XL", instock: true  },
        ],
        category_id: "64334fb19cd5877e65819b12"
    },
    {
        name: "Keychain",
        description: "This keychain will keep your keys organized and easy to find.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/keychain.jpg",
        price: 95,
        stock: 100,
        size: [],
        category_id: "64334feeb73f4a5473ad7de6"
    },
    {
        name: "Outfit Pack",
        description: "This pack includes a high-quality cotton t-shirt, a ceramic mug with a unique design, and a stylish cap.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/outfitpack.jpg",
        price: 280,
        stock: 7,
        size: [
            { name: "XS", instock: true },
            { name: "S", instock: true  },
            { name: "M", instock: true  },
            { name: "L", instock: true  },
            { name: "XL", instock: false},
            { name: "XXL", instock: true }, 
            { name: "XXXL", instock: false }
        ],
        color: [
            { name: "White", class: "bg-white" , selectedClass: "ring-gray-400"},
            { name: "Gray", class: "bg-gray-200" , selectedClass: "ring-gray-400"},
            {name: "Black", class: "bg-gray-900" , selectedClass: "ring-gray-900"}
        ],
        category_id: "64335078912e01500c3f345a"
    },
    {
        name: "Mousepad",
        description: "This mousepad provides precision and comfort for your mouse.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/mousepad.jpg",
        price: 120,
        stock: 25,
        size: [],
        category_id: "643350b84062430e52994b40"
    },
    {
        name: "Reusable Water Bottle",
        description: "This water bottle is eco-friendly and perfect for outdoor activities.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/WaterBottle.jpg",
        price: 120,
        stock: 15,
        size: [],
        category_id: "643350fccc2f6aa119952035"
    },
    {
        name: "Backpack",
        description: "This backpack is perfect for school, work or travel.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/Backpack.jpg",
        price: 340,
        stock: 15,
        size: [],
        color: [
            { name: "White", class: "bg-white" , selectedClass: "ring-gray-400"},
            { name: "Gray", class: "bg-gray-200" , selectedClass: "ring-gray-400"},
            {name: "Black", class: "bg-gray-900" , selectedClass: "ring-gray-900"}
        ],
        category_id: "6433512feac1a35f26d5cbde"
    }]