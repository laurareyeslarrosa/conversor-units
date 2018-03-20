const codeMedidas = {
    KM: 'KM',
    M: 'M',
    CM: 'CM',
    MM: 'MM',
    MI: 'MI',
    YD: 'YD',
    IN: 'IN'
};

export const medidasDSConfig = {
    text: 'label',
    value: 'value',
  };

export const medidas = [
    {value: codeMedidas.KM, label: 'Kilómetros'},
    {value: codeMedidas.M, label: 'Metros'},
    {value: codeMedidas.CM, label: 'Centrímetros'},
    {value: codeMedidas.MM, label: 'Milímetros'},
    {value: codeMedidas.MI, label: 'Millas'},
    {value: codeMedidas.YD, label: 'Yardas'},
    {value: codeMedidas.IN, label: 'Piés'}
];

export const equivalenciaMedidas = {
    KM: [
        {item_code: codeMedidas.KM, value: 1},
        {item_code: codeMedidas.M, value: 1000},
        {item_code: codeMedidas.CM, value: 100000},
        {item_code: codeMedidas.MM, value: 1000000},
        {item_code: codeMedidas.MI, value: 0.6},
        {item_code: codeMedidas.YD, value: 1093.6},
        {item_code: codeMedidas.IN, value: 39370},
    ],
    M: [
        {item_code: codeMedidas.KM, value: 0.001},
        {item_code: codeMedidas.M, value: 1},
        {item_code: codeMedidas.CM, value: 100},
        {item_code: codeMedidas.MM, value: 1000},
        {item_code: codeMedidas.MI, value: 0.0006},
        {item_code: codeMedidas.YD, value: 1.09},
        {item_code: codeMedidas.IN, value: 39.3},
    ],
    CM: [
        {item_code: codeMedidas.KM, value: 0.00001},
        {item_code: codeMedidas.M, value: 0.01},
        {item_code: codeMedidas.CM, value: 1},
        {item_code: codeMedidas.MM, value: 10},
        {item_code: codeMedidas.MI, value: 0.01},
        {item_code: codeMedidas.YD, value: 0.01},
        {item_code: codeMedidas.IN, value: 0.39},
    ],
    MM: [
        {item_code: codeMedidas.KM, value: 0.000001},
        {item_code: codeMedidas.M, value: 0.001},
        {item_code: codeMedidas.CM, value: 0.1},
        {item_code: codeMedidas.MM, value: 1},
        {item_code: codeMedidas.MI, value: 0.001},
        {item_code: codeMedidas.YD, value: 0.001},
        {item_code: codeMedidas.IN, value: 0.03},
    ],
    MI: [
        {item_code: codeMedidas.KM, value: 1.6},
        {item_code: codeMedidas.M, value: 1609.3},
        {item_code: codeMedidas.CM, value: 160934.4},
        {item_code: codeMedidas.MM, value: 1609344},
        {item_code: codeMedidas.MI, value: 1},
        {item_code: codeMedidas.YD, value: 1760},
        {item_code: codeMedidas.IN, value: 63.3},
    ],
    YD: [
        {item_code: codeMedidas.KM, value: 0.0009},
        {item_code: codeMedidas.M, value: 0.91},
        {item_code: codeMedidas.CM, value: 91.4},
        {item_code: codeMedidas.MM, value: 914.4},
        {item_code: codeMedidas.MI, value: 0.0005},
        {item_code: codeMedidas.YD, value: 1},
        {item_code: codeMedidas.IN, value: 36},
    ],
    IN: [
        {item_code: codeMedidas.KM, value: 0.000025},
        {item_code: codeMedidas.M, value: 0.025},
        {item_code: codeMedidas.CM, value: 2.54},
        {item_code: codeMedidas.MM, value: 25.4},
        {item_code: codeMedidas.MI, value: 0.00001},
        {item_code: codeMedidas.YD, value: 0.027},
        {item_code: codeMedidas.IN, value: 1},
    ]
};