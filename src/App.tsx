import * as React from 'react';
import { MUIBox, MUIButton, MUITextField } from './utils/MaterialUI/MUI';

import { ButtonStyles } from './utils/styles/Button.styles';


const App: React.FC = () => {
  const [input, setInput] = React.useState('');
  const [code, setCode] = React.useState('');




  const handleTextChange = (value: string) => {
    setInput(value);
  };

  const handleClick = () => {
    console.log('Button clicked', input);
  };

  return (
    <MUIBox
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '55ch' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    noValidate
    autoComplete="off"
    >
        <MUITextField
          id="outlined-multiline-static"
          label="Code-Box"
          multiline
          rows={15}
          variant="outlined"
          value={input}
          onValueChange={handleTextChange}
        />

      <MUIButton
        type="submit"
        onClick={handleClick}
        sx={ButtonStyles.submit}
      >
        Search
      </MUIButton>
      <pre>{code}</pre>
    </MUIBox>
  );
}

export default App;
