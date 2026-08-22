document.addEventListener('DOMContentLoaded', e => {
  var t
  ;(t = document.querySelectorAll('#twoFactorAuthInputSms'))
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
