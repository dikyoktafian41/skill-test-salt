import { Component, OnInit } from '@angular/core';
import { INews } from '../model/news.model';
import { HomeServiceService } from '../service/home-service.service';
import { IActivity } from '../model/activity.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  videos: INews[] = []
  activities: IActivity[] = []
  channels = [
    {
      label: 'Google',
      status: false
    },
    {
      label: 'Dribble',
      status: false
    },
    {
      label: 'Microsoft',
      status: false
    },
    {
      label: 'Google',
      status: false
    },
    {
      label: 'Dribble',
      status: false
    },
    {
      label: 'Microsoft',
      status: false
    },
    {
      label: 'Microsoft',
      status: false
    },
    {
      label: 'Google',
      status: false
    },
    {
      label: 'Dribble',
      status: false
    },
    {
      label: 'Microsoft',
      status: false
    },
  ]

  constructor(private homeServiceService: HomeServiceService) {
  }

  ngOnInit(): void {
    this.loadPage()
  }

  private loadPage() {
    this.loadNews();
    this.loadActivity();
  }

  private loadNews() {
    const query = {
      country: 'id',
      pageSize: 5
    }

    this.homeServiceService.getNews(query).subscribe(res => {
      this.videos = res.body ?? []
    })
  }
  private loadActivity() {
    const query = {
      country: 'id',
      pageSize: 6
    }
    this.homeServiceService.getActivity(query).subscribe(res => {
      this.activities = res.body ?? []
    })
  }
}
