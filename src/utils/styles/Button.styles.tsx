type BlueType = {
  500: string;
  600: string;
  700: string;
};

const blue: BlueType = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

export const ButtonStyles: Record<string, any> = {
  
  submit: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    backgroundColor: blue[500],
    padding: '12px 24px',
    borderRadius: '12px',
    color: 'white',
    transition: 'all 150ms ease',
    cursor: 'pointer',
    border: 'none',
    '&:hover': {
      backgroundColor: blue[600],
    },
    '&.active': {
      backgroundColor: blue[700],
    },
    '&.focusVisible': {
      boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5)',
      outline: 'none',
    },
    '&.disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

};
