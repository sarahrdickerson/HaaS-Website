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
        </div> */}
        {/* <div>
            Hello
        </div> */}
    </>
    )
}

export default ProjectsPage