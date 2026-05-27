import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { auth } from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  name: string = 'Name';
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.getAuth().subscribe( (auth) => {
      if(auth){
        this.isLoggedIn = true;
        this.name = auth.displayName;

      }
      else{
        this.isLoggedIn =  false;
      }
    })
  }
  OnLogoutCLick() {
    pendo.track('user_logged_out', {
      logoutSource: 'navbar'
    });
    this.isLoggedIn = false;
    this.authService.logout();

  }

}
