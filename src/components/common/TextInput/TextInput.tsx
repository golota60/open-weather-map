import React from 'react'
import './TextInput.scss';

interface TextInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  className?: string;
}

const TextInput = ({placeholder = '', value, onChange, className = ''}: TextInputProps) => {
  return (
    <input placeholder={placeholder} value={value} onChange={onChange} className={`${className} generic-input`}/>
  )
}

export default TextInput
