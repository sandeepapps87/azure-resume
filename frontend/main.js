window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const prodFunctionApiUrl =
  'https://getresumecounter-funcapp.azurewebsites.net/api/GetResumeCounter?code=Bhi36bhUorHMHmcg2QvoA8ygcidsVg7-csf_f-7tNqD8AzFubaCVmA==';
const localFunctionApiUrl = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
  let count = 30;
  fetch(prodFunctionApiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('Api called');
      count = response.counter;
      document.getElementById('counter').innerText = count;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
