import Image from "next/image";

function Card({title, img}) {
  return (
    <div className="card">
      <Image
        src={img}
        alt="dnwod"
        width={300}
        height={300}
      />
      <p>{title}</p>
    </div>
  );
}

export default Card;
