export default function Input({nome, value, setValue, id}) {
  return (
    <>
      <label id={id}className="label">{nome}</label>
    <div className="inputContainer">
      <input
        className="comercialInput"
        type="text"
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
    </>
  );
}
