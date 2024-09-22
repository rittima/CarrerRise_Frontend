
import { BsDatabaseAdd, BsMenuButton } from 'react-icons/bs'
import { FaTh } from 'react-icons/fa'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { IoPersonCircle } from 'react-icons/io5'
import { LuLogOut } from 'react-icons/lu'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar1 = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    const handleSignup = () => {
        localStorage.removeItem('token');
        navigate("/register");
    }

    const menuItem = [
        {
            path: "/",
            name: "Your Profile",
            icon: <IoPersonCircle />
        },
        {
            path: "/consultant-add",
            name: "Add your data",
            icon: <BsDatabaseAdd />
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        }
    ];

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top "  data-bs-theme="dark">
                
                <div className="container-fluid bg-transparent">
                    <div className='d-flex'>
                    {!localStorage.getItem("token") ? (
                        <div></div>
                    ):(
                    <button className="navbar-toggler no-outline-btn"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <HiOutlineBars3 />
                    </button>
                    )}

                        
                        {!localStorage.getItem("token") ? (
                            <a className="navbar-brand ">CarrierRise</a>
                        ):(
                            <a className="navbar-brand">Welcome to CarrierRise</a>
                        )}
                    </div>

                    {!localStorage.getItem("token") ? (
                        <form className="d-flex">
                            <Link type="button" to='/login' className="btn btn-none-outline-light mx-2 my-3 nav-btton">Sign in</Link>
                            <div className='Sline my-3'>|</div>
                            <button type="button" onClick={handleSignup} className="btn btn-none-outline-light mx-2 my-3 nav-btton">Sign up</button>
                        </form>
                    ) : (

                        <button onClick={handleLogout} className='btn btn-none-outline-light mx-2 my-3 nav-btton' >
                            Logout <LuLogOut className='mx-2' />
                        </button>
                    )}

                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className=" offcanvas-header ">
                        <BsMenuButton className='mx-4'/>            
                            <h1>Filter</h1>
                            {/* <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                        </div><hr />
                        
                        <div className="offcanvas-body">
                            {menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link text-light" activeclassname="active">
                                    <div className="icon">{item.icon}</div>
                                    <div className="link_text">{item.name}</div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar1
