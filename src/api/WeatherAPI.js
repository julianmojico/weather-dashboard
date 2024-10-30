export default async function apiCall() {
    const response = await fetch('http://localhost:3001/weather')
    return await response.json()

/*
    return fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/5878?' + new URLSearchParams({
      apikey: 'wKKjwferXpVkzLZ44Yuv4vu1lagbR8Nr',
      detail: true
    }, {
        mode: 'no-cors'
    }));
*/
}