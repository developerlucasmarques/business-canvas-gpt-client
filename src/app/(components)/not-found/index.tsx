interface Props {
  value: string
}

export const NotFound: React.FC<Props> = ({ value }: Props) => {
  return (
    <div>
      <h1 className="text-6xl font-bold">
        {value} não encotrado
      </h1>
    </div>
  )
}
