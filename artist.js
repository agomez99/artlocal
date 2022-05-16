fetch('/artist.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
    console.log(data);

})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {

    var div = document.createElement("div");
    div.className="indexName";
    mainContainer.appendChild(div);

    var img  = document.createElement("img");
    img.src =  data[i].featureimage;
    img.className="indexPic"
    mainContainer.appendChild(img );


    var link = document.createElement("a");
    link.href = data[i].link ;
    link.className = "artisttext"
    link.innerHTML =  data[i].name ;


    mainContainer.appendChild(link);

}
}
