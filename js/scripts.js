// Randomize Header

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/fullsize/alyssa.jpg';
var img1 = '/img/fullsize/heredia.jpg';
var img2 = '/img/fullsize/logo.jpg';
var img3 = '/img/fullsize/poster.jpg';
var img4 = '/img/fullsize/ruins.jpg';
var img2 = '/img/fullsize/site.jpg';
var img2 = '/img/fullsize/site2.jpg';



// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});
