const container = document.querySelector('.cryptos');
container.innerHTML = '';

const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

fetch(apiURL)
        .then(response => response.json())
        .then(data => {
                data.forEach(coin => {
                        const card = document.createElement('div');
                        card.className = 'card';

                        const price = coin.current_price;
                        const change = coin.price_change_percentage_24h?.toFixed(2);


                        card.innerHTML = `
        <h3>${coin.name}</h3>
        <p>💲 Price: $${price}</p>
       <p>📈 24h Change: ${change > 0 ? '+' : ''}${change}%</p>
        <div style="margin-top: 10px;">
          <img src="${coin.image}" alt="${coin.name} logo"
               style="width: 32px; height: 32px; border-radius: 50%;" />
        </div>
      `;

                        container.appendChild(card);
                });
        })
