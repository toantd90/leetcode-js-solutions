type Tweet = {
  tweetId: number;
  sequence: number;
};

type TweetCandidate = {
    userId: number;
    sequence: number;
    tweetId: number;
    tweetIndex: number;
}

class Twitter {
  followeesByUser: Map<number, Set<number>>;
  tweetsByUser: Map<number, Tweet[]>;
  sequence: number;

  constructor() {
    this.followeesByUser = new Map<number, Set<number>>();
    this.tweetsByUser = new Map<number, Tweet[]>();
    this.sequence = 0;
  }

  postTweet(userId: number, tweetId: number): void {
    let userTweets = this.tweetsByUser.get(userId);

    if (!userTweets) {
      userTweets = [];
    }

    userTweets.push({ tweetId, sequence: ++this.sequence });

    this.tweetsByUser.set(userId, userTweets);
  }

  getNewsFeed(userId: number): number[] {
    let sourceUserIds = [userId];
    const followeeIds = this.followeesByUser.get(userId) || [];
    sourceUserIds.push(...followeeIds);

    let tweetHeap = new MaxPriorityQueue<TweetCandidate>({
        compare: (a: TweetCandidate, b: TweetCandidate) => b.sequence - a.sequence,
    });
    for (const candidateUserId of sourceUserIds) {
      const userTweets = this.tweetsByUser.get(candidateUserId);

      if (!userTweets) {
        continue;
      }

      const tweetIndex = userTweets.length - 1;
      const { sequence, tweetId } = userTweets[tweetIndex];
      tweetHeap.enqueue({
        userId: candidateUserId,
        sequence,
        tweetId,
        tweetIndex,
      });
    }

    let result = [];
    while (tweetHeap.size() > 0 && result.length < 10) {
      const element = tweetHeap.dequeue();
      const { userId, tweetId, tweetIndex } = element;

      result.push(tweetId);

      if (tweetIndex > 0) {
        const userTweets = this.tweetsByUser.get(userId);

        if (!userTweets) {
          continue;
        }

        const previousTweetIndex = tweetIndex - 1;
        const { sequence, tweetId } = userTweets[previousTweetIndex];
        tweetHeap.enqueue({
          userId,
          sequence,
          tweetId,
          tweetIndex: previousTweetIndex,
        });
      }
    }

    return result;
  }

  follow(followerId: number, followeeId: number): void {
    let followeeSet = this.followeesByUser.get(followerId);
    if (!followeeSet) {
      followeeSet = new Set();
    }

    followeeSet.add(followeeId);
    this.followeesByUser.set(followerId, followeeSet);
  }

  unfollow(followerId: number, followeeId: number): void {
    let followeeSet = this.followeesByUser.get(followerId);
    if (!followeeSet) {
      return;
    }

    followeeSet.delete(followeeId);
    this.followeesByUser.set(followerId, followeeSet);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
