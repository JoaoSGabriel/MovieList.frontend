import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/index";

export default function MediaPage() {
  const params = useParams();
  return <>Você clicou no ID: {params.id}</>;
}
