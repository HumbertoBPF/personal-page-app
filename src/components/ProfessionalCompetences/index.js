import ListSection from "components/ListSection";
import competences from "components/ProfessionalCompetences/data.json"

export default function ProfessionalCompetences() {
    return (
        <> 
            <h1>Professional Competences</h1>
            {
                competences.map(item => {
                    return (
                        <ListSection 
                            title={item.title} 
                            items={item.items}
                            key={item.id}/>
                    );
                })
            }
        </>
    );
}