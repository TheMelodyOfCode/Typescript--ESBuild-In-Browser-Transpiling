import * as React from 'react';
import * as esbuild from 'esbuild-wasm'

import { MUIBox, MUIButton, MUITextField } from './utils/MaterialUI/MUI';
import { ButtonStyles } from './utils/styles/Button.styles';


const App: React.FC = () => {
  const ref = React.useRef<any>();
  const [input, setInput] = React.useState('');
  const [code, setCode] = React.useState('');
  // console.log(input)
  // console.log(code)

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
  };

  React.useEffect(() => {
    startService();
  }, []);
  

  
  const handleTextChange = (value: string) => {
    setInput(value);
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); 
    if (!ref.current) {
      return;
    }

    const result = await ref.current.transform(input, {
      loader: 'jsx',
      target: 'es2015',
      });
    setCode(result.code);
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
          onChange={handleTextChange}
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
