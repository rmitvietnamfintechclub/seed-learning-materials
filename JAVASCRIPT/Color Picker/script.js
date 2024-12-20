// Step 1: Get DOM elements

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Step 2: Update background color
function updateColor() {

}

// Step 3: Add event listener to the button
