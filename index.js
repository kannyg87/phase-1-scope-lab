var customerName = 'bob';  // Declare the variable in global scope

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); 
}

function setBestCustomer() {
  bestCustomer = 'not bob';  
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; 
}

const leastFavoriteCustomer = 'John';  

function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'Jane';  
}
