$('.card').on('click', function () {
    var topic = $(this).data('topic')

    $('#column-right').empty()

if (topic === 'Seasonality') {
$('#column-right').css('background-image', 'url("https://onwisconsin.uwalumni.com/content/uploads/2023/05/beets.png")');

// Adding a text element
$('#column-right').append('<p id="additional-text">Mid-summer<br>through late fall.</p>');

// Adding CSS styling to make the text white
$('#additional-text').css({
'color': 'white',
'text-shadow': '1px 1px 2px black'
});
}

    if (topic === 'Taste') {
$('#column-right').css('background-image', 'url("https://freshunlimited.in/cdn/shop/products/Beetroot_578x.png?v=1609401234")');

// Adding a text element
$('#column-right').append('<p id="additional-text">Earthy, sweet, and<br>slightly bitter.</p>');

// Adding CSS styling to make the text white
$('#additional-text').css({
'color': 'white',
'text-shadow': '1px 1px 2px black'
});
}

    if (topic === 'Usage') {
$('#column-right').css('background-image', 'url("https://cdn.shopify.com/s/files/1/0560/0732/7881/files/Ingredients_Beetroot-Powder-Detail-1.png")');

// Adding a text element with a styled link to a website when clicking on "borscht"
$('#column-right').append('<p id="additional-text">Make <a href="https://natashaskitchen.com/classic-russian-borscht-recipe/">borscht</a>.<br>Or roast them.<br>Avoid beet hummus.</p>');


// Adding CSS styling to make the text white
$('#additional-text').css({
'color': 'white',
'text-shadow': '1px 1px 2px black'
});
}
})