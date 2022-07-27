import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployersList from '../eployers-list/eployers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';



function App() {

const data = [
    {name: 'Artem A.', salary: 800, increase: false, id: 1},
    {name: 'Marta M.', salary: 3000, increase: true, id: 2},
    {name: 'Sofiia S.', salary: 5000, increase: false, id: 3}
];

    return (
        <div className="app">
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EployersList data={data}/>
            <EmployersAddForm/>
            
        </div>
    )
}

export default App;