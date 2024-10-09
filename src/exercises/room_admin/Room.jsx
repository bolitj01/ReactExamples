import styles from './styles/Room.module.css';

// Room.jsx
const Room = ({ roomIndex, participants, addToRoom }) => {
  
  console.log("Rendering Room");

  const handleDrop = (e) => {
    e.preventDefault();
    const participantId = e.dataTransfer.getData('participantId'); // Retrieve the participant ID
    addToRoom(participantId, roomIndex); // Add the participant to the room
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop by preventing the default behavior
  };

  return (
    <div
      className={styles.roomContainer}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h3>Room {roomIndex + 1}</h3>
      {participants.map((participant) => (
        <p key={participant.id} className={styles.participant}>
          {participant.name}
        </p>
      ))}
    </div>
  );
};

export default Room;
