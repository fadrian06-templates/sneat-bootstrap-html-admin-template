document.addEventListener('DOMContentLoaded', e => {
  var t = $('.select2'),
    t =
      (t.length
        && t.each(function () {
          var e = $(this)
          e.wrap('<div class="position-relative"></div>').select2({
            dropdownParent: e.parent(),
            placeholder: e.data('placeholder'),
          })
        }),
      document.querySelectorAll('.phone-mask'))
  t
    && t.forEach(t => {
      t.addEventListener('input', e => {
        e = e.target.value.replace(/\D/g, '')
        t.value = formatGeneral(e, {
          blocks: [3, 3, 4],
          delimiters: [' ', ' '],
        })
      }),
        registerCursorTracker({ input: t, delimiter: ' ' })
    })
})
