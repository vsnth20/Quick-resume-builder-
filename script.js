function startBuilding() {
  document.querySelector('header').style.display = 'none';
  document.getElementById('form-section').style.display = 'block';
}

const form = document.getElementById('resumeForm');
const preview = document.getElementById('preview-content');

form.addEventListener('input', updatePreview);
form.addEventListener('submit', function(e) {
  e.preventDefault();
  updatePreview();
});

function updatePreview() {
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const summary = form.summary.value;
  const skills = form.skills.value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Summary:</strong> ${summary}</p>
    <h3>Skills:</h3>
    <ul>${skills}</ul>
  `;
}

// Download as PDF
document.getElementById('downloadBtn').addEventListener('click', function () {
  import('https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js').then(html2pdf => {
    const element = document.getElementById('preview-content');
    html2pdf.default().from(element).save('My_Resume.pdf');
  });
});
