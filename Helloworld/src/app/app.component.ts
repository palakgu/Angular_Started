import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "./assets/BL_logo_square_png.png";
  url = "http://www.bridgelabz.com";

ngOnInit() : void {
  this.title = " Hello From Bridgelabz ! ";
}
onClick($event: any){
  console.log("Save button is Clicked!", $event);
  window.open(this.url , " _Blank");
}
}
