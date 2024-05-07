const teamMembers = [
    {
        name: 'Pele',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the best football players ever.'
    },
    {
        name: 'Ronaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the best football players ever.'
    },
    {
        name: 'Ronaldinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Neymar',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Garrincha',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Rivaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Romario',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Jairzinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Zico',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Kaka',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: 'Bebeto',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
    },
    {
        name: '',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.'
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
            <div class = "card">
            <div class = "card-header"> ${member.name}</div>
            <div class = "card-body">
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