import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from '../navbarElements'
import logo from '../../../assets/logo_white.png';
import Projects from './projectsContainers/Projects'
import NavBarElements from '../navbarElements';

const ProjectsPage = () => {
    return (
        <>
        <NavBarElements/>
        <div align='center'>
            View your projects here!
        </div>
        <div>
            <Projects />
        </div>
    </>
    )
}

export default ProjectsPage