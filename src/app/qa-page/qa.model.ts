import {SocialUser} from 'angularx-social-login';

export class GetObject {
  qa: Qa;
  numberOfContents: number;
  numberOfPages: number;
}

export class GetObjectTopTag {
  tagsByPageIndex: Tag;
  numbetOfPages: number;
}

export class GetObjectTopUser {
  appUsersByPageIndex: AppUser;
  numberOfPages: number;
}

export class GetObjectTopQa {
  qa: Qa;
  numberOfPages: number;
}

export class GetObjectQaByTag {
  qa: Qa;
  numberOfContents: number;
  numberOfPages: number;
}

export class ReportUser {
  numberOfPages: number;
  numberOfContents: number;
  reportsByPageIndex: ReportsByPageIndex;

  constructor() {

  }
}

export class ReportsByPageIndex {
  reportId: number;
  appUser: AppUser;
  reason: string;
  message: string;
  question: Qa;
  utilTimestamp: string;

  constructor() {
  }
}

export class Qa {
  questionId: number;
  title: string;
  content: string;
  answers: Answers[];
  viewCount: number;
  fileDownloadUris: string[];
  tags: Tag[];
  appUser: AppUser;
  upvotedUserIds: number[];
  utilTimestamp: string;
  userName: string;
  report: ReportsByPageIndex;
  upvoteCount: number;

  constructor(title: string, content: string, appUser: AppUser, tags: Tag[],
              fileDownloadUris: string[], userName: string, upvotedUserIds: number[], upvoteCount: number) {
    this.title = title;
    this.content = content;
    this.appUser = appUser;
    this.tags = tags;
    this.fileDownloadUris = fileDownloadUris;
    this.userName = userName;
    this.upvotedUserIds = upvotedUserIds;
    this.upvoteCount = upvoteCount;
  }
}

export class Answers {
  answerId: number;
  content: string;
  appUser: AppUser;
  utilTimestamp: string;
  comments: string[];
  upvotedUserIds: number[];
  accepted: boolean;

  constructor(
    answerId: number, content: string, appUser: AppUser, utilTimestamp: string, comments: string[], upvotedUserIds: number[], accepted: boolean) {
    this.answerId = answerId;
    this.content = content;
    this.appUser = appUser;
    this.utilTimestamp = utilTimestamp;
    this.comments = comments;
    this.upvotedUserIds = upvotedUserIds;
    this.accepted = accepted;
  }
}

export class AppUser {

  userId: number;
  ipAddress: string;
  anonymous: boolean;
  socialUser: SocialUser;
  // questions: Qa[];
  // answers: Answers[];
  reputation: number;
  viewCount: number;
  cvUrl: string;
  role: string;
  createdTimeByUtilTimeStamp: string;
  lastActiveByUtilTimeStamp: string;

  constructor() {
  }
}

export class Tag {
  tagId: number;
  name: string;
  description: string;
  reputation: number;
  viewCount: number;
  viewCountOneWeekAgo: number;
  increasementOneWeekAgoTillNow: number;

  constructor(name: string, description: string) {
    // this.tagId = tagId;
    this.name = name;
    this.description = description;
    // this.reputation = reputation;
    // this.viewCount = viewCount;
  }
}

export class Tags {
  tagId: number;
  name: string;
  description: string;
  reputation: number;
  viewCount: number;
  viewCountOneWeekAgo: number;
  increasementOneWeekAgoTillNow: number;

}

export class AddAnsObj {
  content: string;
  appUser: AppUser;
  question: Q;

  constructor(content: string, appUser: AppUser, question: Q) {
    this.content = content;
    this.appUser = appUser;
    this.question = question;
  }
}

export class ReportObj {
  appUser: AppUser;
  message: string;
  question: Q;

  constructor(appUser: AppUser, message = 'nội dung không phù hợp', question: Q) {
    this.appUser = appUser;
    this.message = message;
    this.question = question;
  }
}

export class AddupvoteQa {
  userId: number;

  constructor(id: number) {
    this.userId = id;
  }
}

export class AddupvoteAn {
  userId: number;

  constructor(id: number) {
    this.userId = id;
  }
}

export class Q {
  questionId: number;

  constructor(id: number) {
    this.questionId = id;
  }
}

export class TextSearch {
  textSearch: string;

  constructor(textSearch: string) {
    this.textSearch = textSearch;
  }
}

export class SearchUserByTag {
  appUserTagId: number;
  appUser: AppUser;
  tag: Tag;
  reputation: number;
  viewCount: number;
}

export class ResponseReport {
  reportId: number;
  appUser: AppUser;
  reason: string;
  message: string;
  question: Qa;
  utilTimestamp: string;
}

export class UserRelate {
  appUser: AppUser;
  appUserTags: GetUserRelateQa[];
}

export class GetUserRelateQa {
  appUserTagId: number;
  appUser: AppUser;
  tag: Tag;
  reputation: number;
  viewCount: number;

  constructor() {
  };
}

