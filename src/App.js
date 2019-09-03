import React from 'react';
import './App.css';
import classNames from 'classnames';
import {Slide} from 'react-reveal'
import {ListItem} from "./ListItem";
import resume from './resources/Brianne_Matthews_Resume.pdf';
import {Grid} from "@material-ui/core"
import {ReactComponent as CodeIcon} from './resources/code.svg';
import {ReactComponent as GithubIcon} from './resources/github.svg';
import {ReactComponent as MailIcon} from './resources/gmail.svg';
import {ReactComponent as LinkedinIcon} from './resources/linkedin.svg';
import {ReactComponent as ResumeIcon} from './resources/resume.svg';
import {GPA, languages, tools, undergraduateCourses, graduateCourses, mathCourses, industryExperience, projects} from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    }
  }

  toggleColorMode = (dark) => {
    this.setState({
      darkMode: dark
    })
  };
  
  sectionTag = () => (window.innerWidth / 10 < 50 ? "Section-Small" : "Section");

  getColorClass = () => {
    return this.state.darkMode ? "darkMode" : "lightMode";
  };

  listenScrollEvent = e => {
    if (window.scrollY % (window.innerHeight * 3) >= window.innerHeight * 1.5) {
      this.toggleColorMode(false);
    } else {
      this.toggleColorMode(true);
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  generateProject = (project, imgLeft) => {
    let details =
        <Grid item>
          <Grid container justify={"space-between"}>
            <Grid item>
              <h3 className={"Project-Title"}>{project.title}</h3>
            </Grid>
            <Grid item>
              <a href={project.link}>
                <CodeIcon className={classNames("Link", this.getColorClass())}/>
              </a>
            </Grid>
          </Grid>
          <Slide right={imgLeft} left={!imgLeft}>
            <div className={"Project-Content"}>
              {project.content}
            </div>
          </Slide>
          <Slide right={imgLeft} left={!imgLeft}>
            <Grid container justify={"space-right"} className={"Project-Languages"}>
              {project.languages.map((item) => <Grid item><ListItem
                  mode={this.getColorClass} title={item}
                  width={"min-content"}/> </Grid>)}
            </Grid>
          </Slide>
        </Grid>;
    let image = <Grid item xs={5}>
      <img className={"Project-Image"} alt={project.title}
           src={window.location.origin + "/" + project.image}/>
    </Grid>;
    return (
        <Grid container justify={"space-between"}>
          {imgLeft ? image : details}
          {imgLeft ? details : image}
        </Grid>
    )
  };


  generateExperience = (experience, imgLeft) => (
      <div className={"Experience"}>
        <Grid item>
          <Grid container justify={"space-between"}>
            <Grid item>
              <h3 className={"Experience-Company"}>{experience.company}</h3>
              <h4>{experience.title}</h4>
            </Grid>
            <Grid item>
              <h4>{experience.dates}</h4>
            </Grid>
          </Grid>
          <Slide right={imgLeft} left={!imgLeft}>
            <div className={"Experience-Content"}>
              {experience.content}
            </div>
          </Slide>
          <Slide right={imgLeft} left={!imgLeft}>
            <Grid container justify={"space-right"} className={"Experience-Languages"}>
              {experience.languages.map((item) => <Grid item><ListItem
                  mode={this.getColorClass} title={item}
                  width={"min-content"}/> </Grid>)}
            </Grid>
            <Grid container justify={"space-right"} className={"Experience-Tools"}>
              {experience.tools.map((item) => <Grid item><ListItem
                  mode={this.getColorClass} title={item}
                  width={"min-content"}/> </Grid>)}
            </Grid>
          </Slide>
        </Grid>
      </div>
  );

  render() {
    return (
        <div className={classNames("App", this.getColorClass())}>
          <div className={"sidebar"}>
            <Grid className={"sidebar-grid"} container direction="column" spacing="2" justify="flex-end">
              <Grid item>
                <a href={"https://www.github.com/ebriannem"}><GithubIcon width="30px"
                                                                         className={classNames("Link", this.getColorClass())}/></a>
              </Grid> <Grid item>
              <a href={"mailto:e.brianne.matthews@gmail.com"}><MailIcon width="30px"
                                                                        className={classNames("Link", this.getColorClass())}/></a>
            </Grid> <Grid item>
              <a href={"https://www.linkedin.com/in/ebriannem/"}><LinkedinIcon width="30px"
                                                                               className={classNames("Link", this.getColorClass())}/></a>
            </Grid> <Grid item>
              <a href={resume} target={"_blank"}> <ResumeIcon width="30px" className={classNames("Link", this.getColorClass())}/></a>
            </Grid>
            </Grid>
          </div>
          <div className="Name-Header">
            <h1 className="Name-Header-First">Brianne</h1>
            <h3 className={"Name-Header-Surname Line"}><span>Matthews</span></h3>
          </div>
          <div className={classNames("Skills", this.sectionTag(), this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Skills</span></h2>
            <Grid container justify={"space-evenly"}>
              <Grid item>
                <h3>Languages</h3>
                <Slide left>
                  {languages.map((item) => <ListItem mode={this.getColorClass}
                                                     title={item} width={"30vw"}/>)}
                </Slide>
              </Grid>
              <Grid item>
                <h3>Other</h3>
                <Slide left>
                  {tools.map((item) => <ListItem mode={this.getColorClass} title={item} width={"30vw"}/>)}
                </Slide>
              </Grid>
            </Grid>
          </div>
          <div className={classNames("Education", this.sectionTag(), this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Education</span></h2>
            <Grid container justify={"space-between"}>
              <Grid item>
                <h2>Northeastern University</h2>
              </Grid>
              <Grid item>
                <h2>GPA: {GPA}/4.00</h2>
              </Grid>
            </Grid>
            <Grid container justify={"space-between"}>
              <Grid item>
                <p>Bachelor's of Science in Computer Science</p>
                <p>Master's of Science in Computer Science</p>
                <p style={{fontSize: ".7em", padding:0, marginTop:"-2.2em"}}>Note: This degree is only predicted & the date is the same as the undergraduate since I am doing a combined program.</p>
                <p>Minor in Mathematics</p>
              </Grid>
              <Grid item>
                <p>May 2021</p>
                <p>May 2021</p>
                <p>May 2021</p>
              </Grid>
            </Grid>
            <Grid container justify={"space-evenly"}>
              <Grid item>
                <h3>Undergraduate CompSci</h3>
                <Slide left>
                  {undergraduateCourses.map((item) => <ListItem em=".7em" mode={this.getColorClass}
                                                                title={item} width={"25vw"}/>)}
                </Slide>
              </Grid>
              <Grid item>
                <h3>Graduate CompSci</h3>
                <Slide left>
                  {graduateCourses.map((item) => <ListItem mode={this.getColorClass} em=".7em" title={item}
                                                           width={"25vw"}/>)}
                </Slide>
              </Grid>
              <Grid item>
                <h3>Mathematics</h3>
                <Slide left>
                  {mathCourses.map((item) => <ListItem mode={this.getColorClass} em=".7em" title={item}
                                                       width={"25vw"}/>)}
                </Slide>
              </Grid>
            </Grid>
          </div>
          <div className={classNames("Experiences", this.sectionTag(), this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Industry Experience</span></h2>
            {industryExperience.map((p, i) => {
              return (<div className={"Experience"}>{this.generateExperience(p, (i % 2 === 0))}</div>)
            })}
          </div>
          <div className={classNames("Projects", this.sectionTag(), this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Projects</span></h2>
            {projects.map((p, i) => {
              return (<div className={"Project"}>{this.generateProject(p, (i % 2 === 0))}</div>)
            })}
          </div>
          <div className={classNames("Footer", this.sectionTag(), this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Thanks for visiting!</span></h2>

            <p>See the link on the the side for my resume and contact information.</p>
            <p>e.brianne.matthews@gmail.com</p>
          </div>
        </div>
    )
  }
}

export default App;
