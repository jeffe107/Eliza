function loadNewLayout() {
    window.location.href = 'index_alternative.html';  // Redirect to a different HTML file
}

document.addEventListener("DOMContentLoaded", function() {
    const loadNewLayoutButton = document.getElementById("loadNewLayoutButton");

    loadNewLayoutButton.addEventListener("click", function() {
        loadNewLayout();
    });
});