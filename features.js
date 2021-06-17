let input_text = document.getElementById('input');

let output_text = document.getElementById('output');

input_text.addEventListener('input', function(event) {
    output_text.innerText = event.target.value;
});

const refreshButton = document.querySelector('.refresh-button');

refreshButton.addEventListener('click', function() {
    location.reload();
});