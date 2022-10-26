const InfoInput = ({ id, label, onChange, value }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onChange} value={value}></input>
    </div>
  )
}

export default InfoInput