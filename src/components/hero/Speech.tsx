import Image from "next/image";

export const Speech = () => {
  return (
    <div className="buubleContainer">
      <div className="bubble">Text</div>
      <Image src="/man.png" alt="Man Logo" width={64} height={64} />
    </div>
  );
};
