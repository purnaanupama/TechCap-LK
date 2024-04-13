 const product=[
    {id:0,
    ids:1,
    pageLocation:'index.html',
    Image: './images/basicimageslider.jpg',
    title: 'Basic Image Slider',
    price:120},

    {id:1,
    ids:1,
    pageLocation:'index.html',
    Image: './images/cal.jpg',
    title: 'Distance Calculator',
    price:60},

    {id:2,
    ids:1,
    pageLocation:'index.html',
    Image: './images/calc.png',
    title: 'Digital Calculator',
    price:60},

    {id:3,
    ids:1,
    pageLocation:'index.html',
    Image: './images/cardslider.png',
    title: 'Card Slider',
    price:60},

    {id:4,
    ids:1,
    pageLocation:'Project1.html',
    Image: './images/RCG.png',
    title: 'Random Colour Generator',
    price:230},

    {id:5,
    ids:1,  
    pageLocation:'index.html', 
    Image: './images/navigationOnPage.png',
    title: 'On Page Navigation',
    price:160},

    {id:7,
    ids:2,
    Image: './images/popupwindow.png',
    title: 'Pop Up Window',
    price:100},

    {id:8,
    ids:2,
    Image: './images/videoPopUp.png',
    title: 'Video Popup',
    price:100},

    {id:9,
    ids:2,
    Image: './images/imageSearch.jpg',
    title: 'Image Searching App',
    price:100},

    {id:10,
    ids:2,
    Image: './images/WA.jpg',
    title: 'Weather App',
    price:100},

    {id:11,
    ids:2,
    Image: './images/NA.png',
    title: 'Notes App',
    price:100},

    {id:12,
    ids:2,
    Image: './images/TLA.png',
    title: 'To-Do List App',
    price:100},

    {id:13,
    ids:3,
    Image: './images/CC.jpg',
    title: 'Currency Converter',
    price:100},

    {id:14,
    ids:3,
    Image: './images/QA.jpg',
    title: 'Quiz App',
    price:100},

    {id:15,
    ids:3,
    Image: './images/TS.png',
    title: 'Text to Voice App',
    price:100},

    {id:16,
    ids:3,
    Image: './images/NC.jpg',
    title: 'Netflix Clone',
    price:100},

    {id:17,
    ids:3,
    Image: './images/HG.jpg',
    title: 'Hangman Game',
    price:100},

    {id:18,
    ids:3,
    Image: './images/TTT.png',
    title: 'Tic Tac Toe Game',
    price:100},

    {id:19,
    ids:4,
    Image: './images/ECS.jpg',
    title: 'E-Commerce Site',
    price:100},

    {id:20,
    ids:4,
    Image: './images/LR.jpg',
    title: 'Login And Registration Form',
    price:100},

    {id:21,
    ids:4,
    Image: './images/SBM.jpg',
    title: 'Side Bar Menu',
    price:100},

    {id:22,
    ids:4,
    Image: './images/CVP.jpg',
    title: 'Custom Video Player',
    price:100},

];

const btns = [
    {
        ids: -1,
        name: "Prev"
    },
    {
        ids: 1,
        name: "1"
    },
    {
        ids: 2,
        name: "2"
    },
    {
        ids: 3,
        name: "3"
    },
    {
        ids: 4,
        name: "4"
    },
    {
        ids: 5,
        name: "Next"
    }
];

const searchBar = document.getElementById('searchBar');
const root = document.getElementById('root');
const btnsContainer = document.getElementById('btns');
const itemsPerPage = 6;
let currentPage = 1;

// Function to display items
function displayItems(items, page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = items.slice(startIndex, endIndex);

    root.innerHTML = displayedItems.map(item => `
        <div class='box'>
            <img class='imgz' src=${item.Image}></img>
            <div class='bottom'>
                <p>${item.title}</p>
                <button><a href=${item.pageLocation}>View Project</a></button>
            </div>
        </div>
    `).join('');
}

// Initial display
displayItems(product);

// Function to handle pagination button click
function handlePaginationClick(page, button) {
    if (page === -1 && currentPage > 1) {
        currentPage--;
    } else if (page === 5 && currentPage < Math.ceil(product.length / itemsPerPage)) {
        currentPage++;
    } else if (page !== -1 && page !== 5) {
        currentPage = page;
    }
    displayItems(product, currentPage);

    // Change button color
    btnsContainer.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });
    button.style.backgroundColor = '#353434';
    button.style.color = 'white';
}

// Function to filter categories based on search input
function filterCategories(searchData) {
    const filteredData = product.filter(item =>
        item.title.toLowerCase().includes(searchData.toLowerCase())
    );

    // Display filtered items
    displayItems(filteredData);

    // Hide pagination buttons
    btnsContainer.innerHTML = '';
}

// Event listener for search bar keyup
searchBar.addEventListener('keyup', (e) => {
    const searchData = e.target.value.trim().toLowerCase();
    if (searchData.length > 0 && e.key === 'Enter') {
        filterCategories(searchData);
    } else {
        // If no search or not Enter key pressed, revert to initial display
        displayItems(product);
        // Show pagination buttons
        btnsContainer.innerHTML = btns.map(btn => `<button class='fil-p' onclick='handlePaginationClick(${btn.ids}, this)'>${btn.name}</button>`).join('');
    }
});

// Display pagination buttons
btnsContainer.innerHTML = btns.map(btn => `<button class='fil-p' onclick='handlePaginationClick(${btn.ids}, this)'>${btn.name}</button>`).join('');

const paginationButton = document.querySelector('.fil-p');
paginationButton.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


  