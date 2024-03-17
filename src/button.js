export default function Button({ children, onCLick }) {
  return (
    <button onClick={onCLick} className="button">
      {children}
    </button>
  );
}
