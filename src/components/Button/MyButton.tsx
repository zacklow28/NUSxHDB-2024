import { Button } from '@mui/material';
import { ReactNode } from 'react';
import './MyButton.css';

type MyButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
  variant?: 'outlined' | 'contained' | 'text';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
};
/* template code for buttons. Can define variant, full width, size, and icon */
const MyButton = ({
  children,
  fullWidth,
  variant,
  size,
  startIcon,
}: MyButtonProps) => {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default MyButton;
