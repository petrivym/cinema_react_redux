import {
    Link
} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/" className="menu__link menu__link_active">Home</Link>
                </li>
                <li>
                    <Link to="film/13" className="menu__link">Card List</Link>
                </li>
            </ul>
        </nav>
    );
}
