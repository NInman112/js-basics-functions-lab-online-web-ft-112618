function distanceFromHqInBlocks(location, hq = 42) {
  return Math.abs(location - hq)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(location, destination) {
  return distanceFromHqInBlocks(location, destination) * 264

}

function calculatesFarePrice(start, destination) {
  fare = distanceTravelledInFeet(start, destination)
  let fareCost = 0
    if (fare < 400) {
      return fareCost
    } else if (fare >= 400 && fare <= 2000) {
      return fareCost = .02 * (fare - 400)
    } else if (fare > 2000 && fare <= 2500) {
      return fareCost = 25
    } else {
      return 'cannot travel that far'
    }
}
