if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
    };
  }

  mapboxgl.accessToken = '';
  /** 
   * Add the map to the page
  */
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-98.491142, 29.424349],
    zoom: 12,
    scrollZoom: false
  });

  var stores = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.4953,
            29.4092
          ]
        },
        "properties": {
          "heading":"Blue Star",
          "name":"none",
          "phoneFormatted": "(210) 354-3775",
          "phone": "2103543775",
          "address": "1414 S Alamo St",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "at S Alamo",
          "postalCode": "78210",
          "state": "Texas"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.51508,
            29.418455
          ]
        },
        "properties": {
         "heading":"La Veladora of Our Lady of Guadalupe ",
         "name":"Jesse Trevino",
         "image":"./image2.jpg",
          "phoneFormatted": "(202) 507-8357",
          "phone": "2025078357",
          "address": "1315 Guadalupe St",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "at 22nd St NW",
          "postalCode": "20037",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.534132,
            29.349889

          ]
        },
        "properties": {
          "heading":"Dream Song Tower ",
          "name":"Ortiz Cruz",
          "image":"./image3.jpg",
          "phoneFormatted": "(202) 387-9338",
          "phone": "2023879338",
          "address": "Interstate 35 Access Rd & S Zarzamora St",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "IH 35 South and Zarzamora",
          "postalCode": "78224",
          "state": "Texas"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.487473,
            29.423029
          ]
        },
        "properties": {
         "heading":"The Torch of Friendship",
         "name":"Sebastián",
         "image":"./image4.jpg",
          "phoneFormatted": "(202) 337-9338",
          "phone": "2023379338",
          "address": "333 Losoya Street",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "at 34th St NW",
          "postalCode": "20007",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.5078,
            29.4883
          ]
        },
        "properties": {
            "heading":"Crossroads of Enlightenment",
            "name":" Angel Rodríguez–Díaz",
            "image":"./image5.jpg",
            "phoneFormatted": "(202) 547-9338",
          "phone": "2025479338",
          "address": "4400 Blanco Road ",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "Intersection of Blanco and Basse",
          "postalCode": "78212",
          "state": "TX"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.4923019999999,
            29.4280110000001
          ]
        },
        "properties": {
          "heading":"River Walk Mosaic Murals",
          "name":"Oscar Alvarado ",
          "image":"./image6.jpg",
          "address": "849 E Commerce",
          "city": "San Antonio",
          "country": "United States",
          "postalCode": "278205",
          "state": "Texas"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.469172,
            29.341036
          ]
        },
        "properties": {
          "heading":'Pioneers of the Sky, The Stinson School of Flying',
          "name":"Andy and Yvette Benavides of Smart And Joe De La Cruz, Chris Montoya, and Jose Cosme",
          "image":"./image7.jpg",
          "phoneFormatted": "(301) 654-7336",
          "phone": "3016547336",
          "address": "8410 Mission Road",
          "cc": "US",
          "city": "San Antonio",
          "country": "United States",
          "postalCode": "20814",
          "state": "TX"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.475844,
            29.428811
          ]
        },
        "properties": {
          "heading": "Powder",
          "name":"Daniel Eime",
          "image":"./image8.jpg",
          "phoneFormatted": "(571) 203-0082",
          "phone": "5712030082",
          "address": "502 Burnet St",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "btw Explorer & Library",
          "postalCode": "78214",
          "state": "Texas"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.4927359989999,
            29.4300673330001
          ]
        },
        "properties": {
            "heading":"Red Bird",
            "name":"Michael Lance",
            "image":"./image9.jpg",
          "phoneFormatted": "(703) 522-2016",
          "phone": "7035222016",
          "address": "204 Augusta",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "at N Randolph St.",
          "postalCode": "78205",
          "state": "TX"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.52265709,
            29.46357
          ]
        },
        "properties": {
         "heading":"Maverick Tile Mural",
         "name":"Ethel Wilson Harris ",
         "image":"./image10.jpg",
          "phoneFormatted": "(610) 642-9400",
          "phone": "6106429400",
          "address": "Riverwalk- North of Lexington St. Bridge",
          "city": "Ardmore",
          "country": "United States",
          "postalCode": "78201",
          "state": "PA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.483700333999,
            29.419425
          ]
        },
        "properties": {
        "heading":"Some Things I've Experienced in South Texas",
        "name":"Alex Deleon",
        "image":"./image11.jpg",
          "phoneFormatted": "(215) 386-1365",
          "phone": "2153861365",
          "address": "600 Hemisfair Park",
          "city": "San Antonio",
          "country": "United States",
          "postalCode": "78205",
          "state": "TX"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.504280,
            29.461158
          ]
        },
        "properties": {
        "heading":"Canopy",
        "name":"Joey Fauerso",
        "image":"./image12.jpg",
          "phoneFormatted": "(202) 331-3355",
          "phone": "2023313355",
          "address": "729 Fulton Ave",
          "city": "San Antonio",
          "country": "United States",
          "crossStreet": "at 19th St",
          "postalCode": "78212",
          "state": "TX"
        }
      }
    ]
  };
  
  /**
   * Assign a unique id to each store. You'll use this `id`
   * later to associate each point on the map with a listing
   * in the sidebar.
  */
  stores.features.forEach(function(store, i){
    store.properties.id = i;
  });

  /**
   * Wait until the map loads to make changes to the map.
  */
  map.on('load', function (e) {
    /** 
     * This is where your '.addLayer()' used to be, instead
     * add only the source without styling a layer
    */
    map.addSource("places", {
      "type": "geojson",
      "data": stores
    });

    /**
     * Add all the things to the page:
     * - The location listings on the side of the page
     * - The markers onto the map
    */
    buildLocationList(stores);
    addMarkers();
  });

  /**
   * Add a marker to the map for every store listing.
  **/
  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    stores.features.forEach(function(marker) {
      /* Create a div element for the marker. */
      var el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = "marker-" + marker.properties.id;
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker';
      
      /**
       * Create a marker using the div element
       * defined above and add it to the map.
      **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
      **/
      el.addEventListener('click', function(e){
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + marker.properties.id);
        listing.classList.add('active');
      });
    });
  }

  /**
   * Add a listing for each store to the sidebar.
  **/
  function buildLocationList(data) {
    data.features.forEach(function(store, i){
      /**
       * Create a shortcut for `store.properties`,
       * which will be used several times below.
      **/
      var prop = store.properties;

      /* Add a new listing section to the sidebar. */
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = "listing-" + prop.id;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';



  
      var name = listing.appendChild(document.createElement('div'))
      name.innerHTML  = prop.heading;

      /* Add the link to the individual listing created above. */
      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = "link-" + prop.id;
      link.innerHTML = prop.address;

      /* Add details to the individual listing. */
    //   var details = listing.appendChild(document.createElement('div'));

    //   details.innerHTML = prop.city;

      /**
       * Listen to the element and when it is clicked, do four things:
       * 1. Update the `currentFeature` to the store associated with the clicked link
       * 2. Fly to the point
       * 3. Close all other popups and display popup for clicked store
       * 4. Highlight listing in sidebar (and remove highlight for all other listings)
      **/
      link.addEventListener('click', function(e){
        for (var i=0; i < data.features.length; i++) {
          if (this.id === "link-" + data.features[i].properties.id) {
            var clickedListing = data.features[i];
            flyToStore(clickedListing);
            createPopUp(clickedListing);
          }
        }
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
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
      zoom: 15
    });
  }
  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();
  
    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Art Location</h3>' + '<img src=' + currentFeature.properties.image + '></img>' +
        '<h4>' + currentFeature.properties.address + '</h4>' + "Artist:" + '<h4>' + currentFeature.properties.name + '</h4>'

      )
      .addTo(map);
  }

  map.addControl(new mapboxgl.NavigationControl());
