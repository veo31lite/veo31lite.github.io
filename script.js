(function () {
  var form = document.querySelector("[data-generator-form]");
  var message = document.querySelector("[data-generator-message]");

  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      message.textContent = "Preview ready: this static demo shows the Veo 3.1 Lite workflow without generating a real video.";
    });
  }

  var uploadBox = document.querySelector(".upload-box");

  if (uploadBox) {
    uploadBox.addEventListener("click", function () {
      if (message) {
        message.textContent = "Image upload is a placeholder for the static GitHub Pages demo.";
      }
    });

    uploadBox.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        uploadBox.click();
      }
    });
  }
})();
