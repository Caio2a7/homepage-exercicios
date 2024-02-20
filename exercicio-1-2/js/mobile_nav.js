function toggleNav() {
    var navDropdown = document.getElementById("nav-dropdown");
    navDropdown.classList.toggle("open");
}

const dropdown_btn = document.getElementById('dropdown-toggle');
dropdown_btn.addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown');
    const dropdown_arrow = document.getElementById('drop-arrow');

    dropdown.classList.toggle('test-open');

    if (dropdown.classList.contains('test-open')) {
        dropdown_arrow.style.transform = 'rotateX(180deg)';
    } else {
        dropdown_arrow.style.transform = 'none'; 
    }
});



let sub_titles = document.getElementsByTagName('figure');
const texts = document.getElementsByTagName('p');

for (let i = 0; i < sub_titles.length; i++) {
    sub_titles[i].addEventListener('mouseover', () => {
        sub_titles[i].style.opacity = '1';
    });

    sub_titles[i].addEventListener('mouseleave', () => {
        sub_titles[i].style.opacity = '0.5';
    });
}

function moveFollower(event) {
    const follower = document.getElementById('follower');
    const container = document.getElementById('container');

    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    
    follower.style.left = offsetX + 'px';
    follower.style.top = offsetY + 'px';
    
    console.log('Mouse X:', offsetX, 'Mouse Y:', offsetY);
}
//console.log(event);