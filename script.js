


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
  fetch('./locations.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    var pins =  data;
    console.log(pins);


  /**
   * Assign a unique id to each store. You'll use this `id`
   * later to associate each point on the map with a listing
   * in the sidebar.
  */
   pins.features.forEach(function(store, i){
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
      "data": pins
    });
    /**
     * Add all the things to the page:
     * - The location listings on the side of the page
     * - The markers onto the map
    */
    buildLocationList(pins);

    addMarkers();
  });

  /**
   * Add a marker to the map for every store listing.
  **/
  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    pins.features.forEach(function(marker) {
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



      //new pic grid
      var listings2 = document.getElementById('listings2');
      var listing2 = listings2.appendChild(document.createElement('div'));

      var link2 = listing2.appendChild(document.createElement('a' ));
      link2.href = '#';
      link2.className = 'title';
      link2.id = "link2-" + prop.id;

      var image2 = listing2.appendChild(document.createElement('img'))
      listing2.id = "listing2-" + prop.id;
      listing2.className = 'item';
      image2.src = prop.image;
      image2.className="images"
      link2.appendChild(image2);
      listing2.appendChild(link2);

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
      link2.addEventListener('click', function(e){
        for (var i=0; i < data.features.length; i++) {
          if (this.id === "link2-" + data.features[i].properties.id) {
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
      offset: [200, -200],
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

  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
}), 'top-right');

  }).catch(err => {
    // Do something for an error here
  });

  