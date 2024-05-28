const teamMembers = [
    {
        number: '1.',
        name: 'Pele',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the best football players ever.',
        img: 'Imgs/Pele.png',
        goals: 77
            
    },
    {
        number: '2.',
        name: 'Ronaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Messi is considered one of the best football players ever.',
        img: 'Imgs/ronaldo.png',
        goals: 62
    },
    {
        number: '3.',
        name: 'Ronaldinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/ronaldino.png',
        goals: 33
    },
    {
        number: '4.',
        name: 'Neymar',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Neymar.png',
        goals: 79
    },
    {
        number: '5.',
        name: 'Garrincha',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Garrincha.png',
        goals: 12
    },
    {
        number: '6.',
        name: 'Rivaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Rivaldo.png',
        goals: 35
    },
    {
        number: '7.',
        name: 'Romario',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Romario.png',
        goals: 55
    },
    {
        number: '8.',
        name: 'Jairzinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Jairzinho.png',
        goals: 35
    },
    {
        number: '9.',
        name: 'Zico',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Zico.png',
        goals: 48
    },
    {
        number: '10.',
        name: 'Kaka',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Kaka.png',
        goals: 29
    },
    {
        number: '11.',
        name: 'Bebeto',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/Bebeto.png',
        goals: 40
    },
    {
        number: '12.',
        name: 'Luis Fabiano',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        weaknesses: 'Lack of dedication',
        biography: 'Ronaldinho, the Brazilian football magician, mesmerized the world with his extraordinary skill, and flair on the pitch.',
        img: 'Imgs/luisfabiano.png',
        goals: 28
    },
]

function generateTeamCards (){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //styling cards based on position
        let backgroundColor

        if(member.goals >= 10 & member.goals < 25 ){ //add a number here // 
            backgroundColor = '#CD7F32'
        }
        else if(member.goals >= 25 & member.goals < 40 ){
            backgroundColor = '#C0C0C0'
        }
        else if(member.goals >= 40){
            backgroundColor = '#FFD700'
        }

        card.style.backgroundColor = backgroundColor
        //create list of skills with <li> tags
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
            
       

        card.innerHTML = `
            <div class = "card h-100">
            <div class = "card-header">
            <h4><b>${member.number}</b> ${member.name} </h4>
            </div>
            <div class = "card-body">
            <img src=${member.img}><br><br>
                <p><strong>Position: </strong> ${member.position} </p>
                <p><strong>Goals: </strong> ${member.goals} </p>
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