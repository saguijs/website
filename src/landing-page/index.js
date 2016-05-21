import React from 'react'
import sagui from './sagui.svg'

export default React.createClass({
  render () {
    return (
      <main>
        <nav>
          <ul>
            <li>
              <a href='https://github.com/saguijs/sagui#configuration'>Documentation</a>
            </li>
            <li>
              <a href='https://github.com/saguijs/sagui'>Github</a>
            </li>
            <li>
              <a href='https://www.npmjs.com/package/sagui'>npm</a>
            </li>
          </ul>
        </nav>

        <header>
          <img src={sagui} />
          <h1>Sagui </h1>
          <hr />
          <h2>Modern front-end development made easy</h2>
        </header>

        <article>
          <section>
            <h1>Creating a new front-end project</h1>
            <p>On a new folder, <strong>create a new project</strong>.</p>
            <code>
              npm init -y
            </code>

            <p>Install Sagui as a <strong>development dependency</strong>.</p>
            <code>
              npm install --save-dev sagui
            </code>

            <p>And <strong>start</strong> the development server</p>
            <code>
              npm start
            </code>

            <p>That is it! Sagui bootstraps its configuration files and a project for you, so <strong>no extra step is required</strong>!</p>
          </section>
        </article>

        <article>
          <section>
            <h1>Focus on your code</h1>
            <p>Sagui is all about good defaults. It is the <strong>single development dependency</strong> you need to worry about, taking care of build, tests and the development server.</p>
          </section>
        </article>

        <footer>
          <p><a href='https://thenounproject.com/term/monkey/267835/'>Monkey artwork</a> created by Ryan Spiering from the Noum Project.</p>
        </footer>
      </main>
    )
  }
})
