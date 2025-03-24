const tabContents = [
    'First Tab content to be displayed here.',
    'Second Tab content to be displayed here.',
    'Third Tab content to be displayed here.',
    'Fourth Tab content to be displayed here.'
  ];

  function showTab(index) {
    document.getElementById('content').textContent = tabContents[index];

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });
  }