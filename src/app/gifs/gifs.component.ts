import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import  {Subscription} from 'rxjs'
import {Router} from '@angular/router'
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription!: Subscription;

  constructor(private dataService: DataService, 
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.dataService.getTrendingGIFs()
    this.subscription = this.dataService.getGifs()
        .subscribe((response: any) => {
          this.gifs = response;
        });   
 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
