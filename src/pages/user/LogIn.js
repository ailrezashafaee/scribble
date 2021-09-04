import React from 'react'
import { useForm } from "react-hook-form";
import Input from '../../components/UI/Input/Input';
import { Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import './LogIn.css';
import * as yup from "yup";
const schema = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().required()
});
const LogIn=()=> {
    const {  handleSubmit, control } = useForm({
        resolver: yupResolver(schema)
      });
    return (
        <div className="login">
            <form onSubmit={handleSubmit(()=>{})}> 
                <div className="logcontrol">
                    <Input name="email"
                        control={control}
                        label="email"/>  
                </div>
                <div className="logcontrol">     
                    <Input
                        name="password"
                        control={control}
                        label="password"
                        type="password"/>
                </div>
                <Button type="submit" variant="contained" disableElevation>Submit</Button>
            </form>
        </div>
    )
}

export default LogIn
