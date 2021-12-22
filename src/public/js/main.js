// Authentication
var currentUser = localStorage.getItem('currentUser');
console.log(currentUser);
if (currentUser != null && currentUser != "") {
  document.querySelectorAll(".login-btn-cover").forEach((element) => {
    element.outerHTML = `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle btn btn-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${currentUser}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item sign-out-btn" href="#">Sign Out</a></li>
          </ul>
        </li>
        `;
  });
  document.querySelectorAll(".sign-out-btn").forEach(element => {
    element.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      window.location.href = "/login";
      window.location;
    }
  })
}

// Config for Owl Library
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoWidth: true,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});