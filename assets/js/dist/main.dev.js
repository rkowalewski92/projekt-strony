"use strict";

$(function () {
  var $inputs = $('form input[required], form textarea[required], select[required]');

  var displayFieldError = function displayFieldError($elem) {
    var $fieldRow = $elem.closest('.form-row');
    var $fieldError = $fieldRow.find('.field-error');

    if (!$fieldError.length) {
      var errorText = $elem.attr('data-error');
      var $divError = $('<div class="field-error">' + errorText + '</div>');
      $fieldRow.append($divError);
    }
  };

  var hideFieldError = function hideFieldError($elem) {
    var $fieldRow = $elem.closest('.form-row');
    var $fieldError = $fieldRow.find('.field-error');

    if ($fieldError.length) {
      $fieldError.remove();
    }
  };

  $inputs.on('input keyup', function () {
    var $elem = $(this);

    if (!$elem.get(0).checkValidity()) {
      $elem.addClass('error');
    } else {
      $elem.removeClass('error');
      hideFieldError($elem);
    }
  });
  $inputs.filter(':checkbox').on('click', function () {
    var $elem = $(this);
    var $row = $(this).closest('.form-row');

    if ($elem.is(':checked')) {
      $elem.removeClass('error');
      hideFieldError($elem);
    } else {
      $elem.addClass('error');
    }
  });
});
//# sourceMappingURL=main.dev.js.map
