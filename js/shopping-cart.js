/**
 * Initializes the shopping cart functionality when the document is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const cartSearchInput = document.getElementById('cartSearchInput');
    const cartSearchBtn = document.getElementById('cartSearchBtn');
    const fruitSearchInput = document.getElementById('fruitSearchInput');
    const fruitSearchBtn = document.getElementById('fruitSearchBtn');
    const shoppingList = document.getElementById('shoppingList');
    const fruitSearchResults = document.getElementById('fruitSearchResults');
    const itemCount = document.getElementById('itemCount');

    // Initial list of fruits in the cart
    const initialFruits = ['Apples', 'Bananas', 'Oranges', 'Strawberries', 'Grapes'];

    // List of available fruits for external search (not in cart initially)
    const availableFruits = [
        'Mangoes', 'Pineapples', 'Blueberries', 'Peaches', 'Kiwis',
        'Pears', 'Cherries', 'Raspberries', 'Watermelons', 'Lemons'
    ];

    /**
     * Updates the item count display
     */
    function updateCount() {
        const count = shoppingList.getElementsByTagName('li').length;
        itemCount.textContent = count;
    }

    /**
     * Creates a list item element with remove button for the cart
     * @param {string} itemName - The name of the item to add
     */
    function createCartItem(itemName) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = itemName;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            shoppingList.removeChild(li);
            updateCount();
        });

        li.appendChild(removeBtn);
        return li;
    }

    /**
     * Creates a list item for fruit search results with add button
     * @param {string} fruitName - The name of the fruit to display
     */
    function createFruitResultItem(fruitName) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = fruitName;

        const addBtn = document.createElement('button');
        addBtn.className = 'btn btn-success btn-sm';
        addBtn.textContent = 'Add to Cart';
        addBtn.addEventListener('click', function() {
            shoppingList.appendChild(createCartItem(fruitName));
            updateCount();
            fruitSearchResults.style.display = 'none'; // Hide results after adding
            fruitSearchResults.innerHTML = ''; // Clear search results
        });

        li.appendChild(addBtn);
        return li;
    }

    /**
     * Adds a new item to the shopping cart
     */
    function addItem() {
        const itemName = itemInput.value.trim();

        if (itemName === '') {
            alert('Please enter an item name');
            return;
        }

        shoppingList.appendChild(createCartItem(itemName));
        itemInput.value = '';
        updateCount();
    }

    /**
     * Searches for an item in the shopping cart
     */
    function searchCart() {
        const searchTerm = cartSearchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            alert('Please enter an item to search');
            return;
        }

        const items = shoppingList.getElementsByTagName('li');
        for (let item of items) {
            item.classList.remove('active');
        }

        let found = false;
        for (let item of items) {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm) && !itemText.endsWith('remove')) {
                item.classList.add('active');
                found = true;
            }
        }

        if (!found) {
            alert('Item not found in cart');
        }

        cartSearchInput.value = '';
    }

    /**
     * Searches for fruits not in the cart
     */
    function searchExternalFruits() {
        const searchTerm = fruitSearchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            alert('Please enter a fruit to search');
            return;
        }

        // Clear previous search results
        fruitSearchResults.innerHTML = '';
        fruitSearchResults.style.display = 'none';

        // Find matching fruits not in the cart
        const cartItems = Array.from(shoppingList.getElementsByTagName('li')).map(
            li => li.textContent.replace('Remove', '').trim().toLowerCase()
        );
        const matchingFruits = availableFruits.filter(
            fruit => fruit.toLowerCase().includes(searchTerm) && !cartItems.includes(fruit.toLowerCase())
        );

        if (matchingFruits.length === 0) {
            alert('No matching fruits found');
            return;
        }

        // Display matching fruits
        matchingFruits.forEach(fruit => {
            fruitSearchResults.appendChild(createFruitResultItem(fruit));
        });
        fruitSearchResults.style.display = 'block';

        fruitSearchInput.value = '';
    }

    /**
     * Initializes the shopping list with predefined fruits
     */
    function initializeList() {
        initialFruits.forEach(fruit => {
            shoppingList.appendChild(createCartItem(fruit));
        });
        updateCount();
    }

    // Initialize the shopping list with fruits
    initializeList();

    // Add event listeners
    addItemBtn.addEventListener('click', addItem);
    cartSearchBtn.addEventListener('click', searchCart);
    fruitSearchBtn.addEventListener('click', searchExternalFruits);

    itemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    cartSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchCart();
        }
    });

    fruitSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchExternalFruits();
        }
    });

    // Initialize item count
    updateCount();
});
