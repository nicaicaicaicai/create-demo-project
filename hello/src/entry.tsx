/**
 *  Created by pw on 2020-07-07 15:25.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorld from './helloWorld'

export default function (entry: string) {
  ReactDOM.render(<HelloWorld name={entry} />, document.getElementById('root'))
}
