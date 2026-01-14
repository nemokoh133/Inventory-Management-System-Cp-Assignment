let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

const form = document.getElementById('inventory-form');
const tableBody = document.querySelector('#inventory-table tbody');
const totalItemsEl = document.getElementById('total-items');
const totalValueEl = document.getElementById('total-value');
const lowStockEl = document.getElementById('low-stock-count');

function saveData() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function addItem(event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('product-qty').value);
    const price = parseFloat(document.getElementById('product-price').value);

    if (name && quantity && price) {
        const product = { id: Date.now(), name, quantity, price };
        inventory.push(product);
        saveData();
        renderInventory();
        updateStats();
        form.reset();
    }
}

function deleteItem(id) {
    inventory = inventory.filter(product => product.id !== id);
    saveData();
    renderInventory();
    updateStats();
}

function renderInventory() {
    tableBody.innerHTML = '';
    inventory.forEach(product => {
        const row = document.createElement('tr');
        if (product.quantity < 5) row.classList.add('low-stock-row');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td><button class="delete-btn" onclick="deleteItem(${product.id})">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function updateStats() {
    const totalItems = inventory.reduce((sum, p) => sum + p.quantity, 0);
    const totalValue = inventory.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    const lowStock = inventory.filter(p => p.quantity < 5).length;
    
    totalItemsEl.innerText = totalItems;
    totalValueEl.innerText = `$${totalValue.toFixed(2)}`;
    lowStockEl.innerText = lowStock;
}

renderInventory();
updateStats();
form.addEventListener('submit', addItem);