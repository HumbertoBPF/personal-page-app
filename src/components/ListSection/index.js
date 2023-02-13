import styles from "./ListSection.module.css"

export default function ListSection({title, items}) {
    return (
        <div className={styles.listsection}>
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