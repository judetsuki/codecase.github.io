/*<div id="results"></div>

<script>
fetch('https://api.github.com/repos/luka0204/codecase.github.io/actions/runs')
  .then(response => response.json())
  .then(data => {
    const latestRun = data.workflow_runs[0];
    const status = latestRun.conclusion === 'success' ? 'Успешно' : 'Не успешно';
    const conclusion = latestRun.conclusion;

    document.getElementById('results').innerHTML = `
      <p>Последнее действие: ${status}</p>
      <p>Результат: ${conclusion}</p>
    `;
  })
  .catch(error => {
    console.error('Ошибка получения результатов:', error);
    document.getElementById('results').innerHTML = `
      <p>Ошибка при получении результатов.</p>
    `;
  });
</script>

</div> */