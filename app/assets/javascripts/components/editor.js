function Editor(el) {
  new MediumEditor(el, {
		toolbar: {
			buttons: ['bold', 'italic', 'underline', 'pre', 'h2', 'h3', 'quote']
		}
  });
}
