"use client";

const Client = () => {
  return (
    <div>
      <div>KEY_NAME</div>
      <div>Public: {process.env.NEXT_PUBLIC_ENV_VARIABLE}</div>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
    </div>
  );
};

export default Client;
