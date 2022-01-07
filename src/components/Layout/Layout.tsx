import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import { Props } from '../../types/modalTypes';

export const Layout:React.FC<Props> =({isActive, setActive}) => {
    return (
        <div className='container'>
            <div className={isActive ? 'row onblur':'row'}>
                 <Outlet  />
            </div>
        </div>
    )
}
