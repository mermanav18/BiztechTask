import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSharingService } from '../services/data-sharing.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.scss']
})
export class ProfilelistComponent implements OnInit {

  profileList : any;
  name : string = '';
  subscription:any;

  constructor(private httpClient : HttpClient, private dataSharing : DataSharingService,
    private popupService : PopupService) { }

  ngOnInit(): void {
    this.getProfiles();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getProfiles(){
    this.subscription = this.dataSharing.loadUserProfile().subscribe(res=>{
      this.profileList = res;
    });
  }
  
  showImage(file:any){
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(file);
  }

  deleteProfile(id : any){
    this.popupService.showDelPopup().then(response=>{
      if(response.isConfirmed){
        this.profileList.splice(id,1);
        this.dataSharing.changeUserProfile(this.profileList);
      }
    });
  }
}
