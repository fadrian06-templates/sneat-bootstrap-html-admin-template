document.addEventListener('DOMContentLoaded', t => {
  var o = [].slice.call(document.querySelectorAll('.clipboard-btn'))
  const e = new Notyf({
    duration: 3e3,
    dismissible: !0,
    position: { x: 'right', y: 'top' },
  })
  ClipboardJS
    ? o.map(t => {
        new ClipboardJS(t).on('success', t => {
          'copy' === t.action && e.success('Copied to Clipboard!!')
        })
      })
    : o.map(t => {
        t.setAttribute('disabled', !0)
      })
})
