import React, { useState } from 'react';
import { Dropdown, DropdownToggle, Level, DropdownProps } from '@patternfly/react-core';
import FilterInput from './FilterInput.js';
import './filter-dropdown.scss';

export interface FilterDropdownProps extends Omit<DropdownProps, 'onSelect'> {
  addFilter: (filterName: string | number, selectedValue: string | number, type: string) => void;
  removeFilter: (filterName: string | number, selectedValue: string | number) => void;
  hideCategories: [];
  filters: object;
  filterCategories: [
    {
      title: string;
      type: string;
      urlParam: string;
      values: [
        {
          label: React.ReactNode;
          value: string | number;
        }
      ];
    }
  ];
  onSelect: ((event?: React.SyntheticEvent<HTMLDivElement, Event> | undefined) => void) | undefined;
  label: string;
  ouiaId: string;
  ouiaSafe: boolean;
}

const FilterDropdown: React.FunctionComponent<FilterDropdownProps> = ({
  hideCategories,
  filters,
  filterCategories,
  onSelect,
  label,
  ouiaId,
  ouiaSafe,
  addFilter,
  removeFilter,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ouiaStateId = 'RHI/FilterDropdown';

  const addRemoveFilters = (selectedValue: string | number, filterName: string | number, type: string, isChecked: boolean) => {
    switch (type) {
      case 'checkbox':
        isChecked ? addFilter(filterName, selectedValue, type) : removeFilter(filterName, selectedValue);
        break;
      case 'radio':
        addFilter(filterName, selectedValue, type);
        break;
    }
  };

  const onToggle = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };
  const ouiaFinalId = ouiaId !== undefined ? ouiaId : ouiaStateId;

  return (
    <Dropdown
      className="ins-c-filter__dropdown"
      {...props}
      onSelect={onSelect}
      toggle={
        <DropdownToggle ouiaId={ouiaFinalId} ouiaSafe={ouiaSafe} onToggle={onToggle}>
          {label}
        </DropdownToggle>
      }
      isOpen={isOpen}
      ouiaId={ouiaFinalId}
      ouiaSafe={ouiaSafe}
    >
      <div className="pf-c-dropdown__menu-item">
        {filterCategories.map(
          (data: { urlParam: string; title: string; type: string; values }, index) =>
            !hideCategories.includes(data.urlParam) && (
              <Level key={`${data.urlParam}${index}`}>
                {data.title}
                {data.values.map((item: { label: string; value: string | number }, key: string | number) => (
                  <FilterInput
                    key={`check${index}${key}`}
                    aria-label={item.label}
                    id={`${data.urlParam}${key}`}
                    label={item.label}
                    addRemoveFilters={addRemoveFilters}
                    param={data.urlParam}
                    type={data.type}
                    value={item.value}
                    filters={filters}
                  />
                ))}
                {index !== filterCategories.length - 1 && <br />}
              </Level>
            )
        )}
      </div>
    </Dropdown>
  );
};

export default FilterDropdown;
