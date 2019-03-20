/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


// $(window).scroll(function () {
//     //parallax
//     var wScroll = $(this).scrollTop();

//     $('.jumbotron img').css({
//         'transform': 'translate(0px,' + wScroll / 4 + '%)'
//     });
//     $('.jumbotron h1').css({
//         'transform': 'translate(0px,' + wScroll / 1 + '%)'
//     });
//     $('.jumbotron blockquote').css({
//         'transform': 'translate(0px,' + wScroll / 0.5 + '%)'
//     });
//     //muncul semua
//     // if (wScroll > 650) {
//     //     $('.img-thumbnail').addClass('muncul');
//     // }

//     //mucncul satu-satu
//     // if (wScroll > 650) {
//     //     $('.img-thumbnail').each(function (i) {
//     //         setTimeout(function () {
//     //             $('.img-thumbnail').eq(i).addClass('muncul');
//     //         }, 300 * (i + 1));
//     //     });
//     // }
// });