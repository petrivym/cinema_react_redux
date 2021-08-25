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
                    <Link to="genres" className="menu__link">filmForGenres</Link>
                </li>
            </ul>
        </nav>
    );
}
