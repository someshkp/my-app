import React, { useEffect, useState } from "react";

interface ButtonProps {
  className: string;
  title: string;
  onClick: () => void;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  title,
  onClick,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);
  return (
    <button className={className} type="button" onClick={onClick}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 bg-gray-600 border-4 border-gray-200"></div>
        </div>
      )}
      {title}
    </button>
  );
};
export default Button;
