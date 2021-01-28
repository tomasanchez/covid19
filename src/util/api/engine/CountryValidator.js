const NA = () => {
  return [
    'Anguilla',
    'Antigua and Barbuda',
    'Aruba',
    'Bahamas',
    'Barbados',
    'Belize',
    'Bermuda',
    'British Virgin Islands',
    'Canada',
    'Caribbean Netherlands',
    'Cayman Islands',
    'Costa Rica',
    'Cuba',
    'Curaçao',
    'Dominica',
    'Dominican Republic',
    'El Salvador',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guatemala',
    'Haiti',
    'Honduras',
    'Jamaica',
    'Martinique',
    'Mexico',
    'Montserrat',
    'Nicaragua',
    'Panama',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre Miquelon',
    'Saint Vincent and the Grenadines',
    'Sint Maarten',
    'St. Barth',
    'Trinidad and Tobago',
    'Turks and Caicos Islands',
    'USA',
  ];
};

const ASIA = () => {
  return [
    'Afghanistan',
    'Armenia',
    'Azerbaijan',
    'Bahrain',
    'Bangladesh',
    'Bhutan',
    'Brunei',
    'Cambodia',
    'China',
    'Cyprus',
    'Georgia',
    'Hong Kong',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Israel',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Lebanon',
    'Macao',
    'Malaysia',
    'Maldives',
    'Mongolia',
    'Myanmar',
    'Nepal',
    'Oman',
    'Pakistan',
    'Palestine',
    'Philippines',
    'Qatar',
    'S. Korea',
    'Saudi Arabia',
    'Singapore',
    'Sri Lanka',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Thailand',
    'Timor-Leste',
    'Turkey',
    'UAE',
    'Uzbekistan',
    'Vietnam',
    'Yemen',
  ];
};

const SA = () => {
  return ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Falkland Islands (Malvinas)', 'French Guiana', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'];
};

const EUR = () => {
  return [
    'Albania',
    'Andorra',
    'Austria',
    'Belarus',
    'Belgium',
    'Bosnia',
    'Bulgaria',
    'Channel Islands',
    'Croatia',
    'Czechia',
    'Denmark',
    'Estonia',
    'Faroe Islands',
    'Finland',
    'France',
    'Germany',
    'Gibraltar',
    'Greece',
    'Holy See (Vatican City State)',
    'Hungary',
    'Iceland',
    'Ireland',
    'Isle of Man',
    'Italy',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'UK',
    'Ukraine',
  ];
};

const AF = () => {
  return [
    'Algeria',
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cameroon',
    'Central African Republic',
    'Chad',
    'Comoros',
    'Congo',
    "Côte d'Ivoire",
    'DRC',
    'Djibouti',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Ethiopia',
    'Gabon',
    'Gambia',
    'Ghana',
    'Guinea',
    'Guinea-Bissau',
    'Kenya',
    'Lesotho',
    'Liberia',
    'Libyan Arab Jamahiriya',
    'Madagascar',
    'Malawi',
    'Mali',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Niger',
    'Nigeria',
    'Rwanda',
    'Réunion',
    'Sao Tome and Principe',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Sudan',
    'Swaziland',
    'Tanzania',
    'Togo',
    'Tunisia',
    'Uganda',
    'Western Sahara',
    'Zambia',
    'Zimbabwe',
  ];
};

const OC = () => {
  return ['Australia', 'Fiji', 'French Polynesia', 'Marshall Islands', 'Micronesia', 'New Caledonia', 'New Zealand', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Vanuatu', 'Wallis and Futuna'];
};

/**
 * Continents List
 * @public
 * @object
 */
const Continents = {
  'North America': NA(),
  Asia: ASIA(),
  'South America': SA(),
  Europe: EUR(),
  Africa: AF(),
  'Australia/Oceania': OC(),
};

/**
 * Convenience method for obtaining a country's continent
 * @public
 * @function
 * @param {string} sCountry the country name
 * @returns {string | false} the continents name or false if not found
 */
const isCountry = (sCountry) => {
  for (var sContinent in Continents) {
    if (Continents[sContinent].includes(sCountry)) return sContinent;
    else continue;
  }

  return false;
};

export default isCountry;
