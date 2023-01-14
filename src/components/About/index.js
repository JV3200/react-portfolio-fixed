import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJsSquare,
  faHtml5,
  faCss3,
  faGithub,
  faReact,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am on a new career path of a front-end focused full stack
            developer to better myself and others around me through continuous
            learning. I come from the background of tech in the entertainment
            industry but now in search of a role in tech with more consistency
            and more opportunities for career development.
          </p>
          <p align="LEFT">
            I am a team player and very coachable. Also able to integrate into
            an existing environment to work well with others. I am confident in
            my work ethic and consider myself to be task oriented.
          </p>
          <p>
            If I had to describe myself in one sentence it would be "A sport
            loving, family oriented, dreamer that will continue to make my
            dreams reality."
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#762AAE" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
