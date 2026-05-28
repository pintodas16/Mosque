import { Component } from '@angular/core';

@Component({
  selector: 'app-duas',
  templateUrl: './duas.component.html',
  styleUrls: ['./duas.component.scss'],
})
export class DuasComponent {
  duas1 = [
    {
      title: 'When Waking Up',
      dua: 'اَلْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ',
      transliteration:
        'Alhamdu lillahil-lathee a’afanee fee jasadee waradda a’alayya roohee wa-athina lee bithikrih.',
      translation:
        'All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.',
      reference: 'At-Tirmidhi 5:473',
    },
    {
      title: 'Before Going To Sleep',
      dua: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
      transliteration: 'Allahumma qinee a’athabaka yawma taba’athu a’ibadak.',
      translation:
        'O Allah, protect me from Your punishment on the day Your servants are resurrected',
      reference: 'Abu Dawud 4:311',
    },
    {
      title: 'After finishing a meal',
      dua: ' الْحَمْدُ لِلَّهِ الَّذِى اطْعَمَنَا وَسَقَانَا ، وَجَعَلنَا مُسْلِمِينَ',
      transliteration:
        'Alhamdulilahil ladhi at’amana, wasaqana, waj’alna min-al Muslimeen',
      translation:
        'Praise be to Allah Who has fed us and given us drink and made us Muslims.',
      reference: 'Abu Dawud',
    },
    {
      title: 'When Drinking Milk',
      dua: 'اللَّهُمَّ بَارِِكْ لَنا فِيهِ وَزِدْنَا مِنْهُ',
      transliteration: 'Allahumma baarik lana feehi wa zidna minhu',
      translation: 'O Allah! Bless us in it and give us increase of it.',
      reference: 'At-Tirmidhi 5:506',
    },
    {
      title: 'Before Going To The Toilet',
      dua: 'اللَّهُـمَّ إِنِّي أَعُـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبَائِثِ',
      transliteration:
        'Allahumma innee a’aoothu bika minal-khubthi wal-khaba-ith',
      translation:
        'O Allah, I take refuge with you from all evil and evil-doers.',
      reference: 'Al-Bukhari 1:45 | Muslim 1:283',
    },
    {
      title: 'When Leaving The Toilet',
      dua: 'غُفْرَانَكَ.',
      transliteration: 'Ghufranak',
      translation: 'I ask You (Allah) for forgiveness.',
      reference: "Zadul-Ma'ad 2:387",
    },
  ];
  duas2 = [
    {
      title: 'When Entering The Masjid',
      dua: 'أَعوذُ بِاللّهِ العَظِيـمِ، وَبِوَجْهِـهِ الكَرِيـمِ وَسُلْطـَانِه القَدِيـمِ، مِنَ الشَّيْـطَانِ الرَّجِـيمِ، [ بِسْـمِ اللّهِ وَالصَّلَاةُ ] [وَالسَّلامُ عَلَى رَسُولِ اللّهِ]، اَللَّهُـمَّ افْتَـحْ لِي أَبْوَابَ رَحْمَتـِكَ',
      transliteration:
        'aAAoothu billahil-AAatheem wabiwajhihil-kareem wasultanihil-qadeem minash-shaytanir-rajeem, [bismil-lah, wassalatu] [wassalamu AAala rasoolil-lah] , allahumma iftah lee abwaba rahmatik.',
      translation:
        'I take refuge with Allah, The Supreme and with His Noble Face, and His eternal authority from the accursed devil. In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, open the gates of Your mercy for me.',
      reference: 'Abu Dawud: 4591',
    },
    {
      title: 'When Leaving The Masjid',
      dua: 'بِسْمِ اللّهِ وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللّهِ، اَللَّهُـمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْـلِكَ، اَللَّهُـمَّ اعْصِمْنِـي مِنَ الشَّيْـطَانِ الرَّجِـيمِ',
      transliteration:
        'Bismil-lah wassalatu wassalamu ‘ala rasoolil-lah, allahumma innee as-aluka min fadlik, allahumma i’simnee minash-shaytanir-rajeem.',
      translation:
        'In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, I ask You from Your favour. O Allah, guard me from the accursed devil.',
      reference: 'Muslim: 1:494, Ibn Majah: 1:129',
    },
  ];
}
