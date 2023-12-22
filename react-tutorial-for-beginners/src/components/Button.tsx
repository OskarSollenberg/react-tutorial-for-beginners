interface props {
    children: string;
    color: "primary" | "secondary" | "danger" | "success";
    onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: props) => {
    return (
        <div onClick={onClick} className={"btn btn-" + color}>
            {children}
        </div>
    );
};

export default Button;
