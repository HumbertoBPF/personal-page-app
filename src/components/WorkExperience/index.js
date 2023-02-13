import ExperienceCard from "components/ExperienceCard";
import workExperience from "components/WorkExperience/data.json";


export default function WorkExperience() {
    return (
        <main className="container-fluid">
            <h1>Work Experience</h1>
            {
                workExperience.map(item => {
                    return <ExperienceCard 
                        title={item.title} 
                        image={item.image}
                        alt={item.alt}
                        detail1={item.detail1}
                        detail2={item.detail2}
                        items={item.items}/>
                })
            }
        </main>
    );
}