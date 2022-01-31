import {StrictMode} from 'react'
import {render} from 'react-dom'

import './template/scss/template.scss'
import '@popperjs/core'
import 'bootstrap'
import 'perfect-scrollbar'
import './template/js/sidebarmenu'
import './template/js/custom'

import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
