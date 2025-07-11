// Email validation regex as specified in the assignment
var validRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// BONUS: Single function to handle all validation
function validateData(fieldType, value) {
  var result = {
    isValid: false,
    message: "",
  }

  switch (fieldType) {
    case "name":
      // First and Last Name validation: alphabet, hyphens, apostrophes, min 2 chars, not null
      if (!value || value.trim() === "") {
        result.message = "This field cannot be empty."
      } else if (value.trim().length < 2) {
        result.message = "Must be at least 2 characters long."
      } else if (!/^[a-zA-Z\-']+$/.test(value.trim())) {
        result.message = "Only letters, hyphens, and apostrophes are allowed."
      } else {
        result.isValid = true
        result.message = "Valid name!"
      }
      break

    case "email":
      // Email validation using provided regex
      if (!value || value.trim() === "") {
        result.message = "Email cannot be empty."
      } else if (!validRegex.test(value.trim())) {
        result.message = "Please enter a valid email address."
      } else {
        result.isValid = true
        result.message = "Valid email address!"
      }
      break

    case "phone":
      // Phone validation: exactly 10 digits, no hyphens or parentheses
      if (!value || value.trim() === "") {
        result.message = "Phone number cannot be empty."
      } else if (!/^\d{10}$/.test(value.trim())) {
        result.message = "Phone number must be exactly 10 digits with no special characters."
      } else {
        result.isValid = true
        result.message = "Valid phone number!"
      }
      break

    case "userpass":
      // Username and Password validation: minimum 6 characters, not null
      if (!value || value.trim() === "") {
        result.message = "This field cannot be empty."
      } else if (value.trim().length < 6) {
        result.message = "Must be at least 6 characters long."
      } else {
        result.isValid = true
        result.message = "Valid input!"
      }
      break

    case "comments":
      // Comments validation: any character, cannot be null
      if (!value || value.trim() === "") {
        result.message = "Comments cannot be empty."
      } else {
        result.isValid = true
        result.message = "Valid comments!"
      }
      break

    default:
      result.message = "Unknown field type."
  }

  return result
}

// Function to display validation messages
function showValidationMessage(fieldId, isValid, message) {
  var messageElement = document.getElementById(fieldId + "Message")
  var inputElement = document.getElementById(fieldId)

  messageElement.textContent = message
  messageElement.style.display = "block"

  if (isValid) {
    messageElement.className = "validation-message success"
    inputElement.style.borderColor = "#28a745"
  } else {
    messageElement.className = "validation-message error"
    inputElement.style.borderColor = "#dc3545"
  }
}

// Validation functions for each field type
function validateName(fieldId, value) {
  var result = validateData("name", value)
  showValidationMessage(fieldId, result.isValid, result.message)
  return result.isValid
}

function validateEmail(value) {
  var result = validateData("email", value)
  showValidationMessage("email", result.isValid, result.message)
  return result.isValid
}

function validatePhone(value) {
  var result = validateData("phone", value)
  showValidationMessage("phone", result.isValid, result.message)
  return result.isValid
}

function validateUserPass(fieldId, value) {
  var result = validateData("userpass", value)
  showValidationMessage(fieldId, result.isValid, result.message)
  return result.isValid
}

function validateComments(value) {
  var result = validateData("comments", value)
  showValidationMessage("comments", result.isValid, result.message)
  return result.isValid
}

// DOM Level 2 Event Listeners setup
document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  var firstName = document.getElementById("firstName")
  var lastName = document.getElementById("lastName")
  var email = document.getElementById("email")
  var phone = document.getElementById("phone")
  var username = document.getElementById("username")
  var password = document.getElementById("password")
  var comments = document.getElementById("comments")
  var form = document.getElementById("contactForm")

  // Add event listeners for real-time validation (blur events)
  firstName.addEventListener("blur", function () {
    validateName("firstName", this.value)
  })

  lastName.addEventListener("blur", function () {
    validateName("lastName", this.value)
  })

  email.addEventListener("blur", function () {
    validateEmail(this.value)
  })

  phone.addEventListener("blur", function () {
    validatePhone(this.value)
  })

  username.addEventListener("blur", function () {
    validateUserPass("username", this.value)
  })

  password.addEventListener("blur", function () {
    validateUserPass("password", this.value)
  })

  comments.addEventListener("blur", function () {
    validateComments(this.value)
  })

  // Add input event listeners for immediate feedback
  firstName.addEventListener("input", function () {
    if (this.value.length > 0) {
      validateName("firstName", this.value)
    }
  })

  lastName.addEventListener("input", function () {
    if (this.value.length > 0) {
      validateName("lastName", this.value)
    }
  })

  email.addEventListener("input", function () {
    if (this.value.length > 0) {
      validateEmail(this.value)
    }
  })

  phone.addEventListener("input", function () {
    if (this.value.length > 0) {
      validatePhone(this.value)
    }
  })

  username.addEventListener("input", function () {
    if (this.value.length > 0) {
      validateUserPass("username", this.value)
    }
  })

  password.addEventListener("input", function () {
    if (this.value.length > 0) {
      validateUserPass("password", this.value)
    }
  })

  comments.addEventListener("input", function () {
    if (this.value.length > 0) {
      validateComments(this.value)
    }
  })

  // Form submission validation
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Validate all fields
    var isFirstNameValid = validateName("firstName", firstName.value)
    var isLastNameValid = validateName("lastName", lastName.value)
    var isEmailValid = validateEmail(email.value)
    var isPhoneValid = validatePhone(phone.value)
    var isUsernameValid = validateUserPass("username", username.value)
    var isPasswordValid = validateUserPass("password", password.value)
    var isCommentsValid = validateComments(comments.value)

    // Check if all fields are valid
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isUsernameValid &&
      isPasswordValid &&
      isCommentsValid
    ) {
      alert("Form submitted successfully! All fields are valid.")
      // Here you would normally submit the form to a server
    } else {
      alert("Please correct the errors in the form before submitting.")
    }
  })
})
