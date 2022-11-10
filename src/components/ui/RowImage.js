export default function RowImage(props) {
  return (
    <div className="object-cover overflow-hidden rounded-3xl rounded-b-[3rem] row-span-2 col-span-2 px-[0.5rem]">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.src} alt={props.alt} className="object-fill" />
      </a>
    </div>
  );
}
