export { queryResult };
const gallery = document.querySelector('.gallery');
function queryResult(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<a class="gallery__link" href="${largeImageURL}">
            <div class="photo-card">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" height="200" />
                <div class="info">
                <p class="info-item"><b>Likes</b> ${likes}</p> 
                <p class="info-item"><b>Views</b> ${views}</p>
                <p class="info-item"><b>Comments</b> ${comments}</p>
                <p class="info-item"><b>Downloads</b> ${downloads}</p>
              </div>
            </div>
            </a>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}
