import React, { useState, useEffect } from 'react';
import { Checkbox, Radio } from '@patternfly/react-core';

export interface FilterInputProps {
  addRemoveFilters: (value?: string | number | readonly [], param?: string, type?: string, checked?: boolean) => void;
  className?: string;
  currentPage?: string;
  id: string;
  label: string;
  param?: string;
  value?: string;
  filters?: object;
  type?: string;
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ addRemoveFilters, param = '', filters = {}, type = 'checkbox', value, id, label }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (type !== 'radio') {
      if (param in filters && filters[param] && filters[param].includes(value)) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }
  });
  const handleChange = () => {
    switch (type) {
      case 'checkbox':
        setChecked(!checked);
        break;
    }
    addRemoveFilters(value, param, type, checked);
  };
  if (type !== 'radio') {
    return <Checkbox aria-label={label} id={id} isChecked={checked} label={label} onChange={handleChange} value={value} ouiaId={label} />;
  } else {
    return (
      <Radio
        isChecked={filters[param] === value}
        aria-label={label}
        id={id}
        label={label}
        name={param}
        onChange={handleChange}
        value={value}
        ouiaId={label}
      />
    );
  }
};

export default FilterInput;
