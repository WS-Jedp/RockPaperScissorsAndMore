export const selectWinner = (userOption, homeOption) => {

    if ( userOption.weaknesses.includes(homeOption.name) ) {
        return 'loser'  
    } 

    if ( homeOption.weaknesses.includes(userOption.name) ) {
        return 'winner'
    }

    return 'draw'
}