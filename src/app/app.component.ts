import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  darkModeEnable: boolean = false;
  constructor(private elementRef : ElementRef,  private renderer: Renderer2){
  }

  ngOnInit(): void{

    this.updateTheme(false);
  }
  updateTheme(event : any)
  {
    
    this.darkModeEnable = event;
    const body = this.elementRef.nativeElement.ownerDocument.body;
    if(this.darkModeEnable)
    {
        this.renderer.setStyle(body, 'background', '#48484A');
        this.renderer.setStyle(body, 'background', 'linear-gradient(135deg, #48484A, #131515)');
    }
    else{
        this.renderer.setStyle(body, 'background', '#F0EFFD');
        this.renderer.setStyle(body, 'background', 'linear-gradient(135deg, #F0EFFD, #C1F1F8)');
    }
  }


}
