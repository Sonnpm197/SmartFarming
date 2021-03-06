import {SocialUser} from 'angularx-social-login';
import {Answers, AppUser, Qa, Tag} from '../qa-page/qa.model';

export class UserDetailInfor {
  loading = true;
  date: string;
  numberOfQuestion: number;
  numberOfAnswer: number;
  numberOfComment: number;
  totalQuestionReputation: number;
  totalAnswerReputation: number;
  totalCommentReputation: number;
  totalQuestionViewCount: number;
  constructor(date:string,numberOfQuestion: number,numberOfAnswer:number,numberOfComment:number,totalQuestionReputation:number,
              totalAnswerReputation:number,totalCommentReputation:number,totalQuestionViewCount:number) {
    this.date = date;
    this.numberOfQuestion = numberOfQuestion;
    this.numberOfAnswer = numberOfAnswer;
    this.numberOfComment = numberOfComment;
    this.totalQuestionReputation = totalQuestionReputation;
    this.totalAnswerReputation = totalAnswerReputation;
    this.totalCommentReputation = totalCommentReputation;
    this.totalQuestionViewCount = totalQuestionViewCount;
  }
}

export class QaAllQuestion {
  questionId: number;
  title: string;
  content: string;
  answers: Answers;
  viewCount: number;
  fileDownloadUris: string[];
  tags: Tag[];
  appUser: AppUser;
  upvotedUserIds: number[];
  utilTimestamp: string;
  userName: string;
  upvoteCount: number;

  constructor(title: string, content: string, appUser: AppUser, tags: Tag[], fileDownloadUris: string[], userName: string, upvoteCount: number) {
    this.title = title;
    this.content = content;
    this.appUser = appUser;
    this.tags = tags;
    this.fileDownloadUris = fileDownloadUris;
    this.userName = userName;
    this.upvoteCount = upvoteCount;
  }
}


export class GetTopTagOfUser {
  tagsByPageIndex: Tag;
  numberOfPages: number;
}

export class GetAllTagOfUser {
  numberOfContents: number;
  tagsByPageIndex: Tag;
  numberOfPages: number;
}
export class GetTopQuestionOfUser {
  qa: Qa;
  numberOfPages: number;
}
export class GetAllQuestionOfUser {
  numberOfContents: number;
  qa: QaAllQuestion;
  numberOfPages: number;
}

export class GetUserDetailInfor {
  userDetailInfor: UserDetailInfor;
}

export class GetTotalTagsOfUser {
  total: number;
}

export class ChartData {
  label: string;
  y: number;
}
export class UpLoadFile {
  id: number;
  uploadedFileUrlShownOnUI: string;
  uploadedFileName: string;
  bucketName: string;
}



