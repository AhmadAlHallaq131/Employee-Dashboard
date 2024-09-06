// This JavaScript code uses jQuery to dynamically load navigation and card data into a webpage. 
// It fetches HTML content for the navigation bar from "nav.html" and replaces the placeholder with it. 
// Upon document ready, it sets up event handlers to show more cards when a button is clicked, 
// highlights the active tab in the navigation based on the current page, and populates card containers 
// with data from two JSON files: "data-main.json" and "Pending.json". 
// Each card displays various attributes like image, name, date, duration, and salary, 
// along with action buttons for approval and decline.

$.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$(document).ready(function () {
    $('#view-more').on('click', function () {
        $('.view-more-card').removeClass('d-none');
        $(this).hide();
    });
});
$(document).ready(function() {
    var currentPage = window.location.pathname.split("/").pop();
    $('.navbar-nav .btn').each(function() {
        if ($(this).attr('id') === currentPage) {
            $(this).addClass('active-tab');
        } else {
            $(this).removeClass('active-tab');
        }
    });
});
$(document).ready(function() {
    $.getJSON('data-main.json', function(data) {
        var cardContainer = $('#card-container');
        cardContainer.empty();
        $.each(data, function(index, item) {
            var cardHtml = `
            <div class="col-sm-3 more-long mt-3">
                <div class="card more-long">
                    <div class="card-body">
                        <img src="${item.image}" alt="${item.name}" width="100" height="100">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text text-start">Submitted on: <br><span class="h6">${item.date}</span></p>
                        <p class="card-text text-start">Duration: <br><span class="h6">${item.duration}</span></p>
                        <p class="card-text text-start">Salary: <br><span class="h6">${item.salary}</span></p>
                        <button class="rounded border bg-body border-success text-success mt-3 px-4 py-1">Decline</button>
                        <button class="rounded bg-success w px-4 border-0 py-1">Approve</button>
                    </div>
                </div>
            </div>
            `;
            cardContainer.append(cardHtml);
        });
    });
});
// i don't have time to finsh this :)
$(document).ready(function() {
    $.getJSON('Pending.json', function(data) {
        var cardsContainer = $('#cards-container');
        cardsContainer.empty(); 
        $.each(data, function(index, item) {
            var cardHtml = `
            <div class="col-sm-3 more-long mb-4">
                <div class="card more-long">
                <div class="card-body mb-5">
                    <img src="${item.image}" alt="${item.name}" width="100" height="100">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text text-start">Submitted on: <br><span class="h6">${item.submittedOn}</span></p>
                    <p class="card-text text-start mt-3">Duration: <br><span class="h6">${item.duration}</span></p>
                    <p class="card-text text-start mt-5">Currently at: <br><span class="h5 text-success">${item.currentStatus}</span></p>
                </div>
                </div>
            </div>
            `;
            cardsContainer.append(cardHtml);
        });
    });
});


