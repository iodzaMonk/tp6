/*

 small documentation of possible functions of Jquery methodes

  1.Insérer du contenu, page 62 done ------------------------------------------------------------------------------------------
    .append(); places the new element inside an selection
    .prepend(); places the new  element inside an selection
    .before(); places the new element before an selection
    .after(); places the new element after an selection

  2.Remplacer des elements, page 64 ------------------------------------------------------------------------------------------

    $("p").replaceWith("Hello world!"); --(Remplace the text inside all p for hello  )

    $('h2').each(function(){ --(replace the h2 with <h3>' + elemH2.text() + '</h3>)
    var elemH2 = $(this);
    elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');
    });

  3.Insérer des elements, page 65 ------------------------------------------------------------------------------------------

    element.appendTo(selection);  places an element à la fin de la cible
    element.prependTo(selection);  insère un element au début de la cible
    element.insertBefore(selection); places an element before the selection
    element.insertAfter(selection); places an element after the selection

  4.Déplacer du contenu, page 68 ------------------------------------------------------------------------------------------

    $('sel').append(depl);
    $('sel').prepend(depl);
    $('sel').before(depl);
    $('sel').after(depl)

  5.Dupliquer des elements, page 70 ------------------------------------------------------------------------------------------

    $('#deux').clone().insertBefore($('#un'));
    $('h2').clone().insertAfter($('h1'));

  6.Entourer des elements, page 74 ------------------------------------------------------------------------------------------

  wrap(); --(wraps around the element)
  wrapInner(); --(wraps inside thed element)
  wrapAll(); --(wraps all elements no matter the position or order)

  8.Supprimer des elements, page 78 ------------------------------------------------------------------------------------------

  $('h2').remove(); --(removes all titles of h2)
  $('li:nth-child(2)').remove(); --(removes the list item at the precise location)
  $('p').remove(':contains("quelconque")'); --(Removes all phases that contains the word)
*/

// ------------------------------------------------------------------------------------------ The Jquery code is written below

// ------------------------------------------------------------------------------------------ Append
let count = 1;
$('#append').on('click', function () {
  count = 1; // Reset after each main button click
  $('#answer')
    .html(
      `
    <button class="append-button">Append</button>
    `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('#answer').append(
        `<button class="button-item">Item ${count++}</button>`
      );
    });
});

// ------------------------------------------------------------------------------------------ Prepend

$('#prepend').on('click', function () {
  count = 1; // Reset after each main button click
  $('#answer')
    .html(
      `
        <button class="append-button">Prepend</button>
        <button class="button-item">Item ${count++}</button>
    `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('.button-item').prepend(
        `<button class="diff-button"> Prepend</button>`
      );
    });
});
// ------------------------------------------------------------------------------------------ After

$('#after').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">After</button>
        <button class="button-item" id="after-button">A heart appears after this</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('#after-button').after(`<button class="button-item">💕</button>`);
    });
});

// ------------------------------------------------------------------------------------------ Before

$('#before').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">Before</button>
        <button class="button-item" id="before-button">A heart appears before this</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('#before-button').before(`<button class="button-item">💕</button>`);
    });
});

// ------------------------------------------------------------------------------------------ Insert

$('#insert').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">Insert</button>
        <button class="button-item" id="before-button">A heart appears after this</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('<button class="button-item">💕</button>').insertAfter(
        `#before-button`
      );
    });
});

// ------------------------------------------------------------------------------------------ Clone

$('#clone').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">clone</button>
        <button class="button-item" id="clone-button">Item will be cloned</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('#clone-button').clone().insertAfter('#clone-button');
    });
});

// ------------------------------------------------------------------------------------------ Wrap

$('#wrap').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">Wrap</button>
        <button class="button-item">Item ${count++}</button>
        <button class="button-item">Item ${count++}</button>
        <button class="button-item">Item ${count++}</button>
        <button class="button-item">Item ${count++}</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('.button-item').wrapAll('<div id="wrapping-div" />');
    });
});

// ------------------------------------------------------------------------------------------ Remove

$('#remove').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">Remove</button>
        <button class="button-item">Item ${count++}</button>
        <button class="button-item">Item ${count++}</button>
        <button class="button-item">Item ${count++}</button>
        <button class="button-item">Item ${count++}</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('.button-item:last-child').remove();
    });
});

// ------------------------------------------------------------------------------------------ Replace

$('#replace').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">Replace</button>
        <button class="button-item" id="replaced-button">Button to be replaced</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('#replaced-button').replaceWith(
        `<button class="button-item">💕</button>`
      );
    });
});

// ------------------------------------------------------------------------------------------ PrependTo

$('#prependTo').on('click', function () {
  count = 1;

  $('#answer')
    .html(
      `
        <button class="append-button">prependTo</button>
        <button class="button-item" id="prepend-button">Content comes before</button>
      `
    )
    .off('click')
    .on('click', '.append-button', function () {
      $('<button class="button-item">💕</button>').prependTo(`#prepend-button`);
    });
});

// ------------------------------------------------------------------------------------------ Theme

$('#theme-toggle').click(function () {
  const isDark =
    $('html')
      .attr('data-theme', function (_, val) {
        return val === 'dark' ? '' : 'dark';
      })
      .attr('data-theme') === 'dark';
  $(this).html(isDark ? '🌙 Dark' : '🌞 Light');
});

// ------------------------------------------------------------------------------------------ Theme

// open documentation
$('#documentation').on('click', function () {
  $('.open-docs').addClass('active');
});

// close documentation
$('.close-docs').on('click', function () {
  $('.open-docs').removeClass('active');
});

// Close if clicking outside
$('.open-docs').on('click', function (e) {
  if (e.target === this) {
    $(this).removeClass('active');
  }
});
