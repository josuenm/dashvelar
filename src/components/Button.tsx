interface ButtonProps {
  color: string;
  bgColor: string;
  title: string;
  borderRadius: string;
  size?: string;
}

const Button = ({ title, bgColor, color, borderRadius, size }: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 duration-100 hover:drop-shadow-xl`}
    >
      {title}
    </button>
  );
};

export default Button;
