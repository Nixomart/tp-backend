import { Component } from '@angular/core';
import { Viewer } from 'src/app/models/viewer/viewer';
import { ViewerService } from 'src/app/services/viewer/viewer.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent {
  newViewer: Viewer = new Viewer();
  viewers: Array<Viewer>=[]
  view: Viewer = new Viewer()
  constructor(private vierwerService: ViewerService) {
    this.getVie()
  }

  addViewerr = (viewer: Viewer) => {
    try {
     this.vierwerService.addViewer(viewer.name, viewer.surname, viewer.dni, viewer.email).subscribe((result)=>{console.log(result);
     })
     this.getVie()
     this.newViewer = new Viewer()
    } catch (error) {
      console.log(error);
      
    }
  };
  getVie = () =>{
    try {
      this.vierwerService.getViewers().subscribe((result)=>{
        this.viewers = []
        result.forEach((element:any) => {
          console.log(element);
          this.view = new Viewer()
          this.view.id = element._id
          this.view.name = element.name
          this.view.surname = element.surname
          this.view.dni = element.dni
          this.view.email = element.email
          this.viewers.push(this.view)
        });
      })
    } catch (error) {
      
    }
  }
}
