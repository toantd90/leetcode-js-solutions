var TweetCounts = function () {
  this.tweetMap = {};
};

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
  if (!this.tweetMap[tweetName]) {
    this.tweetMap[tweetName] = {
      isSorted: true,
      recordTimes: [],
    };
  }

  this.tweetMap[tweetName].recordTimes.push(time);

  if (this.tweetMap[tweetName].recordTimes.length > 1) {
    this.tweetMap[tweetName].isSorted = false;
  }
};

TweetCounts.prototype.findStartIndex = function (timeChunks, startTime) {
  let l = 0, r = timeChunks.length
  
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    
    if (timeChunks[mid] < startTime) {
      l = mid + 1
    } else if (timeChunks[mid] > startTime) {
      r = mid - 1
    } else {
      if (mid == 0 || timeChunks[mid - 1] < startTime) {
        return mid
      } else {
        r = mid - 1
      }
    }
  }
  
  return l
}

TweetCounts.prototype.findEndIndex = function (timeChunks, startIndex, endTime) {
  let l = startIndex, r = timeChunks.length
  
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    
    if (timeChunks[mid] < endTime) {
      l = mid + 1
    } else if (timeChunks[mid] > endTime) {
      r = mid - 1
    } else {
      if (mid == timeChunks.length - 1 || timeChunks[mid + 1] > endTime) {
        return mid
      } else {
        r = mid - 1
      }
    }
  }
  
  return r
}


/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (
  freq,
  tweetName,
  startTime,
  endTime
) {
  let timeChunks = [];

  const SECOND_IN = {
    'minute': 60,
    'hour': 3600,
    'day': 86400,
  }

  if (
    endTime - startTime < SECOND_IN[freq]
  ) {
    timeChunks = [[startTime, endTime]];
  } else {
    for (let i = startTime; i <= endTime; i += SECOND_IN[freq]) {
      timeChunks.push([i, i + SECOND_IN[freq] - 1 < endTime ? i + SECOND_IN[freq] - 1 : endTime])
    }
  }

  if (!this.tweetMap[tweetName].isSorted) {
    const sortedRecordTimes = this.tweetMap[tweetName].recordTimes.sort((t1, t2) => t1 - t2)
    this.tweetMap[tweetName].recordTimes = sortedRecordTimes
    this.tweetMap[tweetName].isSorted = true
  }
  
  let nextStartIndex
  let freqCount = []

  for (let [startTime, endTime] of timeChunks) {
    let startIndex, endIndex
    if (!nextStartIndex) {
      startIndex = this.findStartIndex(this.tweetMap[tweetName].recordTimes, startTime)
    } else {
      startIndex = nextStartIndex
    }
    
    endIndex = this.findEndIndex(this.tweetMap[tweetName].recordTimes, startIndex, endTime)
    
    freqCount.push(endIndex - startIndex + 1)
      
    nextStartIndex = endIndex + 1
  }
  
  
  return freqCount
};

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
