import "./ListSection.css"

export default function ListSection({title, items}) {
    return (
        <div className="list-section">
            <h2>{title}</h2> 
            <ul>
                {
                    items.map(item => {
                        return (
                            <li key={item.id}>{item.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}