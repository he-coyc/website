let projects = [
    {
        'name': 'ВКрандом',
        'date': '16/02/2024',
        'type': 'JS/CSS/HTML',
        'description': 'Настраиваемый генератор ссылок на случайные группы ВКонтакте. Находит рандомные сообщества по заданным параметрам.',
        'tags': 'вконтакте, вк, рандом, веб, вкудахте',
        'link': 'https://he-coyc.ru/projects/vkrandom',
        'git': '',
        'category': 'tools',
    },
    {
        'name': 'KOHTPAKT bot',
        'date': '03/04/2024',
        'type': 'Python',
        'description': 'Бот для спама в комментариях ВК.',
        'tags': 'вконтакте, вк, бот, питон, вкудахте, гитхаб',
        'link': 'https://github.com/he-coyc/kontraktbot',
        'git': 'https://github.com/he-coyc/kontraktbot',
        'category': 'tools',
    },
    {
        'name': 'Скуфизатор текста',
        'date': '16/04/2024',
        'type': 'JS/CSS/HTML',
        'description': 'Проект для скуфизации введенного текста.',
        'tags': 'скуф, веб',
        'link': 'https://he-coyc.ru/projects/skufizator/',
        'git': '',
        'category': 'useless',
    },
    {
        'name': 'Тест на скуфарика',
        'date': '21/04/2024',
        'type': 'JS/CSS/HTML',
        'description': 'Ежедневный тест "Какой ты скуфарик".',
        'tags': 'скуф, веб',
        'link': 'https://he-coyc.ru/projects/skufariktoday',
        'git': '',
        'category': 'useless',
    },
    {
        'name': 'Arduino gamebox',
        'date': '05/06/2024',
        'type': 'C/C++',
        'description': 'A collection of my games for Arduino Nano with an OLED display and a joystick specifically for GyverOled library.',
        'tags': 'ардуино, arduino, c, c++, гитхаб',
        'link': 'https://github.com/he-coyc/128x32-KY023-ArduinoNano',
        'git': 'https://github.com/he-coyc/128x32-KY023-ArduinoNano',
        'category': 'other',
    },
    {
        'name': 'mail.ru Adblocker',
        'date': '8/10/2024',
        'type': 'Web/Extension/JS',
        'description': 'Блокировщик рекламы на домене e.mail.ru',
        'tags': 'расширение, google, chrome, гугл, веб, гитхаб',
        'link': 'https://chromewebstore.google.com/detail/mailru-adblocker-блокиров/ifgbjopkhclaehifinhomndlignibmje',
        'git': 'https://github.com/he-coyc/mail.ru-adblocker',
        'category': 'extensions',
    },
    {
        'name': 'exstazy',
        'date': '??/11/2024',
        'type': 'Web/Turbo',
        'description': 'coming soon',
        'tags': 'игра, игры, game, 3d, веб',
        'link': '',
        'git': '',
        'category': 'games',
    },
    {
        'name': '',
        'date': '',
        'type': '',
        'description': '',
        'tags': '',
        'link': '',
        'git': '',
        'category': '',
    },
]

const folder_tools = document.getElementById('tools')
const folder_extensions = document.getElementById('extensions')
const folder_other = document.getElementById('other')
const folder_games = document.getElementById('games')
const folder_useless = document.getElementById('useless')

function loadProjects(string){
    projects.reverse().forEach(project => {
        let name = project.name
        let date = project.date
        let type = project.type
        let description = project.description
        let tags = project.tags
        let link = project.link
        let category = project.category
        let git = project.git

        if(link != ''){
            link = `<a title="Open project" class="project-view-button" target="_blank" href="${link}">view</a>`
        }
        if(git != ''){
            git = `<a title="Open project's github" class="project-github-button" target="_blank" href="${git}"></a>`
        }
        
        if(string != undefined){
            if(string.length > 0){
                let score = 0
                if(name.toLowerCase().indexOf(string.toLowerCase()) != - 1) score++
                if(description.toLowerCase().indexOf(string.toLowerCase()) != - 1) score++
                if(type.toLowerCase().indexOf(string.toLowerCase()) != - 1) score++
                if(tags.toLowerCase().indexOf(string.toLowerCase()) != - 1) score++


                if(score == 0) return 0
            }
        }

        let project_bone = `
<div class="project-back">
    <div class="project-name">
        ${name}
    </div>
    <div class="project-devinfo">
        <div class="date">${date}</div>
        <div class="project-lang">${type}</div>
    </div>
    <div class="project-preview">
        ${description}
    </div>
    <div class="project-buttons">
        ${link}
        ${git}
    </div>
</div>  
        `
    
        if(category == 'tools') folder_tools.innerHTML += project_bone
        if(category == 'extensions') folder_extensions.innerHTML += project_bone
        if(category == 'other') folder_other.innerHTML += project_bone
        if(category == 'games') folder_games.innerHTML += project_bone
        if(category == 'useless') folder_useless.innerHTML += project_bone
    });
}

function resetProjects(){
    folder_tools.innerHTML = ''
    folder_extensions.innerHTML = ''
    folder_other.innerHTML = ''
    folder_games.innerHTML = ''
    folder_useless.innerHTML = ''
}

function search(value){
    resetProjects()
    loadProjects(value)
}

loadProjects()