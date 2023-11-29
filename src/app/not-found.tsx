const Custom404: React.FC = () => {
  const titleStyle = {
    color: 'var(--color-title)'
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-5 font-semibold" style={titleStyle}>Erro 404</h1>
      <p className="text-4xl font-medium" style={titleStyle}>Página não encontrada</p>
    </div>
  )
}

export default Custom404
