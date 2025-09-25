import { Link } from "react-router-dom";

function MyButton(props: { to: string; label: string }) {
    return (
    <Link className="my-button" to={props.to}>
      {props.label}
    </Link>
    );
}

export default MyButton;