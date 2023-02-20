import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLibService } from 'projects/shared-lib/src/lib/shared-lib.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFlyoutMenu: boolean = false;
  showLanguageMenu: boolean = false;
  showSubmenu: boolean = false;
  showAppLauncher: boolean = false;
  tab : any = 'tab1';
  togglemenu: boolean = false;
  status:boolean = false;
  constructor(public router:Router, private listenerService: SharedLibService) { 
    //  listenerService.registerListener("shell","initialize",function(value: any,obj: object) {
    //     debugger
    //     console.log(value +""+ obj);
    //   });
    //   listenerService.callListener("shell","initialize",{});
  }

  ngOnInit(): void {
  }
  showUserMenuOnClick(){
    this.showFlyoutMenu = !this.showFlyoutMenu; 
    if(this.showLanguageMenu == true || this.showAppLauncher == true){
      this.showLanguageMenu = false
      this.showAppLauncher = false
    } 
  }
  showLanguaesOnClick(){
    this.showLanguageMenu = !this.showLanguageMenu; 
    if(this.showFlyoutMenu == true || this.showAppLauncher == true){
      this.showFlyoutMenu = false
      this.showAppLauncher = false
    }  
  }
  showAppLauncherOnClick(){
    this.showAppLauncher = !this.showAppLauncher;
    if(this.showFlyoutMenu == true || this.showLanguageMenu == true){
      this.showFlyoutMenu = false
      this.showLanguageMenu = false
    } 

  }
expandMenu(){
  this.showSubmenu = !this.showSubmenu
}
toggleSubmenu(togglemenu: boolean){
  this.togglemenu = !this.togglemenu
}
onClick(check: number){
  //    console.log(check);
      if(check==1){
        this.tab = 'tab1';
      }else if(check==2){
        this.tab = 'tab2';
      }else if(check==3){
        this.tab = 'tab3';
      }else if(check==4){
        this.tab = 'tab4';
      }else if(check==5){
        this.tab = 'tab5';
      }else if(check==6){
        this.tab = 'tab6';
        this.showSubmenu = !this.showSubmenu
      }
      else{
        this.tab = 'tab7';
      }    
    
  }
}
