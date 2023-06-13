import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title_method: string = "";
  subtitle_method: string = "";

  @Input()
  method: string = "";

  ngOnInit():any {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.method ==="POST"){
      this.title_method = "Create a New Profile";
      this.subtitle_method = "We use the method: POST";
    }else if(this.method==="GET"){
      this.title_method = "Profiles with effect's images";
      this.subtitle_method = "Api from GraphQL";
    }else if(this.method==="PATCH"){
      this.title_method = "Edit Your Profile";
      this.subtitle_method = "We use the method: Patch";
    }
  }
}
