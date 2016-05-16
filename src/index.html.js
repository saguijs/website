import React from 'react'
import { renderToString } from 'react-dom/server'
import LandingPage from './landing-page'
import image from './landing-page/sagui-logo.png'

module.exports = function ({ htmlWebpackPlugin }) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta charset="UTF-8">
        <title>Sagui</title>

        <meta name="description" content="Sagui - Modern front-end development made easy" />
        <meta property="og:title" content="Sagui" />
        <meta property="og:description" content="Modern front-end development made easy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sagui" />
        <meta name="twitter:title" content="Sagui" />
        <meta name="twitter:description" content="Modern front-end development made easy" />
        <meta property="og:image" content="http://sagui.js.org/${image}" />

      </head>
      <body>
        <div id="sagui">${renderToString(<LandingPage />)}</div>
      </body>
    </html>
  `)
}
