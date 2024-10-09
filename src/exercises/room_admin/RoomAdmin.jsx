import { useState } from "react";
import AddParticipant from "./AddParticipant";
import ParticipantList from "./ParticipantList";
import Room from "./Room";
import Participant from "./Participant";

const RoomAdmin = () => {

  /**
   * Participant format:
   * {id, name}
   */
  const [participants, setParticipants] = useState([]);
  const rooms = ['Room 1', 'Room 2', 'Room 3'];

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
    <>
      <h1>Room Admin</h1>
      <AddParticipant addParticipant={addParticipant}></AddParticipant>
      <ParticipantList participants={participants.filter(p => p.room === null)}></ParticipantList>
      {rooms.map((room, i) => {
        return <Room key={i} room={i} participants={participants.filter(p => p.room === i)} addToRoom={addToRoom}></Room>;
      })}
    </>
  );
};

export default RoomAdmin;
