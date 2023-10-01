function mostPopularCreator(creators, ids, views) {
  let mostPop = 0;

  let map = creators.reduce((map, creator, i) => {
    let [curId, curViews] = [ids[i], views[i]];

    if (map.has(creator)) {
      let user = map.get(creator);
      user.pop += curViews;
      mostPop = Math.max(user.pop, mostPop);

      if (curViews > user.bestVid[1]) user.bestVid = [curId, curViews];
      else if (curViews == user.bestVid[1] && curId < user.bestVid[0])
        user.bestVid[0] = curId;
    } else {
      map.set(creator, { pop: curViews, bestVid: [curId, curViews] });
      mostPop = Math.max(curViews, mostPop);
    }

    return map;
  }, new Map());

  return [...map.entries()].reduce((res, creator) => {
    if (creator[1].pop == mostPop)
      res.push([creator[0], creator[1].bestVid[0]]);
    return res;
  }, []);
}
