import ExperienceCard from "components/ExperienceCard";
import educationalBackground from "components/EducationalBackground/data.json"

export default function EducationalBackground() {
    return (
        <>
            <h1>Educational Background</h1>
            {
                educationalBackground.map(item => {
                    return <ExperienceCard
                        title={item.title} 
                        image={item.image}
                        alt={item.alt}
                        detail1={item.detail1}
                        detail2={item.detail2}
                        items={item.items}
                        key={item.id}/>
                })
            }
        </>
    );
}