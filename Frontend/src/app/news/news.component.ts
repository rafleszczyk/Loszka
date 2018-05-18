import { Component, OnInit } from '@angular/core';
import { NewsModel } from './../assets/models/NewsModel';
import { NewsService } from './../assets/services/news.service';
import { element } from 'protractor';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _newsService: NewsService) { }
  hiddenVar = false;
  editable = false;
  addable = false;

  newsArray: Array<NewsModel> = new Array<NewsModel>();
  editedNewsObj: NewsModel = new NewsModel();
  tmpNewsObj: NewsModel = null;

  getAllNews() {
    this._newsService.getNews().subscribe(news => {
      news.forEach(el => {
        this.newsArray.push(el);
      });
    });
  }

  editNews(newsObj: NewsModel) {
    this._newsService.editNews(newsObj).subscribe(elem => {
    });

    this.hideShowEdit();
  }

  addNews(newsObj: NewsModel) {
    this._newsService.addNews(newsObj).subscribe(elem => {
    });
    this.newsArray.push(newsObj);
    this.hideShowAdd();
  }
  hideShowEdit() {
    if (!this.editable && !this.addable) {
      this.editable = true;
    } else if (!this.editable && this.addable) {
      this.editable = true;
      this.addable = false;
    } else {
      this.editable = false;

    }
  }

  hideShowAdd() {
    if (!this.editable && !this.addable) {
      this.addable = true;
    } else if (this.editable && !this.addable) {
      this.editable = false;
      this.addable = true;
    } else {
      this.addable = false;

    }
  }
  editRow(editNew: NewsModel) {
    this.editedNewsObj = editNew;
    this.hideShowEdit();
  }

  removeNews(news: NewsModel) {
    this.newsArray = this.newsArray.filter(elem => elem !== news);
    this._newsService.removeNews(news.id).subscribe(del => {
    });
  }
  ngOnInit() {
    this.getAllNews();
  }

}
