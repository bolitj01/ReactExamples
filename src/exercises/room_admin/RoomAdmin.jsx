import { useState } from "react";
import AddParticipant from "./AddParticipant";
import ParticipantList from "./ParticipantList";
import RoomGrid from "./RoomGrid";
import Room from "./Room";
import Participant from "./Participant";
import styles from './styles/RoomAdmin.module.css';

const RoomAdmin = () => {

  /**
   * Participant format:
   * {id, name}
   */
  const [participants, setParticipants] = useState([]);
  const rooms = Array.from({ length: 9 }, (_, i) => i);

  const addParticipant = (name) => {
    //Add a participant to the list
    const newParticipant = new Participant(name);

    setParticipants([...participants, newParticipant]);
  };

  const addToRoom = (participantId, room) => {
    setParticipants(participants.map((p) => {
      if (p.id === participantId) {
        return {...p, room};
      }
      return p;
    }));
  }


  return (
    <div className={styles.container}>
      <h1>Room Admin</h1>
      <AddParticipant addParticipant={addParticipant} />
      <div className={styles.participantListWrapper}>
        <ParticipantList participants={participants} />
      </div>
      <RoomGrid>
        {rooms.map((i) => (
          <Room
            key={i}
            roomIndex={i}
            participants={participants.filter((p) => p.room === i)}
            addToRoom={addToRoom}
          />
        ))}
      </RoomGrid>
    </div>
  );
};

export default RoomAdmin;
