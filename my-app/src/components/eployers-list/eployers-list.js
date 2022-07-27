import EployeesListItem from "../employers-list-item/employers-list-item";
import './eployers-list.css';

const EployersList = ({data}) => {

    const elements = data.map((item, i) => {
        const {id, ...itemProps} = item;
        return (
            <EployeesListItem key={i}  {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EployersList;