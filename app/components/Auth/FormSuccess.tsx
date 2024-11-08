import { CheckCircle2 } from 'lucide-react';
import React from 'react'

const FormSuccess = ({message}:{message?:string}) => {
  if(!message){
    return null;
  }else{
    return (
        <div className='bg-teal-400 text-secondary-foreground p-3 rounded-lg'>
            <CheckCircle2 className='h-4 w-4'/>
            <p>{message}</p>
        </div>
    )
  }
}

export default FormSuccess