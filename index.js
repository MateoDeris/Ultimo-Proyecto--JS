document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    if (validateAmount(amount)) {
        getCryptoQuotes(amount);
    } else {
        showAlert('Por favor, introduce un número positivo válido.');
    }
});

const cryptos = [
    { id: 'bitcoin', name: 'Bitcoin' },
    { id: 'ethereum', name: 'Ethereum' }
];

async function getCryptoQuotes(amount) {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: cryptos.map(crypto => crypto.id).join(','),
                vs_currencies: 'usd'
            }
        });

        const data = response.data;
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        cryptos.forEach(crypto => {
            const quote = amount / data[crypto.id].usd;
            const result = document.createElement('div');
            result.innerHTML = `<p>${crypto.name}: ${quote.toFixed(6)} ${crypto.name}</p>`;
            resultsDiv.appendChild(result);
            addToHistory(crypto.name, amount, quote);
        });

        showAlert('Tu cotización fue exitosa, tienes los resultados en pantalla.');
    } catch (error) {
        console.error('Error fetching crypto quotes:', error);
        showAlert('Error al obtener las cotizaciones. Por favor, intenta nuevamente más tarde.');
    }
}

function validateAmount(amount) {
    return !isNaN(amount) && Number(amount) > 0;
}

function showAlert(message) {
    const alertDiv = document.getElementById('alert');
    alertDiv.textContent = message;
    alertDiv.classList.remove('hidden');
    setTimeout(() => {
        alertDiv.classList.add('hidden');
    }, 3000);
}

let history = JSON.parse(localStorage.getItem('history')) || [];

function addToHistory(name, amount, quote) {
    const conversion = { name, amount, quote: quote.toFixed(6) };
    history.push(conversion);
    localStorage.setItem('history', JSON.stringify(history));
    updateHistoryList();
}

function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach((conversion, index) => {
        const li = document.createElement('li');
        li.innerHTML = `USD ${conversion.amount} = ${conversion.quote} ${conversion.name} <button data-index="${index}">Eliminar</button>`;
        historyList.appendChild(li);
    });
}

document.getElementById('historyList').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const index = event.target.getAttribute('data-index');
        history.splice(index, 1);
        localStorage.setItem('history', JSON.stringify(history));
        updateHistoryList();
    }
});

updateHistoryList();
