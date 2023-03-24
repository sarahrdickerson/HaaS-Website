import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from '../navbarElements'
import logo from '../../../assets/logo_white.png';
import Projects from './projectsContainers/Projects'

const ProjectsPage = () => {
    return (
        <>
        <div><Nav>
            <Bars />
                <NavMenu>
                    <NavLink to='/dashboard' activeStyle>
                        <img src={logo} className="dashboard-logo" alt="logo" />
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/settings' activeStyle>
                        Settings
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
        {/* <div align='center'>
            View your projects here!
<<<<<<< HEAD
        </div>
        <div>
            <Projects />
        </div>
=======
        </div> */}
        {/* <div>
            Hello
        </div> */}
>>>>>>> e140841fa5a2e74981311aad1cb0f815b682cfb3
    </>
    )
}

export default ProjectsPage