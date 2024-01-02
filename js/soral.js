document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const salary = parseFloat(document.getElementById('salaryInput').value);

    if (isNaN(salary) || salary <= 0) {
        alert('Будь ласка, введіть коректну суму зарплати.');
        return;
    }

    function splitSalary(salary) {
        const categories = {
            housing: 0.5,
            car: 0.3,
            future: 0.2
        };

        const split = {};

        for (let [category, percentage] of Object.entries(categories)) {
            split[category] = salary * percentage;
        }

        return split;
    }

    const myExpenses = splitSalary(salary);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Очистка результатів перед виведенням нових

    for (let [category, amount] of Object.entries(myExpenses)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryNameSpan = document.createElement('span');
        categoryNameSpan.classList.add('category-name');
        categoryNameSpan.textContent = `${category}: `;

        const categoryAmountSpan = document.createElement('span');
        categoryAmountSpan.classList.add('category-amount');
        categoryAmountSpan.textContent = `$${amount.toFixed(2)}`;

        categoryDiv.appendChild(categoryNameSpan);
        categoryDiv.appendChild(categoryAmountSpan);
        resultDiv.appendChild(categoryDiv);
    }
});