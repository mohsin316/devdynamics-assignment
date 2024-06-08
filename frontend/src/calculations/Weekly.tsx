export const calculateWeeklyAmount = (data) => {
  let weeks = [];
  let firstDayOfWeek = 0;
  let week = {
    date: "",
    commits: 0,
    prOpen: 0,
    prMerged: 0,
    prReviewed: 0,
    prComment: 0,
    incidentAlerts: 0,
    incidentResolved: 0,
    meetings: 0,
    bugFixes: 0,
    documentation: 0,
  };

  for (let i = 0; i < data.dayWiseActivity.length; i++) {
    week.prOpen += parseInt(data.dayWiseActivity[i].items.children[0].count);
    week.prMerged += parseInt(data.dayWiseActivity[i].items.children[1].count);
    week.commits += parseInt(data.dayWiseActivity[i].items.children[2].count);
    week.prReviewed += parseInt(
      data.dayWiseActivity[i].items.children[3].count
    );
    week.prComment += parseInt(data.dayWiseActivity[i].items.children[4].count);
    week.incidentAlerts += parseInt(
      data.dayWiseActivity[i].items.children[5].count
    );
    week.incidentResolved += parseInt(
      data.dayWiseActivity[i].items.children[6].count
    );
    week.meetings += parseInt(data.dayWiseActivity[i].items.children[7].count);
    week.bugFixes += parseInt(data.dayWiseActivity[i].items.children[8].count);
    week.documentation += parseInt(
      data.dayWiseActivity[i].items.children[9].count
    );

    if ((i + 1) % 7 === 0) {
      weeks.push({ ...week, date: data.dayWiseActivity[firstDayOfWeek].date });
      week.prOpen = 0;
      week.prMerged = 0;
      week.commits = 0;
      week.prReviewed = 0;
      week.prComment = 0;
      week.incidentAlerts = 0;
      week.incidentResolved = 0;
      week.meetings = 0;
      week.bugFixes = 0;
      week.documentation = 0;
      firstDayOfWeek = i + 1;
    }
  }

  const weekData = {
    date: weeks[1].date,
    commits: {
      value: weeks[1].commits,
      label: "Commits",
      percentage: calcPercentage(weeks[0].commits, weeks[1].commits),
      increase: calcIncrease(weeks[0].commits, weeks[1].commits),
    },
    prOpen: {
      value: weeks[1].prOpen,
      label: "PR Open",
      percentage: calcPercentage(weeks[0].prOpen, weeks[1].prOpen),
      increase: calcIncrease(weeks[0].prOpen, weeks[1].prOpen),
    },
    prMerged: {
      value: weeks[1].prMerged,
      label: "PR Merged",
      percentage: calcPercentage(weeks[0].prMerged, weeks[1].prMerged),
      increase: calcIncrease(weeks[0].prMerged, weeks[1].prMerged),
    },
    prReviewed: {
      value: weeks[1].prReviewed,
      label: "PR Reviewed",
      percentage: calcPercentage(weeks[0].prReviewed, weeks[1].prReviewed),
      increase: calcIncrease(weeks[0].prReviewed, weeks[1].prReviewed),
    },
    prComment: {
      value: weeks[1].prComment,
      label: "PR Comments",
      percentage: calcPercentage(weeks[0].prComment, weeks[1].prComment),
      increase: calcIncrease(weeks[0].prComment, weeks[1].prComment),
    },
    incidentAlerts: {
      value: weeks[1].incidentAlerts,
      label: "Incident Alerts",
      percentage: calcPercentage(
        weeks[0].incidentAlerts,
        weeks[1].incidentAlerts
      ),
      increase: calcIncrease(weeks[0].incidentAlerts, weeks[1].incidentAlerts),
    },
    incidentResolved: {
      value: weeks[1].incidentResolved,
      label: "Incident Resolved",
      percentage: calcPercentage(
        weeks[0].incidentResolved,
        weeks[1].incidentResolved
      ),
      increase: calcIncrease(
        weeks[0].incidentResolved,
        weeks[1].incidentResolved
      ),
    },
    meetings: {
      value: weeks[1].meetings,
      label: "meetings",
      percentage: calcPercentage(weeks[0].meetings, weeks[1].meetings),
      increase: calcIncrease(weeks[0].meetings, weeks[1].meetings),
    },
    bugFixes: {
      value: weeks[1].bugFixes,
      label: "Bug Fixes",
      percentage: calcPercentage(weeks[0].bugFixes, weeks[1].bugFixes),
      increase: calcIncrease(weeks[0].bugFixes, weeks[1].bugFixes),
    },
    documentation: {
      value: weeks[1].documentation,
      label: "documentation",
      percentage: calcPercentage(
        weeks[0].documentation,
        weeks[1].documentation
      ),
      increase: calcIncrease(weeks[0].documentation, weeks[1].documentation),
    },
  };

  return [weekData];
};

const calcPercentage = (prev: number, curr: number) => {
  if (prev === 0) return 0;

  const percentage = (curr - prev) / prev;
  return percentage;
};

const calcIncrease = (prev: number, curr: number) => {
  if (prev === 0) return null;

  const percentage = (curr - prev) / prev;
  return percentage >= 0 ? true : false;
};
