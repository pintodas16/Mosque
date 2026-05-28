import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ApiService } from 'src/app/service/api/api.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-prayer-time',
  templateUrl: './prayer-time.component.html',
  styleUrls: ['./prayer-time.component.scss']
})
export class PrayerTimeComponent {
  orderedTimings: any[] = [];
  orderedTimingsTop: any[] = [];
  prayerTime: any;
  isLoading: boolean = true;
  currentPrayer: any;
  currentDate: Date = new Date();
  private subs = new SubSink();
  private timerSubscription: any = Subscription;

  nextPrayer: any;
  remainingTime: any;

  constructor(
    private prayerTimeService: ApiService,
  ) { }


  ngOnInit(): void {
    this.getPrayerTime();
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  getPrayerTime(): void {
    this.subs.add(this.prayerTimeService.getPrayerTime()
      .subscribe((res: any) => {
        if (res.code === 200) {
          this.prayerTime = res.data;
          this.isLoading = false;

          this.orderedTimingsTop = [
            { key: 'Sunrise', value: this.prayerTime.timings.Sunrise },
            { key: 'Sunset', value: this.prayerTime.timings.Sunset },
          ]

          this.orderedTimings = [
            { key: 'Fajr', value: this.prayerTime.timings.Fajr },
            { key: 'Sunrise', value: this.prayerTime.timings.Sunrise },
            { key: this.isJumma() ? `Juma'a` : 'Dhuhr', value: this.prayerTime?.timings?.Dhuhr },
            { key: 'Asr', value: this.prayerTime.timings.Asr },
            { key: 'Maghrib', value: this.prayerTime.timings.Maghrib },
            { key: 'Isha', value: this.prayerTime.timings.Isha },
            { key: 'Jummah', value: "13:30" },

          ];

          this.updateCurrentPrayer();
        }
      }));
  }

  isJumma() {
    const today = new Date();
    return today.getDay() === 5;
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateCurrentPrayer();
    });
  }

  updateCurrentPrayer() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    let currentPrayer = null;
    let nextPrayer = null;
    let remainingTime = null;

    for (let i = 0; i < this.orderedTimings.length; i++) {
      const prayerTime = this.orderedTimings[i].value.split(':');
      const prayerMinutes = parseInt(prayerTime[0]) * 60 + parseInt(prayerTime[1]);

      if (currentTime < prayerMinutes) {
        nextPrayer = this.orderedTimings[i];
        break;
      }
      currentPrayer = this.orderedTimings[i];
    }

    if (currentPrayer && nextPrayer) {
      const nextPrayerTime = nextPrayer.value.split(':');
      const nextPrayerMinutes = parseInt(nextPrayerTime[0]) * 60 + parseInt(nextPrayerTime[1]);
      const currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      const nextPrayerTimeInSeconds = parseInt(nextPrayerTime[0]) * 3600 + parseInt(nextPrayerTime[1]) * 60;

      remainingTime = nextPrayerTimeInSeconds - currentTimeInSeconds;

      currentPrayer.remainingTime = remainingTime;
    }

    this.currentPrayer = currentPrayer;
    this.nextPrayer = nextPrayer;
  }

  convertTime(time: string): string {
    const split = time.split(':');
    const hours = Number(split[0]);
    const minutes = split[1];

    const ampm = hours < 12 ? 'AM' : 'PM';
    const adjustedHours = hours % 12 || 12;

    return `${adjustedHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  }

  formatRemainingTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  }


}
