import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
 
  //  fayoutube = faYoutube
  constructor(private userservise : UserService ) { }

  ngOnInit(): void { 
    
  }
  //  this.dashbordata = this.userservise.dash 
}
