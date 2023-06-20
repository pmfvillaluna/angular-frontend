import { Person } from "./models/person";

export const MockPerson: Person[] = [
  {
    id: 1,
    name: {
      firstName: 'Jane',
      lastName: 'Smith',
      middleName: 'Anne',
      suffix: 'VII',
      title: 'Ms.'
    },
    address: [
      {
        streetNumber: '456 Elm Street',
        barangay: 'Barangay 2',
        city: 'City B',
        zipCode: '67890'
      }
    ],
    birthday: new Date('1985-03-12'),
    dateHired: new Date('2020-06-01'),
    GWA: 3.5,
    contactInformation: [
      {
        landline: '222-2222',
        mobileNumber: '222-222-2222',
        email: 'jane@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "Admin"
      },
      {
        "roleName": "User"
      },
      {
        "roleName": "Guest"
      }
    ]
  },
  {
    id: 2,
    name: {
      firstName: 'John',
      lastName: 'Doe',
      middleName: 'Robert',
      suffix: 'IV',
      title: 'Mr.'
    },
    address: [
      {
        streetNumber: '123 Oak Avenue',
        barangay: 'Barangay 1',
        city: 'City A',
        zipCode: '12345'
      }
    ],
    birthday: new Date('1990-08-20'),
    dateHired: new Date('2018-02-15'),
    GWA: 3.2,
    contactInformation: [
      {
        landline: '333-3333',
        mobileNumber: '333-333-3333',
        email: 'john@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "User"
      },
      {
        "roleName": "Guest"
      }
    ]
  },
  // Add 10 more entries here...
  {
    id: 3,
    name: {
      firstName: 'Alice',
      lastName: 'Johnson',
      middleName: 'Marie',
      suffix: 'III',
      title: 'Ms.'
    },
    address: [
      {
        streetNumber: '789 Maple Avenue',
        barangay: 'Barangay 3',
        city: 'City C',
        zipCode: '34567'
      }
    ],
    birthday: new Date('1992-11-05'),
    dateHired: new Date('2022-01-10'),
    GWA: 3.8,
    contactInformation: [
      {
        landline: '444-4444',
        mobileNumber: '444-444-4444',
        email: 'alice@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "User"
      },
      {
        "roleName": "Guest"
      }
    ]
  },
  {
    id: 4,
    name: {
      firstName: 'David',
      lastName: 'Brown',
      middleName: 'Michael',
      suffix: 'Jr.',
      title: 'Mr.'
    },
    address: [
      {
        streetNumber: '567 Pine Street',
        barangay: 'Barangay 4',
        city: 'City D',
        zipCode: '45678'
      }
    ],
    birthday: new Date('1988-06-15'),
    dateHired: new Date('2019-05-01'),
    GWA: 3.9,
    contactInformation: [
      {
        landline: '555-5555',
        mobileNumber: '555-555-5555',
        email: 'david@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "Admin"
      },
      {
        "roleName": "User"
      }
    ]
  },
  {
    id: 5,
    name: {
      firstName: 'Emily',
      lastName: 'Wilson',
      middleName: 'Grace',
      suffix: '',
      title: 'Mrs.'
    },
    address: [
      {
        streetNumber: '789 Rose Street',
        barangay: 'Barangay 5',
        city: 'City E',
        zipCode: '54321'
      }
    ],
    birthday: new Date('1994-09-25'),
    dateHired: new Date('2021-03-20'),
    GWA: 3.7,
    contactInformation: [
      {
        landline: '666-6666',
        mobileNumber: '666-666-6666',
        email: 'emily@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "User"
      }
    ]
  },{
    id: 6,
    name: {
      firstName: 'Michael',
      lastName: 'Anderson',
      middleName: 'James',
      suffix: '',
      title: 'Mr.'
    },
    address: [
      {
        streetNumber: '234 Cedar Street',
        barangay: 'Barangay 6',
        city: 'City F',
        zipCode: '98765'
      }
    ],
    birthday: new Date('1991-07-18'),
    dateHired: new Date('2020-12-01'),
    GWA: 3.6,
    contactInformation: [
      {
        landline: '777-7777',
        mobileNumber: '777-777-7777',
        email: 'michael@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "Guest"
      }
    ]
  },
  {
    id: 7,
    name: {
      firstName: 'Olivia',
      lastName: 'Walker',
      middleName: 'Elizabeth',
      suffix: '',
      title: 'Ms.'
    },
    address: [
      {
        streetNumber: '890 Willow Street',
        barangay: 'Barangay 7',
        city: 'City G',
        zipCode: '54321'
      }
    ],
    birthday: new Date('1993-12-01'),
    dateHired: new Date('2021-07-10'),
    GWA: 3.9,
    contactInformation: [
      {
        landline: '888-8888',
        mobileNumber: '888-888-8888',
        email: 'olivia@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "User"
      }
    ]
  },
  {
    id: 8,
    name: {
      firstName: 'William',
      lastName: 'Turner',
      middleName: 'Thomas',
      suffix: '',
      title: 'Mr.'
    },
    address: [
      {
        streetNumber: '567 Elm Street',
        barangay: 'Barangay 8',
        city: 'City H',
        zipCode: '76543'
      }
    ],
    birthday: new Date('1990-04-28'),
    dateHired: new Date('2019-09-15'),
    GWA: 3.4,
    contactInformation: [
      {
        landline: '999-9999',
        mobileNumber: '999-999-9999',
        email: 'william@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "User"
      },
      {
        "roleName": "Guest"
      }
    ]
  },
  {
    id: 9,
    name: {
      firstName: 'Sophia',
      lastName: 'Baker',
      middleName: 'Grace',
      suffix: '',
      title: 'Ms.'
    },
    address: [
      {
        streetNumber: '456 Oak Avenue',
        barangay: 'Barangay 9',
        city: 'City I',
        zipCode: '87654'
      }
    ],
    birthday: new Date('1992-02-14'),
    dateHired: new Date('2022-03-01'),
    GWA: 3.7,
    contactInformation: [
      {
        landline: '101-0101',
        mobileNumber: '101-010-1010',
        email: 'sophia@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "Admin"
      },
      {
        "roleName": "Guest"
      }
    ]
  },
  {
    id: 10,
    name: {
      firstName: 'James',
      lastName: 'Parker',
      middleName: 'William',
      suffix: 'Jr.',
      title: 'Mr.'
    },
    address: [
      {
        streetNumber: '789 Pine Street',
        barangay: 'Barangay 10',
        city: 'City J',
        zipCode: '98765'
      }
    ],
    birthday: new Date('1987-09-10'),
    dateHired: new Date('2018-07-01'),
    GWA: 3.8,
    contactInformation: [
      {
        landline: '111-1111',
        mobileNumber: '111-111-1111',
        email: 'james@example.com'
      }
    ],
    isEmployed: true,
    roleNames: [
      {
        "roleName": "Admin"
      },
      {
        "roleName": "User"
      }
    ]
  }

];
