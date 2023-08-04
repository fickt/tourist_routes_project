import s from './styles.module.scss'
import { ReactNode } from 'react';
import NotFoundIcon from './images/notfound-icon.svg'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

type TNotFoundProps = {
  children?: ReactNode, 
  title: string, 
  buttonText?: string,   
}

const NotFound = ({children, title, buttonText = 'На главную'}: TNotFoundProps) => {
  return (
    <div className={s.notfound}>      
      <NotFoundIcon className={s.image} aria-hidden='true'/>
      <h1 className={s.title}>{title}</h1>
      {children && children}            
      <Link to='/'><Button type='link'>{buttonText}</Button></Link>
    </div>
  )
}

export default NotFound;