const checkbox = document.getElementById('custom-toc-checkbox');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log('Checkbox está marcado');
    // Mostre o conteúdo do índice
  } else {
    console.log('Checkbox não está marcado');
    // Oculte o conteúdo do índice
  }
});