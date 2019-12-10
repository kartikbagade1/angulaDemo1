import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   flag =true;
   
  clickEvent(){
    if(this.flag){
        console.log("Event show....");
        document.getElementById('show').innerHTML= 'Show.....';
        document.getElementById('eventButton').innerHTML= 'Hide';
        document.getElementById('eventButton').style.backgroundColor='red' ;
        this.flag=false;
    }
    else{
      console.log("Event hide....");
      document.getElementById('show').innerHTML= '';
      document.getElementById('eventButton').innerHTML= 'Show';
      document.getElementById('eventButton').style.backgroundColor='green' ;
      this.flag=true;
    }
  }  
    

}
