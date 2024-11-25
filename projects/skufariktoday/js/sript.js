var clicks = 0;

function random(){
    return Math.round((Date.now() % 100)/11);
}

function clicked(){
    clicks++;
    if(clicks > 5)
        checkSkufarik(1);
}

//localStorage.setItem('oldTime', 0);
checkSkufarik(0);

function removeChest(){
    try{
        document.getElementById('chest').remove();
        document.getElementById('text-newday').remove();
    }
    catch{
        console.log('[!] Элемент не найден.')
    }
}

function initRandomSkufarik(time){
        localStorage.setItem('oldTime', time);
        localStorage.setItem('skufarikID', random());
        createSkufarik(1);
}

function checkSkufarik(iCanCreate){
    var todayDate = Date.now();
    if(todayDate - localStorage.getItem('oldTime') > 86000 * 1000){
        if(iCanCreate)
            initRandomSkufarik(todayDate);
    }
    else{
        console.log('[!] Юзер уже смешарик.');
        createSkufarik(0);
    }
}

function createSkufarik(isNewSkufarik){
    var image = '', text = '';
    switch(localStorage.getItem('skufarikID')){
        case '0': image = 'alkash.png'; text = 'алкаш'; break; 
        case '1': image = 'altusha.png'; text = 'альтуша'; break; 
        case '2': image = 'ebalkarych.png'; text = 'рыбал-карыч'; break; 
        case '3': image = 'ezjirnich.png'; text = 'ёжирнич'; break; 
        case '4': image = 'lisyash.png'; text = 'лысяш'; break; 
        case '5': image = 'pivn.png'; text = 'пивн'; break; 
        case '6': image = 'skufatych.png'; text = 'скуфатыч'; break; 
        case '7': image = 'tankrosh.png'; text = 'танкрош'; break; 
        case '8': image = 'tivi.png'; text = 'Tи-Vи'; break; 
        case '9': image = 'vipivunia.png'; text = 'выпивунья'; break; 
    }
    removeChest();

    // создаем скуфарика
    var imgElement = document.createElement('img');
    imgElement.src = 'images/skufariks/' + image;
    imgElement.classList.add('skufarik')
    imgElement.id = 'skufarik'
    document.getElementById('imageContainer').appendChild(imgElement);

    // создаем текст
    var replicas = ['Ого!', 'Не может быть!', 'Вот это да!', 'Даже не верится!', 'Все звёзды сошлись!', 'Вот это новость!', 'Даже офигел сам Стив Джобс!', 'Ух-ты!'];
    var txtElement = document.createElement('span');
    if(isNewSkufarik)
        txtElement.innerText = replicas[Math.floor(Math.random() * replicas.length)] + ' Сегодня ты ' + text + '!';
    else
        txtElement.innerText = 'Ты уже ' + text + '! Приходи завтра!';
    document.getElementById('imageContainer').appendChild(txtElement);
}

var rotationChest =  setInterval(rotateChest, 50);

function rotateChest(){
    var chest = document.getElementById('chest');
    var deltatime = Date.now();
    try{
        chest.style.transform = 'rotate(' + ((Math.cos(deltatime/500)*5) % 360) +'deg)';
    }
    catch{
        clearInterval(rotationChest);
    }
}
