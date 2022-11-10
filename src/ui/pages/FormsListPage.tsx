import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";
import { Page } from "../common";

export default function FormsListPage() {
  return (
    <Page>
      <Link to='/form' style={{ textDecoration: "none" }}>
        <FormCard />
      </Link>
    </Page>
  );
}
