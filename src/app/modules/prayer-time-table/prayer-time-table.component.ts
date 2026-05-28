import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-prayer-time-table',
  templateUrl: './prayer-time-table.component.html',
  styleUrls: ['./prayer-time-table.component.scss']
})
export class PrayerTimeTableComponent {
  prayerTimeTable: any;
  currentDate: Date = new Date();
  formattedDate: any;
  selectedMonth: number = new Date().getMonth() + 1;
  year: number = new Date().getFullYear();
  today = new Date();
  loading: boolean = false; // Add this line

  constructor(private prayerTimeTableService: ApiService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.formattedDate = this.datePipe.transform(this.today, 'dd MMM yyyy');
    this.getPrayerTimeTable();
  }

  months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  getPrayerTimeTable() {
    this.loading = true; // Show the loader
    this.prayerTimeTableService.getPrayerTimeTable(this.year, this.selectedMonth).subscribe(
      data => {
        this.prayerTimeTable = data.data;
        this.loading = false; // Hide the loader
      },
      error => {
        console.error('Error fetching prayer times', error);
        this.loading = false; // Hide the loader in case of error
      }
    );
  }

  convertTime(time: string): string {
    const match = time.match(/\b\d{2}:\d{2}\b/);
    const cleanTime = match ? match[0] : '';

    const split = cleanTime.split(':');
    const hours = Number(split[0]);
    const minutes = split[1];

    const ampm = hours < 12 ? 'am' : 'pm';
    const adjustedHours = hours % 12 || 12;

    return `${adjustedHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  }

  onMonthChange() {
    this.getPrayerTimeTable();
  }

  public captureScreen() {
    const data = document.getElementById('contentToConvert');

    if (data) {
      const sectionHeader = data.querySelector('.section-header');
      if (sectionHeader) {
        sectionHeader.classList.remove('hidden');
      }

      html2canvas(data).then(canvas => {
        const imgWidth = 208; // A4 size width in mm
        const pageHeight = 295; // A4 size height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        let position = 10;

        pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth - 10, imgHeight);

        // Generate the file name dynamically using the selected month and year
        const monthName = this.months[this.selectedMonth - 1].name;
        const fileName = `${monthName}.pdf`;
        pdf.save(fileName);

        // Reapply the hidden class after generating the PDF
        if (sectionHeader) {
          sectionHeader.classList.add('hidden');
        }
      });
    }
  }
}
