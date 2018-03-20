import {codeUnits} from './generic'

export const unitsDSConfig = {
    text: 'label',
    code: 'value',
  };

export const units = [
    {code: codeUnits.KM, label: 'Kilómetros', value: 0},
    {code: codeUnits.M, label: 'Metros', value: 0},
    {code: codeUnits.CM, label: 'Centrímetros', value: 0},
    {code: codeUnits.MM, label: 'Milímetros', value: 0},
    {code: codeUnits.MI, label: 'Millas', value: 0},
    {code: codeUnits.YD, label: 'Yardas', value: 0},
    {code: codeUnits.IN, label: 'Piés', value: 0}
];

export const tableEqUnits = {
    KM: [
        {item_code: codeUnits.KM, value: 1},
        {item_code: codeUnits.M, value: 1000},
        {item_code: codeUnits.CM, value: 100000},
        {item_code: codeUnits.MM, value: 1000000},
        {item_code: codeUnits.MI, value: 0.6},
        {item_code: codeUnits.YD, value: 1093.6},
        {item_code: codeUnits.IN, value: 39370},
    ],
    M: [
        {item_code: codeUnits.KM, value: 0.001},
        {item_code: codeUnits.M, value: 1},
        {item_code: codeUnits.CM, value: 100},
        {item_code: codeUnits.MM, value: 1000},
        {item_code: codeUnits.MI, value: 0.0006},
        {item_code: codeUnits.YD, value: 1.09},
        {item_code: codeUnits.IN, value: 39.3},
    ],
    CM: [
        {item_code: codeUnits.KM, value: 0.00001},
        {item_code: codeUnits.M, value: 0.01},
        {item_code: codeUnits.CM, value: 1},
        {item_code: codeUnits.MM, value: 10},
        {item_code: codeUnits.MI, value: 0.01},
        {item_code: codeUnits.YD, value: 0.01},
        {item_code: codeUnits.IN, value: 0.39},
    ],
    MM: [
        {item_code: codeUnits.KM, value: 0.000001},
        {item_code: codeUnits.M, value: 0.001},
        {item_code: codeUnits.CM, value: 0.1},
        {item_code: codeUnits.MM, value: 1},
        {item_code: codeUnits.MI, value: 0.001},
        {item_code: codeUnits.YD, value: 0.001},
        {item_code: codeUnits.IN, value: 0.03},
    ],
    MI: [
        {item_code: codeUnits.KM, value: 1.6},
        {item_code: codeUnits.M, value: 1609.3},
        {item_code: codeUnits.CM, value: 160934.4},
        {item_code: codeUnits.MM, value: 1609344},
        {item_code: codeUnits.MI, value: 1},
        {item_code: codeUnits.YD, value: 1760},
        {item_code: codeUnits.IN, value: 63.3},
    ],
    YD: [
        {item_code: codeUnits.KM, value: 0.0009},
        {item_code: codeUnits.M, value: 0.91},
        {item_code: codeUnits.CM, value: 91.4},
        {item_code: codeUnits.MM, value: 914.4},
        {item_code: codeUnits.MI, value: 0.0005},
        {item_code: codeUnits.YD, value: 1},
        {item_code: codeUnits.IN, value: 36},
    ],
    IN: [
        {item_code: codeUnits.KM, value: 0.000025},
        {item_code: codeUnits.M, value: 0.025},
        {item_code: codeUnits.CM, value: 2.54},
        {item_code: codeUnits.MM, value: 25.4},
        {item_code: codeUnits.MI, value: 0.00001},
        {item_code: codeUnits.YD, value: 0.027},
        {item_code: codeUnits.IN, value: 1},
    ]
};