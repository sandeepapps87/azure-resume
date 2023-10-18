window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
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
