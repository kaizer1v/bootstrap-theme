$('.component').find('a, .btn').on('click', function(e) { e.preventDefault() });

// Generate left navigation menu
(function generateNavLinks() {
  let navlinks = [];
  $('section h2').each(function(k, v) {
    navlinks.push(`<a href="#${ $(v).attr('id') }">${ $(v).text() }</a>`)
  })
  $('.sidenav').html(navlinks.join(''))
})()