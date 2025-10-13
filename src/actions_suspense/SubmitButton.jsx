import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  /* Automatically re-renders with
  pending = true while Action is running */
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Posting..." : "Post Message"}
    </button>
  );
}