function openForm(formId) {
  document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
  document.getElementById(formId).style.display = 'none';
}

// Handle Institution Form submission
document.addEventListener('DOMContentLoaded', function () {
  const institutionForm = document.querySelector('#institutionForm form');
  const studentForm = document.querySelector('#studentForm form');

  institutionForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    const name = institutionForm.querySelector('input[type="text"]').value;
    const email = institutionForm.querySelector('input[type="email"]').value;

    const institutionData = {
      name: name,
      email: email
    };

    localStorage.setItem('institutionFormData', JSON.stringify(institutionData));
    alert("Institution data saved successfully!");
    closeForm('institutionForm');
    institutionForm.reset();
  });

  studentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    const name = studentForm.querySelector('input[type="text"]').value;
    const roll = studentForm.querySelector('input[type="text"]:nth-of-type(2)').value;

    const studentData = {
      name: name,
      roll: roll
    };

    localStorage.setItem('studentFormData', JSON.stringify(studentData));
    alert("Student data saved successfully!");
    closeForm('studentForm');
    studentForm.reset();
  });
});
