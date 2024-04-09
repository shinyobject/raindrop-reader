const groupByTags = (items) => {
  const byTags = {};

  items.forEach((item) => {
    if (!item.isChanged) return;
    item.tags.forEach((tag) => {
      if (!byTags[tag]) {
        byTags[tag] = [];
      }
      byTags[tag].push(item._id);
    });
  });

  return byTags;
};

export { groupByTags };
