import NavBarElements from '../navbarElements';
import PromptInventory from './inventory';

const ProjectsPage = () => {
    return (
        <>
        <NavBarElements/>
        {/* <div align='center'>
            View your projects here!
        </div> */}
        <div>
            <PromptInventory />
        </div>
    </>
    )
}

export default ProjectsPage