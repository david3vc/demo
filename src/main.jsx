import {StrictMode} from 'react'
import {render} from 'react-dom'

import './template/scss/template.scss'
import '@popperjs/core'
import 'bootstrap'
import 'perfect-scrollbar'
import './template/js/sidebarmenu'
import './template/js/custom'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
