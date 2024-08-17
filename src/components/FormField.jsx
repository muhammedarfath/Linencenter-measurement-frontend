import React from 'react';
import { Input, Textarea, Select, SelectItem } from '@nextui-org/react';

const FormField = ({ label, type = 'text', options = [], children, ...props }) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <label className="font-semibold text-lg">{label}</label>
      {type === 'textarea' ? (
        <Textarea clearable {...props} />
      ) : type === 'select' ? (
        <Select placeholder="Select an option" {...props}>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      ) : (
        <Input clearable {...props} />
      )}
      {children}
    </div>
  );
};

export default FormField;
