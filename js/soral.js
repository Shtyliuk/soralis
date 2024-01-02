document.getElementById('salaryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let salary = document.getElementById('salary').value;

    // Додавання нової категорії (для прикладу)
    let categories = {
        'На житло': 0.3,
        'На авто': 0.2,
        'На майбутнє': 0.5
    };

    let resultHTML = '<h2>Розбиття зарплати:</h2>';
    let totalAmount = 0;

    for (let category in categories) {
        let amount = salary * categories[category];
        resultHTML += `<div class="category"><span class="category-name">${category}:</span> <span class="category-amount">${amount.toFixed(2)} грн</span></div>`;
        totalAmount += amount;
    }

    resultHTML += `<div class="category"><span class="category-name">Загальна сума:</span> <span class="category-amount">${totalAmount.toFixed(2)} грн</span></div>`;

    document.getElementById('result').innerHTML = resultHTML;
});