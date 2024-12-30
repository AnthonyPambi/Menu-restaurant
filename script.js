const menuItems = [
    {
        title: "Sushi",
        value: "$12.99",
        description: "Delicious sushi rolls with fresh fish and vegetables.",
        image: "platos/istockphoto-177096343-612x612.jpg"// Replace with a valid image URL
    },
    {
        title: "Ramen",
        value: "$12.99",
        description: "Hearty ramen noodles in a savory broth.",
        image: "platos/japanese-ramen-on-a-bowl-eggs-chopsticks-noodles-meat-seaweed-green-onions-soup-dish-isolated-on-white-background-vector.jpg"
    },
    {
        title: "Dumplings",
        value: "$12.99",
        description: "Steamed dumplings filled with pork and vegetables.",
        image: "platos/dumplings-aislados-plato-sobre-fondo-blanco_961875-300101.jpg", // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "platos/istockphoto-1300071546-612x612.jpg" // Replace with a valid image URL
    },
    {
        title: "Chaulafan",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "platos/istockphoto-585159970-612x612.jpg" // Replace with a valid image URL
    },
    {
        title: "Tallarin Saltado",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "platos/vector-comida-china-diseno-asiatico-ilustracion-plantilla-fondo-orient-tradicional_1013341-122082.jpg" // Replace with a valid image URL
    },
    {
        title: "Lomo Saltado",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "platos/images (1).jpg" // Replace with a valid image URL
    },
    {
        title: "Chaulafan Especial",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "platos/CHAULAFAN.jpg" // Replace with a valid image URL
    },
    {
        title: "Chaulafan de Mixto",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "platos/arroz-chaufa-comida-peruana-plato-arroz-frito-verduras-diferentes-carnes_136753-122.avif" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
    },
];

const drinksItems = [
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "Bebidas/mattia-green-tea-latte-bebida-fria-sobre-fondo-blanco_912356-1063.avif"// Replace with a valid image URL
    },
    {
        title: "Coca Cola",
        description: "Sweet tea with chewy tapioca pearls.",
        value: "$4.50",
        image: "Bebidas/botella-coca-cola-sienta-sobre-fondo-blanco_1010691-17287.avif" // Replace with a valid image URL
    },
    {
        title: "Pepsi Grande",
        description: "Traditional Japanese rice wine.",
        value: "$6.99",
        image: "Bebidas/images.jpg" // Replace with a valid image URL
    },
    {
        title: "Agua",
        description: "Creamy yogurt drink blended with mango.",
        value: "$3.99",
        image: "Bebidas/istockphoto-1032678242-612x612.jpg" // Replace with a valid image URL
    },
    {
        title: "Jugo de Naranja",
        description: "Creamy yogurt drink blended with mango.",
        value: "$3.99",
        image: "Bebidas/vaso-jugo-naranja-aislado-sobre-fondo-blanco_143106-514.avif" // Replace with a valid image URL
    },
];

const acompaItems = [
    {
        title: "Porcion de Arroz",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "acompañante/arroz-plato-blanco-aislado-sobre-fondo-blanco_263154-2902.avif" // Replace with a valid image URL
    },
    {
        title: "Sopa de Pollo",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "acompañante/plato-sopa-pollo-aislado-sobre-fondo-blanco_185193-76006.avif" // Replace with a valid image URL
    },
    {
        title: "Sopa de Wantan",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "acompañante/images.jpg" // Replace with a valid image URL
    },
    {
        title: "Sopa de Camaron",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "acompañante/images (1).jpg" // Replace with a valid image URL
    },
    {
        title: "Sopa de Carne",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "acompañante/deliciosa-sopa-bodas-bolitas-carne-aisladas-sobre-fondo-blanco_787273-41126.avif" // Replace with a valid image URL
    },
]

const postreItems = [
    {
        title: "Gelatina",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "postres/vaso-gelatina-fresa-aislado-sobre-superficie-blanca_185193-31743.avif" // Replace with a valid image URL
    },
    {
        title: "Flan",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "postres/Catalogo-Samadhi-202000160.jpg" // Replace with a valid image URL
    },
    {
        title: "Helado",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "postres/palo-helado-aislado-sobre-fondo-blanco_167862-971.avif" // Replace with a valid image URL
    },
    {
        title: "Tarrina",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "postres/images.jpg" // Replace with a valid image URL
    },
    {
        title: "Postre de Chocolate",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "postres/imageschoco.jpg" // Replace with a valid image URL
    },
]

const postreContainer = document.getElementById('postres');
const menuContainer = document.getElementById('menu');
const drinksContainer = document.getElementById('drinks');
const acompaContainer = document.getElementById('acomp');


menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.value}</p>
    `;
    
    menuContainer.appendChild(menuItem);
});

drinksItems.forEach(item => {
    const drinksItem = document.createElement('div');
    drinksItem.className = 'menu-item';
    
    drinksItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.value}</p>
    `;
    
    drinksContainer.appendChild(drinksItem);
});

acompaItems.forEach(item => {
    const acompaItem = document.createElement('div');
    acompaItem.className = 'menu-item';
    acompaItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.value}</p>
    `;
    acompaContainer.appendChild(acompaItem);    
} );

postreItems.forEach(item => {
    const postreItem = document.createElement('div');
    postreItem.className = 'menu-item';
    postreItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.value}</p>
    `;
    postreContainer.appendChild(postreItem);    
} );