import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './shared/services/loader/loader.service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finalproject';
  isLoading: boolean = false

  constructor(loaderServ: LoaderService,private cdRef: ChangeDetectorRef){
    loaderServ.isLoading.subscribe(val=>{
      this.isLoading = val
    });
  }

  ngAfterViewInit() {
    // If you modify any bound values here, you need to explicitly detect changes
    this.cdRef.detectChanges();
  }
}
