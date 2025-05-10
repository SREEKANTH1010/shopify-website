//thumbnail --> main img
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('main-img');
    mainImage.src = imageSrc;
}

//swatch color canges
function changeColor(color) {
    // Hide all thumbnail sections first
    const thumbnailsBlue = document.getElementById('thumbnails-blue');
    const thumbnailsGreen = document.getElementById('thumbnails-green');
    const thumbnailsBrown = document.getElementById('thumbnails-brown');

    
    thumbnailsBlue.style.display = 'none';
    thumbnailsGreen.style.display = 'none';
    thumbnailsBrown.style.display = 'none';


    if (color === 'blue') {
        thumbnailsBlue.style.display = 'flex';  // Show blue thumbnails
        const mainImage = document.getElementById('main-img');
        mainImage.src = 'assets/main2-blue.webp';
    } 
    else if (color === 'green') {
        thumbnailsGreen.style.display = 'flex';  // Show green thumbnails
        const mainImage = document.getElementById('main-img'); 
        mainImage.src = 'assets/main3-g.webp';  
    } 
    else if (color === 'brown') {
        thumbnailsBrown.style.display = 'flex';  // Show brown thumbnails
        
        const mainImage = document.getElementById('main-img');
        mainImage.src = 'assets/main1-b.webp';
    }
}


// Open Modal
function openModal() {
    document.getElementById('size-chart-modal').style.display = 'block';
  }
  

  function closeModal() {
    document.getElementById('size-chart-modal').style.display = 'none';
  }
  

  window.onclick = function(event) {
    if (event.target == document.getElementById('size-chart-modal')) {
      closeModal();
    }
  }
  
//escape key to close chart
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  


  //compare model
const compareBtn = document.getElementById('compareBtn');
const compareModal = document.getElementById('compareModal');
const closeBtn = document.getElementById('closeBtn');
const selectedColoursDiv = document.getElementById('selectedColours');
let selectedColours = [];

// Open the model when the button is clicked
compareBtn.addEventListener('click', () => {
    compareModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    compareModal.style.display = 'none';
});

// Close 
window.addEventListener('click', (e) => {
    if (e.target === compareModal) {
        compareModal.style.display = 'none';
    }
});

// Select a colour swatch
function selectColour(swatch) {
    const colour = swatch.style.backgroundColor;

    // If the colour is already selected, remove it
    if (selectedColours.includes(colour)) {
        selectedColours = selectedColours.filter(item => item !== colour);
        swatch.style.border = '2px solid #fff'; // Deselect by resetting border
    } else {
        if (selectedColours.length < 2) {
            selectedColours.push(colour);
            swatch.style.border = '2px solid #333'; // Highlight selected swatch
        }
    }

    updateSelectedColours();
}

// Update the selected colours display
function updateSelectedColours() {
    selectedColoursDiv.innerHTML = '';

    selectedColours.forEach(colour => {
        const colourSwatch = document.createElement('div');
        colourSwatch.style.backgroundColor = colour;
        colourSwatch.classList.add('swatch');
        selectedColoursDiv.appendChild(colourSwatch);
    });
}

//tabs

function showTab(event, tabId) {
    const buttons = document.querySelectorAll(".tab-buttons button");
    buttons.forEach(btn => btn.classList.remove("active"));
  
    event.currentTarget.classList.add("active");
  
    // Hide all tab content
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.style.display = "none");
  
    // Show selected tab
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.style.display = "block";
    }
  }
  
  