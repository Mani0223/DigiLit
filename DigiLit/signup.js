// Show the modal 5 seconds after the page loads
window.addEventListener('load', function () {
    setTimeout(function () {
      var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    }, 5000); 
  });