import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ConfigService } from '../common/config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  lat: any;
  lng: any;

  constructor(private http: HttpClient, private config: ConfigService) { }

  // Get prayer time with lat and lng

  // getPrayerTime(): Observable<any> {
  //   return new Observable(observer => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           observer.next({ lat: position.coords.latitude, lng: position.coords.longitude });
  //           observer.complete();
  //         },
  //         (error) => observer.error(error)
  //       );
  //     } else {
  //       observer.error('Geolocation not available');
  //     }
  //   }).pipe(
  //     switchMap((coords: any) => {
  //       const today = new Date();
  //       const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  //       const prayerTimeApi = `${this.config.baseDomain}/timings/${formattedDate}?latitude=${coords.lat}&longitude=${coords.lng}&method=2`;

  //       console.log(prayerTimeApi);

  //       return this.http.get<any[]>(prayerTimeApi).pipe(
  //         map(res => res)
  //       );
  //     })
  //   );
  // }


  // Prayer time city
  public getPrayerTime(): Observable<any> {
    const prayerTimeApi = `${this.config.baseDomain}/timingsByCity?city=Sylhet&country=Bangladesh&method=8`;
    console.log(prayerTimeApi)
    return this.http.get<any[]>(prayerTimeApi).pipe(
      map(res => res)
    )
  }

  public getPrayerTimeTable(year: number, month: number): Observable<any> {
    const prayerTimeTableApi = `${this.config.baseDomain}/calendarByAddress/${year}/${month}?address=sylhet&bangladesh`;
    console.log(prayerTimeTableApi)
    return this.http.get<any[]>(prayerTimeTableApi).pipe(
      map(res => res)
    )
  }

}
// const url = `${this.baseUrl}/${year}/${month}?address=${address}`;
// return this.http.get(url);