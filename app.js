const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const terminal = document.getElementById("terminal");

const lines = [
  "Godson@portfolio:~$ whoami\n",
  "cybersecurity-focused developer\n\n",
  "Godson@portfolio:~$ ls skills/\n",
  "security  development  automation\n\n",
  "Godson@portfolio:~$ status\n",
  "system secure • learning in progress\n"
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    terminal.innerHTML += '<span class="cursor">▋</span>';
    return;
  }

  terminal.textContent += lines[lineIndex][charIndex];
  charIndex++;

  if (charIndex === lines[lineIndex].length) {
    lineIndex++;
    charIndex = 0;
  }

  setTimeout(typeLine, 30);
}

typeLine();
