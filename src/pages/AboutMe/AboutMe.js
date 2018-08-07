import {h} from 'preact';
import twemoji from 'twemoji';

import './AboutMe.css';

function emoji(code) {
  return (
    <span
      class="u-emoji"
      dangerouslySetInnerHTML={{__html: twemoji.parse(code)}}
    />
  );
}

export default function AboutMe() {
  return (
    <div class="AboutMe">
      <div class="AboutMe-content">
        <h2>Who am I?</h2>
        <p>
          I am a full stack developer living in Kherson (Ukraine) with 7
          years of commercial experience using various tools and frameworks.
        </p>
        <p>
          I am passionate about web technologies and love a huge variety of
          tools in this area. Enjoy dynamic environments and continuously learn
          something new.
        </p>
        <h2>What do I do?</h2>
        <p>
          I have worked on many different projects, from small websites to large
          scale platforms that speak for themselves, you can find more info
          about my commercial experience
          on{' '}
          <a
            href="https://www.linkedin.com/in/eugene-moskvita"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn profile
          </a>{' '}
        </p>
        <h2>How do I do it?</h2>
        <p>
          As a full-stack developer, I am good at writing clean and structured
          code according to the tool standard, research/refactoring old code
          setting up an architecture for the new projects.
        </p>
        <p>
          I am appreciated for
          my ability to share/get knowledge among developers, analyse problems
          from the business point of view, work and interact with clients
          independently.
        </p>
      </div>
      <div class="AboutMe-content">
        <h2>What else should you know about me?</h2>
        <p>
          A good thing to know about me is that I am Kitesurfer {emoji('&#127940')} so I obviously
          like wind and water. Then I love traveling and{' '}
          <a
            href="https://www.instagram.com/sonyquex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            taking photos
          </a>.
        </p>
        <p>
          I'm a family guy and father of two children, really proud of
          them {emoji('\uD83D\uDE0A')}.
        </p>
        <h2>How to contact me?</h2>
        <p>
          If you want to get in touch for a job, I prefer if you{' '}
          <a
            href="https://www.linkedin.com/in/eugene-moskvita"
            target="_blank"
            rel="noopener noreferrer"
          >
            send me a message on LinkedIn
          </a>
          . For anything else, please contact me{' '}
          <a href="mailto:sonyquekss@gmail.com">on my personal email</a> or{' '}
          <a
            href="https://twitter.com/Sonyque"
            target="_blank"
            rel="noopener noreferrer"
          >
            send me a tweet
          </a>
          .
        </p>
      </div>
    </div>
  );
}
