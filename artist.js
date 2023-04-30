async function fetchArtist() {
    try {
      const response = await fetch('/artist.json');
      const data = await response.json();
      appendData(data);
      console.log(data);
    } catch (err) {
      console.log('error: ' + err);
    }
  }
  
  function appendData(data) {
    const mainContainer = document.getElementById('myData');
    data.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'indexName';
      mainContainer.appendChild(div);
  
      const img = document.createElement('img');
      img.src = item.featureimage;
      img.className = 'indexPic';
      mainContainer.appendChild(img);
  
      const link = document.createElement('a');
      link.href = item.link;
      link.className = 'artisttext';
      link.innerHTML = `${item.name}`;
  
      mainContainer.appendChild(link);
    });
  }
  
  fetchArtist();
  