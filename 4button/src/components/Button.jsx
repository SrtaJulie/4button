export default function Button({ text, enabled = false, onClick }) {
  const buttonClass =
    "col-3 btn " + (enabled ? "btn-primary" : "btn-secondary");
  return (
    <button className={buttonClass} disabled={!enabled} onClick={onClick}>
      {text}
    </button>
  );
}
