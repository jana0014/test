fetch('http://localhost:10000/api/faculty')
  .then(response => response.json())
  .then(data => {
    const facultiesList = document.getElementById('faculties-list');

    data.forEach(faculty => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${faculty.name}, Address: ${faculty.address}, University: ${faculty.university}`;
      facultiesList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Failed to fetch faculties:', error);
  });