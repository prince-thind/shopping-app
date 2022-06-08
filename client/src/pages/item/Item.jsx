import { useParams } from "react-router-dom";

export default function Item() {
  const id = useParams().id;
  return <div>Item: {id}</div>;
}
