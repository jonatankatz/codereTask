import React, { useEffect, useState } from 'react'
import styles from "./gameCard.module.scss"

const GameCard = (props) => {


    const {match}= props
    const oddTitle = {
        0:"1",
        1:"x",
        2:"2"
    }

    const handleBetOnResult = (bet)=> {
        const sendedBet = bet ===  match.bet ? false : bet
        props.betOnResult(props.matchIndex,sendedBet)
    }

  return (
    <div  key={match.nodeId} id={match.nodeId} className={styles.gameCardContainer}>
    <div className={styles.gameDate}>
            <div> {new Date(match.startDate).toLocaleDateString()}</div>
    </div>
    <div className={styles.matchRivals}>
        <div>
            {match.games ?match.games[0]?.name :""}
        </div>
        <div> - </div>
        <div>{match.games ?match.games[2]?.name :""} </div>
    </div>
    <div className={styles.gameOdds} >
      

   {match.games.map(odd=>{
return <div  key={oddTitle[odd.sortOrder]} onClick={() => handleBetOnResult(oddTitle[odd.sortOrder])} className={` ${styles.gameOddCard} ${match.bet === oddTitle[odd.sortOrder]? styles.active :""}` }>
                        <div>
                        {oddTitle[odd.sortOrder]}
                        </div>
                        <div>
                        {odd.odd}
                        </div>
                  
                </div>
                })}
    </div>
             
              
    </div>
  )
}

export default GameCard