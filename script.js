const techPatterns = {
  'HTML': /<html|<!DOCTYPE/i,
  'CSS': /style\s*\{|\.css/i,
  'JavaScript': /<script|\.js|function\s|const\s|let\s|var\s/i,
  'Bootstrap': /bootstrap(\.min)?\.css/i,
  'Tailwind CSS': /tailwind(\.min)?\.css/i,
  'jQuery': /jquery(\.min)?\.js/i,
  'React': /react(-dom)?(\.min)?\.js/i,
  'Vue.js': /vue(\.min)?\.js/i,
  'AngularJS': /angular(\.min)?\.js/i,
  'Next.js': /_next|next\.js/i,
  'Nuxt.js': /nuxt\.js/i,
  'Svelte': /svelte(\.min)?\.js/i,
  'Alpine.js': /alpine(\.min)?\.js/i,
  'Font Awesome': /fontawesome|font\-awesome/i,
  'Google Fonts': /fonts\.googleapis\.com/i,
  'Material UI': /material(\.min)?\.css|material-ui/i,
  'Chart.js': /chart(\.min)?\.js/i,
  'D3.js': /d3(\.min)?\.js/i,
  'GSAP': /gsap(\.min)?\.js/i,
  'Three.js': /three(\.min)?\.js/i,
  'Lottie': /lottie(\.min)?\.js/i,
  'Swiper': /swiper(\.min)?\.js/i
};

function detectTech() {
  const input = document.getElementById('htmlInput').value;
  const techList = document.getElementById('techList');
  techList.innerHTML = '';

  let found = false;
  for (let tech in techPatterns) {
    if (techPatterns[tech].test(input)) {
      const badge = document.createElement('div');
      badge.className = 'tech';
      badge.innerText = tech;
      techList.appendChild(badge);
      found = true;
    }
  }

  if (!found) {
    techList.innerHTML = '<p style="color:#ccc">No known tech detected. Try another code input.</p>';
  }
}

async function fetchFromURL() {
  const url = document.getElementById('urlInput').value;
  if (!url) return alert('Please enter a valid URL.');

  try {
    const proxy = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
    const res = await fetch(proxy);
    const data = await res.json();
    document.getElementById('htmlInput').value = data.contents;
    alert('HTML fetched successfully. Now click "Detect Technologies".');
  } catch (err) {
    alert('Failed to fetch HTML. Possible CORS issue or invalid URL.');
  }
}
