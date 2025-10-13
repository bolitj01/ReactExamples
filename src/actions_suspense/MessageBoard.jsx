import { Suspense, useActionState, useOptimistic } from "react";
import { postMessage, fetchMessages } from "./MessageAPI";
import SubmitButton from "./SubmitButton.jsx";
import SavedMessageList from "./SavedMessageList.jsx";
import MessageList from "./MessageList.jsx";

export default function MessageBoard() {
  const fetchPromise = fetchMessages();

  async function messageAction(prevMessages, formData) {
    const message = formData.get("message");
    addOptimistic(message);
    const newMsg = await postMessage(message);
    return [...(prevMessages || []), newMsg];
  }

  const [messages, formAction] = useActionState(messageAction, []);
  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (current, newText) => [{ id: "temp", text: newText }, ...current]
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20, maxWidth: 400 }}>
      <h2>Message Board (React 19)</h2>

      {/* Form Action + pending state */}
      <form action={formAction} style={{ marginBottom: 20 }}>
        <input name="message" placeholder="Type a message..." required />
        <SubmitButton />
      </form>

      {/* Suspense renders the fallback until messages are loaded */}
      <Suspense fallback={<p>Loading messages…</p>}>
        <SavedMessageList promise={fetchPromise} />
      </Suspense>

      <MessageList messages={optimisticMessages} />
    </div>
  );
}
