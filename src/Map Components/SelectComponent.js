import React from 'react'
import { Select } from 'antd';
import './SelectComponent.css'

const SelectComponent = ({options}) => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };
      
  return (
    <>
        <Select 
            className='layer-select-component'
            showSearch
            clearIcon
            placeholder="Select a layer to edit"
            optionFilterProp="children"
            size="large"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={options}
        />
    </>
  )
}

export default SelectComponent