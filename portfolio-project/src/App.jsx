import './App.css'

function App() {
  const name = "John Doe";
  const profession = "Full Stack Developer"
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
    <div className='App'>
      {/* Header section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love building web application that solves real world problems</p>
      </section>

      {/* Project Section */}
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

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
          <h2>Contact Me</h2>
          <p>If you would like to get in touch, feel free to email me at <a href='mailto:johndoe@example.com'>johndoe@example.com</a></p>
      </section>
      
      {/* Footer Section */}
      <footer className='footer'>
          <p>2026. All Right Reserved</p>
      </footer>

    </div>
  )
}

export default App
