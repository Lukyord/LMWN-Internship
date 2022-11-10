export default function SideImage(props) {
  return (
    <div className="w-full overflow-hidden rounded-bl-md rounded-tl-md row-span-4 col-span-4">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.src} alt={props.alt} className="object-fill" />
      </a>
    </div>
  );
}
