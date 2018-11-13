import React from 'react'
import Container__Section from '../../container/section/index.jsx'
import Typography__Body_Copy from '../../typography/body-copy/index.jsx'
import Typography__Sub_Heading from '../../typography/sub-heading/index.jsx'
import Typography__Subtle_Title from '../../typography/subtle-title/index.jsx'


const Card__Project = (props) => (

    <div>
        {
            props.projects.map(project => (
                <div className='work__project' key={project.id}>
                <Container__Section alt={project.flip && 'alt'}>
                    <div className='row'>

                        {project.flip &&
                            <div className='col col6'>
                                <div className='desktop-frame'>
                                    <img
                                        alt={project.alt}
                                        className='shadow'
                                        height={project.height}
                                        src={project.src}
                                        width={project.width}
                                    />
                                </div>
                            </div>
                        }

                        <div className='col col6'>
                            <Typography__Sub_Heading
                                text={project.client}
                            />
                            <Typography__Subtle_Title
                                text={project.title}
                            />
                            <Typography__Body_Copy
                                text={project.summary}
                            />
                            <Typography__Body_Copy>
                                {project.url /* <a href={project.url}>{project.url}</a> */}
                            </Typography__Body_Copy>
                        </div>

                        {!project.flip &&
                            <div className='col col6'>
                                <div className='desktop-frame'>
                                    <img
                                        alt={project.alt}
                                        className='shadow'
                                        height={project.height}
                                        src={project.src}
                                        width='60%'
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </Container__Section>
                </div>
            ))
        }
    </div>

)


export default Card__Project
