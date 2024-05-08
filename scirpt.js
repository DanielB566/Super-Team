const teamMembers = [
    {
        name: 'Pele',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the best football players ever.',
        img: 'Imgs/Pele.png'
    },
    {
        name: 'Ronaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the best football players ever.',
        img: 'Imgs/ronaldo.png'
    },
    {
        name: 'Ronaldinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Neymar',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Garrincha',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Rivaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Romario',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Jairzinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Zico',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Kaka',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Bebeto',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
    {
        name: 'Luis Fabiano',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: ''
    },
]

function generateTeamCards (){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //styling cards based on position
        let backgroundColor

        if(member.position === 'Forward'){
            backgroundColor = '#ffc107'
        }
        else if(member.position === 'Midfielder'){
            backgroundColor = '#088F8F'
        }

        card.style.backgroundColor = backgroundColor
        //create list of skills with <li> tags
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
            
       

        card.innerHTML = `
            <div class = "card h-100">
            <div class = "card-header"> ${member.name}</div>
            <div class = "card-body">
            <img src=${member.img}><br><br>
                <p><strong>Position: </strong> ${member.position} </p>
                <p><strong>Skills: </strong> 
                <ul>
                    ${skillsList}
                </ul>
                </p>
                <p><strong>Strengths: </strong> ${member.strengths} </p>
                <p><strong>Weaknesses: </strong> ${member.weaknesses} </p>
                <p><strong>Biograpgy: </strong> ${member.biography} </p>
            </div>
            </div>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()