import React from "react";

const SingleRoomPage = ({ params }: { params: { roomId: string } }) => {
  const roomId = params?.roomId;
  return <div>Page id {roomId}</div>;
};

export default SingleRoomPage;
