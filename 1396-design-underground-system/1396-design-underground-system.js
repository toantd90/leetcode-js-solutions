
var UndergroundSystem = function() {
    this.traveling = {}
    this.travelTime = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, from, startAt) {
    this.traveling[id] = { from, startAt }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, to, endAt) {
    const { from, startAt } = this.traveling[id]
    const timeTravel = endAt - startAt
    const route = from + '-' + to
    
    this.travelTime[route] = {
        totalTravelTime: (this.travelTime[route]?.totalTravelTime || 0) + timeTravel,
        travelTimes: (this.travelTime[route]?.travelTimes || 0) + 1
    }
    
    this.traveling[id] = {}
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = startStation + '-' + endStation
    const { totalTravelTime, travelTimes } = this.travelTime[route]

    return (totalTravelTime / travelTimes).toFixed(5)
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */