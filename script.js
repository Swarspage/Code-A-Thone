document.addEventListener("DOMContentLoaded", function () {
  // Display popup on load

  // Redirect buttons to respective pages
  document.getElementById("addWorkBtn")?.addEventListener("click", function () {
    window.location.href = "upload.html";
  });

  document.getElementById("connectBtn")?.addEventListener("click", function () {
    window.location.href = "discover.html";
  });

  // File upload handling
  const fileInput = document.getElementById("videoUpload");
  const dropZone = document.getElementById("dropZone");
  const previewContainer = document.getElementById("uploadPreview");
  const browseBtn = document.getElementById("browseBtn");

  if (dropZone && fileInput) {
    dropZone.addEventListener("click", () => fileInput.click());
    browseBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        previewContainer.innerHTML = `<p>File selected: ${file.name}</p>`;
      }
    });

    dropZone.addEventListener("dragover", function (e) {
      e.preventDefault();
      dropZone.classList.add("dragging");
    });

    dropZone.addEventListener("dragleave", function () {
      dropZone.classList.remove("dragging");
    });

    dropZone.addEventListener("drop", function (e) {
      e.preventDefault();
      fileInput.files = e.dataTransfer.files;
      previewContainer.innerHTML = `<p>File selected: ${fileInput.files[0].name}</p>`;
    });
  }

  // Sample moving images effect
  const movingImages = document.querySelector(".moving-images");
  if (movingImages) {
    let scrollAmount = 0;
    function autoScroll() {
      scrollAmount += 1;
      movingImages.scrollLeft = scrollAmount;
      if (scrollAmount >= movingImages.scrollWidth - movingImages.clientWidth) {
        scrollAmount = 0;
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  }
});
