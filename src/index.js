
function ruffini(coefficients, root) {
    let results = [];
    results.push(coefficients[0]);

    for(let i = 1; i < coefficients.length; i++) {
        results.push((results[i - 1] * root) + coefficients[i]);
    }

    return results;
}

document.getElementById('calculate').addEventListener('click', function() {
    let coefficients = document.getElementById('coefficients').value.split(',').map(Number);
    let root = Number(document.getElementById('root').value);
    let result = ruffini(coefficients, root);
    
    if (result[result.length - 1] === 0) {
        result.pop();
        alert('RUFFINI VERIFIED');
        document.getElementById('result').textContent = 'Risultato: ' + result.join(', ');
    }
    else {
        document.getElementById('result').textContent = 'Risultato: NON VERIFICATO';
    }

    
});
