/**
 *  Created by pw on 2020-07-07 15:18.
 */
import React, { Component } from 'react'
import './helloworld.less'

interface Props {
  name: string
}

export default class HelloWorld extends Component<Props> {
  render() {
    const { name = '' } = this.props
    return <div className="hello_world">{`hello world ${name}`}</div>
  }
}
