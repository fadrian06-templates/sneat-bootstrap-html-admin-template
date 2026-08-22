document.addEventListener('DOMContentLoaded', e => {
  {
    FormValidation.formValidation(document.getElementById('addRoleForm'), {
      fields: {
        modalRoleName: {
          validators: { notEmpty: { message: 'Please enter role name' } },
        },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          rowSelector: '.form-control-validation',
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        autoFocus: new FormValidation.plugins.AutoFocus(),
      },
    })
    const e = document.querySelector('#selectAll'),
      t = document.querySelectorAll('[type="checkbox"]')
    e.addEventListener('change', o => {
      t.forEach(e => {
        e.checked = o.target.checked
      })
    })
  }
})
