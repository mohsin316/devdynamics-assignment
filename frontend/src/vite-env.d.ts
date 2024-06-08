/// <reference types="vite/client" />

export type fetchedData = {
  data: {
    AuthorWorklog: {
      activityMeta: {
        label: string;
        fillColor: string;
      }[];
      rows: employeeData[];
    };
  };
};

export type employeeData = {
  name: string;
  age: number;
  role: string;
  email: string;
  totalActivity: {
    name: string;
    value: string;
  }[];
  dayWiseActivity: {
    date: string;
    items: {
      children: {
        count: string;
        label: string;
        fillColor: string;
      }[];
    }[];
  }[];
  activeDays: {
    days: number;
    isBurnOut: boolean;
  };
};

export type dayData = {
  date: string;
  commits: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prOpen: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prMerged: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prReviewed: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prComment: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  incidentAlerts: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  incidentResolved: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  meetings: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  bugFixes: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  documentation: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
}[];
