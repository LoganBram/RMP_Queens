// Add an event listener to the target element
document.addEventListener("DOMContentLoaded", function () {
  var targetElement = document.getElementById("target-element");

  // Show the popup on mouseover
  targetElement.addEventListener("mouseover", function () {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  });

  // Hide the popup on mouseout
  targetElement.addEventListener("mouseout", function () {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  });
});
