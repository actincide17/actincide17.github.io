function showDrugInfo() {
    const drugDetails = document.getElementById('drug-details');
    drugDetails.style.display = drugDetails.style.display === 'none' ? 'block' : 'none';
}

function showAlcoholInfo() {
    const alcoholDetails = document.getElementById('alcohol-details');
    alcoholDetails.style.display = alcoholDetails.style.display === 'none' ? 'block' : 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    const responseDiv = document.getElementById('form-response');
    responseDiv.style.display = 'block';
    responseDiv.textContent = 'Thank you for your message! We will get back to you shortly.';
    document.getElementById('contact-form').reset();
}
