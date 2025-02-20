const formButton = ({tipo, texto}) => {
  return (
    <>
      <button type={tipo} className="form-button">{texto}</button>
    </>
  )
}

export default formButton;