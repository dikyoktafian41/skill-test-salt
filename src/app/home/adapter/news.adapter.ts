import { HttpResponse } from "@angular/common/http";
import { INewsREST } from "../model/news-rest.model";
import { INews, News } from "../model/news.model";
import { Injectable } from "@angular/core";
import { Activity, IActivity } from "../model/activity.model";
import dayjs from 'dayjs'

@Injectable({
  providedIn: 'root'
})
export class NewsAdapter {
  news(news: HttpResponse<INewsREST>): HttpResponse<INews[]> {
    const body = news.body?.articles?.map(x => {
      return new News(
        undefined,
        x.title,
        200,
        x.urlToImage,
        x.publishedAt,
        x.author
      )
    }) ?? []
    return new HttpResponse({body})
  }

  activity(news: HttpResponse<INewsREST>): HttpResponse<IActivity[]> {
    const body = news.body?.articles?.map(x => {
      return new Activity(x.title, 'connected', x.urlToImage ?? 'https://placehold.co/200x500', x.description, dayjs(x.publishedAt).fromNow(true), false)
    }) ?? []
    return new HttpResponse({body})
  }
}