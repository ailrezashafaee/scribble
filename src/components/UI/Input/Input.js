import { TextField } from '@material-ui/core'
import React from 'react';
import { Controller } from 'react-hook-form'
import {
  withStyles,
} from '@material-ui/core/styles';
const CssTextField = withStyles({
  root: {
      '& .MuiInputBase-root': {
        color: 'white',
        borderBottomColor:"white",
        width:"450px"
    },
    '& label':
    {
      color : "white"
    },
    '& label.Mui-focused': {
      color: "var(--pink-color)",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--pink-color)',
      backgroundColor:"var(--pink-color)",
    },
     
  },
})(TextField);
function Input(props) {
    return (
        
            <Controller
                name={props.name}
                control={props.control}
                defaultValue={props.defaultValue} 
                render={({ field: { onChange, value }, fieldState: { error }  }) => (
                    <CssTextField
                      label={props.label}
                      variant={props.variant}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                      placeholder={props.placeholder}
                      type={props.type}
                      style={props.style}
                    />
                  )}  
            />
    )
}

export default Input;
