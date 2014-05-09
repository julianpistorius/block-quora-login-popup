
//     Block Quora Login Popup
//     Copyright (c) 2012- Nick Baugh <niftylettuce@gmail.com>
//     MIT Licensed

// Automatically block the Quora login popup.
// <https://github.com/niftylettuce/block-quora-login-popup>

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Source: <https://github.com/niftylettuce/block-quora-login-popup>

// # block

(function(window) {

  var index = window.location.search.indexOf('?')

  if (typeof window.location.search !== 'string' || window.location.search === '' || window.location.search.indexOf("share=1") === -1) {
    var search = '?'
    if (index === 0)
      search += window.location.search.substring(1) + '&'
    search += 'share=1'
    window.location = window.location.origin + window.location.pathname + search
  }

})(window)
