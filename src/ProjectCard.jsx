/* eslint-disable react/prop-types */
import './ProjectCard.css'

const ProjectCard = (props) => {
  const toolsString = props.tools.join(" | ");
  return (
     <>
    <div className='Main' >
      <div className='project-card'>
          <div className='top'> <h2>{props.name.toUpperCase()}</h2>
          <h2>{props.year}</h2></div>
       <div>

        <p>{props.des}
        </p> </div>
        <div className='bottom'>
          <h2>Tools : {toolsString}</h2>
      </div>
      </div>
    </div>
    </>
  )
}

export default ProjectCard
