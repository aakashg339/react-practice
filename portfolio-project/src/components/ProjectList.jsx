function ProjectList() {
    const projects = [
        {
        title: "Project One",
        description: "A web application built using React and Node.js",
        link: "#"
        },
        {
        title: "Project Two",
        description: "An eCommerce platform built using Django",
        link: "#"
        }
    ]

    return (
        <section id='projects' className='projects-section'>
            <h2>Projects</h2>
            <div className='projects-list'>
            {projects.map((project, index) => (
                <div key={index} className='project-item'>
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>View Projects</a>
                </div>
            ))}
            </div>
        </section>
    );
}

export default ProjectList;