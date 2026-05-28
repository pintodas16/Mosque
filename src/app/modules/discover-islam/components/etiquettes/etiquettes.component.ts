import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-etiquettes',
  templateUrl: './etiquettes.component.html',
  styleUrls: ['./etiquettes.component.scss'],
})
export class EtiquettesComponent {
  etiquettes1 = [
    {
      title: "Etiquettes of Azaan, Iqaamat & the Mu'azzin",
      list: [
        'The Muazzin should be a pious, mature Muslim male who is knowledgeable in the laws of Shariah. (Fatawa Hindiya)',
        'The Muazzin should have a loud voice. (Mishkaat)',
        'The Azaan must be called from a high place. (Fatawa Hindiya)',
        'The Muazzin should stand while making Azaan. (BehishtiZewar)',
        'The Muazzin should clog his ears with his fingers Whilst making the call. (Fatawa Hindiya)',
        'One has to pause (at appropriate stages) when calling out the words of the Azaan. (Ibid)',
        'To turn to the right when calling out “HAYYA ALAS SAWLAAH ” and to turn to the left when saying “HAYYA ALAL FALAAH.” (Raddul-Muhtaar)',
        'To face the Qiblah when making the call of Azaan. (Ibid)',
        'The Muazzin should not be in state of uncleanliness (i.e. in need of Wudhu or ghusl). (Sharhut Tanweer)',
        'The wordings of Azaan and Iqaamat should be called in sequence. (Shami)',
        'When making the call of Azaan or Iqaamat the Muazzin should not indulge in any other conversation or talk (even if it should be answering a greeting). (Raddul Muhtaar)',
        'Should the Azaan or Iqaamat be called without the required intention, although such Azaan or Iqaamat is valid, it shall not merit any reward. One must therefore make the intention that one is calling Azaan to gain the pleasure of Allah. (Ibid)',
      ],
    },
    {
      title: 'Etiquettes of Visiting a Mosque',
      list: [
        'The term Mosque is commonly used by non-Muslims to define the Muslim place of worship but its correct name is Masjid and this is the term used by Muslims. It would be preferable for non-Muslims to adapt to this correct terminology.',
        'Before going to visit a Masjid, it is important that visitors give some thought to how they feel. The Muslims being visited would not want visitors to feel unease. Likewise, they would not want to be made ill at ease themselves by criticisms of their way of worship or of their religion.',
        'Questions are always welcomed but negative comparisons with the visitor’s own customs are unlikely to promote a friendly relationship.',
        'Whether visiting alone, or as a group, it is important to follow the guidelines for clothing and behaviour so as not to cause offence. For groups, it is important not to talk loudly, thus disturbing anyone who may be at prayer.',
        'If any group members have special needs, let the place being visited know in advance so that they can prepare to help. For example, although the custom of the Mosque is to sit on the floor, chairs can often be provided for elderly, infirm or disabled visitors.',
      ],
    },
    {
      title: 'Etiquettes of Clothing in a Mosque',
      description:
        'Clothing should be modest for both men and women. For women this means an ankle length skirt or trousers, which should not be tight or transparent, together with a long sleeved and high-necked top. A headscarf is usually essential for women. Shoes are removed before going into the prayer hall and put on the racks provided. Clean and presentable socks, stockings, or tights are therefore a good idea.',
    },
    {
      title: 'Etiquettes of Entering a Mosque',
      description:
        'Where women attend the Mosque, men and women usually enter the prayer hall by separate entrances. Vistors may be greeted by the Arabic greeting “Assalamua’allaikum” which means “peace be upon you.” The answer, if the visitor would like to use it, is “Wa ‘alaikum-as-salam”, which means “peace be upon you too”. Do not offer, or expect, to shake hands with people of the opposite sex. Before entering the prayer hall or prayer room, Muslim men and women perform wudhu or ablutions if they have not already done so earlier or from home. This is not necessary for the non-Muslim visitor who will not be joining in the prayer.',
    },
    {
      title: 'Etiquettes of Entering a Mosque',
      description:
        'Go quietly into the hall, and sit on the floor, avoiding pointing the feet in the direction of the Qibla (the wall with the niche or alcove in it, indicating the direction of Makkah), unless a medical condition makes this the only possible posture. If visiting as a group during a time when prayers are taking place, sit together toward the rear of the hall.',
    },
    {
      title: 'Etiquettes of Observing Worship',
      description:
        'When salat (Arabic) or namaz (Persian/Urdu), one of the five daily prayer is in progress, non-Muslim visitors are welcomed but simply to observe rather than to join in. If arriving at such a time, find a place near the rear wall and sit quietly observing the prayer. No sacred or blessed food will be offered, nor will visitors be expected to make any physical gesture of respect to holy objects (except removing their shoes and acting respectfully in the prayer hall).',
    },
  ];
  etiquettes2 = [
    {
      title: 'Etiquettes of Hosting Guests',
      list: [
        'To respect and be hospitable to the guest.',
        'To arrange for his accommodation.',
        'To arrange for his comfort. Especially to show him the location of the lavatory upon his arrival so that he is not inconvenienced when the need arises.',
        'To present the guest with any time of food that is readily available immediately upon his arrival. Then, if expenses permit, one can make better arrangements later.',
        'One should not go beyond one’s capacity when entertaining the guest.',
        'After placing the meal, note should be taken whether the guest is eating or not. If it is felt that the guest is hesitant, the host should try to remove the hesitancy by urging him to take more food and presenting the food before him.',
        'If more food is required, it should be brought in an another bowl/dish, leaving the original one for the guest to eat from.',
        'Entertaining the guest holds great value in Islam. Even if your guest is one who may have deliberately not hosted you previously, you should none the less leave no turn unturned in serving him too.',
        'As the guest departs, one should see him off at least to the door.',
      ],
    },
    {
      title: 'Etiquettes of Respecting Parents',
      list: [
        'Service to our parents brings blessing to our earnings and in our life.',
        'To look at our parents with love and mercy gains us rewards of an accepted Haj.',
        'Paradise lies under the feet of the mothers.',
        'To look at our parents with anger is disobedience to parents.',
        'Disobedience to parents is among the major sins.',
        'Allah curses the one who displeases their parents.',
        'The pleasure of the parents is the pleasure of Allah and the displeasure of the parents is the displeasure of Allah.',
        'A mother’s duaa for her children is accepted very quickly.',
        'Neither the Fardh nor the Nafl worship is accepted of a person who disobeys his parents.',
        'Do not say harsh words to them.',
        'Obey them in all lawful things, even if they are Non-Muslims.',
        'Make duaa for them.',
        'Whenever we see them greet them.',
        'Take their permission before going anywhere.',
        'Do not call them by their names. Address them with a title of respect and honour.',
        'When entering the private room of parents, seek their permission before entering.',
        'Always be cheerful in their presence.',
        'Speak kindly and tenderly with them.',
        'Do not raise our voices above the voices of our parents.',
        'Do not walk in front of them, walk slightly behind them',
      ],
    },
  ];
  constructor(private translate: TranslateService) {}

  /*   switchLanguage(language: string) {
    this.translate.use(language);
  } */
}
