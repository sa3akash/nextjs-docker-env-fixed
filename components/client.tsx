"use client";

interface Props {
  SERVER_ENV:string | undefined;
  KEY_NAME:string | undefined;
}

const Client = ({KEY_NAME,SERVER_ENV}:Props) => {
 console.log({KEY_NAME,SERVER_ENV}) 
  return (
    <div>
      <div>KEY_NAME</div>
      <div>Public: {KEY_NAME}</div>
      <div>SERVER_ENV: {SERVER_ENV}</div>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
    </div>
  );
};

export default Client;
