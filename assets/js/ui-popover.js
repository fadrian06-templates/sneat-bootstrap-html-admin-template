;[].slice
  .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  .map(e => new bootstrap.Popover(e, { html: !0, sanitize: !1 }))
