import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return <h1>This is Details {id}</h1>;
};

export default Detail;
