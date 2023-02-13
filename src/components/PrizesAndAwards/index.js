import ListSection from "components/ListSection";
import prizesAndAwards from "components/PrizesAndAwards/data.json"

export default function PrizesAndAwards() {
    return (
        <>
            <h1>Prizes and Awards</h1>
            {prizesAndAwards.map(item  => {
                return <ListSection title={item.title}
                                    items={item.items}/>
            })}
        </>
    )
}