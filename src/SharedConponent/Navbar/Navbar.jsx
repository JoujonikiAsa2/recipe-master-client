import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink id="link1" className="pr-0 hover:bg-white bg-white" to='/' style={({ isActive }) => {
            return {
                color: isActive ? '#FF3C4A' : 'black',
                backgroundColor: isActive ? 'white' : '',
                fontSize: isActive ? '0.9rem' : '0.9rem',
                fontWeight: isActive ? 'bold' : '',


            }
        }}>Home</NavLink></li>
        <li><NavLink id="link2" className="pr-0 hover:bg-white" to='/recipe' style={({ isActive }) => {
            return {
                color: isActive ? '#FF3C4A' : 'black',
                backgroundColor: isActive ? 'white' : '',
                fontSize: isActive ? '0.9rem' : '0.9rem',
                fontWeight: isActive ? 'bold' : '',


            }
        }}>Recipe</NavLink></li>
        <li><NavLink id="link3" className="pr-0 hover:bg-white" to='/login' style={({ isActive }) => {
            return {
                color: isActive ? '#FF3C4A' : 'black',
                backgroundColor: isActive ? 'white' : '',
                fontSize: isActive ? '0.9rem' : '0.9rem',
                fontWeight: isActive ? 'bold' : '',


            }
        }}>Login</NavLink></li>
        <li><NavLink id="link4" className="pr-0 hover:bg-white" to='/register' style={({ isActive }) => {
            return {
                color: isActive ? '#FF3C4A' : 'black',
                backgroundColor: isActive ? 'white' : '',
                fontSize: isActive ? '0.9rem' : '0.9rem',
                fontWeight: isActive ? 'bold' : '',


            }
        }}>Register</NavLink></li>
    </>
    return (
        <div className="relative mooli">
            <div className="navbar bg-white z-20 px-[5vw] fixed">
                <div className="flex-1">
                    <a className="text-lg">Treasure
                        <span className="emoji">🧆</span>Trove</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;