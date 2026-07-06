const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const projectFiles = [
  'project-healthcare.html',
  'project-judicial.html',
  'project-loan.html',
  'project-tft.html',
  'project-hdb.html',
  'project-h4g.html',
  'project-orbital.html'
];

projectFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let detailsMatch = content.match(/<div class="project-details-card">([\s\S]*?)<div[^>]*>\s*<a href="index\.html#projects/);
  if (!detailsMatch) {
      console.log('No match for ' + file);
      return;
  }
  let detailsContent = detailsMatch[1].trim();

  // We find the <a href="project-xxx.html" class="btn-case-study">Case Study</a>
  let aTagRegex = new RegExp('<a href="' + file + '" class="btn-case-study">Case Study<\\/a>');
  
  if (aTagRegex.test(indexHtml)) {
    // 1. Add clickable class and onclick to the project card
    // First, let's inject the content into a hidden div next to the links.
    // The link is usually inside <div class="project-links">
    
    // Instead of doing crazy regex for the whole card, let's just replace the link with the hidden content and a subtle hint.
    let replacement = `
      <span class="btn-tag" style="background: transparent; color: var(--accent); border: none; padding-left: 0; font-weight: 700;">View Case Study &rarr;</span>
      <div class="project-case-study-content" style="display: none;">
        ${detailsContent}
      </div>
    `;
    indexHtml = indexHtml.replace(aTagRegex, replacement);
  } else {
      console.log('Could not find link in index for ' + file);
  }
});

// Now add the modal HTML before </body>
const modalHtml = `
    <!-- PROJECT MODAL -->
    <div class="modal-overlay" id="project-modal">
      <div class="modal-content">
        <button class="modal-close" id="modal-close">&times;</button>
        <div class="modal-header">
          <h3 id="modal-title">Project Title</h3>
          <div class="tech-tags" id="modal-tags">
          </div>
        </div>
        <div class="modal-body" id="modal-body">
        </div>
      </div>
    </div>
`;
indexHtml = indexHtml.replace('<script src="script.js"></script>', modalHtml + '\n    <script src="script.js"></script>');

// Make .project-card clickable
indexHtml = indexHtml.replace(/<div class="project-card">/g, '<div class="project-card" style="cursor: pointer;" onclick="openProjectModal(event, this)">');

fs.writeFileSync('index.html', indexHtml);
console.log('done modifying index.html');
