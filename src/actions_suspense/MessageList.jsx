export default function MessageList({ messages }) {
  return (
    <ul>
      {messages?.map((m) => (
        <li key={m.id}>{m.text}</li>
      ))}
    </ul>
  );
}