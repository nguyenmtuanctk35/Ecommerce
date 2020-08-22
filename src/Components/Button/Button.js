import React from 'react'
import './Button.css'

const button=(props)=>{
    const styles=['authButton','siteButton']
    return (
        <button type="submit"  className={styles.join(' ')}>{props.auth}</button>
    )
}

export default button