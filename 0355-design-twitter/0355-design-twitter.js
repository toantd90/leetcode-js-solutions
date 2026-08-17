
var Twitter = function () {
    this.following = new Map();
    this.tweets = new Map();
    this.sequence = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.sequence++;
    const currentTweets = this.tweets.has(userId) ? this.tweets.get(userId) : [];
    currentTweets.push({ tweetId, sequence: this.sequence });
    this.tweets.set(userId, currentTweets);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let relevantUsers = [userId];
    const followeeUsers = this.following.has(userId) ? Array.from(this.following.get(userId)) : [];
    relevantUsers.push(...followeeUsers);

    let tweetsQueue = new MaxPriorityQueue(({ sequence }) => sequence);
    for (const candidateUserId of relevantUsers) {
        const userTweets = this.tweets.get(candidateUserId);

        if (!userTweets) {
            continue;
        }

        const mostRecentTweetIndexFromUser = userTweets.length - 1;
        const { sequence, tweetId } = userTweets[mostRecentTweetIndexFromUser];
        tweetsQueue.enqueue({ userId: candidateUserId, sequence, tweetId, mostRecentTweetIndexFromUser });
    }

    let result = [];
    while (tweetsQueue.size() > 0 && result.length < 10) {
        const { userId, tweetId, mostRecentTweetIndexFromUser } = tweetsQueue.dequeue();

        result.push(tweetId);

        if (mostRecentTweetIndexFromUser > 0) {
            const userTweets = this.tweets.get(userId);

            if (!userTweets) {
                continue;
            }

            const nextMostRecentTweetIndexFromUser = mostRecentTweetIndexFromUser - 1;
            const { sequence, tweetId } = userTweets[nextMostRecentTweetIndexFromUser];
            tweetsQueue.enqueue({ userId, sequence, tweetId, mostRecentTweetIndexFromUser: nextMostRecentTweetIndexFromUser });
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
    const followeeSet = this.following.has(followerId) ? this.following.get(followerId) : new Set();
    followeeSet.add(followeeId);

    this.following.set(followerId, followeeSet);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    const followeeSet = this.following.has(followerId) ? this.following.get(followerId) : new Set();
    followeeSet.delete(followeeId);

    this.following.set(followerId, followeeSet);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */