import React from "react";
import gitLogo from '/Users/giuseppemerlerati/cv_project/src/images/github.png';
import emailLogo from '/Users/giuseppemerlerati/cv_project/src/images/gmail.png';
import linkedinLogo from '/Users/giuseppemerlerati/cv_project/src/images/linkedin.png';

function Contact() {
  return (
<ul class="nav justify-content-center">
  <li class="nav-item">
  <a class="nav-link Github" href="https://github.com/gmerlerati98" target="_blank" rel="noopener noreferrer">
      <img src= {gitLogo} alt="GitHub" width="50" height="50" class="me-2" />
    
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link Email" href="mailto:g.merlerati59@gmail.com">
    <img src= {emailLogo} alt="Email" width="50" height="50" class="me-2" />
    </a>
  </li>
  <li class="nav-item">
  <a class="nav-link LinkedIn" href="https://www.linkedin.com/in/giuseppe-merlerati-4506a9a1/" target="_blank" rel="noopener noreferrer">
  <img src= {linkedinLogo} alt="LinkedIn" width="50" height="50" class="me-2" />
    </a>
  </li>
</ul>
  );
}

export default Contact;
