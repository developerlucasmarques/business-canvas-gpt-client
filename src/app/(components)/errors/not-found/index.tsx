interface Props {
  value: string
}

export const NotFound: React.FC<Props> = ({ value }: Props) => {
  const titleStyle = {
    color: 'var(--color-title)'
  }
  return (
    <div>
      <h1 className="text-6xl font-bold" style={titleStyle}>
        {value} não encotrado
      </h1>
    </div>
  )
}
