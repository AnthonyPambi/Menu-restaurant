const menuItems = [
    {
        title: "Sushi",
        value: "$12.99",
        description: "Delicious sushi rolls with fresh fish and vegetables.",
        image: "https://example.com/sushi.jpg" // Replace with a valid image URL
    },
    {
        title: "Ramen",
        value: "$12.99",
        description: "Hearty ramen noodles in a savory broth.",
        image: "https://example.com/ramen.jpg" // Replace with a valid image URL
    },
    {
        title: "Dumplings",
        value: "$12.99",
        description: "Steamed dumplings filled with pork and vegetables.",
        image: "https://example.com/dumplings.jpg" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
    },
    {
        title: "Pad Thai",
        value: "$12.99",
        description: "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts.",
        image: "https://example.com/padthai.jpg" // Replace with a valid image URL
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
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Bubble Tea",
        description: "Sweet tea with chewy tapioca pearls.",
        value: "$4.50",
        image: "https://example.com/bubbletea.jpg" // Replace with a valid image URL
    },
    {
        title: "Sake",
        description: "Traditional Japanese rice wine.",
        value: "$6.99",
        image: "https://example.com/sake.jpg" // Replace with a valid image URL
    },
    {
        title: "Mango Lassi",
        description: "Creamy yogurt drink blended with mango.",
        value: "$3.99",
        image: "https://example.com/mangolassi.jpg" // Replace with a valid image URL
    },
    {
        title: "Mango Lassi",
        description: "Creamy yogurt drink blended with mango.",
        value: "$3.99",
        image: "https://example.com/mangolassi.jpg" // Replace with a valid image URL
    },
];

const acompaItems = [
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
]

const postreItems = [
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
    },
    {
        title: "Green Tea",
        description: "Refreshing green tea served hot or cold.",
        value: "$2.99",
        image: "https://example.com/greentea.jpg" // Replace with a valid image URL
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