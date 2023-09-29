/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
function mostPopularCreator(creators, ids, views) {
  let highestPopularityMap = {};
  const numOfVideos = views.length;
  let highestTotalView = 0;
  let topCreators = new Set();

  for (let i = 0; i < numOfVideos; i++) {
    const creator = creators[i];
    const videoId = ids[i];
    const view = views[i];

    if (!highestPopularityMap[creator]) {
      highestPopularityMap[creator] = {
        totalView: 0,
        videos: new PriorityQueue({
          compare: (v1, v2) => {
            if (v1.view > v2.view) return -1; // do not swap
            if (v1.view < v2.view) return 1; // swap

            return v1.videoId < v2.videoId ? -1 : 1;
          },
        }),
      };
    }
    highestPopularityMap[creator].totalView += view;
    highestPopularityMap[creator].videos.enqueue({ videoId, view });

    if (highestPopularityMap[creator].totalView > highestTotalView) {
      topCreators = new Set();
      topCreators.add(creator);
      highestTotalView = highestPopularityMap[creator].totalView;
    } else if (highestPopularityMap[creator].totalView === highestTotalView) {
      topCreators.add(creator);
    }
  }

  return Array.from(topCreators).map((creator) => {
    return [creator, highestPopularityMap[creator].videos.dequeue().videoId];
  });
}
