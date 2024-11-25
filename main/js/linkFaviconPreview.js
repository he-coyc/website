
const links = document.querySelectorAll('.link');
links.forEach(element => {
    let url = 'https://' + element.getAttribute('href').replace('https://', '').split('/')[0] + '/favicon.ico'; 
    element.style.backgroundImage = `url('` + url + `')`;
});

