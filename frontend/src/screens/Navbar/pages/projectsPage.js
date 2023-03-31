import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from '../navbarElements'
import logo from '../../../assets/logo_white.png';
import NavBarElements from '../navbarElements';
import PromptProjects from './projects';

const ProjectsPage = () => {
    return (
        <>
        <NavBarElements/>
        <div align='center'>
            View your projects here!
        </div>
        <div>
            <PromptProjects />
        </div>
    </>
    )
}

export default ProjectsPage