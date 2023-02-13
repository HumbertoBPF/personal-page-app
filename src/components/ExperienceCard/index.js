import "./ExperienceCard.css"

export default function ExperienceCard({title, image, alt, detail1, detail2, items}) {
    return (
        <div className="experience-card">
            <img src={image} alt={alt}/>
            <div>
                <p>{title}</p>
                <br/>
                <p>{detail1}</p>
                <p>{detail2}</p>
                <br/>
                <ul>
                    {
                        items.map(item => {
                            return (<li key={item.id}>{item.text}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
