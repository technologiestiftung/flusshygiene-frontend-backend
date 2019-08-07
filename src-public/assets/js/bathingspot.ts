document.addEventListener('DOMContentLoaded', () => {
  console.log('bathingspots.js');
  const editButton = document.querySelector('button#edit-spot');
  const cancelEditButton = document.querySelector('button#edit-spot-cancel');
  const saveEditButton = document.querySelector('button#edit-spot-save');
  const forms = document.querySelector('.bathingspot-editor-forms');

  const hide = (event) => {
    event.preventDefault();
    editButton.classList.remove('is-hidden');
    saveEditButton.classList.add('is-hidden');
    cancelEditButton.classList.add('is-hidden');
  };

  cancelEditButton.addEventListener('click', hide);
  saveEditButton.addEventListener('click', hide);

  cancelEditButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (
      forms.classList.contains('bathingspot-editor-forms--hidden') === false
    ) {
      forms.classList.add('bathingspot-editor-forms--hidden');
    }
  });

  editButton.addEventListener('click', (event) => {
    event.preventDefault();
    saveEditButton.classList.remove('is-hidden');
    cancelEditButton.classList.remove('is-hidden');
    editButton.classList.add('is-hidden');
    if (forms.classList.contains('bathingspot-editor-forms--hidden') === true) {
      forms.classList.remove('bathingspot-editor-forms--hidden');
    }
  });
});
