import ExperienceCard from "components/ExperienceCard";

const experienceCards = [
    {
        title: "2019 - 2021: CentraleSupélec", 
        image: "/images/centrale_supelec_logo.png", 
        alt: "CentraleSupélec logo", 
        detail1: "Double degree student", 
        detail2: "Engineering", 
        items: [
            "Attended the 1st and 2nd years of the three-year long course of French Engineering Schools",
            "Merit Scholarship due to academic performance"
        ]
    },
    {
        title: "2017 - 2022: University of São Paulo", 
        image: "/images/usp_logo.png", 
        alt: "University of São Paulo logo", 
        detail1: "Graduation student", 
        detail2: "Electrical Engineering with emphasis in Electronics", 
        items: [
            "2nd place in the class with an average grade of 9.1/10"
        ]
    },
    {
        title: "2002 - 2016: Instituto Dom Barreto", 
        image: "/images/idb_logo.png", 
        alt: "Instituto Dom Barreto logo", 
        detail1: "Elementary and High School", 
        detail2: "Scholarship student", 
        items: []
    }
]

export default function EducationalBackground() {
    return (
        <main className="container-fluid">
            <h1>Educational Background</h1>
            {
                experienceCards.map(experienceCard => {
                    return <ExperienceCard 
                        title={experienceCard.title} 
                        image={experienceCard.image}
                        alt={experienceCard.alt}
                        detail1={experienceCard.detail1}
                        detail2={experienceCard.detail2}
                        items={experienceCard.items}/>
                })
            }
        </main>
    );
}