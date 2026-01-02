
# 📦 Inventory Management System

A web-based application to track product stock, calculate inventory value, and monitor low-stock alerts in real-time. Designed with a focus on aesthetic UI and persistent data storage.

**🔗 Live Demo:** https://nemokoh133.github.io/Inventory-Management-System-Cp-Assignment/

## ✨ Key Features
* **Real-time Dashboard:** Instantly calculates total items, total inventory value, and alerts.
* **Persistent Storage:** Uses browser **Local Storage** so data is never lost on refresh.
* **Visual Alerts:** Automatically highlights rows in red when stock drops below 5 units.
* **Glassmorphism UI:** Modern, responsive interface using CSS3 shadows and flexbox/grid layouts.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure.
* **CSS3:** Custom styling (no frameworks), Grid/Flexbox, Media Queries.
* **JavaScript (ES6):**
    * **DOM Manipulation:** Dynamic table rendering.
    * **JSON Parsing:** `JSON.stringify()` and `JSON.parse()` for data handling.
    * **Array Methods:** `map`, `filter`, and `reduce` for calculations.

## 🚀 How It Works
1.  **Adding Products:** Users input name, quantity, and price.
2.  **Data Processing:** The app creates a temporary Object for the product and pushes it to the main inventory Array.
3.  **Storage:** The array is converted to a string and saved to the browser's Local Storage.
4.  **rendering:** The table refreshes, and the "Stats" section runs a calculation loop to update the dashboard numbers.

## 📂 Project Structure
```text
/InventorySystem
│── index.html      # Main structure
│── style.css       # Styling and layout
│── script.js       # Logic and data handling
└── README.md       # Project documentation