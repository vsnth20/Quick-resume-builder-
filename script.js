const form = document.getElementById("resumeForm");
const preview = document.getElementById("preview-content");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const title = form.title.value.trim();
  const summary = form.summary.value.trim();
  const experience = form.experience.value.trim();
  const skills = form.skills.value.split(',').map(s => s.trim());

  preview.innerHTML = `
    <h1>${name}</h1>
    <h3>${title}</h3>
    <h2>Summary</h2>
    <p>${summary}</p>
    <h2>Experience</h2>
    <p>${experience.replace(/\n/g, '<br>')}</p>
    <h2>Skills</h2>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
  `;
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.getElementById("preview-content");
  html2pdf().from(element).save("My_Professional_Resume.pdf");
});
