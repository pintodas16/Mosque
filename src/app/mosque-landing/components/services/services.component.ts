import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = [
    {
      id: 1,
      icon: "assets/img/service/icon/shalat.png",
      service: "Jumu'ah khutba",
      desc: "Join us for the Jumu'ah Khutbah, offering spiritual guidance and addressing contemporary issues."
    },
    {
      id: 2,
      icon: "assets/img/service/icon/quran.png",
      service: "Quran Classes",
      desc: "Enhance your Quran knowledge with lessons on recitation, memorization, and interpretation for all ages and skill levels."
    },
    {
      id: 3,
      icon: "assets/img/service/icon/donation.png",
      service: "Donation",
      desc: "Contribute to our charitable work and community projects, making a positive impact with your generous donations."
    }, {
      id: 4,
      icon: "assets/img/service/icon/event.png",
      service: "Events",
      desc: " Participate in educational workshops, social gatherings, and cultural celebrations to stay connected and engaged."
    },
    {
      id: 5,
      icon: "assets/img/service/icon/islamic.png",
      service: "Islamic Question & Answer",
      desc: "Get clear answers to your questions about Islamic practices, beliefs, and daily life from knowledgeable scholars."
    },
    {
      id: 6,
      icon: "assets/img/service/icon/friday.png",
      service: "Friday Halaqa",
      desc: " Engage in insightful discussions on Islamic teachings and their modern-day applications every Friday."
    }
  ]

}
