export let products = [
    {
        name: "T-Shirt",
        description: "This sublimated shirt combines quality and style in a single garment.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/t-shirtWhite.jpg",
        price: 100,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        sizes: [
            { name: "XS", inStock: true },
            { name: "S", inStock: true  },
            { name: "M", inStock: true  },
            { name: "L", inStock: true  },
            { name: "XL", inStock: false},
            { name: "XXL", inStock: true }, 
            { name: "XXXL", inStock: false }
        ],
        colors: [
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
        rating: 3.7,
        reviewCount: 82,
        sizes: [
            { name: "XS", inStock: true },
            { name: "S", inStock: true  },
            { name: "M", inStock: true  },
            { name: "L", inStock: true  },
            { name: "XL", inStock: false},
            { name: "XXL", inStock: true }, 
            { name: "XXXL", inStock: false }
        ],
        colors: [
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
        rating: 4.5,
        reviewCount: 25,
        sizes: [],
        category_id: "64334f59606584c1846f29db"
    },
    {
        name: "Mug Set",
        description: "This set includes 3 ceramic mugs with unique designs.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/3mug.jpg",
        price: 235,
        stock: 8,
        rating: 4.2,
        reviewCount: 34,
        sizes: [{name:"Standard", inStock: true}],
        category_id: "64334f59606584c1846f29db"
    },

    {
        name: "Cap",
        description: "This cap will keep you cool and stylish all day long.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/cap.jpg",
        price: 125,
        stock: 20,
        rating: 4.0,
        reviewCount: 97,
        sizes: [
            { name: "S/M", inStock: true },
            { name: "L/XL", inStock: true  }, 
        ],
        category_id: "64334fb19cd5877e65819b12"
    },
    {
        name: "Cap Set",
        description: "This set includes 3 high-quality caps with different designs.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/3cap.jpg",
        price: 260,
        stock: 5,
        rating: 3.9,
        reviewCount: 212,
        sizes: [
            { name: "S/M", inStock: true },
            { name: "L/XL", inStock: true  },
        ],
        category_id: "64334fb19cd5877e65819b12"
    },
    {
        name: "Keychain",
        description: "This keychain will keep your keys organized and easy to find.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/keychain.jpg",
        price: 95,
        stock: 100,
        rating: 4.3,
        reviewCount: 75,
        sizes: [],
        category_id: "64334feeb73f4a5473ad7de6"
    },
    {
        name: "Outfit Pack",
        description: "This pack includes a high-quality cotton t-shirt, a ceramic mug with a unique design, and a stylish cap.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/outfitpack.jpg",
        price: 280,
        stock: 7,
        rating: 4.1,
        reviewCount: 134,
        sizes: [
            { name: "XS", inStock: true },
            { name: "S", inStock: true  },
            { name: "M", inStock: true  },
            { name: "L", inStock: true  },
            { name: "XL", inStock: false},
            { name: "XXL", inStock: true }, 
            { name: "XXXL", inStock: false }
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
        rating: 3.5,
        reviewCount: 305,
        sizes: [],
        category_id: "643350b84062430e52994b40"
    },
    {
        name: "Reusable Water Bottle",
        description: "This water bottle is eco-friendly and perfect for outdoor activities.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/WaterBottle.jpg",
        price: 120,
        stock: 15,
        rating: 4.0,
        reviewCount: 117,
        sizes: [],
        category_id: "643350fccc2f6aa119952035"
    },
    {
        name: "Backpack",
        description: "This backpack is perfect for school, work or travel.",
        image: "https://sublimeprint.nyc3.digitaloceanspaces.com/Backpack.jpg",
        price: 340,
        stock: 15,
        rating: 3.8,
        reviewCount: 68,
        sizes: [],
        colors: [
            { name: "White", class: "bg-white" , selectedClass: "ring-gray-400"},
            { name: "Gray", class: "bg-gray-200" , selectedClass: "ring-gray-400"},
            {name: "Black", class: "bg-gray-900" , selectedClass: "ring-gray-900"}
        ],
        category_id: "6433512feac1a35f26d5cbde"
    }]