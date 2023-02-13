import "./ListSection.css"

export default function ListSection({title, items}) {
    return (
        <div className="list-section">
            <h2>{title}</h2> 
            <ul>
                {
                    items.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}