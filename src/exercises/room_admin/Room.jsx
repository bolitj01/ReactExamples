// Room.jsx
const Room = ({ room, participants, addToRoom }) => {
  
  console.log("Rendering Room");

  const handleDrop = (e) => {
    e.preventDefault();
    const participantId = e.dataTransfer.getData('participantId'); // Retrieve the participant ID
    addToRoom(participantId, room); // Add the participant to the room
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop by preventing the default behavior
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed gray',
        padding: '20px',
        minHeight: '100px',
      }}
    >
      <h3>Room {room + 1}</h3>
      {participants.map((participant) => (
        <p key={participant.id}>{participant.name}</p> // Display participant IDs in the room
      ))}
    </div>
  );
};

export default Room;
