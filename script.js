if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdvbWV6ZGV2IiwiYSI6ImNrY3JiNjlreTFkM2QyeXM1NG4xODA2anYifQ.t9njpH24eFVIczJo7N3RVQ";


var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-98.491142, 29.424349],
  zoom: 11,
  scrollZoom: true,
});

var poplocations = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-98.48612044232871, 29.426359577566828],
      },
      properties: {
        iconSize: [30, 30],
        heading: "The Alamo ",
        name: "The Alamo",
        image: "./images/alamo.jpg",
        info: "https://www.thealamo.org/",
        address: "1471 P St NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 15th St NW",
        postalCode: "20005",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-98.482147, 29.437281],
      },
      properties: {
        iconSize: [60, 60],
        heading: "Art Museum ",
        name: "San Antonio Museum of Art",
        image: "./images/SAMA.jpg",
        info: "https://www.samuseum.org/",
        address: " 200 W Jones Ave",
        state: "Texas",
        city: "San Antonio",
        country: "United States",
        crossStreet: "at 22nd St NW",
        postalCode: "78215",
        state: "TX.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-98.45709579999983, 29.486352521862464],
      },
      properties: {
        iconSize: [60, 60],
        heading: "Art Museum ",
        name: "McNay Art Muesum",
        image: "./images/mcknay.jpg",
        info: "https://www.mcnayart.org/",
        address: " 6000 N New Braunfels Ave",
        city: "San Antonio",
        country: "United States",
        crossStreet: "at Dupont Circle",
        postalCode: "78209",
        state: "Texas",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-98.49516626931181, 29.409368146898036],
      },
      properties: {
        iconSize: [60, 60],
        heading: "Art Museum ",
        name: "Blue Star Contemporary",
        image: "./images/bluestar.jpg",
        info: "https://bluestarcontemporary.org/",
        address: " 116 Blue Star,",
        city: "San Antonio",
        country: "United States",
        crossStreet: "at Dupont Circle",
        postalCode: "78204",
        state: "Texas",
      },
    },
  ],
};
poplocations.features.forEach(function (store, i) {
  store.properties.id = i;
});


fetch("./locations.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    var artlocations = data;
    console.log(artlocations);

    /**
     * Assign a unique id to each store. You'll use this `id`
     * later to associate each point on the map with a listing
     * in the sidebar.
     */
    artlocations.features.forEach(function (store, i) {
      store.properties.id = i;
    });

    /**
     * Wait until the map loads to make changes to the map.
     */
    map.on("load", function (e) {
      /**
       * This is where your '.addLayer()' used to be, instead
       * add only the source without styling a layer
       */
      map.addSource("places", {
        type: "geojson",
        data: artlocations,
        generateId: true // This ensures that all features have unique IDs

      });
      

      /* Circle marker layer */

      map.addLayer({
        id: "locations",
        type: "circle",
        paint: {
          "circle-radius": 10,
          "circle-color": "purple",
          "circle-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            1.5,
          ],
          "circle-stroke-width": 1.5,
        },
        /* Add a GeoJSON source containing place coordinates and information. */
        source: {
          type: "geojson",
          data: poplocations,
          generateId: true // This ensures that all features have unique IDs

        },
      });

      let hoveredStateId = null;
      map.on("mousemove", "locations", (e) => {
        
        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.setFeatureState(
              { source: 'locations', id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: 'locations', id: hoveredStateId },
            { hover:true }
          );
        }
      });

      buildLocationList(artlocations);
      buildLocationList2(poplocations);
      addMarkers();
    });
    /**
     * Add a marker to the map for every store listing.
     **/
    function addMarkers() {
      /* For each feature in the GeoJSON object above: */
      artlocations.features.forEach(function (marker) {
        /* Create a div element for the marker. */
        var el = document.createElement("div");
        /* Assign a unique `id` to the marker. */
        el.id = "marker-" + marker.properties.id;
        /* Assign the `marker` class to each marker for styling. */
        el.className = "marker";

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, 0] })
          .setLngLat(marker.geometry.coordinates)
          //.setOffset(offset)
          .addTo(map);

        /**
         * Listen to the element and when it is clicked, do three things:
         * 1. Fly to the point
         * 2. Close all other popups and display popup for clicked store
         * 3. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        el.addEventListener("click", function (e) {
          /* Fly to the point */
          flyToStore(marker);
          /* Close all other popups and display popup for clicked store */
          createPopUp(marker);
          /* Highlight listing in sidebar */
          var activeItem = document.getElementsByClassName("active");
          e.stopPropagation();
          if (activeItem[0]) {
            activeItem[0].classList.remove("active");
          }
          var listing = document.getElementById(
            "listing-" + marker.properties.id
          );
          listing.classList.add("active");
        });
      });

      poplocations.features.forEach(function (marker) {
        // Create a DOM element for each marker.
        var el = document.createElement("div");
        el.className = "marker2";
        el.id = "marker-" + marker.properties.id;
        /* Assign the `marker` class to each marker for styling. */
        el.className = "marker2";

        // Add markers to the map.
        new mapboxgl.Marker(el, { offset: [0, 0] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);

        /**
         * Listen to the element and when it is clicked, do three things:
         * 1. Fly to the point
         * 2. Close all other popups and display popup for clicked store
         * 3. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        el.addEventListener("click", function (e) {
          /* Fly to the point */
          flyToStore(marker);
          /* Close all other popups and display popup for clicked store */
          createPopUp(marker);
          /* Highlight listing in sidebar */
          var activeItem = document.getElementsByClassName("active");
          e.stopPropagation();
          if (activeItem[0]) {
            activeItem[0].classList.remove("active");
          }
          var listing = document.getElementById(
            "listing-" + marker.properties.id
          );
          listing.classList.add("active");
        });
      });
    }

    function buildLocationList(data) {
      // Changed the "forEach" loop to a "for" loop for better performance
      for (let i = 0; i < data.features.length; i++) {
        const prop = data.features[i].properties;
    
        // Add a new listing section to the sidebar
        const listings = document.getElementById("listings");
        listings.appendChild(document.createElement("hr"));
    
        // Create a new div for the listing
        const listing = document.createElement("div");
        listing.id = `listing-${prop.id}`;
           listing.className = "item";
    
        // Add the image to the listing
        const image = document.createElement("img");
        image.src = prop.image;
        image.className = "images1";
        listing.appendChild(image);
    
        // Add the link to the individual listing created above
        const link = document.createElement("a");
        link.href = "#";
        link.className = "title";
        link.id = `link-${prop.id}`;
        link.innerHTML = prop.address;
        listing.appendChild(link);
    
        // Add the heading and name to the listing
        const name = document.createElement("div");
        name.innerHTML = prop.heading;
        name.className = "name";
        link.appendChild(name);
    
        const artist = document.createElement("div");
        artist.innerHTML = prop.name;
        artist.className = "artist";
        link.appendChild(artist);
    
        // Add the click event listener for the link to fly to store and create pop up
        link.addEventListener("click", function (e) {
          const clickedListing = data.features[i];
          flyToStore(clickedListing);
          createPopUp(clickedListing);
    
          const activeItem = document.getElementsByClassName("active");
          if (activeItem[0]) {
            activeItem[0].classList.remove("active");
          }
          this.parentNode.classList.add("active");
        });
    
        // Add the new pic grid
        const listings2 = document.getElementById("listings2");
        const listing2 = document.createElement("div");
        listing2.id = `listing2-${prop.id}`;
        listing2.className = "item";
    
        const link2 = document.createElement("a");
        link2.href = "#";
        link2.className = "title";
        link2.id = `link2-${prop.id}`;
        listing2.appendChild(link2);
    
        const image2 = document.createElement("img");
        image2.src = prop.image;
        image2.className = "images";
        link2.appendChild(image2);
        listing2.appendChild(link2);
    
        // Add the click event listener for the link to fly to store and create pop up
        link2.addEventListener("click", function (e) {
          const clickedListing = data.features[i];
          flyToStore(clickedListing);
          createPopUp(clickedListing);
    
          const activeItem = document.getElementsByClassName("active");
          if (activeItem[0]) {
            activeItem[0].classList.remove("active");
          }
          this.parentNode.classList.add("active");
        });
    
        // Append the listings to the corresponding divs
        listings.appendChild(listing);
        listings2.appendChild(listing2);
      }
    }
    
    //Notable locations being added to the map
    function buildLocationList2(data) {
      data.features.forEach(function(store) {
          const prop = store.properties;
  
          const listings3 = document.getElementById("listings3");
          const listItem3 = document.createElement("div");
          listItem3.id = `listing3-${prop.id}`;
          listItem3.className = "item2";
          listings3.appendChild(listItem3);
  
          const link3 = document.createElement("a");
          link3.href = "#";
          link3.className = "title";
          link3.id = `link3-${prop.id}`;
          listItem3.appendChild(link3);
  
          const image3 = document.createElement("img");
          image3.src = prop.image;
          image3.className = "images2";
          link3.appendChild(image3);
  
          const feattext = document.createElement("p");
          feattext.className = "feattext";
          feattext.innerHTML = prop.name;
          listItem3.appendChild(feattext);
  
          link3.addEventListener("click", function() {
              const clickedListing = data.features.find(function(feature) {
                  return feature.properties.id === prop.id;
              });
  
              flyToStore(clickedListing);
              createPopUp(clickedListing);
  
              const activeItem = document.querySelector(".active");
              if (activeItem) {
                  activeItem.classList.remove("active");
              }
              listItem3.classList.add("active");
          });
      });
  }
  
    /**
     * Use Mapbox GL JS's `flyTo` to move the camera smoothly
     * a given center point.
     **/
    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        bearing: 0,
        curve: 0.9,
        speed: 0.8, // make the flying slow
        zoom: 14,
      });
    }
    
    function createPopUp(currentFeature) {
      var popUps = document.getElementsByClassName("mapboxgl-popup");
      if (popUps[0]) popUps[0].remove();
    
      var popup = new mapboxgl.Popup({ closeOnClick: true, offset: [200, -200]})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
          '<img  class="map-img" src=' + currentFeature.properties.image +'></img>' +
          '<p class="map-address">' + currentFeature.properties.address + '</p>' +
          '<p class="map-artist">' + currentFeature.properties.heading +
          '<p class="artist-header" >ARTIST</p>' +
          '<p class="map-artist">' + currentFeature.properties.name + '</p>' +
          '<a  class="btn" href=' + currentFeature.properties.info + '>MORE INFO</a>'
        )
        .addTo(map);
    }
     
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      }),
      'top-right'
    );
  })
