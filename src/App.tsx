import * as React from 'react';
import * as esbuild from 'esbuild-wasm'

import { MUIBox, MUIButton, MUITextField } from './utils/MaterialUI/MUI';
import { ButtonStyles,} from './utils/CustomStyles/CustomStyles';


const App: React.FC = () => {
  const ref = React.useRef<any>();
  const [input, setInput] = React.useState('');
  const [code, setCode] = React.useState('');

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

    <>
    <MUIBox
    component="form"
    sx={{
      '& .MuiTextField-root': {
        m: 1,
        width: '45ch'
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    noValidate
    autoComplete="off"
    >
      <h1>ESBuild Compiler</h1>
      <h3>Try something like: </h3>
      <code>{'async ()=>{}'}</code>
      <p>or:</p>
      <code>{'const App =()=>{render(<h1>Hello World</h1>)}'}</code>
      <br/>
      <h4>Let's go:</h4>
        <MUITextField
          id="outlined-multiline-flexible"
          label="Put some Code in the Box"
          multiline
          rows={4}
          variant="outlined"
          color="secondary"
          value={input}
          onChange={handleTextChange}
        />

      <MUIButton
        type="submit"
        onClick={handleClick}
        sx={ButtonStyles.submit}
      >
        Submit
      </MUIButton>
      <pre>{code}</pre>
    </MUIBox>
    </>

  );
}

export default App;
