document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');

    if (fileInput.files.length === 0) {
        status.textContent = 'Per favore, seleziona un file da caricare.';
        status.style.color = 'red';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        status.textContent = 'File caricato con successo!';
        status.style.color = 'green';
    })
    .catch(error => {
        console.error('Errore nel caricamento:', error);
        status.textContent = 'Errore nel caricamento del file.';
        status.style.color = 'red';
    });
});
