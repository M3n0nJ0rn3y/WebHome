import { Link } from "react-router-dom";

function SUB_BUTTON(props: { to: string; label: string }) {
    return (
    <Link className="sub-button" to={props.to}>
      {props.label}
    </Link>
    );
}

export default SUB_BUTTON;