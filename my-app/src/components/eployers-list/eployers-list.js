import EployeesListItem from "../employers-list-item/employers-list-item";
import './eployers-list.css';

const EployersList = () => {
    return (
        <ul className="app-list list-group">
            <EployeesListItem/>
            <EployeesListItem/>
            <EployeesListItem/>
        </ul>
    )
}

export default EployersList;