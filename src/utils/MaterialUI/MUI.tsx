import * as React from 'react';

import Box, { BoxProps } from '@mui/material/Box'; 
import Button, { ButtonProps } from '@mui/material/Button'; 
import { SxProps } from '@mui/system';
import TextField, { TextFieldProps } from '@mui/material/TextField';


// BOX
interface MUIBoxProps extends BoxProps {
  children: React.ReactNode;
  noValidate: true;
  autoComplete: string;
}

const MUIBox: React.FC<MUIBoxProps> = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
};

// BUTTON
  interface MUIButtonProps extends ButtonProps {
    children: React.ReactNode;
    sx?: SxProps;
  }

  const MUIButton: React.FC<MUIButtonProps> = ({ children, ...props }) => (
    <Button {...props}>{children}</Button>
  );


// TextField
interface CustomTextFieldProps {
  value: string;
  sx?: SxProps;
  onChange: (value: string) => void
}

type MUITextFieldProps = CustomTextFieldProps & Omit<TextFieldProps, 'onChange'>;


const MUITextField: React.FC<MUITextFieldProps> = ({ value, onChange, ...props }) => {
  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleTextFieldChange}
      {...props}
    />
  );
};






export {
  MUIBox,
  MUIButton,
  MUITextField,
};
