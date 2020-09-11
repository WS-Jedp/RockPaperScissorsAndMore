export const defineScore = (value, count) => {
  switch (value) {
    case 'winner':
      return count + 1
      break;

    case 'loser':
      if(count > 0) return count - 1
      else return 0
      break;
  
    default:
      return count
      break;
  }
}