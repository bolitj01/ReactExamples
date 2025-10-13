import { use } from "react";

export default function SavedMessageList({ promise }) {
  const messages = use(promise);

  return (
    <ul>
      {messages?.map((m) => (
        <li key={m.id}>{m.text}</li>
      ))}
    </ul>
  );
}