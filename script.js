



if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
    };
  }
  //var token = process.env.APIMAPBOXTOKEN
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWdvbWV6ZGV2IiwiYSI6ImNrY3JiNjlreTFkM2QyeXM1NG4xODA2anYifQ.t9njpH24eFVIczJo7N3RVQ';

  
  //mapboxgl.accessToken = process.env.APIMAPBOXTOKEN;



  
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.491142, 29.424349],
    zoom: 11,
    scrollZoom:true
  });

  var stores = {
    "type": "FeatureCollection",
    "features": [
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
         "image":"./images/image2.jpg",
         "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/287/La-Veladora-of-Our-Lady-of-Guadalupe",
          "address": "1315 Guadalupe St",
          "postalCode": "20037",
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
          "image":"./images/image3.jpg",
          "info" : "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/742/Dream-Song-Tower",
          "address": "Interstate 35 Access Rd & S Zarzamora St",
          "state": "Texas",
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
         "info" : "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/165/Torch-of-Friendship-Antorcha-de-Amistad",
         "name":"Sebastián",
         "image":"./images/image4.jpg",
          "address": "333 Losoya Street",
          "city": "San Antonio",
          "postalCode": "20007",
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
            "image":"./images/image5.jpg",
            "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/380/Crossroads-of-Enlightenment",
          "address": "4400 Blanco Road ",
          "city": "San Antonio",
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
          "heading":"Mosaic Murals on The River Walk",
          "name":"Oscar Alvarado ",
          "image":"./images/image6.jpg",
          "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/164/River-Walk-Mosaic-Murals",
          "address": "849 E Commerce",
          "city": "San Antonio",
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
          "heading":'Pioneers of the Sky',
          "name": 
            "Collaboration",
          "image":"./images/image7.jpg",
          "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/779/Pioneers-of-the-Sky-The-Stinson-School-of-Flying",
          "address": "8410 Mission Road",
          "cc": "US",
          "city": "San Antonio",
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
          "image":"./images/image8.jpg",
          "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/762/Powder",
          "address": "502 Burnet St",
          "city": "San Antonio",
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
            "image":"./images/image9.jpg",
            "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/284/Red-Bird",
          "address": "204 Augusta",
          "city": "San Antonio",
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
         "image":"./images/image10.jpg",
         "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/160/Maverick-Tile-Mural",
          "address": "Riverwalk- North of Lexington St. Bridge",
          "city": "San Antonio",
          "country": "United States",
          "postalCode": "78201",
          "state": "TX"
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
        "image":"./images/image11.jpg",
        "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/130/Some-Things-Ive-Experienced-in-South-Texas",
          "address": "600 Hemisfair Park",
          "city": "San Antonio",
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
        "image":"./images/image12.jpg",
        "info": "https://www.getcreativesanantonio.com/Public-Art/Public-Artworks-Map/Public-Artworks-List/Public-Artwork/Article/721/Canopy",
          "address": "729 Fulton Ave",
          "city": "San Antonio",
          "crossStreet": "at 19th St",
          "postalCode": "78212",
          "state": "TX"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -98.497456,
            29.429442
          ]
        },
        "properties": {
          "heading":"De Todos Caminos Somos Todos Uno",
          "name":"ADRIANA M. GARCIA",
          "phoneFormatted": "(210) 354-3775",
          "address": "Between Santa Rosa Avenue and Martin Street",
          "image":"./images/image13.jpg",
          "info": "https://www.americansforthearts.org/by-program/networks-and-councils/public-art-network/public-art-year-in-review-database/de-todos-caminos-somos-todos-uno",
          "city": "San Antonio",
          "postalCode": "78210",
          "state": "Texas"
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
      new mapboxgl.Marker(el, { offset: [0, -20] })
        .setLngLat(marker.geometry.coordinates)
        //.setOffset(offset)
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


  function buildLocationList(data) {
    data.features.forEach(function(store, i){
      /**
       * Create a shortcut for `store.properties`,
       * which will be used several times below.
      **/
      var prop = store.properties;

      /* Add a new listing section to the sidebar. */
      var listings = document.getElementById('listings');
      listings.appendChild(document.createElement('hr'));

      var listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = "listing-" + prop.id;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';



      var image = listing.appendChild(document.createElement('img'))
      image.src = prop.image;
      image.className="images"

     /* Add the link to the individual listing created above. */
     var link = listing.appendChild(document.createElement('a' ));
     link.href = '#';
     link.className = 'title';
     link.id = "link-" + prop.id;
     link.innerHTML = prop.address;


      listing.appendChild(document.createElement('br' ));


      var name = listing.appendChild(document.createElement('div'))
      name.innerHTML  = prop.heading;
      name.className = 'name' ;



      var artist = listing.appendChild(document.createElement('div'))
      artist.innerHTML  = prop.name;
      artist.className = 'artist' ;



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
      bearing: 0,
      curve: 0.9,
      speed: 0.8, // make the flying slow
      zoom: 14

    });
  }
  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();



    var popup = new mapboxgl.Popup({ 
      closeOnClick: true,

      offset: [100, -200],
    })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<img  class="map-img" src=' + currentFeature.properties.image + '></img>' + 
        '<p class="map-address">' + currentFeature.properties.address + '</p>' + 
        '<p class="artist-header" >ARTIST</p>'
        + '<p class="map-artist">' +  currentFeature.properties.name + '</p>' + 
         '<a  class="btn" href='+ currentFeature.properties.info +'>MORE INFO</a>'


      )
      .addTo(map);
  }

  map.addControl(new mapboxgl.NavigationControl());
