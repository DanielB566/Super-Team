const teamMembers = [
    {
        number: '1.',
        name: 'Pele',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Speed'],
        strengths: 'Ball Control',
        biography: 'Pelé was a legendary Brazilian footballer and three-time World Cup champion.',
        img: '/Imgs/Pele.png',
        goals: 77
            
    },
    {
        number: '2.',
        name: 'Ronaldo',
        position: 'Forward',
        skills: ['Skills', 'Shooting', 'Pace'],
        strengths: 'Shooting',
        biography: 'Ronaldo Nazário, also known as "R9," was a Brazilian footballer renowned for his incredible goal-scoring ability and two-time Ballondor wins.',
        img: 'Imgs/ronaldo.png',
        goals: 62
    },
    {
        number: '3.',
        name: 'Ronaldinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
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
        biography: 'Neymar is a Brazilian footballer known for his dazzling dribbling, scoring prowess, and multiple major club and international titles.',
        img: 'Imgs/Neymar.png',
        goals: 79
    },
    {
        number: '5.',
        name: 'Garrincha',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Agility',
        biography: 'Garrincha was a Brazilian footballer famed for his extraordinary dribbling skills and key role in Brazils World Cup victories.',
        img: 'Imgs/Garrincha.png',
        goals: 12
    },
    {
        number: '6.',
        name: 'Rivaldo',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Speed'],
        strengths: 'Shooting',
        biography: 'Rivaldo is a Brazilian footballer renowned for his creativity, powerful shots, and winning the 1999 Ballondor',
        img: 'Imgs/Rivaldo.png',
        goals: 35
    },
    {
        number: '7.',
        name: 'Romario',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Long Shots'],
        strengths: 'Creating goal scoring oppurtunitys',
        biography: 'Romário is a Brazilian footballer known for his prolific goal-scoring and pivotal role in Brazils 1994 World Cup victory.',
        img: 'Imgs/Romario.png',
        goals: 55
    },
    {
        number: '8.',
        name: 'Jairzinho',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Pace'],
        strengths: 'Creative skills',
        biography: 'Jairzinho is a Brazilian footballer celebrated for his outstanding performances and goals in the 1970 World Cup.',
        img: 'Imgs/Jairzinho.png',
        goals: 35
    },
    {
        number: '9.',
        name: 'Zico',
        position: 'Forward',
        skills: ['Shooting', 'Skills', 'Creating goal opportunitys'],
        strengths: 'Free kicking',
        biography: 'Zico is a Brazilian footballer renowned for his playmaking brilliance and free-kick mastery.',
        img: 'Imgs/Zico.png',
        goals: 48
    },
    {
        number: '10.',
        name: 'Kaka',
        position: 'Forward',
        skills: ['Dribbling', 'Skills', 'Speed'],
        strengths: 'Creating goal scoring oppurtunitys',
        biography: 'Kaká is a Brazilian footballer known for his elegant playmaking and winning the 2007 Ballondor.',
        img: 'Imgs/Kaka.png',
        goals: 29
    },
    {
        number: '11.',
        name: 'Bebeto',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Agility'],
        strengths: 'Goal-scoring ability',
        biography: 'Bebeto is a Brazilian footballer known for his crucial goals and celebrations in Brazils 1994 World Cup victory.',
        img: 'Imgs/Bebeto.png',
        goals: 40
    },
    {
        number: '12.',
        name: 'Luis Fabiano',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Creating goal opportunitys'],
        strengths: 'Creative skills',
        biography: 'Luís Fabiano is a Brazilian footballer known for his goal-scoring prowess and successful stints with Sevilla and the Brazilian national team.',
        img: 'Imgs/luisfabiano.png',
        goals: 28
    },
]

function generateTeamCards (){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-lg-3','col-md-6','p-2', 'card-margin')

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
            <div class = "card-header text-center">
            <h4><b>${member.number}</b> ${member.name} </h4>
            </div>
            <div class = "card-body">
            <div class = "text-center">
            <img src=${member.img} style="width: 250px" class="border border-dark rounded img-fluid"><br><br>
            </div>
                <p><strong>Position: </strong> ${member.position} </p>
                <p><strong>Goals: </strong> ${member.goals} </p>
                <p><strong>Skills: </strong> 
                <ul>
                    ${skillsList}
                </ul>
                </p>
                <p><strong>Strengths: </strong> ${member.strengths} </p>
                <p><strong>Biograpgy: </strong> ${member.biography} </p>
            </div>
            </div>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()