import { useParams } from "react-router-dom";
import Navbar from "./Dashboard/Navbar";

export default function MediaPage() {
  const params = useParams();
  return (
    <>
      <Navbar />
      Você clicou no ID: {params.id}
    </>
  );
}
