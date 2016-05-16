import React from 'react'
import sagui from './sagui.svg'

export default React.createClass({
  render () {
    return (
      <main>
        <header>
          <img src={sagui} />
          <h1>Sagui </h1>
          <hr />
          <h2>Modern front-end development made easy</h2>
        </header>

        <article>
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
        </article>
      </main>
    )
  }
})
