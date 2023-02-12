import "./ProfileSection.css"

export default function ProfileSection() {
    return (
        <main className="container-fluid">
            <h1>Who I am</h1>
            <div className="profile-card">
                <img src="/images/my_picture.jfif" alt="My photo"/>
                <p>My name is Humberto Borges Pereira Filho. I’m 23 years old and I’m Brazilian. I was born in Teresina, the capital city of the Piauí state, in the Northeast of Brazil. I lived there until turning 18, when I moved to São Carlos, a city in the Southeast of Brazil, for my superior studies. From 2017 to 2022, I was a Electrical Engineering student of the University of São Paulo. During this period, I participated of the double degree program of the Écoles Centrales (French Engineering Schools) at CentraleSupélec. </p>
                <p>Today, I’m a web developer. As programmer, my interests are web and mobile development. I program mainly in Python (Django Framework) and Java (Android Framework), but I’m constantly expanding my software knowledge. Besides programming, I like learning foreign languages. So far, I have an advanced level in Portuguese, English, French and Spanish. As hobbies, I dive into the rock music world, do jogging, and, as most people, watch to movies and series, especially super heroes and investigation ones.</p>
            </div>
        </main>
    );
}