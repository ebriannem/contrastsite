import React from 'react';
import './App.css';
import classNames from 'classnames';
import {Slide} from 'react-reveal'
import {ListItem} from "./ListItem";
import {bio, graduateCourses, languages, mathCourses, tools, undergraduateCourses, GPA, projects} from "./data"
import {Grid} from "@material-ui/core"
import {ReactComponent as CodeIcon} from './resources/code.svg';
import {ReactComponent as GithubIcon} from './resources/github.svg';
import {ReactComponent as MailIcon} from './resources/gmail.svg';
import {ReactComponent as LinkedinIcon} from './resources/linkedin.svg';
import {ReactComponent as ResumeIcon} from './resources/resume.svg';


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

  getColorClass = () => {
    return this.state.darkMode ? "darkMode" : "lightMode";
  };

  getOppositeColorClass = () => {
    return this.state.darkMode ? "lightMode" : "darkMode";
  };

  listenScrollEvent = e => {
    if (window.scrollY % (window.innerHeight * 2) > window.innerHeight) {
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
    let image = <Grid item>
      <p>project.image</p>
    </Grid>;
    return (
        <Grid container justify={"space-between"}>
          {imgLeft ? image : details}
          {imgLeft ? details : image}
        </Grid>
    )
  };

  render() {
    return (
        <div className={classNames("App", this.getColorClass())}>
          <div className={"sidebar"}>
            <Grid  className={"sidebar-grid"} container direction="column" spacing="2" justify="flex-end">
              <Grid item>
                <GithubIcon width="30px" className={classNames("Link", this.getColorClass())}/>
              </Grid> <Grid item>
              <MailIcon width="30px" className={classNames("Link", this.getColorClass())}/>
            </Grid> <Grid item>
              <LinkedinIcon width="30px" className={classNames("Link", this.getColorClass())}/>
            </Grid> <Grid item>
              <ResumeIcon width="30px" className={classNames("Link", this.getColorClass())}/>
            </Grid>
            </Grid>
          </div>
          <div className="Name-Header">
            <h1 className="Name-Header-First">Brianne</h1>
            <h3 className={"Name-Header-Surname Line"}><span>Matthews</span></h3>
          </div>
          <div className={classNames("Skills", "Section", this.getColorClass())}>
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
          <div className={classNames("Education", "Section", this.getColorClass())}>
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
                <p>Master's in Computer Science</p>
                <p>Minor in Mathematics</p>
              </Grid>
              <Grid item>
                <p>May 2020</p>
                <p>May 2020</p>
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
          <div className={classNames("Projects", "Section", this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Projects</span></h2>
            {projects.map((p, i) => {
              return (<div className={"Project"}>{this.generateProject(p, (i % 2 === 0))}</div>)
            })}
          </div>
          <div className={classNames("Section", this.getColorClass())}>
            <h2 className={classNames("LineLeft", this.getColorClass())}><span>Links & Contact</span></h2>

          </div>
        </div>
    )
  }
}

export default App;
