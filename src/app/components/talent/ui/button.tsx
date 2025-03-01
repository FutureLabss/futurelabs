import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  className,
}) => {
  const buttonClass = classNames(
    "rounded-md font-medium transition-all duration-300",
    {
      "bg-orange-500 text-white hover:bg-orange-600": variant === "primary",
      "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
      "border border-orange-500 text-orange-500 hover:bg-orange-100":
        variant === "outline",
      "px-4 py-2 text-sm": size === "sm",
      "px-5 py-2.5 text-base": size === "md",
      "px-6 py-3 text-lg": size === "lg",
      "opacity-50 cursor-not-allowed": disabled || loading,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
