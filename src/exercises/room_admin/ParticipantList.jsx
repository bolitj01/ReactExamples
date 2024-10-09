// ParticipantList.jsx
const ParticipantList = ({ participants }) => {
    return (
      <>
        {participants.map((p, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('participantId', p.id); // Store participant ID when dragging starts
              }}
            >
              <p>{p.name}</p>
            </div>
          );
        })}
      </>
    );
  };
  
  export default ParticipantList;
  