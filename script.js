document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-card button");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Added to cart!");
      });
    });
  });
  
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  