import { ProjectType } from '../../module/ProjectType';
import './projectList-style.css';

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {  
  return (
    <div className='project-list'>
      {
        project.map((item: ProjectType, index) => (
          <div
            className="project-item"
            key={Date.now() + index}
          >
            <img src={item.img} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default ProjectList

type ProjectListProps = {
  project: ProjectType[]
}