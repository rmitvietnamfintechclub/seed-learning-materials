// All Documentations: https://rmiteduau.sharepoint.com/:f:/r/sites/RMITFinTechClub2024/Shared%20Documents/RMIT%20FinTech%20Club%20Master%20Folder/Semester%20C/001.%20Departments/003.%20Technology/002.%20Department%20Projects/003.%20SEED%20Training%20Project/002.%20Documentation?csf=1&web=1&e=G9hO2W

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
