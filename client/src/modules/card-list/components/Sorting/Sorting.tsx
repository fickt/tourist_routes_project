import s from './styles.module.scss';
import { useState } from 'react';
import { Select } from 'antd';
import { TSortingProps } from './types';

export const Sorting = ({ options }: TSortingProps) => {

    const [currentSort, setCurrentSort] = useState<string>();

    const handleChange = (value:string) => {
        console.log(value);
        setCurrentSort(value)        
    }

    return (
        <div className={s.sort}>
            <span>Сортировка:</span>
            <Select 
                defaultValue="По умолчанию"
                onChange={handleChange}
                options={options}
                className={s.selector}
            />
        </div>
    )
}
