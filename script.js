// 1. Array to hold our inventory objects
let inventory = [];

// 2. Select DOM elements
const form = document.getElementById('inventory-form');
const tableBody = document.querySelector('#inventory-table tbody');
const totalItemsEl = document.getElementById('total-items');
const totalValueEl = document.getElementById('total-value');
const lowStockEl = document.getElementById('low-stock-count');

// 3. Function to add an item
function addItem(event) {
    event.preventDefault(); // Prevent form from refreshing page

    // Get values from inputs
    const name = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('product-qty').value);
    const price = parseFloat(document.getElementById('product-price').value);

    // Key Concept: Object Creation
    const product = {
        id: Date.now(), // Unique ID based on timestamp
        name: name,
        quantity: quantity,
        price: price
    };

    // Add object to array
    inventory.push(product);

    // Refresh the UI
    renderInventory();
    updateStats();
    
    // Clear form
    form.reset();
}

// 4. Function to delete an item
function deleteItem(id) {
    // Filter out the item with the matching ID
    inventory = inventory.filter(product => product.id !== id);
    renderInventory();
    updateStats();
}

// 5. Function to render the table (Loop)
function renderInventory() {
    tableBody.innerHTML = ''; // Clear current table

    inventory.forEach(product => {
        const row = document.createElement('tr');
        
        // Highlight row if low stock
        if (product.quantity < 5) {
            row.classList.add('low-stock-row');
        }

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <button class="delete-btn" onclick="deleteItem(${product.id})">Remove</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// 6. Function to calculate totals
function updateStats() {
    // Calculate Total Items
    const totalItems = inventory.reduce((sum, product) => sum + product.quantity, 0);
    
    // Calculate Inventory Value
    const totalValue = inventory.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    
    // Calculate Low Stock Alerts (Items with quantity < 5)
    const lowStockCount = inventory.filter(product => product.quantity < 5).length;

    // Update HTML
    totalItemsEl.innerText = totalItems;
    totalValueEl.innerText = `$${totalValue.toFixed(2)}`;
    lowStockEl.innerText = lowStockCount;
}

// Event Listener
form.addEventListener('submit', addItem);