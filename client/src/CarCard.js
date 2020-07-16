import React from 'react'

export default function CarCard(props) {
    const defaultImage = 'https://lh3.googleusercontent.com/proxy/pBC2-MR-kzg4iZ5V20cIW587JBKPTLsVmJdOn2_r0uGz4HW9-RydVgiBArCoFJNkbErN3vhINBcG6ig0TsicqMSbZeLno75L_7-423rpeZA56mhgSMtzqRWi'
    return (
        <div style={styles.card}>
        <img src={defaultImage} style={{width:'50%'}}/>
        <div style={styles.right}>
            <h1 style={{fontSize:'30px', whiteSpace:'nowrap'}}><strong>{props.model} {props.make}</strong></h1>
            <h3 style={{fontSize:'20px'}}>Unlock your vehicles estimated trade-in value and up-to-date recalls when you add your liscense plate.</h3>
            <button style={styles.buttonStyle}><strong>ADD LISCENSE PLATE</strong></button>
        </div>
    </div>
    )
}

const styles = {
     card: {
        width:'100%',
        display: 'flex',
        border: '2px solid white',
        borderRadius: '10px',
        boxShadow: '1px 1px 6px 5px #eeeeee',
        minHeight: '300px',
        margin:'20px 0px',
        float:'left',
     },
     right: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent:'space-around',
         minWidth: '45%',
         maxWidth:'50%',
         padding: '20px 60px',
         backgroundColor: 'white',
         height:'300px',
     },
     buttonStyle: {
         all: 'unset',
         maxWidth: '70%',
         padding: '10px 25px',
         color: 'white',
         backgroundColor: 'black',
         borderRadius: '5px',
         marginLeft: 'auto',
         marginRight: 'auto',
         whiteSpace: 'nowrap',
     }
}