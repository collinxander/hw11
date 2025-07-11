/**
 * Shopping Cart Application
 * HW9 - Interactive Shopping List
 *
 * This application allows users to:
 * - Add items to a shopping list
 * - Remove items by clicking on them
 * - View real-time item count
 * - Input validation for empty/null values
 */

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const itemInput = document.getElementById("itemInput")
  const addItemBtn = document.getElementById("addItemBtn")
  const shoppingList = document.getElementById("shoppingList")
  const itemCount = document.getElementById("itemCount")
  const errorMessage = document.getElementById("errorMessage")
  const emptyMessage = document.getElementById("emptyMessage")

  /**
   * Updates the item count display and shows/hides empty message
   * This function is called whenever items are added or removed
   */
  function updateCount() {
    // Get the current number of list items
    const count = shoppingList.children.length

    // Update the count display
    itemCount.textContent = count

    // Show or hide the empty message based on item count
    if (count === 0) {
      emptyMessage.style.display = "block"
    } else {
      emptyMessage.style.display = "none"
    }

    console.log(`Item count updated: ${count} items`)
  }

  /**
   * Validates the input text to ensure it's not null, undefined, or empty
   * @param {string} text - The text to validate
   * @returns {boolean} - True if valid, false if invalid
   */
  function validateInput(text) {
    // Check for null, undefined, or empty string (including whitespace only)
    return text !== null && text !== undefined && text.trim() !== ""
  }

  /**
   * Displays an error message to the user
   * @param {string} message - The error message to display
   */
  function showError(message) {
    errorMessage.textContent = message
    errorMessage.style.display = "block"

    // Hide error message after 3 seconds
    setTimeout(() => {
      errorMessage.style.display = "none"
    }, 3000)
  }

  /**
   * Creates a new shopping list item element
   * @param {string} itemName - The name of the item to create
   * @returns {HTMLElement} - The created list item element
   */
  function createShoppingItem(itemName) {
    // Create the list item element
    const listItem = document.createElement("li")
    listItem.className =
      "list-group-item list-group-item-action d-flex justify-content-between align-items-center shopping-item"

    // Set the item text
    listItem.textContent = itemName

    // Add a delete icon/indicator
    const deleteIcon = document.createElement("span")
    deleteIcon.className = "badge bg-danger"
    deleteIcon.innerHTML = "&times;"
    deleteIcon.title = "Click to remove"

    listItem.appendChild(deleteIcon)

    // Add click event listener for item removal (Extra Credit)
    listItem.addEventListener("click", () => {
      removeItem(listItem, itemName)
    })

    // Add hover effect
    listItem.style.cursor = "pointer"

    return listItem
  }

  /**
   * Removes an item from the shopping list (Extra Credit functionality)
   * @param {HTMLElement} listItem - The list item element to remove
   * @param {string} itemName - The name of the item being removed
   */
  function removeItem(listItem, itemName) {
    // Add fade-out animation
    listItem.style.transition = "opacity 0.3s ease"
    listItem.style.opacity = "0"

    // Remove the item after animation completes
    setTimeout(() => {
      shoppingList.removeChild(listItem)
      updateCount() // Update count after removal
      console.log(`Item removed: ${itemName}`)
    }, 300)
  }

  /**
   * Adds a new item to the shopping list
   * This is the main function that handles the "Add Item" functionality
   */
  function addItem() {
    // Get the input value
    const itemName = itemInput.value

    // Validate the input (requirement: check that text is not null)
    if (!validateInput(itemName)) {
      showError("Please enter a valid item name. Item name cannot be empty.")
      console.log("Add item failed: Invalid input")
      return
    }

    // Trim whitespace from the item name
    const trimmedItemName = itemName.trim()

    // Check for duplicate items (optional enhancement)
    const existingItems = Array.from(shoppingList.children)
    const isDuplicate = existingItems.some(
      (item) => item.textContent.replace("×", "").trim().toLowerCase() === trimmedItemName.toLowerCase(),
    )

    if (isDuplicate) {
      showError("This item is already in your shopping list.")
      console.log("Add item failed: Duplicate item")
      return
    }

    // Create and add the new item to the list
    const newItem = createShoppingItem(trimmedItemName)
    shoppingList.appendChild(newItem)

    // Clear the input field (requirement)
    itemInput.value = ""

    // Update the item count
    updateCount()

    // Add success animation
    newItem.style.opacity = "0"
    newItem.style.transition = "opacity 0.3s ease"
    setTimeout(() => {
      newItem.style.opacity = "1"
    }, 10)

    console.log(`Item added: ${trimmedItemName}`)
  }

  /**
   * Handles the Enter key press in the input field
   * @param {KeyboardEvent} event - The keyboard event
   */
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent form submission
      addItem()
    }
  }

  // Event Listeners

  // Add item button click event
  addItemBtn.addEventListener("click", addItem)

  // Enter key press in input field
  itemInput.addEventListener("keypress", handleKeyPress)

  // Clear error message when user starts typing
  itemInput.addEventListener("input", () => {
    if (errorMessage.style.display === "block") {
      errorMessage.style.display = "none"
    }
  })

  // Initialize the application
  console.log("Shopping Cart application initialized")
  updateCount() // Set initial count to 0
})
