;(() => {
  var n,
    t,
    s,
    e = $('.speech-to-text')
  e.length
    && null != (n = n || webkitSpeechRecognition)
    && ((t = new n()),
    (s = !1),
    e.on('click', function () {
      const e = $(this)
      !(t.onspeechstart = () => {
        s = !0
      }) === s && t.start(),
        (t.onerror = n => {
          s = !1
        }),
        (t.onresult = n => {
          e.closest('.form-send-message')
            .find('.message-input')
            .val(n.results[0][0].transcript)
        }),
        (t.onspeechend = n => {
          ;(s = !1), t.stop()
        })
    }))
})()
