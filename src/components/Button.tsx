import { Component } from 'react'

type Props = {
  text: String
}

type State = {}

export default class Button extends Component<Props, State> {
  state = {}

  render() {
    return (
      <button className="px-6 py-3 rounded bg-indigo-500 text-neutral-50 text-xl font-medium hover:bg-indigo-400">
        {this.props.text}
      </button>
    )
  }
}
