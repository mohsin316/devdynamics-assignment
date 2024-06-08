// @ts-ignore

export const calculateDailyAmount = (data) => {
  // @ts-ignore
  const lastWeek = data.dayWiseActivity.filter((item, index) => {
    return index < 6 ? false : true;
  });
  // @ts-ignore

  const dailyData = lastWeek.map((item, index) => {
    if (index == 0) {
      return;
    }
    return {
      date: item.date,
      commits: {
        value: item.items.children[2].count,
        label: item.items.children[2].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[2].count,
          item.items.children[2].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[2].count,
          item.items.children[2].count
        ),
      },
      prOpen: {
        value: item.items.children[0].count,
        label: item.items.children[0].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[0].count,
          item.items.children[0].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[0].count,
          item.items.children[0].count
        ),
      },
      prMerged: {
        value: item.items.children[1].count,
        label: item.items.children[1].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[1].count,
          item.items.children[1].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[1].count,
          item.items.children[1].count
        ),
      },
      prReviewed: {
        value: item.items.children[3].count,
        label: item.items.children[3].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[3].count,
          item.items.children[3].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[3].count,
          item.items.children[3].count
        ),
      },
      prComment: {
        value: item.items.children[4].count,
        label: item.items.children[4].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[4].count,
          item.items.children[4].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[4].count,
          item.items.children[4].count
        ),
      },
      incidentAlerts: {
        value: item.items.children[5].count,
        label: item.items.children[5].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[5].count,
          item.items.children[5].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[5].count,
          item.items.children[5].count
        ),
      },
      incidentResolved: {
        value: item.items.children[6].count,
        label: item.items.children[6].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[6].count,
          item.items.children[6].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[6].count,
          item.items.children[6].count
        ),
      },
      meetings: {
        value: item.items.children[7].count,
        label: item.items.children[7].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[7].count,
          item.items.children[7].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[7].count,
          item.items.children[7].count
        ),
      },
      bugFixes: {
        value: item.items.children[8].count,
        label: item.items.children[8].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[8].count,
          item.items.children[8].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[8].count,
          item.items.children[8].count
        ),
      },
      documentation: {
        value: item.items.children[9].count,
        label: item.items.children[9].label,
        percentage: calcPercentage(
          lastWeek[index - 1].items.children[9].count,
          item.items.children[9].count
        ),
        increase: calcIncrease(
          lastWeek[index - 1].items.children[9].count,
          item.items.children[9].count
        ),
      },
    };
  });
  dailyData.splice(0, 1);

  return dailyData;
};

const calcPercentage = (prev: string, curr: string) => {
  if (parseInt(prev) === 0) return 0;

  const percentage = (parseInt(curr) - parseInt(prev)) / parseInt(prev);
  return percentage;
};

const calcIncrease = (prev: string, curr: string) => {
  if (parseInt(prev) === 0) return null;

  const percentage = (parseInt(curr) - parseInt(prev)) / parseInt(prev);
  return percentage >= 0 ? true : false;
};
