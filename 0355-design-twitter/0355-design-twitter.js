
var Twitter = function () {
    this.followeesByUser = new Map();
    this.tweetsByUser = new Map();
    this.sequence = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.sequence++;
    const userTweets = this.tweetsByUser.has(userId) ? this.tweetsByUser.get(userId) : [];
    userTweets.push({ tweetId, sequence: this.sequence });
    this.tweetsByUser.set(userId, userTweets);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let sourceUserIds = [userId];
    const followeeUsers = this.followeesByUser.has(userId) ? Array.from(this.followeesByUser.get(userId)) : [];
    sourceUserIds.push(...followeeUsers);

    let tweetHeap = new MaxPriorityQueue(({ sequence }) => sequence);
    for (const candidateUserId of sourceUserIds) {
        const userTweets = this.tweetsByUser.get(candidateUserId);

        if (!userTweets) {
            continue;
        }

        const tweetIndex = userTweets.length - 1;
        const { sequence, tweetId } = userTweets[tweetIndex];
        tweetHeap.enqueue({ userId: candidateUserId, sequence, tweetId, tweetIndex });
    }

    let result = [];
    while (tweetHeap.size() > 0 && result.length < 10) {
        const { userId, tweetId, tweetIndex } = tweetHeap.dequeue();

        result.push(tweetId);

        if (tweetIndex > 0) {
            const userTweets = this.tweetsByUser.get(userId);

            if (!userTweets) {
                continue;
            }

            const previousTweetIndex = tweetIndex - 1;
            const { sequence, tweetId } = userTweets[previousTweetIndex];
            tweetHeap.enqueue({ userId, sequence, tweetId, tweetIndex: previousTweetIndex });
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
    const followeeSet = this.followeesByUser.has(followerId) ? this.followeesByUser.get(followerId) : new Set();
    followeeSet.add(followeeId);

    this.followeesByUser.set(followerId, followeeSet);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.followeesByUser.has(followerId)) {
        return;
    }

    this.followeesByUser.get(followerId).delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */