document.addEventListener('DOMContentLoaded', e => {
  {
    const e = document.querySelector('.price-duration-toggler'),
      n = [].slice.call(document.querySelectorAll('.price-monthly')),
      c = [].slice.call(document.querySelectorAll('.price-yearly'))
    function o() {
      e.checked
        ? (c.map(e => {
            e.classList.remove('d-none')
          }),
          n.map(e => {
            e.classList.add('d-none')
          }))
        : (c.map(e => {
            e.classList.add('d-none')
          }),
          n.map(e => {
            e.classList.remove('d-none')
          }))
    }
    o(),
      (e.onchange = () => {
        o()
      })
  }
})
