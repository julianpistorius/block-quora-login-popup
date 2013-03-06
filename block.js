
//     Block Quora Login Popup
//     Copyright (c) 2012 Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed

// Automatically block the Quora login popup.
// <https://github.com/niftylettuce/block-quora-login-popup>

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/block-quora-login-popup>

// # block

if (window.location.search === '')
  window.location = window.location.origin + window.location.pathname + '?ref=fb';

;(function block() {

  var $modal = document.getElementsByClassName('modal_signup_background');

  if ($modal.length === 0)
    return

  $modal[0].parentNode.parentNode.removeChild($modal[0].parentNode);

})();
