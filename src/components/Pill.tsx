import { Component } from 'react'

type Props = {
  language: String
}

type State = {}

export default class Pill extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="w-fit px-2 py-1 rounded bg-indigo-500 bg-opacity-20">
        <p className="text-indigo-500 text-sm">{this.props.language}</p>
      </div>
    )
  }
}
