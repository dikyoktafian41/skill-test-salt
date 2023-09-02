import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activities = [
    {
      title: "John Stellar",
      status: "connected",
      image: "https://placehold.co/200x500",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit!",
      updated: "2 Seconds ago",
      selected: false
    },
    {
      title: "John Stellar",
      status: "connected",
      image: "https://placehold.co/200x500",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit!",
      updated: "2 Seconds ago",
      selected: false
    },
    {
      title: "John Stellar",
      status: "connected",
      image: "https://placehold.co/200x500",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit!",
      updated: "2 Seconds ago",
      selected: false
    },
    {
      title: "John Stellar",
      status: "connected",
      image: "https://placehold.co/200x500",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit!",
      updated: "2 Seconds ago",
      selected: false
    },
    {
      title: "John Stellar",
      status: "connected",
      image: "https://placehold.co/200x500",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit!",
      updated: "2 Seconds ago",
      selected: false
    },
    {
      title: "John Stellar",
      status: "connected",
      image: "https://placehold.co/200x500",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, odit!",
      updated: "2 Seconds ago",
      selected: false
    },
  ]
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
}
