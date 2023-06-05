import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard.jsx'

export function App(){

    const formatUserName = (userName) => `@${userName}`

    return(
        <section className='App'>
            <TwiterFollowCard 
                formatUserName = {formatUserName} 
                userName='midudev' 
                name='Miguel Angel Durán' 
            />
            <TwiterFollowCard 
                formatUserName = {formatUserName} 
                userName='midudev' 
                name='Miguel Angel Durán' 
            />
            <TwiterFollowCard 
                formatUserName = {formatUserName} 
                userName='midudev' 
                name='Miguel Angel Durán' 
            />
        
         </section>
    )
} 