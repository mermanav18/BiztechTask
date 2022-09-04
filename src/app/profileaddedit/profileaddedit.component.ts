import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-profileaddedit',
  templateUrl: './profileaddedit.component.html',
  styleUrls: ['./profileaddedit.component.scss']
})
export class ProfileaddeditComponent implements OnInit {
  userId = this.activatedRoute.snapshot.queryParamMap.get("id");

  profileForm: FormGroup = this.formBuilder.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    profileIcon: new FormControl('', Validators.required)
  });

  profileList: any = [];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,
    private dataSharing: DataSharingService, private activatedRoute: ActivatedRoute,
    private popupService: PopupService) { }

  ngOnInit(): void {
    this.dataSharing.loadUserProfile().subscribe(res => {
      this.profileList = res;
      if (this.userId) {
        this.profileForm.patchValue({ ...this.profileList[Number(this.userId)], profileIcon: "" });
      }
    });
  }

  get form() {
    return this.profileForm.controls;
  }

  addUpdateProfile(): any {
    if (this.profileForm.invalid) {
      for (const control of Object.keys(this.profileForm.controls)) {
        this.profileForm.controls[control].markAsTouched();
      }
      return false;
    }
    const body = { ...this.profileForm.value, profileIcon: "/assets/user-profile-icon.png" };
    this.profileList.unshift(body);
    this.dataSharing.changeUserProfile(this.profileList);
    this.popupService.showToast("success", "User Added successfully !");
  }

  editProfile(): any {
    if (this.profileForm.invalid) {
      for (const control of Object.keys(this.profileForm.controls)) {
        this.profileForm.controls[control].markAsTouched();
      }
      return false;
    }
    this.profileList[Number(this.userId)] = { ...this.profileForm.value, profileIcon: this.profileList[Number(this.userId)].profileIcon };
    this.dataSharing.changeUserProfile(this.profileList);
    this.popupService.showToast("success", "Profiel Updated  !")

  }

  getFileDetails(e: any) {
    this.profileForm.value.profileIcon = e.target.files[0];
  }

}
