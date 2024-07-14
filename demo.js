

document.getElementById('carbonCalculator').addEventListener('submit', function(e) {
    
    
    const product = document.getElementById('product').value;
    const usage = parseFloat(document.getElementById('usage').value);
    let carbonFootprint;

    switch (product) {
        case 'product1':
            carbonFootprint = usage * 0.5; // Example calculation
            break;
        case 'product2':
            carbonFootprint = usage * 0.7; // Example calculation
            break;
        
        case 'product3':
            carbonFootprint = usage * 0.9; // Example calculation
            break;
        default:
            carbonFootprint = 0;
    }
    // document.getElementById('result').value = carbonFootprint.toFixed(2).toString() ; 
    document.getElementById ('result').innerHTML = `Your carbon footprint is ${carbonFootprint.toFixed(2)} kg CO2`;
    e.preventDefault();
});