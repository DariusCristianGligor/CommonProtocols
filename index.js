
let postTitle = (jsPhotosArray) => {
    let html = '';
    //  jsPhotosArray.sort(function (x, y) {
    //      if (x.title > y.title) return 1;
    //      if (x.title < y.title) return -1;
    //     return 0;
    //  });
    jsPhotosArray
        .filter((photo, index) => (index < 10))
        .map((photo) => {
            html += `
    <div class="imagini">
    <h2> <img src="${photo.url}" /></h2>
    <h3>Album Name:${photo.title}</h3>
    </div>`;
        }
        );
    document.getElementById("photosDiv").innerHTML = html;
}
let getPhotoAndTitle = async () => {

    const photos = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(obj => obj.json());

    postTitle(photos);

}

document.getElementById('getPhotos').addEventListener("click", getPhotoAndTitle);
