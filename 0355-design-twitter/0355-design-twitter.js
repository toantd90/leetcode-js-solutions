
var Twitter = function () {
    this.following = new Map();
    this.tweets = new Map();
    this.internalTweetId = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.internalTweetId++;
    if (!this.tweets[userId]) {
        this.tweets[userId] = [];
    }

    this.tweets[userId].push({ tweetId, internalTweetId: this.internalTweetId });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let relevantUsers = [userId];
    const followeeUsers = Array.from(this.following[userId] || new Set());
    relevantUsers.push(...followeeUsers);

    let tweetsQueue = new MaxPriorityQueue(({ internalTweetId }) => internalTweetId);
    for (const userId of relevantUsers) {
        const userTweets = this.tweets[userId];

        if (!userTweets) {
            continue;
        }

        const mostRecentTweetIndexFromUser = userTweets.length - 1;
        const { internalTweetId, tweetId } = userTweets[mostRecentTweetIndexFromUser];
        tweetsQueue.enqueue({ userId, internalTweetId, tweetId, mostRecentTweetIndexFromUser });
    }

    let result = [];
    while (tweetsQueue.size() > 0 && result.length < 10) {
        const { userId, tweetId, mostRecentTweetIndexFromUser } = tweetsQueue.dequeue();

        result.push(tweetId);

        if (mostRecentTweetIndexFromUser > 0) {
            const userTweets = this.tweets[userId];

            if (!userTweets) {
                continue;
            }

            const nextMostRecentTweetIndexFromUser = mostRecentTweetIndexFromUser - 1;
            const { internalTweetId, tweetId } = userTweets[nextMostRecentTweetIndexFromUser];
            tweetsQueue.enqueue({ userId, internalTweetId, tweetId, mostRecentTweetIndexFromUser: nextMostRecentTweetIndexFromUser });
        }
    }

    return result;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.following[followerId]) {
        this.following[followerId] = new Set();
    }

    this.following[followerId].add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.following[followerId]) {
        return;
    }

    this.following[followerId].delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */