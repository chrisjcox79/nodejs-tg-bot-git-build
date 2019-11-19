export interface IndexConfig {
  telegram: {
    accessToken: string;
    chatIds: number[];
    userIds: string[];
    list: GitInfo[];
  };
}

export interface GitInfo {
  name: string;
  url: string;
  command: string;
}
