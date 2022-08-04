import { Component } from '@angular/core';

/**
 * @title Basic expansion panel
 */

export interface PeriodicElement {
  name: string;
  fecha: string;
  symbol: string;
}

export interface PElement {
  name: string;
  fecha: string;
  resultado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'ExportedDeviceConfigs_20220729_124239.csv',
    fecha: '29/07/2022',
    symbol: 'H',
  },
  {
    name: 'ExportedDeviceConfigs_20220713_162419.csv',
    fecha: '13/07/2022',
    symbol: 'He',
  },
  {
    name: 'ExportedDeviceConfigs_20220117_201921.csv',
    fecha: '13/07/2022',
    symbol: 'Li',
  },
  {
    name: 'ExportedDeviceConfigs_20211022_232519.csv',
    fecha: '22/10/2021',
    symbol: 'Be',
  },
];

const DATA: PElement[] = [
  {
    name: 'ExportedDeviceConfigs_20220729_124239.csv',
    fecha: '3/8/2022, 10:03:17',
    resultado: '0/ 30/ 30',
  },
  {
    name: 'ExportedDeviceConfigs_20220713_162419.csv',
    fecha: '29/7/2022, 12:42:39',
    resultado: '30/ 0/ 30',
  },
  {
    name: 'ExportedDeviceConfigs_20220117_201921.csv',
    fecha: '5/11/2021, 0:29:46',
    resultado: '30/ 0/ 30',
  },
  {
    name: 'ExportedDeviceConfigs_20211022_232519.csv',
    fecha: '13/7/2022, 16:24:19',
    resultado: '16/ 0/ 16',
  },
];

@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
  displayedColumns: string[] = ['name', 'fecha', 'symbol'];
  displayedColumns2: string[] = ['name', 'fecha', 'symbol', 'detalle'];
  dataSource = ELEMENT_DATA;
  dataSource2 = DATA;
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
