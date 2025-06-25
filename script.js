const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const clearButton = document.getElementById('clear');

const updatePreview = () => {
  const markdownText = editor.value;
  const markedText = marked.parse(markdownText, {breaks: true, gfm: true});
  preview.innerHTML = markedText;
}

editor.addEventListener('input', updatePreview);
clearButton.addEventListener('click', () => {
  editor.value = '';
  preview.innerHTML = '';
});



window.onload = () => {
    fetch("./preview.md")
        .then(response => response.text())
        .then(data => {
            editor.value = data;
            updatePreview();
        })
        .catch(error => console.error('Error fetching preview.md:', error));
    updatePreview();
}
