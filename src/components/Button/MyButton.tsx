import { Button } from '@mui/material';
import { ReactNode } from 'react';
import './MyButton.css';

type MyButtonProps = {
  children: ReactNode;
  fullwidth?: boolean;
  variant?: 'outlined' | 'contained' | 'text';
  startIcon?: ReactNode;
};

const MyButton = ({
  children,
  fullwidth,
  variant = 'contained',
  startIcon,
}: MyButtonProps) => {
  return (
    <Button
      variant={variant}
      fullWidth={fullwidth}
      size='large'
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default MyButton;
