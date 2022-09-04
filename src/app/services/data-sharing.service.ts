import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  profileList = [
    {
      firstName: 'Manav',
      lastName: 'Mer',
      gender: 'Male',
      emailId: 'manav@gmail.com',
      dob: '2021-04-19',
      profileIcon: '/assets/user-profile-icon.png',
    },
    {
      firstName: 'Prerak',
      lastName: 'Mer',
      gender: 'Male',
      emailId: 'prerak@gmail.com',
      dob: '2022-03-18',
      profileIcon: '/assets/user-profile-icon.png',
    },
    {
      firstName: 'Nik',
      lastName: 'Gupta',
      gender: 'Male',
      emailId: 'nik@gmail.com',
      dob: '2020-05-9',
      profileIcon: '/assets/user-profile-icon.png',
    },
    {
      firstName: 'Kaushal',
      lastName: 'Bhatt',
      gender: 'Male',
      emailId: 'kaushal@gmail.com',
      dob: '2021-01-19',
      profileIcon: '/assets/user-profile-icon.png',
    },
    {
      firstName: 'taqi',
      lastName: 'jigar',
      gender: 'Male',
      emailId: 'taqi@gmail.com',
      dob: '2018-07-39',
      profileIcon: '/assets/user-profile-icon.png',
    }
  ];

  private _profileDataSubject: BehaviorSubject<any> = new BehaviorSubject(this.profileList);

  constructor() { }

  loadUserProfile(): Observable<any> {
    return this._profileDataSubject.asObservable();
  }

  changeUserProfile(data: any) {
    this._profileDataSubject.next(data);
  }
}
