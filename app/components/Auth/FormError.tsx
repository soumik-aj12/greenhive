import { AlertCircle } from 'lucide-react';
import React from 'react'

const FormError = ({message}:{message?:string}) => {
  if(!message){
    return null;
  }else{
    return (
        <div className='bg-destructive text-secondary-foreground p-3 rounded-lg'>
            <AlertCircle className='h-4 w-4'/>
            <p>{message}</p>
        </div>
    )
  }
}

export default FormError