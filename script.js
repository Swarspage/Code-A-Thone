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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("uploadForm");
  const saveAsDraftBtn = document.getElementById("saveAsDraft");

  // Function to save form data
  function saveFormData() {
    const formData = {
      artisanName: document.getElementById("artisanName").value,
      craftType: document.getElementById("craftType").value,
      workDescription: document.getElementById("workDescription").value,
      experience: document.getElementById("experience").value,
      location: document.getElementById("location").value,
      contact: document.getElementById("contact").value,
      email: document.getElementById("email").value,
      tags: document.getElementById("tags").value,
      termsAgreement: document.getElementById("termsAgreement").checked,
    };
    localStorage.setItem("skillTubeFormData", JSON.stringify(formData));
    alert("Form data saved successfully!");
  }

  // Load saved data on page load
  function loadFormData() {
    const savedData = localStorage.getItem("skillTubeFormData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      document.getElementById("artisanName").value = formData.artisanName || "";
      document.getElementById("craftType").value = formData.craftType || "";
      document.getElementById("workDescription").value =
        formData.workDescription || "";
      document.getElementById("experience").value = formData.experience || "";
      document.getElementById("location").value = formData.location || "";
      document.getElementById("contact").value = formData.contact || "";
      document.getElementById("email").value = formData.email || "";
      document.getElementById("tags").value = formData.tags || "";
      document.getElementById("termsAgreement").checked =
        formData.termsAgreement || false;
    }
  }

  // Save data on form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo
    saveFormData();
  });

  // Save as draft button
  saveAsDraftBtn.addEventListener("click", function () {
    saveFormData();
  });

  // Load data when the page loads
  loadFormData();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("uploadForm");
  const saveAsDraftBtn = document.getElementById("saveAsDraft");

  // Function to save form data
  function saveFormData() {
    const formData = {
      artisanName: document.getElementById("artisanName").value,
      craftType: document.getElementById("craftType").value,
      workDescription: document.getElementById("workDescription").value,
      experience: document.getElementById("experience").value,
      location: document.getElementById("location").value,
      contact: document.getElementById("contact").value,
      email: document.getElementById("email").value,
      tags: document.getElementById("tags").value,
      termsAgreement: document.getElementById("termsAgreement").checked,
    };
    localStorage.setItem("skillTubeFormData", JSON.stringify(formData));
    alert("Form data saved successfully!");
  }

  // Function to reset form and clear localStorage on reload
  function resetFormData() {
    localStorage.removeItem("skillTubeFormData"); // Clear stored data
    form.reset(); // Reset form fields
  }

  // Save data on form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo
    saveFormData();
  });

  // Save as draft button
  saveAsDraftBtn.addEventListener("click", function () {
    saveFormData();
  });

  // Clear localStorage and reset form on page reload
  resetFormData();
});
