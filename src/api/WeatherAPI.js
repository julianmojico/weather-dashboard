export default function apiCall() {
   return fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/5878?' + new URLSearchParams({
      apikey: 'wKKjwferXpVkzLZ44Yuv4vu1lagbR8Nr',
      detail: true
    }, {
        mode: 'no-cors'
    }));
}