
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
 @Component({
   selector: 'app-root',
    templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
   standalone: true,
  imports: [FormsModule] 
 })

 export class AppComponent {
  title = 'Helloworld';
  imgUrl = "./assets/BL_logo_square_png.png";
  url = "http://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

ngOnInit() : void {
  this.title = " Hello From Bridgelabz ! ";
}
onClick($event: any){
  console.log("Save button is Clicked!", $event);
  window.open(this.url , " _Blank");
}
onInput($event: any){
  console.log(" Change Event Occured! ",$event.data );
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError = "";
    return ;
  }
  this.nameError = "Name is Incorrect!";
}

}

