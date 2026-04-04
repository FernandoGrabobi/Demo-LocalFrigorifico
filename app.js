// ===========================
// LA PIARA — App JS
// ===========================

const categorias = [
  { id: 'todos',       label: 'Todos',        emoji: '🥩' },
  { id: 'cortes',      label: 'Cortes',       emoji: '🔪' },
  { id: 'chacinados',  label: 'Chacinados',   emoji: '🥓' },
  { id: 'embutidos',   label: 'Embutidos',    emoji: '🌭' },
  { id: 'elaborados',  label: 'Elaborados',   emoji: '🍽️' },
  { id: 'menudencias', label: 'Menudencias',  emoji: '🫀' },
  { id: 'especiales',  label: 'Especiales',   emoji: '⭐' },
];

const productos = [
  // ── CORTES ──
  {
    id: 1, cat: 'cortes', imagen: './imagenes/bondiola.jpg',
    nombre: 'Bondiola entera',
    desc: 'Corte jugoso, ideal para cocido lento o al horno. Con su veteado natural.',
    precio: 4200, unidad: 'kg', badge: 'Estrella',
    bg: 'bg-cortes'
  },
  {
    id: 2, cat: 'cortes', imagen: './imagenes/paletaDeCerdo.jpg',
    nombre: 'Paleta de cerdo',
    desc: 'Versátil y sabrosa. Perfecta para guisos, asado o rellena.',
    precio: 3800, unidad: 'kg',
    bg: 'bg-cortes'
  },
  {
    id: 3, cat: 'cortes', imagen: './imagenes/costillasDeCerdo.jpeg',
    nombre: 'Costilla de cerdo',
    desc: 'Ideal para asado o parrilla. Corte tierno con mucho sabor.',
    precio: 4500, unidad: 'kg',
    bg: 'bg-cortes'
  },
  {
    id: 4, cat: 'cortes', imagen: './imagenes/pernilDeCerdo.jpg',
    nombre: 'Pernil de cerdo',
    desc: 'Corte clásico para fiestas. Se cocina entero, al horno con hierbas.',
    precio: 3600, unidad: 'kg', badge: 'Popular',
    bg: 'bg-cortes'
  },
  {
    id: 5, cat: 'cortes', imagen: './imagenes/lomoDeCerdo.png',
    nombre: 'Lomo de cerdo',
    desc: 'El corte más magro. Tierno y bajo en grasa, ideal a la sartén.',
    precio: 5800, unidad: 'kg',
    bg: 'bg-cortes'
  },
  {
    id: 6, cat: 'cortes', imagen: './imagenes/matambreDeCerdo.jpg',
    nombre: 'Matambre de cerdo',
    desc: 'Para arrollar, rellenar o a la parrilla. Fino y sabroso.',
    precio: 4100, unidad: 'kg',
    bg: 'bg-cortes'
  },

  // ── CHACINADOS ──
  {
    id: 7, cat: 'chacinados', imagen: './imagenes/pancetaAhumada.jpg',
    nombre: 'Panceta ahumada',
    desc: 'Curada y ahumada artesanalmente. Tiras finas para desayuno o guarnición.',
    precio: 5200, unidad: 'kg', badge: 'Artesanal',
    bg: 'bg-chacinados'
  },
  {
    id: 8, cat: 'chacinados', imagen: './imagenes/jamonCocido.jpg',
    nombre: 'Jamón cocido',
    desc: 'Elaboración propia. Sin conservantes artificiales, sabor suave y natural.',
    precio: 6800, unidad: 'kg',
    bg: 'bg-chacinados'
  },
  {
    id: 9, cat: 'chacinados', imagen: './imagenes/bondiolaAhumada.png',
    nombre: 'Bondiola ahumada',
    desc: 'Curada en sal y especias, luego ahumada en leña. Sabor intenso único.',
    precio: 7200, unidad: 'kg', badge: 'Artesanal',
    bg: 'bg-chacinados'
  },
  {
    id: 10, cat: 'chacinados', imagen: './imagenes/pancetaSalada.jpg',
    nombre: 'Panceta salada',
    desc: 'Curada en salmuera. Clásica para guisos y pucheros argentinos.',
    precio: 4400, unidad: 'kg',
    bg: 'bg-chacinados'
  },

  // ── EMBUTIDOS ──
  {
    id: 11, cat: 'embutidos', imagen: './imagenes/chorizoDeCerdo.jpg',
    nombre: 'Chorizo de cerdo',
    desc: 'De producción propia. Condimentado con pimentón y especias artesanales.',
    precio: 4800, unidad: 'kg', badge: 'Propio',
    bg: 'bg-embutidos'
  },
  {
    id: 12, cat: 'embutidos', imagen: './imagenes/salchichaParrillera.jpg',
    nombre: 'Salchicha parrillera',
    desc: 'Fina y jugosa. Ideal para parrilla o plancha. Mezcla de cerdo selecto.',
    precio: 4200, unidad: 'kg',
    bg: 'bg-embutidos'
  },
  {
    id: 13, cat: 'embutidos', imagen: './imagenes/morcilla.jpg',
    nombre: 'Morcilla',
    desc: 'Receta tradicional con cebolla de verdeo. Para el asado completo.',
    precio: 3500, unidad: 'kg',
    bg: 'bg-embutidos'
  },
  {
    id: 14, cat: 'embutidos', imagen: './imagenes/longaniza.png',
    nombre: 'Longaniza',
    desc: 'Embutido curado con vino y ajo. Ideal para picadas y tablas.',
    precio: 6200, unidad: 'kg', badge: 'Premium',
    bg: 'bg-embutidos'
  },
  {
    id: 15, cat: 'embutidos', imagen: './imagenes/salaminArtesanal.jfif',
    nombre: 'Salamín artesanal',
    desc: 'Madurado 45 días. Feteado a mano, sabor intenso y perfecto.',
    precio: 8500, unidad: 'kg', badge: 'Artesanal',
    bg: 'bg-embutidos'
  },

  // ── ELABORADOS ──
  {
    id: 16, cat: 'elaborados', imagen: './imagenes/bondiolaRellena.jpg',
    nombre: 'Bondiola rellena',
    desc: 'Rellena con ciruelas, nueces y romero. Lista para hornear.',
    precio: 6500, unidad: 'kg', badge: 'Listo',
    bg: 'bg-elaborados'
  },
  {
    id: 17, cat: 'elaborados', imagen: './imagenes/matambreArrollado.jpg',
    nombre: 'Matambre arrollado',
    desc: 'Arrollado de cerdo con morrón, huevo duro y aceitunas. Para frío o caliente.',
    precio: 5900, unidad: 'kg',
    bg: 'bg-elaborados'
  },
  {
    id: 18, cat: 'elaborados', imagen: './imagenes/chicharroneDeCerdo.jpg',
    nombre: 'Chicharrón de cerdo',
    desc: 'Frito en su propia grasa. Crocante, ideal para picadas o snack.',
    precio: 3200, unidad: '250g',
    bg: 'bg-elaborados'
  },
  {
    id: 19, cat: 'elaborados', imagen: './imagenes/grasaDeCerdo.jpg',
    nombre: 'Grasa de cerdo',
    desc: 'Pura, derretida y filtrada. Para cocinar y repostería tradicional.',
    precio: 1800, unidad: 'kg',
    bg: 'bg-elaborados'
  },

  // ── MENUDENCIAS ──
  {
    id: 20, cat: 'menudencias', imagen: './imagenes/higadoDeCerdo.png',
    nombre: 'Hígado de cerdo',
    desc: 'Muy nutritivo. Para encebollado, patés y preparaciones especiales.',
    precio: 1800, unidad: 'kg',
    bg: 'bg-menudencias'
  },
  {
    id: 21, cat: 'menudencias', imagen: './imagenes/PataDeCerdo.jpg',
    nombre: 'Pata de cerdo',
    desc: 'Para puchero y caldos. Gelatinosa y llena de colágeno natural.',
    precio: 1500, unidad: 'kg',
    bg: 'bg-menudencias'
  },
  {
    id: 22, cat: 'menudencias', imagen: './imagenes/orejaDeCerdo.jpg',
    nombre: 'Oreja de cerdo',
    desc: 'Para cocido tradicional o a la plancha con limón y ajo.',
    precio: 1400, unidad: 'kg',
    bg: 'bg-menudencias'
  },
  {
    id: 23, cat: 'menudencias', imagen: './imagenes/corazonDeCerdo.jpg',
    nombre: 'Corazón de cerdo',
    desc: 'Magro y con buen sabor. Para estofados o en brochette.',
    precio: 1600, unidad: 'kg',
    bg: 'bg-menudencias'
  },

  // ── ESPECIALES ──
  {
    id: 24, cat: 'especiales', imagen: './imagenes/mediaResDeCerdo.jpg',
    nombre: 'Media res de cerdo',
    desc: 'Venta entera por encargo. Precio mayorista, ideal para eventos.',
    precio: 3200, unidad: 'kg', badge: 'Encargo',
    bg: 'bg-especiales'
  },
  {
    id: 25, cat: 'especiales', imagen: './imagenes/packAsado.jpg',
    nombre: 'Pack Asado Completo',
    desc: 'Costilla + chorizo + morcilla + panceta. Todo para una parrillada completa.',
    precio: 18500, unidad: 'pack', badge: 'Oferta',
    bg: 'bg-especiales'
  },
  {
    id: 26, cat: 'especiales', imagen: './imagenes/packFiesta.jpg',
    nombre: 'Pack Fiestas',
    desc: 'Bondiola rellena + jamón cocido + salamín. El clásico de fin de año.',
    precio: 22000, unidad: 'pack', badge: 'Especial',
    bg: 'bg-especiales'
  },
];

// ── ESTADO ──
let categoriaActiva = 'todos';
let carrito = {};

// ── RENDER CATEGORÍAS ──
function renderCategorias() {
  const bar = document.getElementById('categoriesBar');
  bar.innerHTML = categorias.map(c => `
    <button class="cat-btn ${c.id === categoriaActiva ? 'active' : ''}" data-cat="${c.id}">
      <span class="cat-emoji">${c.emoji}</span> ${c.label}
    </button>
  `).join('');
  bar.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoriaActiva = btn.dataset.cat;
      renderCategorias();
      renderProductos();
    });
  });
}

// ── RENDER PRODUCTOS ──
function renderProductos() {
  const grid = document.getElementById('productsGrid');
  const filtrados = categoriaActiva === 'todos'
    ? productos
    : productos.filter(p => p.cat === categoriaActiva);

  if (filtrados.length === 0) {
    grid.innerHTML = `<p style="color:var(--gris-light);font-size:1rem;grid-column:1/-1;text-align:center;padding:40px 0;">No hay productos en esta categoría.</p>`;
    return;
  }

  grid.innerHTML = filtrados.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.05}s">
      <div class="product-img ${p.bg}">
        <img src="${p.imagen}" alt="${p.nombre}" style="width:100%;height:100%;object-fit:cover;">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${categorias.find(c=>c.id===p.cat)?.label || ''}</div>
        <h3 class="product-name">${p.nombre}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">
            $${p.precio.toLocaleString('es-AR')}
            <span class="unit">por ${p.unidad}</span>
          </div>
          <button class="add-btn" data-id="${p.id}">+ Agregar</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      agregarAlCarrito(parseInt(btn.dataset.id));
      animarBoton(btn);
    });
  });
}

function animarBoton(btn) {
  btn.textContent = '✓ Agregado';
  btn.style.background = '#27ae60';
  setTimeout(() => {
    btn.textContent = '+ Agregar';
    btn.style.background = '';
  }, 900);
}

// ── CARRITO ──
function agregarAlCarrito(id) {
  carrito[id] = (carrito[id] || 0) + 1;
  actualizarCarritoUI();
}

function quitarDelCarrito(id) {
  if (carrito[id] > 1) carrito[id]--;
  else delete carrito[id];
  actualizarCarritoUI();
  if (Object.keys(carrito).length === 0) renderCartModal();
  else renderCartModal();
}

function actualizarCarritoUI() {
  const total = Object.values(carrito).reduce((a, b) => a + b, 0);
  document.getElementById('cartCount').textContent = total;
  renderCartModal();
}

function renderCartModal() {
  const items = document.getElementById('cartItems');
  const keys = Object.keys(carrito);

  if (keys.length === 0) {
    items.innerHTML = `
      <div class="cart-empty">
        <span class="empty-icon">🛒</span>
        Tu pedido está vacío. ¡Agregá algunos productos!
      </div>`;
    document.getElementById('cartTotal').textContent = '$0';
    document.getElementById('cartWhatsapp').style.display = 'none';
    return;
  }

  document.getElementById('cartWhatsapp').style.display = 'block';
  let totalPrecio = 0;
  let whatsappText = 'Hola! Quisiera hacer el siguiente pedido:\n\n';

  items.innerHTML = keys.map(id => {
    const p = productos.find(pr => pr.id === parseInt(id));
    const subtotal = p.precio * carrito[id];
    totalPrecio += subtotal;
    whatsappText += `- ${p.nombre} x${carrito[id]} (${p.unidad}): $${subtotal.toLocaleString('es-AR')}\n`;
    return `
      <div class="cart-item">
        <span class="cart-item-emoji">${p.emoji}</span>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.nombre}</div>
          <div class="cart-item-price">$${p.precio.toLocaleString('es-AR')} / ${p.unidad} · Subtotal: $${subtotal.toLocaleString('es-AR')}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-id="${id}" data-action="menos">−</button>
          <span class="qty-num">${carrito[id]}</span>
          <button class="qty-btn" data-id="${id}" data-action="mas">+</button>
        </div>
      </div>
    `;
  }).join('');

  whatsappText += `\nTotal: $${totalPrecio.toLocaleString('es-AR')}`;
  document.getElementById('cartTotal').textContent = `$${totalPrecio.toLocaleString('es-AR')}`;
  document.getElementById('cartWhatsapp').href =
    `https://wa.me/5492657000000?text=${encodeURIComponent(whatsappText)}`;

  items.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      if (btn.dataset.action === 'mas') agregarAlCarrito(id);
      else quitarDelCarrito(id);
    });
  });
}

// ── MODAL OPEN/CLOSE ──
document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartOverlay').classList.add('open');
});
document.getElementById('cartClose').addEventListener('click', () => {
  document.getElementById('cartOverlay').classList.remove('open');
});
document.getElementById('cartOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('cartOverlay')) {
    document.getElementById('cartOverlay').classList.remove('open');
  }
});

// ── INIT ──
renderCategorias();
renderProductos();
renderCartModal();
