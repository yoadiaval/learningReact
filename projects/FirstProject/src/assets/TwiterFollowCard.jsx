//import hook para poder guardar una variable que diga si estoy o no siguiendo a alguien
import {useState} from 'react'

export function TwiterFollowCard({formatUserName, userName = 'unknow', name}){

    //useState devuelve dos valores, el valor del estado y una funcion que va a permitir cambiar ese estado, le paso coo parámetro estado inicial
    const [isFollowing, setFollowing] = useState(false)

    const text = isFollowing ? 'siguiendo' : 'segir' 
    const buttonClassName = isFollowing 
    ? 'twiter-followCard-button is-following'
    : 'twiter-followCard-button'


    const handleClick = () =>{
        setFollowing(!isFollowing)
    }

    return(
       
        <article className='twiter-followCard' >
            <header className='twiter-followCard-header'>
                <img 
                className='twiter-followCard-avatar'
                src={`https://unavatar.io/${userName}`} alt="avatar" /> 
                <div className='twiter-followCard-info'>
                    <strong>{name}</strong>
                    <span className='twiter-followCard-infoUseName'>{formatUserName(userName)}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
} 