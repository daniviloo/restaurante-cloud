// =========================
// DATOS DEL MENÚ
// =========================
const menu = [
  // ENTRADAS
  {
    id: 1,
    name: "Tagliere Toscano",
    category: "entradas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/pasta.jpg",
    description: "Selección de prosciutto, salames artesanales y quesos curados con pan rústico.",
    price: "$125"
  },
  {
    id: 2,
    name: "Antipasto della Casa",
    category: "entradas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/ensalada.jpg",
    description: "Verduras asadas, aceitunas marinadas y quesos típicos de la Toscana.",
    price: "$98"
  },
  {
    id: 3,
    name: "Bruschetta al Pomodoro",
    category: "entradas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/bruschetta.jpg",
    description: "Pan artesanal con tomate fresco, albahaca y aceite de oliva extra virgen.",
    price: "$78"
  },
  {
    id: 4,
    name: "Carpaccio Fiorentino",
    category: "entradas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/carpaccio.jpg",
    description: "Láminas de res marinadas con limón, rúcula y escamas de parmesano.",
    price: "$155"
  },

  // PLATO FUERTE
  {
    id: 5,
    name: "Lasagna alla Bolognese",
    category: "Plato Fuerte",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/lasagna.jpg",
    description: "Pasta horneada con ragú tradicional, salsa bechamel y queso gratinado.",
    price: "$195"
  },
  {
    id: 6,
    name: "Risotto ai Funghi",
    category: "Plato Fuerte",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/risotto.jpg",
    description: "Arroz cremoso con hongos salteados, vino blanco y parmesano.",
    price: "$185"
  },
  {
    id: 7,
    name: "Pizza Rustica",
    category: "Plato Fuerte",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/pizzam.jpg",
    description: "Masa fina con salsa de tomate, mozzarella fresca y especias italianas.",
    price: "$165"
  },
  {
    id: 8,
    name: "Pollo al Rosmarino",
    category: "Plato Fuerte",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/pollo.jpg",
    description: "Pechuga de pollo cocinada con romero, limón y aceite de oliva.",
    price: "$175"
  },

  // POSTRES
  {
    id: 9,
    name: "Tiramisù della Nonna",
    category: "postres",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/tiramisú.jpg",
    description: "Café intenso, cacao y crema de mascarpone en capas suaves.",
    price: "$99"
  },
  {
    id: 10,
    name: "Panna Cotta ai Frutti Rossi",
    category: "postres",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/panna.jpg",
    description: "Panna cotta cremosa con coulis de frutos rojos frescos.",
    price: "$92"
  },
  {
    id: 11,
    name: "Cannoli Tradizionali",
    category: "postres",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/cannoli.jpg",
    description: "Tubos crujientes rellenos con ricotta dulce y ralladura de naranja.",
    price: "$105"
  },
  {
    id: 12,
    name: "Gelato Italiano",
    category: "postres",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/gelato.jpg",
    description: "Helado artesanal disponible en chocolate, pistache o fior di latte.",
    price: "$88"
  },

  // BEBIDAS
  {
    id: 13,
    name: "Limonata Siciliana",
    category: "bebidas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/limonada.jpg",
    description: "Bebida fresca con limón siciliano, menta y agua con gas.",
    price: "$62"
  },
  {
    id: 14,
    name: "Cappuccino Cremoso",
    category: "bebidas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/cappuccino.jpg",
    description: "Espresso intenso con leche vaporizada y espuma ligera.",
    price: "$68"
  },
  {
    id: 15,
    name: "Vino Rosso della Casa",
    category: "bebidas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/vino.jpg",
    description: "Copa de vino tinto italiano con notas afrutadas.",
    price: "$125"
  },
  {
    id: 16,
    name: "Aperol Spritz",
    category: "bebidas",
    image: "https://tiendacloud01.blob.core.windows.net/imagenesdanny/Aperol.jpg",
    description: "Prosecco, Aperol y soda en la mezcla clásica italiana.",
    price: "$115"
  }
];

// =========================
// FUNCIÓN PARA MOSTRAR ELEMENTOS
// =========================
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    menuContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menu 
        : menu.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// =========================
// FUNCIÓN BOTONES DE FILTRO
// =========================
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            displayMenuItems(category);
        });
    });
}

// =========================
// INICIALIZACIÓN
// =========================
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems();
    setupFilterButtons();
});
