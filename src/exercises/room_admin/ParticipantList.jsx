import styles from './styles/ParticipantList.module.css'; // Import the CSS module

const ParticipantList = ({ participants }) => {
  return (
    <div className={styles.participantList}>
      {participants.map((p) => {
        return (
          <p
            key={p.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('participantId', p.id);
            }}
            className={styles.participantItem}
          >
            {p.name}
          </p>
        );
      })}
    </div>
  );
};

export default ParticipantList;
