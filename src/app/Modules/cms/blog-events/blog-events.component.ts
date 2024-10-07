import { Component } from '@angular/core';
import { UtilsService } from '../../../core/services/utils.service';
import { Subject,takeUntil } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-events',
  templateUrl: './blog-events.component.html',
  styleUrl: './blog-events.component.css'
})
export class BlogEventsComponent {
 currentPage:any=1
 destroy$:Subject <boolean> = new Subject<boolean>;
 newsAndEvents:any = [];
 totalNewsAndEventListing:number=0;
 constructor(private utilsService:UtilsService ) {

 }
  ngOnInit(): void {
   // console.log("inside blog companent");
    this.getNewsAndEventListing();
  }

  getNewsAndEventListing() {
   // let apiUrl = `news-events/listing/?page=${this.currentPage}`
   let apiURl = `https://api.github.com/users`;

   this.utilsService.processGetRequest(apiURl).subscribe(
    (response) => {
      this.newsAndEvents = response;
      console.log('API Data:', this.newsAndEvents);
    },
    (error) => {
      console.error('Error fetching data', error);
    },
    () => {
      console.log('Request complete.');
    }
  );
   /* this.utilsService.processGetRequest(apiURl).pipe(takeUntil(this.destroy$)).subscribe((res:any)=>{
      this.newsAndEvents = res?.data || [];    
    }) */
    console.log("Users data " +this.newsAndEvents);
  }

}
