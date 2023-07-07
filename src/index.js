

export function loadImages() {
  
    currentPage += 1;
    searchImages(query, currentPage);
  }

  export function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadImages();
    }
  }

