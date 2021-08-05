import React, { useState, useEffect, useRef } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import socket from '../../socket';
import ACTIONS from '../../socket/actions';
import { useHistory } from 'react-router';
import { v4 } from 'uuid';

export default function Main() {
  const history = useHistory();
  const [rooms, updateRooms] = useState([]);
  const rootNode = useRef();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      if (rootNode.current) {
        updateRooms(rooms);
      }
    });
  }, []);

  return (
    <div ref={rootNode}>
      <h1>Available Rooms</h1>
      <ListGroup>
        {rooms.map(roomID => (
          <ListGroup.Item variant="primary" key={roomID}>
            {roomID}
            <Button
              variant="secondary"
              onClick={() => {
                history.push(`/room/${roomID}`);
              }}
            >
              JOIN ROOM
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Button
        variant="success"
        onClick={() => {
          history.push(`/room/${v4()}`);
        }}
      >
        Create New Room
      </Button>
    </div>
  );
}
