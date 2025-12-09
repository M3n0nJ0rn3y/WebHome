import { Link } from "react-router-dom";

type MyButtonProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

function MyButton({ to, label, onClick }: MyButtonProps) {
    return (
    <Link className="my-button" to={to} onClick={onClick}>
      {label}
    </Link>
    );
}

export default MyButton;