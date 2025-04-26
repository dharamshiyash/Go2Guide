// Sample destination data
const destinations = [
    {
        id: 1,
        name: "New York City",
        description: "Experience the vibrant culture and iconic landmarks of the Big Apple.",
        image: "images/destinations/new-york.jpg",
        category: "Cities",
        rating: 4.8,
        locations: [
            {
                id: 101,
                name: "Empire State Building",
                description: "Iconic 102-story skyscraper offering panoramic views of NYC from its observation decks.",
                image: "images/destinations/empire-state.jpg",
                location: "350 Fifth Avenue, New York, NY 10118",
                coordinates: { lat: 40.7484, lng: -73.9857 },
                rating: 4.7,
                precautions: "Expect long lines during peak tourist seasons. Purchase tickets in advance to save time."
            },
            {
                id: 102,
                name: "Central Park",
                description: "Sprawling urban park offering a peaceful retreat from the bustling city with lakes, walking paths, and recreational areas.",
                image: "images/destinations/central-park.jpg",
                location: "Central Park, New York, NY",
                coordinates: { lat: 40.7812, lng: -73.9665 },
                rating: 4.9,
                precautions: "The park is large, so plan your visit. Be cautious after dark in less populated areas."
            },
            {
                id: 103,
                name: "Statue of Liberty",
                description: "Iconic copper statue on Liberty Island, a symbol of freedom and democracy.",
                image: "images/destinations/statue-liberty.jpg",
                location: "Liberty Island, New York, NY 10004",
                coordinates: { lat: 40.6892, lng: -74.0445 },
                rating: 4.8,
                precautions: "Book ferry tickets and crown access well in advance. Security screening is required."
            }
        ]
    },
    {
        id: 2,
        name: "San Francisco",
        description: "Discover the charm of the City by the Bay with its iconic Golden Gate Bridge and historic cable cars.",
        image: "images/destinations/san-francisco.jpg",
        category: "Cities",
        rating: 4.7,
        locations: [
            {
                id: 201,
                name: "Golden Gate Bridge",
                description: "Iconic suspension bridge spanning the Golden Gate strait, offering stunning views of the bay and city.",
                image: "images/destinations/golden-gate.jpg",
                location: "Golden Gate Bridge, San Francisco, CA",
                coordinates: { lat: 37.8199, lng: -122.4783 },
                rating: 4.9,
                precautions: "Fog can limit visibility, especially in summer mornings. Dress in layers as it can be windy and cold."
            },
            {
                id: 202,
                name: "Alcatraz Island",
                description: "Historic federal prison on an island offering tours of the facility and spectacular views of the city.",
                image: "images/destinations/alcatraz.jpg",
                location: "Alcatraz Island, San Francisco, CA 94133",
                coordinates: { lat: 37.8270, lng: -122.4230 },
                rating: 4.8,
                precautions: "Tours sell out weeks in advance, so book early. The island can be cold and windy."
            }
        ]
    },
    {
        id: 3,
        name: "Grand Canyon",
        description: "Marvel at one of the world's most spectacular natural wonders.",
        image: "images/destinations/grand-canyon.jpg",
        category: "National Parks",
        rating: 4.9,
        locations: [
            {
                id: 301,
                name: "South Rim",
                description: "The most visited and accessible part of the Grand Canyon, offering spectacular viewpoints and hiking trails.",
                image: "images/destinations/south-rim.jpg",
                location: "Grand Canyon Village, AZ 86023",
                coordinates: { lat: 36.0544, lng: -112.1401 },
                rating: 4.9,
                precautions: "Stay on designated trails and keep a safe distance from the edge. Summer temperatures can exceed 100°F (38°C)."
            },
            {
                id: 302,
                name: "North Rim",
                description: "Less crowded than the South Rim, offering a different perspective of the canyon with cooler temperatures.",
                image: "images/destinations/north-rim.jpg",
                location: "North Rim, AZ 86052",
                coordinates: { lat: 36.1980, lng: -112.0526 },
                rating: 4.8,
                precautions: "Closed during winter (mid-October to mid-May). Limited services compared to South Rim."
            }
        ]
    },
    {
        id: 4,
        name: "Miami",
        description: "Enjoy the vibrant culture, beautiful beaches, and exciting nightlife of this tropical paradise.",
        image: "images/destinations/miami.jpg",
        category: "Beaches",
        rating: 4.6,
        locations: [
            {
                id: 401,
                name: "South Beach",
                description: "Famous beach known for its white sand, turquoise waters, Art Deco architecture, and vibrant nightlife.",
                image: "images/destinations/south-beach.jpg",
                location: "South Beach, Miami Beach, FL 33139",
                coordinates: { lat: 25.7825, lng: -80.1340 },
                rating: 4.7,
                precautions: "Apply sunscreen regularly. Be aware of rip currents. Parking can be expensive and difficult to find."
            },
            {
                id: 402,
                name: "Wynwood Walls",
                description: "Outdoor museum featuring large-scale works by some of the world's best-known street artists.",
                image: "images/destinations/wynwood-walls.jpg",
                location: "2520 NW 2nd Ave, Miami, FL 33127",
                coordinates: { lat: 25.8010, lng: -80.1989 },
                rating: 4.8,
                precautions: "The area is generally safe during the day, but exercise caution at night. Wear comfortable shoes for walking."
            }
        ]
    },
    {
        id: 5,
        name: "Yellowstone",
        description: "Explore America's first national park, home to geysers, hot springs, and diverse wildlife.",
        image: "images/destinations/yellowstone.jpg",
        category: "National Parks",
        rating: 4.9,
        locations: [
            {
                id: 501,
                name: "Old Faithful",
                description: "Famous geyser that erupts approximately every 90 minutes, shooting water up to 185 feet into the air.",
                image: "images/destinations/old-faithful.jpg",
                location: "Yellowstone National Park, WY 82190",
                coordinates: { lat: 44.4605, lng: -110.8281 },
                rating: 4.8,
                precautions: "Stay on boardwalks and designated trails. The ground in thermal areas is fragile and dangerous."
            },
            {
                id: 502,
                name: "Grand Prismatic Spring",
                description: "The largest hot spring in the United States and third-largest in the world, known for its vibrant colors.",
                image: "images/destinations/grand-prismatic.jpg",
                location: "Yellowstone National Park, WY 82190",
                coordinates: { lat: 44.5251, lng: -110.8390 },
                rating: 4.9,
                precautions: "For the best view, hike to the overlook. Expect crowds during summer months."
            }
        ]
    },
    {
        id: 6,
        name: "Chicago",
        description: "Experience the architectural marvels, vibrant culture, and delicious food of the Windy City.",
        image: "images/destinations/chicago.jpg",
        category: "Cities",
        rating: 4.7,
        locations: [
            {
                id: 601,
                name: "Willis Tower",
                description: "108-story skyscraper with a glass-bottomed observation deck offering panoramic views of the city.",
                image: "images/destinations/willis-tower.jpg",
                location: "233 S Wacker Dr, Chicago, IL 60606",
                coordinates: { lat: 41.8789, lng: -87.6359 },
                rating: 4.7,
                precautions: "Lines can be long during peak tourist season. Consider visiting early in the day or on weekdays."
            },
            {
                id: 602,
                name: "Millennium Park",
                description: "Public park featuring the iconic Cloud Gate sculpture (The Bean) and other public art installations.",
                image: "images/destinations/millennium-park.jpg",
                location: "201 E Randolph St, Chicago, IL 60602",
                coordinates: { lat: 41.8826, lng: -87.6233 },
                rating: 4.8,
                precautions: "The park can be crowded, especially around The Bean. Visit early morning for fewer crowds."
            }
        ]
    }
];

// Function to load featured destinations on the homepage
function loadFeaturedDestinations() {
    const destinationGrid = document.querySelector('.destination-grid');
    if (!destinationGrid) return;
    
    // Get 3 random destinations to feature
    const featuredDestinations = [...destinations].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    featuredDestinations.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationGrid.appendChild(card);
    });
}

// Function to create a destination card element
function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-id', destination.id);
    
    card.innerHTML = `
        <div class="destination-img">
            <img src="${destination.image}" alt="${destination.name}">
        </div>
        <div class="destination-info">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <div class="destination-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${destination.category}</span>
                <span><i class="fas fa-star"></i> ${destination.rating}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        window.location.href = `pages/destinations/city.html?id=${destination.id}`;
    });
    
    return card;
}

// Function to load all destinations on the destinations page
function loadAllDestinations() {
    const destinationGrid = document.querySelector('.all-destinations-grid');
    if (!destinationGrid) return;
    
    destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationGrid.appendChild(card);
    });
}

// Function to load a specific city and its destinations
function loadCityDestinations() {
    const locationGrid = document.querySelector('.location-grid');
    if (!locationGrid) return;
    
    // Get city ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const cityId = parseInt(urlParams.get('id'));
    
    if (!cityId) {
        window.location.href = '../../index.html';
        return;
    }
    
    // Find the city in our data
    const city = destinations.find(dest => dest.id === cityId);
    if (!city) {
        window.location.href = '../../index.html';
        return;
    }
    
    // Update page title and header
    document.title = `${city.name} - Go2Guide`;
    const cityHeader = document.querySelector('.city-header h1');
    if (cityHeader) cityHeader.textContent = city.name;
    
    const cityDescription = document.querySelector('.city-header p');
    if (cityDescription) cityDescription.textContent = city.description;
    
    const cityImage = document.querySelector('.city-header-img img');
    if (cityImage) cityImage.src = `../../${city.image}`;
    
    // Load locations for this city
    city.locations.forEach(location => {
        const card = createLocationCard(location, city.id);
        locationGrid.appendChild(card);
    });
}

// Function to create a location card element
function createLocationCard(location, cityId) {
    const card = document.createElement('div');
    card.className = 'location-card';
    card.setAttribute('data-id', location.id);
    
    card.innerHTML = `
        <div class="location-img">
            <img src="../../${location.image}" alt="${location.name}">
        </div>
        <div class="location-info">
            <h3>${location.name}</h3>
            <p>${location.description.substring(0, 100)}...</p>
            <div class="location-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${location.location.split(',')[0]}</span>
                <span><i class="fas fa-star"></i> ${location.rating}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        window.location.href = `destination-info.html?city=${cityId}&location=${location.id}`;
    });
    
    return card;
}

// Function to load detailed information about a specific destination
function loadDestinationInfo() {
    const destinationInfo = document.querySelector('.destination-info-container');
    if (!destinationInfo) return;
    
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const cityId = parseInt(urlParams.get('city'));
    const locationId = parseInt(urlParams.get('location'));
    
    if (!cityId || !locationId) {
        window.location.href = '../../index.html';
        return;
    }
    
    // Find the city and location in our data
    const city = destinations.find(dest => dest.id === cityId);
    if (!city) {
        window.location.href = '../../index.html';
        return;
    }
    
    const location = city.locations.find(loc => loc.id === locationId);
    if (!location) {
        window.location.href = `city.html?id=${cityId}`;
        return;
    }
    
    // Update page title
    document.title = `${location.name} - Go2Guide`;
    
    // Update destination info content
    const infoContent = `
        <div class="destination-header">
            <h1>${location.name}</h1>
            <p class="destination-location"><i class="fas fa-map-marker-alt"></i> ${location.location}</p>
            <div class="destination-rating">
                <span class="rating-value">${location.rating}</span>
                <span class="rating-stars">
                    ${generateStarRating(location.rating)}
                </span>
            </div>
        </div>
        
        <div class="destination-gallery">
            <div class="main-image">
                <img src="../../${location.image}" alt="${location.name}">
            </div>
        </div>
        
        <div class="destination-content">
            <section class="destination-description">
                <h2>About ${location.name}</h2>
                <p>${location.description}</p>
            </section>
            
            <section class="destination-map">
                <h2>Location</h2>
                <div id="map" class="map-container"></div>
                <p class="address"><i class="fas fa-map-marker-alt"></i> ${location.location}</p>
            </section>
            
            <section class="destination-precautions">
                <h2>Important Precautions</h2>
                <div class="precaution-card">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>${location.precautions}</p>
                </div>
            </section>
            
            <section class="destination-actions">
                <button class="btn btn-favorite"><i class="far fa-heart"></i> Save to Favorites</button>
                <button class="btn btn-share"><i class="fas fa-share-alt"></i> Share</button>
            </section>
        </div>
    `;
    
    destinationInfo.innerHTML = infoContent;
    
    // Initialize map if Google Maps API is loaded
    if (window.google && window.google.maps) {
        initMap(location.coordinates.lat, location.coordinates.lng, location.name);
    } else {
        // Add a placeholder for the map
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <div class="map-placeholder">
                    <i class="fas fa-map-marked-alt"></i>
                    <p>Map loading...</p>
                </div>
            `;
        }
    }
    
    // Add event listeners for buttons
    const favoriteBtn = document.querySelector('.btn-favorite');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', () => {
            toggleFavorite(cityId, locationId);
        });
        
        // Check if this destination is already a favorite
        if (isFavorite(cityId, locationId)) {
            favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Saved to Favorites';
            favoriteBtn.classList.add('active');
        }
    }
    
    const shareBtn = document.querySelector('.btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            shareDestination(location.name, window.location.href);
        });
    }
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Function to initialize Google Maps
function initMap(lat, lng, locationName) {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    const map = new google.maps.Map(mapContainer, {
        center: { lat, lng },
        zoom: 15,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: true,
        zoomControl: true
    });
    
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: locationName,
        animation: google.maps.Animation.DROP
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: `<div class="map-info-window"><h3>${locationName}</h3></div>`
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Functions for favorites functionality
function toggleFavorite(cityId, locationId) {
    const favoriteBtn = document.querySelector('.btn-favorite');
    if (!favoriteBtn) return;
    
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteKey = `${cityId}-${locationId}`;
    
    if (isFavorite(cityId, locationId)) {
        // Remove from favorites
        favorites = favorites.filter(fav => fav !== favoriteKey);
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i> Save to Favorites';
        favoriteBtn.classList.remove('active');
        showNotification('Removed from favorites', 'info');
    } else {
        // Add to favorites
        favorites.push(favoriteKey);
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Saved to Favorites';
        favoriteBtn.classList.add('active');
        showNotification('Added to favorites', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(cityId, locationId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(`${cityId}-${locationId}`);
}

// Function to share a destination
function shareDestination(name, url) {
    if (navigator.share) {
        navigator.share({
            title: `Check out ${name} on Go2Guide`,
            text: `I found this amazing destination: ${name}`,
            url: url
        })
        .then(() => showNotification('Shared successfully', 'success'))
        .catch(error => showNotification('Error sharing', 'error'));
    } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard.writeText(url)
            .then(() => showNotification('Link copied to clipboard', 'success'))
            .catch(error => showNotification('Error copying link', 'error'));
    }
}

// Function to filter destinations by category
function filterDestinationsByCategory(category) {
    const destinationGrid = document.querySelector('.all-destinations-grid');
    if (!destinationGrid) return;
    
    // Clear current destinations
    destinationGrid.innerHTML = '';
    
    // Filter destinations by category if a category is specified
    const filteredDestinations = category 
        ? destinations.filter(dest => dest.category === category)
        : destinations;
    
    // Display filtered destinations
    filteredDestinations.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationGrid.appendChild(card);
    });
    
    // Update active category button
    document.querySelectorAll('.category-filter button').forEach(button => {
        button.classList.remove('active');
        if ((!category && button.getAttribute('data-category') === 'all') || 
            (button.getAttribute('data-category') === category)) {
            button.classList.add('active');
        }
    });
}

// Function to search destinations
function searchDestinations(query) {
    const searchResultsContainer = document.querySelector('.search-results-container');
    if (!searchResultsContainer) return;
    
    // Clear previous results
    searchResultsContainer.innerHTML = '';
    
    // Normalize query for case-insensitive search
    const normalizedQuery = query.toLowerCase();
    
    // Search through all destinations and their locations
    let results = [];
    
    destinations.forEach(city => {
        // Check if city name or description matches
        if (city.name.toLowerCase().includes(normalizedQuery) || 
            city.description.toLowerCase().includes(normalizedQuery)) {
            results.push({
                type: 'city',
                item: city
            });
        }
        
        // Check if any location in this city matches
        city.locations.forEach(location => {
            if (location.name.toLowerCase().includes(normalizedQuery) || 
                location.description.toLowerCase().includes(normalizedQuery)) {
                results.push({
                    type: 'location',
                    item: location,
                    cityId: city.id,
                    cityName: city.name
                });
            }
        });
    });
    
    // Display search results
    if (results.length > 0) {
        const resultsHeader = document.createElement('h2');
        resultsHeader.textContent = `Search Results for "${query}"`;
        searchResultsContainer.appendChild(resultsHeader);
        
        const resultsGrid = document.createElement('div');
        resultsGrid.className = 'search-results-grid';
        
        results.forEach(result => {
            const resultCard = document.createElement('div');
            resultCard.className = 'search-result-card';
            
            if (result.type === 'city') {
                resultCard.innerHTML = `
                    <div class="result-img">
                        <img src="../../${result.item.image}" alt="${result.item.name}">
                    </div>
                    <div class="result-info">
                        <h3>${result.item.name}</h3>
                        <p>${result.item.description}</p>
                        <span class="result-type">City</span>
                    </div>
                `;
                
                resultCard.addEventListener('click', () => {
                    window.location.href = `city.html?id=${result.item.id}`;
                });
            } else {
                resultCard.innerHTML = `
                    <div class="result-img">
                        <img src="../../${result.item.image}" alt="${result.item.name}">
                    </div>
                    <div class="result-info">
                        <h3>${result.item.name}</h3>
                        <p>${result.item.description.substring(0, 100)}...</p>
                        <span class="result-type">Attraction in ${result.cityName}</span>
                    </div>
                `;
                
                resultCard.addEventListener('click', () => {
                    window.location.href = `destination-info.html?city=${result.cityId}&location=${result.item.id}`;
                });
            }
            
            resultsGrid.appendChild(resultCard);
        });
        
        searchResultsContainer.appendChild(resultsGrid);
    } else {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h2>No results found for "${query}"</h2>
                <p>Try different keywords or browse our destinations below</p>
            </div>
            <div class="suggested-destinations">
                <h3>Popular Destinations</h3>
                <div class="suggested-grid"></div>
            </div>
        `;
        
        // Add some suggested destinations
        const suggestedGrid = searchResultsContainer.querySelector('.suggested-grid');
        const suggestedDestinations = [...destinations].sort(() => 0.5 - Math.random()).slice(0, 3);
        
        suggestedDestinations.forEach(destination => {
            const card = createDestinationCard(destination);
            suggestedGrid.appendChild(card);
        });
    }
}

// Initialize appropriate functions based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on and load appropriate content
    const currentPath = window.location.pathname;
    
    if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
        loadFeaturedDestinations();
    } else if (currentPath.includes('/destinations.html')) {
        loadAllDestinations();
        
        // Add event listeners for category filters
        document.querySelectorAll('.category-filter button').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                filterDestinationsByCategory(category === 'all' ? null : category);
            });
        });
    } else if (currentPath.includes('/city.html')) {
        loadCityDestinations();
    } else if (currentPath.includes('/destination-info.html')) {
        loadDestinationInfo();
    } else if (currentPath.includes('/search-results.html')) {
        // Get search query from URL
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        if (query) {
            document.title = `Search: ${query} - Go2Guide`;
            searchDestinations(query);
        } else {
            window.location.href = '../../index.html';
        }
    }
});