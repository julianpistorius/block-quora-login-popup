
//     Block Quora Login Popup
//     Copyright (c) 2012 Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed

// Automatically block the Quora login popup.
// <https://github.com/niftylettuce/block-quora-login-popup>

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/block-quora-login-popup>

// # remove

;(function($) {

  remove();
  setInterval(remove, 5000);

  function remove() {
    // could have searched for _fb prefix (or) simply 'div' -- but we want to prevent it always :)
    $('*').filter(fixed).remove();
  }

  function fixed() {
    return $(this).css('position') === 'fixed';
  }

})(jQuery);
