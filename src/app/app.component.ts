import { Component } from '@angular/core';
import { CatModel } from './types/cat.model';

const cats: CatModel[] = [
  {
    id: 'nrPdW40A4',
    url: 'nrPdW40A4.jpg',
    width: 600,
    height: 450,
  },
  {
    id: 'nowPuzVLA',
    url: 'nowPuzVLA.jpg',
    width: 225,
    height: 225,
  },
  {
    id: '-sN9TIb05',
    url: '-sN9TIb05.jpg',
    width: 3724,
    height: 2096,
  },
  {
    id: '4rkjKCYl4',
    url: '4rkjKCYl4.jpg',
    width: 817,
    height: 613,
  },
  {
    id: 'F1jxAFqG-',
    url: 'F1jxAFqG-.jpg',
    width: 576,
    height: 385,
  },
  {
    id: 'zbEbBhxbU',
    url: 'zbEbBhxbU.jpg',
    width: 1200,
    height: 1387,
  },
  {
    id: 'wLo95XreJ',
    url: 'wLo95XreJ.jpg',
    width: 650,
    height: 454,
  },
  {
    id: 'S-WQkq1Tz',
    url: 'S-WQkq1Tz.jpg',
    width: 450,
    height: 600,
  },
  {
    id: 'cmIbOtjo7',
    url: 'cmIbOtjo7.jpg',
    width: 450,
    height: 600,
  },
  {
    id: '9B_1UBQbP',
    url: '9B_1UBQbP.jpg',
    width: 450,
    height: 600,
  },
  {
    id: 'HPhbMGWZd',
    url: 'HPhbMGWZd.jpg',
    width: 450,
    height: 600,
  },
  {
    id: '1YwiELAGe',
    url: '1YwiELAGe.jpg',
    width: 600,
    height: 337,
  },
  {
    id: 'LTq3y1Qbh',
    url: 'LTq3y1Qbh.jpg',
    width: 600,
    height: 450,
  },
  {
    id: 'VaN50pARA',
    url: 'VaN50pARA.jpg',
    width: 600,
    height: 450,
  },
  {
    id: 'EMuHw_mOa',
    url: 'EMuHw_mOa.jpg',
    width: 600,
    height: 450,
  },
  {
    id: 'vjkjaUId4',
    url: 'vjkjaUId4.jpg',
    width: 600,
    height: 450,
  },
  {
    id: 'W3MKM586E',
    url: 'W3MKM586E.jpg',
    width: 450,
    height: 600,
  },
  {
    id: 'fQDhwiS72',
    url: 'fQDhwiS72.jpg',
    width: 1600,
    height: 1200,
  },
  {
    id: '06jIKGDc5',
    url: '06jIKGDc5.jpg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'gbKTgU84Z',
    url: 'gbKTgU84Z.jpg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'J2PmlIizw',
    url: 'J2PmlIizw.jpg',
    width: 1080,
    height: 1350,
  },
  {
    id: 'LSaDk6OjY',
    url: 'LSaDk6OjY.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '8pCFG7gCV',
    url: '8pCFG7gCV.jpg',
    width: 750,
    height: 937,
  },
  {
    id: 'IFXsxmXLm',
    url: 'IFXsxmXLm.jpg',
    width: 973,
    height: 973,
  },
  {
    id: '8ciqdpaO5',
    url: '8ciqdpaO5.jpg',
    width: 1080,
    height: 809,
  },
  {
    id: 'VZ3qFLIe3',
    url: 'VZ3qFLIe3.jpg',
    width: 750,
    height: 937,
  },
  {
    id: 'aaxNf4D0H',
    url: 'aaxNf4D0H.jpg',
    width: 1080,
    height: 1350,
  },
  {
    id: 'iWyIaja-G',
    url: 'iWyIaja-G.jpg',
    width: 1080,
    height: 769,
  },
  {
    id: 'GAmy2bg8G',
    url: 'GAmy2bg8G.jpg',
    width: 750,
    height: 750,
  },
  {
    id: 'Rl39SPjDO',
    url: 'Rl39SPjDO.png',
    width: 1198,
    height: 1379,
  },
  {
    id: '8RsP7Xt3h',
    url: '8RsP7Xt3h.jpg',
    width: 1024,
    height: 817,
  },
  {
    id: 'byQhFO7iV',
    url: 'byQhFO7iV.jpg',
    width: 1795,
    height: 2397,
  },
  {
    id: 'UhqCZ7tC4',
    url: 'UhqCZ7tC4.jpg',
    width: 1600,
    height: 1200,
  },
  {
    id: 'O3btzLlsO',
    url: 'O3btzLlsO.png',
    width: 1100,
    height: 739,
  },
  {
    id: 'dN6eoeLjY',
    url: 'dN6eoeLjY.jpg',
    width: 3648,
    height: 2736,
  },
  {
    id: 'H_UWbOfra',
    url: 'H_UWbOfra.jpg',
    width: 1200,
    height: 1200,
  },
  {
    id: 'bz15V3Kvg',
    url: 'bz15V3Kvg.jpg',
    width: 1440,
    height: 1080,
  },
  {
    id: 'NwMUoJYmT',
    url: 'NwMUoJYmT.jpg',
    width: 2160,
    height: 1440,
  },
  {
    id: 'udZiLDG_E',
    url: 'udZiLDG_E.jpg',
    width: 880,
    height: 1100,
  },
  {
    id: 'sPMOo3Jn2',
    url: 'sPMOo3Jn2.jpg',
    width: 880,
    height: 1100,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cats!: CatModel[];

  ngOnInit() {
    this.cats = cats;
  }
}
