type Props = {
  language: String
}

const Pill = ({ language }: Props) => {
  return (
    <div className="w-fit px-2 py-1 rounded bg-indigo-500 bg-opacity-20">
      <p className="text-indigo-500 text-sm">{language}</p>
    </div>
  )
}

export default Pill
