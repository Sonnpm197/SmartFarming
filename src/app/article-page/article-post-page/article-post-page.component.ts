import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ArticlePostService} from './article-post.service';
import {AppUser, Tag} from '../../qa-page/qa.model';
import {AddArticle} from './article-post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleDetailService} from '../article-detail-page/detail.service';
import {Article} from '../article.model';
import {NgxLoadingComponent} from 'ngx-loading';

@Component({
  selector: 'app-article-post-page',
  templateUrl: './article-post-page.component.html',
  styleUrls: ['./article-post-page.component.css'],
  providers: [ArticlePostService, ArticleDetailService]
})
export class ArticlePostPageComponent implements OnInit {
  data1: any;
  data2: any;
  subString: string[];
  tag: Tag;
  tags: Tag[];
  uploadedFiles$: any[];
  appUser$: AppUser;
  selectedValue$ = 'Kỹ thuật trồng';
  article$: Article = new Article();
  arrays = '';
  checkUpdate = false;
  selectedEditValue$: string;
  public model = {
    editorData: '',
    default: ''
  };
  loading = true;

  constructor(private articlePostService: ArticlePostService,
              private route: ActivatedRoute,
              private router: Router,
              private articleDetailService: ArticleDetailService) {
  }

  click() {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = false;
    this.route.queryParams.subscribe(params => {
      this.data1 = params['id'];
      this.data2 = params['userId'];
      this.arrays = params['tag'];
    });
    console.log(`arrays: `, this.arrays);
    this.getArticleDetail(this.data2, this.data1);
  }

  checkAdd(title: string, content: string, array: string) {
    if (title.trim() === '' || content.trim() === '' || array.trim() === '') {
      alert('Tiêu đề bài viết hoặc tag bài viết không được để trống');
      return false;
    } else {
      return true;
    }

  }

  addArticle(title: string, array: string, selected: string) {
    this.tags = [];
    let arrayTagCheck = [];
    this.subString = [];
    this.subString = array.split(',');
    if ( this.subString.length > 5) {
      alert('số tag không được vượt quá 5');
      return;
    }
    for (let i = 0; i < this.subString.length; i++) {
      this.tag = new Tag(this.subString[i], 'dfasdfasdfasdf');
      if (this.tags.length < 5) {
        this.tags.push(this.tag);
      }
      arrayTagCheck.push(this.tag);
    }
    if (arrayTagCheck.length > 5) {
      alert('số tag không được vượt quá 5');
      return;
    } else {
      const a: AddArticle = new AddArticle();
      a.title = title;
      a.content = this.model.editorData;
      a.appUser = new AppUser();
      a.appUser.userId = JSON.parse(localStorage.getItem('currentAppUser')).userId;
      a.tags = this.tags;
      a.uploadedFiles = [];
      a.category = selected;
      if (this.checkAdd(a.title, a.content, array)) {
        console.log(`LOL`);
        this.articlePostService.addArticle(a).subscribe(result => {
          alert('Đăng bài viết thành công');
        });
        window.location.replace(`/article-page/app-trang-chinh`);
      } else {
        return false;
      }
    }
  }

  getArticleDetail(userId: number, articleId: number) {
    this.articleDetailService.getDetail(userId, articleId).subscribe(result => {
      this.article$ = result;
      this.model.default = this.article$.content;
      for (const a of this.article$.tags) {
        this.arrays += ',' + a.name;
      }
      console.log(`==================`, this.arrays);
    });
  }

  updateArticle(title: string, array: string, selected: string) {
    console.log(array);
    this.tags = [];
    this.subString = [];
    this.subString = array.split(',');
    if ( this.subString.length > 5) {
      alert('số tag không được vượt quá 5');
    }
    for (let i = 0; i < this.subString.length; i++) {
      this.tag = new Tag(this.subString[i], 'dfasdfasdfasdf');
      if (this.tags.length < 5) {
        this.tags.push(this.tag);
      }
      if (this.tags.length > 5) {
        alert('Tối đa 5 tag');
      }
    }
    const a: AddArticle = new AddArticle();
    a.title = title;
    a.content = this.model.default;
    a.appUser = new AppUser();
    a.appUser = new AppUser();
    a.appUser.userId = JSON.parse(localStorage.getItem('currentAppUser')).userId;
    a.tags = this.tags;
    a.uploadedFiles = [];
    a.category = selected;
    if (this.checkAdd(a.title, a.content, array)) {
      this.articlePostService.updateArticle(this.data1, a).subscribe(result => {
        alert('Cập nhật bài viết thành công');
      });

      window.location.replace(`/article-detail-page?userId=${this.data2}&id=${this.data1}`);
    } else {
      return false;
    }

  }

  userDetail() {
    this.router.navigate(['/user-detail-page'], {queryParams: {id: JSON.parse(localStorage.getItem(`currentAppUser`)).userId}});
  }

  userDetails() {
    this.router.navigate(['/user-detail-page'], {queryParams: {id: JSON.parse(localStorage.getItem(`currentAppUser`)).userId}});
  }

  isLoggedIn() {
    if (localStorage.getItem('currentAppUser')) {
      return true;
    }
    return false;
  }

  setTagvalue() {
    this.checkUpdate = true;
    this.getArticleDetail(this.data2, this.data1);
    return this.arrays;
  }
}
