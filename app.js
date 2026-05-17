/**
 * Valeria Rojas - Catálogo Inmobiliario
 * Lógica interactiva en Vanilla JS
 */

// --- BASE DE DATOS DE PROPIEDADES (12 Ficticias pero Realistas) ---
const PROPERTIES = [
    // --- COMPRAR (4 Propiedades) ---
    {
        id: "comp-1",
        category: "comprar",
        badge: "En Venta",
        type: "Departamento",
        title: "Departamento Familiar Moderno en Equipetrol",
        zone: "Equipetrol",
        city: "Santa Cruz",
        price: 135000,
        currency: "$us",
        beds: 3,
        baths: 2,
        area: 120,
        parking: 1,
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Espectacular departamento en pleno corazón de Equipetrol. Cuenta con acabados de primera calidad, excelente iluminación natural, pisos de porcelanato premium, aire acondicionado central, clósets empotrados y cocina equipada estilo americano. A pasos de los mejores restaurantes, bancos y comercios de la zona."
    },
    {
        id: "comp-2",
        category: "comprar",
        badge: "En Venta",
        type: "Casa",
        title: "Residencia Exclusiva de Lujo en Urubó",
        zone: "Urubó",
        city: "Santa Cruz",
        price: 285000,
        currency: "$us",
        beds: 4,
        baths: 4,
        area: 350,
        parking: 2,
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Imponente casa residencial con jardín privado de 100 m² y parrillero techado en exclusivo condominio del Urubó. Consta de 3 plantas, amplio living-comedor, escritorio, sala de estar familiar, suite principal con vestidor y jacuzzi. Piscina privada, dependencias de servicio completas y portón eléctrico. Ubicación altamente segura."
    },
    {
        id: "comp-3",
        category: "comprar",
        badge: "En Venta",
        type: "Terreno",
        title: "Terreno Urbanizado Listo para Edificar en Las Palmas",
        zone: "Las Palmas",
        city: "Santa Cruz",
        price: 95000,
        currency: "$us",
        beds: 0,
        baths: 0,
        area: 400,
        parking: 0,
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Terreno completamente regular y amurallado en una de las zonas de mayor plusvalía de Las Palmas (cerca de la Av. Banzer). Cuenta con todas las conexiones de servicios básicos instaladas (agua, luz, gas natural y alcantarillado). Papeles al día, catastro aprobado, ideal para construir una vivienda unifamiliar o proyecto multifamiliar de hasta 3 pisos."
    },
    {
        id: "comp-4",
        category: "comprar",
        badge: "En Venta",
        type: "Local Comercial",
        title: "Oficina Corporativa de Estreno en Av. Cristo Redentor",
        zone: "Av. Cristo Redentor",
        city: "Santa Cruz",
        price: 78000,
        currency: "$us",
        beds: 2,
        baths: 1,
        area: 65,
        parking: 1,
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Oficina corporativa de alta gama ubicada en edificio inteligente de reciente inauguración sobre la Av. Cristo Redentor. Cuenta con pisos de porcelanato alto tráfico, divisiones de vidrio templado, sistema de red estructurada por piso, baño privado y kitchenette. El edificio ofrece seguridad 24/7, 3 ascensores de alta velocidad y sala de conferencias común."
    },

    // --- COMPRAR (2 Propiedades Adicionales) ---
    {
        id: "comp-5",
        category: "comprar",
        badge: "En Venta",
        type: "Casa",
        title: "Hermosa Casa en Condominio Cerrado - Remanso",
        zone: "Remanso",
        city: "Santa Cruz",
        price: 198000,
        currency: "$us",
        beds: 3,
        baths: 3,
        area: 240,
        parking: 2,
        images: [
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Preciosa casa estilo rústico-moderno dentro de exclusivo condominio con seguridad privada y áreas verdes compartidas en Remanso. Cuenta con excelente ventilación cruzada, sala de estar íntima en la segunda planta, amplia cocina con comedor de diario, despensa y un patio trasero ideal para mascotas. Excelente vecindario familiar."
    },
    {
        id: "comp-6",
        category: "comprar",
        badge: "En Venta",
        type: "Departamento",
        title: "Penthouse Exclusivo con Terraza en Sirari",
        zone: "Sirari",
        city: "Santa Cruz",
        price: 220000,
        currency: "$us",
        beds: 3,
        baths: 3,
        area: 180,
        parking: 2,
        images: [
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Extraordinario Penthouse dúplex con terraza panorámica propia de 40 m² con vista espectacular de la ciudad cruceña. Living comedor de doble altura con ventanales de piso a techo, suite master con walk-in closet gigante, área de bar privado y 2 bauleras. Ubicado en Sirari, exclusiva zona residencial de la ciudad."
    },

    // --- ALQUILAR (3 Propiedades) ---
    {
        id: "alq-1",
        category: "alquilar",
        badge: "Alquiler",
        type: "Departamento",
        title: "Departamento Monoambiente Amoblado en Av. Banzer",
        zone: "Av. Banzer",
        city: "Santa Cruz",
        price: 3200,
        currency: "Bs",
        beds: 1,
        baths: 1,
        area: 45,
        parking: 0,
        images: [
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Moderno e iluminado monoambiente totalmente amoblado y decorado por profesionales. Ideal para ejecutivos o parejas jóvenes. Cuenta con cama de dos plazas, Smart TV, cocina integrada con vajilla y electrodomésticos, área de lavado con lavadora/secadora, y clóset de pared a pared. Ubicado sobre la Av. Banzer con acceso directo a centros comerciales."
    },
    {
        id: "alq-2",
        category: "alquilar",
        badge: "Alquiler",
        type: "Local Comercial",
        title: "Amplio Local Comercial a Pie de Calle en Paragua",
        zone: "Paragua",
        city: "Santa Cruz",
        price: 5200,
        currency: "Bs",
        beds: 0,
        baths: 2,
        area: 90,
        parking: 0,
        images: [
            "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Excelente local comercial de 90 m² netos con amplia fachada de vidrio templado a pie de calle en avenida de alto flujo peatonal y vehicular de Paragua. Consta de planta libre ideal para tiendas, farmacias o consultorios, depósito en subsuelo y dos baños independientes. Cuenta con cortina de seguridad metálica eléctrica."
    },
    {
        id: "alq-3",
        category: "alquilar",
        badge: "Alquiler",
        type: "Casa",
        title: "Residencia Comercial de 5 Hab para Oficinas - Norte",
        zone: "Norte",
        city: "Santa Cruz",
        price: 1400, // 1400 USD
        currency: "$us",
        beds: 5,
        baths: 4,
        area: 380,
        parking: 4,
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Gran propiedad de 380 m² construidos ideal para oficinas corporativas, ONGs o centros de salud. Ubicada en la zona más estratégica del Norte cruceño. Consta de recepción, 5 oficinas cerradas muy amplias, sala de reuniones espaciosa, cableado de red interno, parqueo interno para 4 autos y un patio delantero. Excelente accesibilidad."
    },

    // --- ANTICRETICO (3 Propiedades) ---
    {
        id: "anti-1",
        category: "anticretico",
        badge: "Anticrético",
        type: "Departamento",
        title: "Departamento de 2 Dormitorios en Hamacas",
        zone: "Hamacas",
        city: "Santa Cruz",
        price: 28000,
        currency: "$us",
        beds: 2,
        baths: 2,
        area: 85,
        parking: 1,
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Hermoso departamento de 85 m² en anticrético. Ubicado en la zona residencial de Hamacas, con excelente ventilación natural. Consta de living-comedor, cocina cerrada con cajonería alta y baja, área de lavandería independiente, dormitorio principal en suite y garaje subterráneo. Contrato formal registrado ante Derechos Reales."
    },
    {
        id: "anti-2",
        category: "anticretico",
        badge: "Anticrético",
        type: "Casa",
        title: "Acogedora Casa de 3 Dormitorios en Los Jardines",
        zone: "Los Jardines",
        city: "Santa Cruz",
        price: 45000,
        currency: "$us",
        beds: 3,
        baths: 2,
        area: 160,
        parking: 1,
        images: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Casa independiente muy acogedora de dos pisos en anticrético. Ubicada en calle tranquila y residencial de Los Jardines. Living con ventilador de techo, comedor, cocina amplia con desayunador, jardín pequeño frontal, patio posterior y garaje techado para un vehículo. Ideal para familias que busquen confort y proximidad a colegios y servicios."
    },
    {
        id: "anti-3",
        category: "anticretico",
        badge: "Anticrético",
        type: "Departamento",
        title: "Departamento Elegante y Amplio en Ventura",
        zone: "Ventura",
        city: "Santa Cruz",
        price: 35000,
        currency: "$us",
        beds: 3,
        baths: 3,
        area: 140,
        parking: 1,
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&h=450&q=80",
            "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&h=450&q=80"
        ],
        description: "Moderno departamento de 140 m² en exclusiva zona residencial de Ventura. Cuenta con gas natural, 3 dormitorios (1 suite con vestidor, 2 con baño compartido), baño de visitas, sala de televisión, cocina amplia con despensa de alimentos, clóset de blancos y excelentes vistas exteriores. Registro en Derechos Reales e Impuestos."
    }
];

// --- APP STATE ---
let activeCategory = "comprar"; // Default tab
let filters = {
    type: "todos",
    maxPrice: 300000,
    rooms: "cualquiera"
};
let currentModalSlides = [];
let activeSlideIndex = 0;

// --- EXCHANGE RATE FOR NORMALIZATION ---
const USD_TO_BS = 7; // For normalizing 'alquilar' filtering: $us rents converted to Bs internally

// --- DOM ELEMENTS ---
const elements = {
    grid: document.getElementById("properties-grid"),
    tabs: document.getElementById("category-navigation"),
    filterType: document.getElementById("filter-type"),
    filterPrice: document.getElementById("filter-price"),
    filterRooms: document.getElementById("filter-rooms"),
    btnReset: document.getElementById("btn-reset-filters"),
    
    // Sliders UI Text
    lblPriceMax: document.getElementById("lbl-price-max"),
    lblPriceMinLimit: document.getElementById("lbl-price-min-limit"),
    lblPriceMaxLimit: document.getElementById("lbl-price-max-limit"),
    
    // Counters
    currentCount: document.getElementById("properties-current-count"),
    totalCount: document.getElementById("properties-total-count"),
    
    // Modal Elements
    modal: document.getElementById("property-modal"),
    modalSlides: document.getElementById("modal-gallery-slides"),
    modalDots: document.getElementById("modal-gallery-dots"),
    modalPrev: document.getElementById("btn-gallery-prev"),
    modalNext: document.getElementById("btn-gallery-next"),
    modalBadge: document.getElementById("modal-category-badge"),
    modalLocation: document.getElementById("modal-location-text"),
    modalTitle: document.getElementById("modal-p-title"),
    modalPrice: document.getElementById("modal-p-price"),
    modalBeds: document.getElementById("modal-val-beds"),
    modalBaths: document.getElementById("modal-val-baths"),
    modalArea: document.getElementById("modal-val-area"),
    modalParking: document.getElementById("modal-val-parking"),
    modalDescription: document.getElementById("modal-description-content"),
    modalWaBtn: document.getElementById("btn-modal-wa-cta"),
    modalCancel: document.getElementById("btn-modal-cancel"),
    modalCloseX: document.getElementById("btn-close-modal")
};

// --- INITIALIZE APPLICATION ---
document.addEventListener("DOMContentLoaded", () => {
    setupTabConfiguration(activeCategory);
    renderProperties();
    registerEventListeners();
});

// --- REGISTER EVENT LISTENERS ---
function registerEventListeners() {
    // Tab Clicks
    elements.tabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".tab-btn");
        if (!btn || btn.classList.contains("active")) return;
        
        // Update active class
        document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        
        // Update category state
        activeCategory = btn.dataset.category;
        
        // Configure pricing slider based on new category
        setupTabConfiguration(activeCategory);
        
        // Render with loading effect
        triggerSkeletonLoader();
    });

    // Filter Type Change
    elements.filterType.addEventListener("change", (e) => {
        filters.type = e.target.value;
        renderProperties();
    });

    // Filter Price Slider Change
    elements.filterPrice.addEventListener("input", (e) => {
        filters.maxPrice = parseInt(e.target.value);
        updatePriceSliderLabel();
        renderProperties();
    });

    // Filter Rooms Segment Control
    elements.filterRooms.addEventListener("click", (e) => {
        const btn = e.target.closest(".segment-btn");
        if (!btn || btn.classList.contains("active")) return;
        
        document.querySelectorAll("#filter-rooms .segment-btn").forEach(s => s.classList.remove("active"));
        btn.classList.add("active");
        
        filters.rooms = btn.dataset.rooms;
        renderProperties();
    });

    // Reset Filters Button
    elements.btnReset.addEventListener("click", () => {
        resetAllFilters();
    });

    // Modal Control Arrow Clicks
    elements.modalPrev.addEventListener("click", () => shiftSlide(-1));
    elements.modalNext.addEventListener("click", () => shiftSlide(1));

    // Modal Close handlers
    elements.modalCancel.addEventListener("click", closeModal);
    elements.modalCloseX.addEventListener("click", closeModal);
    elements.modal.addEventListener("click", (e) => {
        if (e.target === elements.modal) closeModal();
    });

    // Keyboard ESC Close
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && elements.modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// --- SETUP TAB CONFIGURATION (PRICE SLIDERS ADJUSTMENT) ---
function setupTabConfiguration(category) {
    let min = 0;
    let max = 300000;
    let step = 5000;
    let value = 300000;
    let symbol = "$us";
    let isRent = false;

    if (category === "comprar") {
        min = 0;
        max = 350000;
        step = 5000;
        value = 350000;
        symbol = "$us";
    } else if (category === "anticretico") {
        min = 0;
        max = 60000;
        step = 2000;
        value = 60000;
        symbol = "$us";
    } else if (category === "alquilar") {
        min = 0;
        max = 12000; // in Bs (for renting, we normalize to Bs internally)
        step = 200;
        value = 12000;
        symbol = "Bs";
        isRent = true;
    }

    // Set Slider Attributes
    elements.filterPrice.min = min;
    elements.filterPrice.max = max;
    elements.filterPrice.step = step;
    elements.filterPrice.value = value;
    
    // Save state
    filters.maxPrice = value;
    
    // Update labels
    elements.lblPriceMinLimit.textContent = `${symbol} 0`;
    elements.lblPriceMaxLimit.textContent = `${symbol} ${max.toLocaleString()}+`;
    updatePriceSliderLabel();
}

// --- UPDATE PRICE SLIDER TEXT LABEL ---
function updatePriceSliderLabel() {
    const symbol = activeCategory === "alquilar" ? "Bs" : "$us";
    const rentSuffix = activeCategory === "alquilar" ? "/mes" : "";
    elements.lblPriceMax.textContent = `${symbol} ${filters.maxPrice.toLocaleString()}${rentSuffix}`;
}

// --- TRIGGER SKELETON LOADER ANIMATION ---
function triggerSkeletonLoader() {
    // Generate and inject skeletons
    elements.grid.innerHTML = `
        <div class="property-card skeleton-loader">
            <div class="property-image-container"></div>
            <div class="property-details">
                <div class="skeleton-box" style="height: 14px; width: 40%; margin-bottom: 12px;"></div>
                <div class="skeleton-box" style="height: 24px; width: 90%; margin-bottom: 12px;"></div>
                <div class="skeleton-box" style="height: 28px; width: 60%; margin-bottom: 20px;"></div>
                <div style="display: flex; gap: 8px; margin-bottom: 24px;">
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                </div>
                <div class="skeleton-box" style="height: 44px; width: 100%; border-radius: var(--radius-md);"></div>
            </div>
        </div>
        <div class="property-card skeleton-loader">
            <div class="property-image-container"></div>
            <div class="property-details">
                <div class="skeleton-box" style="height: 14px; width: 30%; margin-bottom: 12px;"></div>
                <div class="skeleton-box" style="height: 24px; width: 85%; margin-bottom: 12px;"></div>
                <div class="skeleton-box" style="height: 28px; width: 50%; margin-bottom: 20px;"></div>
                <div style="display: flex; gap: 8px; margin-bottom: 24px;">
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                </div>
                <div class="skeleton-box" style="height: 44px; width: 100%; border-radius: var(--radius-md);"></div>
            </div>
        </div>
        <div class="property-card skeleton-loader">
            <div class="property-image-container"></div>
            <div class="property-details">
                <div class="skeleton-box" style="height: 14px; width: 45%; margin-bottom: 12px;"></div>
                <div class="skeleton-box" style="height: 24px; width: 95%; margin-bottom: 12px;"></div>
                <div class="skeleton-box" style="height: 28px; width: 55%; margin-bottom: 20px;"></div>
                <div style="display: flex; gap: 8px; margin-bottom: 24px;">
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                    <div class="skeleton-box" style="height: 40px; flex: 1;"></div>
                </div>
                <div class="skeleton-box" style="height: 44px; width: 100%; border-radius: var(--radius-md);"></div>
            </div>
        </div>
    `;

    // 600ms delay simulating a highly premium asynchronous fetch transition
    setTimeout(() => {
        renderProperties();
    }, 600);
}

// --- RESET ALL FILTERS ---
function resetAllFilters() {
    filters.type = "todos";
    filters.rooms = "cualquiera";
    
    // Reset Type Input
    elements.filterType.value = "todos";
    
    // Reset Rooms buttons UI
    document.querySelectorAll("#filter-rooms .segment-btn").forEach(s => s.classList.remove("active"));
    document.querySelector("#filter-rooms .segment-btn[data-rooms='cualquiera']").classList.add("active");
    
    // Reset Price
    setupTabConfiguration(activeCategory);
    
    // Rerender
    renderProperties();
}

// --- RENDER PROPERTIES GRILLA ---
function renderProperties() {
    // 1. FILTER PROPERTIES BY TABS AND CRITERIA
    const filtered = PROPERTIES.filter(p => {
        // Tab Category Filter
        if (p.category !== activeCategory) return false;
        
        // Property Type Filter
        if (filters.type !== "todos" && p.type !== filters.type) return false;
        
        // Rooms count filter
        if (filters.rooms !== "cualquiera") {
            const reqRooms = parseInt(filters.rooms);
            if (p.beds < reqRooms) return false;
        }
        
        // Dynamic price filtering with Currency Normalization for Rentals
        let normalizedPropPrice = p.price;
        
        if (activeCategory === "alquilar") {
            // If rental property is in USD, convert to Bs internally for filtering consistency
            if (p.currency === "$us") {
                normalizedPropPrice = p.price * USD_TO_BS;
            }
        }
        
        if (normalizedPropPrice > filters.maxPrice) return false;
        
        return true;
    });

    // 2. UPDATE META INFORMATION COUNTERS
    const totalInCategory = PROPERTIES.filter(p => p.category === activeCategory).length;
    elements.currentCount.textContent = filtered.length;
    elements.totalCount.textContent = totalInCategory;

    // 3. RENDER THE CONTENT GRID
    if (filtered.length === 0) {
        elements.grid.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M13.477 14.89a6 6 0 01-8.367-8.367l8.367 8.367zM14.89 13.477L6.523 5.11a6 6 0 008.367 8.367zM10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd" />
                </svg>
                <h3 class="empty-state-title">Sin Resultados</h3>
                <p class="empty-state-text">No se encontraron propiedades que coincidan con los filtros aplicados en esta pestaña.</p>
            </div>
        `;
        return;
    }

    elements.grid.innerHTML = filtered.map(p => createCardMarkup(p)).join("");
}

// --- CREATE INDIVIDUAL CARD MARKUP ---
function createCardMarkup(p) {
    const rentSuffix = p.category === "alquilar" ? "/mes" : "";
    const formatPrice = p.price.toLocaleString();
    const bedIcon = `
        <svg viewBox="0 0 24 24">
            <path d="M7 11v-4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v4h3v7h-2v-2h-12v2h-2v-7h3zm2-4v4h6v-4h-6zm-7-2h2v12h-2v-12z"/>
        </svg>
    `;
    const bathIcon = `
        <svg viewBox="0 0 24 24">
            <path d="M21 11c0-2.21-1.79-4-4-4h-2V6c0-1.1-.9-2-2-2H9C7.9 4 7 4.9 7 6v1H5c-2.21 0-4 1.79-4 4v2c0 4.97 4.03 9 9 9h4c4.97 0 9-4.03 9-9v-2zm-2 2c0 3.86-3.14 7-7 7h-4c-3.86 0-7-3.14-7-7v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2z"/>
        </svg>
    `;
    const areaIcon = `
        <svg viewBox="0 0 24 24">
            <path d="M22 2H2v20h20V2zm-2 18H4V4h16v16zm-5-9H9v2h6v-2zm0-4H9v2h6V7zm0 8H9v2h6v-2z"/>
        </svg>
    `;
    const parkIcon = `
        <svg viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5zm-1.5-3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-11 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
    `;

    return `
        <article class="property-card fade-in" id="card-${p.id}">
            <div class="property-image-container">
                <span class="badge-category badge-${p.category}">${p.badge}</span>
                <img src="${p.images[0]}" alt="${p.title}" class="property-image" loading="lazy">
            </div>
            
            <div class="property-details">
                <div class="property-header-info">
                    <div class="property-location">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                        </svg>
                        <span>${p.zone}, ${p.city}</span>
                    </div>
                    <h3 class="property-title">${p.title}</h3>
                </div>

                <div class="property-price">
                    ${p.currency} ${formatPrice}<span class="property-price-period">${rentSuffix}</span>
                </div>

                <div class="property-features">
                    <div class="feature-item" title="Habitaciones">
                        <div class="feature-icon-container">${bedIcon}</div>
                        <span class="feature-text">${p.beds > 0 ? `${p.beds} Hab` : '--'}</span>
                    </div>
                    
                    <div class="feature-item" title="Baños">
                        <div class="feature-icon-container">${bathIcon}</div>
                        <span class="feature-text">${p.baths > 0 ? `${p.baths} Bañ` : '--'}</span>
                    </div>

                    <div class="feature-item" title="Superficie total">
                        <div class="feature-icon-container">${areaIcon}</div>
                        <span class="feature-text">${p.area} m²</span>
                    </div>

                    <div class="feature-item" title="Espacios de parqueo">
                        <div class="feature-icon-container">${parkIcon}</div>
                        <span class="feature-text">${p.parking > 0 ? `${p.parking} Par` : '--'}</span>
                    </div>
                </div>

                <button class="btn-details" onclick="openDetailsModal('${p.id}')">Ver detalles</button>
            </div>
        </article>
    `;
}

// --- OPEN DETAILS MODAL ---
window.openDetailsModal = function(id) {
    const p = PROPERTIES.find(item => item.id === id);
    if (!p) return;

    // Load slide variables
    currentModalSlides = p.images;
    activeSlideIndex = 0;

    // Badge styling & content
    elements.modalBadge.className = `modal-badge badge-${p.category}`;
    elements.modalBadge.textContent = p.badge;
    
    // Core detail bindings
    elements.modalLocation.textContent = `${p.zone}, ${p.city}`;
    elements.modalTitle.textContent = p.title;
    
    const rentSuffix = p.category === "alquilar" ? "/mes" : "";
    elements.modalPrice.textContent = `${p.currency} ${p.price.toLocaleString()}${rentSuffix}`;
    
    elements.modalBeds.textContent = p.beds > 0 ? p.beds : '--';
    elements.modalBaths.textContent = p.baths > 0 ? p.baths : '--';
    elements.modalArea.textContent = `${p.area} m²`;
    elements.modalParking.textContent = p.parking > 0 ? p.parking : '--';
    
    elements.modalDescription.textContent = p.description;

    // Gallery assembly
    renderModalGallery();

    // WhatsApp Message compilation
    const waBaseMessage = `Hola Valeria, estoy interesado/a en la propiedad "${p.title}" en la zona de ${p.zone} (${p.category.toUpperCase()}) valorada en ${p.currency} ${p.price.toLocaleString()}${rentSuffix} que vi en tu catálogo web. ¿Me podrías dar más información?`;
    const waUrl = `https://wa.me/59176543210?text=${encodeURIComponent(waBaseMessage)}`;
    elements.modalWaBtn.href = waUrl;

    // Show modal container
    elements.modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scroll
};

// --- RENDER MODAL PHOTOS GALLERY ---
function renderModalGallery() {
    // Generate slides
    elements.modalSlides.innerHTML = currentModalSlides.map((imgUrl, i) => `
        <div class="modal-slide" style="transform: translateX(${100 * (i - activeSlideIndex)}%); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);">
            <img src="${imgUrl}" alt="Foto de la propiedad ${i + 1}">
        </div>
    `).join("");

    // Generate Dots
    elements.modalDots.innerHTML = currentModalSlides.map((_, i) => `
        <button class="gallery-dot ${i === activeSlideIndex ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Ir a la foto ${i + 1}"></button>
    `).join("");
}

// --- SHIFT ACTIVE SLIDE (NAVIGATION ARROWS) ---
function shiftSlide(direction) {
    activeSlideIndex += direction;
    if (activeSlideIndex >= currentModalSlides.length) activeSlideIndex = 0;
    if (activeSlideIndex < 0) activeSlideIndex = currentModalSlides.length - 1;
    
    updateSlidePositions();
}

// --- GO TO SPECIFIC SLIDE (DOT CLICKS) ---
window.goToSlide = function(index) {
    activeSlideIndex = index;
    updateSlidePositions();
};

// --- UPDATE ACTIVE POSITIONS ---
function updateSlidePositions() {
    const slides = document.querySelectorAll(".modal-slide");
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - activeSlideIndex)}%)`;
    });

    const dots = document.querySelectorAll(".gallery-dot");
    dots.forEach((dot, i) => {
        if (i === activeSlideIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// --- CLOSE PROPERTY DETAILS MODAL ---
function closeModal() {
    elements.modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable body scroll
}
