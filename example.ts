import { HostelWorldPropertyResponse } from './type';
// function get(){}
const example: HostelWorldPropertyResponse = {
  id: '98650',
  cancellationPolicies: [
    {
      label: 'Deposit Only rates',
      description:
        "This property has a 1 day cancellation policy. Failure to cancel within this time will result in a cancellation charge equal to the first night of your stay, unless otherwise stated (see 'Things to Note' information).",
    },
    {
      label: 'Non-refundable rates',
      description:
        'Your booking is non-refundable. If you choose to cancel your booking, or in the case of a no-show, you will still be charged the full cost of your booking.',
    },
  ],
  depositPercentage: 15,
  rooms: {
    dorms: [
      {
        id: 756995,
        token: 'x4_MixedXDorm_0_DELUXE__',
        name: 'Deluxe 4 Bed Mixed Dorm',
        description:
          'Dormitory style and range in size from 2 beds upwards.  They offer mixed accommodation.',
        labelDescription:
          'a nice ac dorm of 4 beds with a common kitchen and 3 shower and toilet, high speed wifi',
        capacity: '4',
        ensuite: '0',
        basicType: 'Mixed Dorm',
        extendedType: '',
        grade: 'Deluxe',
        bathroomFacilities: [],
        mealPlan: '',
        view: '',
        bedTypes: [],
        facilities: [],
        images: [
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/k1bndcutn90suyfju12k',
          },
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/wbbimbplfed8w0ijy6gx',
          },
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/ujvigisfrls3v7i8kgtn',
          },
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/kd6wukn4weko2lzhrfp0',
          },
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/lpfwul8dvfxplglhdxqa',
          },
        ],
        totalBedsAvailable: 4,
        totalRoomsAvailable: null,
        numberOfGuestsPerRoom: null,
        ratePlans: [
          {
            id: 479152,
            paymentProcedure: {
              id: 'depositPayable',
              label: 'Deposit only',
              description:
                '<b>Deposit only</b><br>\nYour deposit will be non-refundable unless the Standard Flexible Booking option is available and you select it. T&C apply.',
            },
            isDefault: true,
            rateRuleViolations: [],
            ratePlanType: 'STANDARD',
          },
          {
            id: 674781,
            paymentProcedure: {
              id: 'nonRefundable',
              label: 'Non-refundable',
              description:
                '<b>Non-refundable</b><br>\r\nYour booking is non-refundable. The property will charge you the full amount at any time after your booking confirmation, even if you cancel or don\u2019t show up.',
            },
            isDefault: false,
            rateRuleViolations: [],
            ratePlanType: 'STANDARD',
          },
        ],
        averagePricePerNight: [
          { ratePlan: 479152, price: { value: '80000.00', currency: 'IDR' } },
          { ratePlan: 674781, price: { value: '100000.00', currency: 'IDR' } },
        ],
        lowestPricePerNight: { value: '80000.00', currency: 'IDR' },
        stp: null,
        conditions: [],
        totalPrice: [
          { ratePlan: 479152, price: { value: '240000.00', currency: 'IDR' } },
          { ratePlan: 674781, price: { value: '300000.00', currency: 'IDR' } },
        ],
        priceBreakdown: [
          {
            ratePlan: 479152,
            date: '2022-07-21',
            price: { value: '80000.00', currency: 'IDR' },
          },
          {
            ratePlan: 479152,
            date: '2022-07-22',
            price: { value: '80000.00', currency: 'IDR' },
          },
          {
            ratePlan: 479152,
            date: '2022-07-23',
            price: { value: '80000.00', currency: 'IDR' },
          },
          {
            ratePlan: 674781,
            date: '2022-07-21',
            price: { value: '100000.00', currency: 'IDR' },
          },
          {
            ratePlan: 674781,
            date: '2022-07-22',
            price: { value: '100000.00', currency: 'IDR' },
          },
          {
            ratePlan: 674781,
            date: '2022-07-23',
            price: { value: '100000.00', currency: 'IDR' },
          },
        ],
      },
      {
        id: 532633,
        token: 'x6_MixedXDorm_1_DELUXE__',
        name: 'Deluxe 6 Bed Mixed Dorm Ensuite',
        description:
          'Dormitory style and range in size from 2 beds upwards.  They offer mixed accommodation.',
        labelDescription:
          'Our new A/C Dormitory located in a brand new buiding at 50meters from the dive center. Very Clean and quiet, a perfect place to have a good rest after a great day of diving.',
        capacity: '6',
        ensuite: '1',
        basicType: 'Mixed Dorm',
        extendedType: '',
        grade: 'Deluxe',
        bathroomFacilities: [],
        mealPlan: '',
        view: '',
        bedTypes: [],
        facilities: [],
        images: [
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/33.jpg',
          },
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/32.jpg',
          },
          {
            prefix: 'a.hwstatic.com/image/upload/f_auto,q_auto',
            suffix: '/v1/propertyimages/9/98650/35.jpg',
          },
        ],
        totalBedsAvailable: 6,
        totalRoomsAvailable: null,
        numberOfGuestsPerRoom: null,
        ratePlans: [
          {
            id: 46608,
            paymentProcedure: {
              id: 'depositPayable',
              label: 'Deposit only',
              description:
                '<b>Deposit only</b><br>\nYour deposit will be non-refundable unless the Standard Flexible Booking option is available and you select it. T&C apply.',
            },
            isDefault: true,
            rateRuleViolations: [],
            ratePlanType: 'STANDARD',
          },
        ],
        averagePricePerNight: [
          { ratePlan: 46608, price: { value: '100000.00', currency: 'IDR' } },
        ],
        lowestPricePerNight: { value: '100000.00', currency: 'IDR' },
        stp: null,
        conditions: [],
        totalPrice: [
          { ratePlan: 46608, price: { value: '300000.00', currency: 'IDR' } },
        ],
        priceBreakdown: [
          {
            ratePlan: 46608,
            date: '2022-07-21',
            price: { value: '100000.00', currency: 'IDR' },
          },
          {
            ratePlan: 46608,
            date: '2022-07-22',
            price: { value: '100000.00', currency: 'IDR' },
          },
          {
            ratePlan: 46608,
            date: '2022-07-23',
            price: { value: '100000.00', currency: 'IDR' },
          },
        ],
      },
    ],
    privates: [
      {
        id: 743611,
        token: 'x2_Private_1_DELUXE__',
        name: 'Deluxe Twin Room Private Ensuite',
        description:
          'In order to secure a Private Room, you will need to book the entire room.',
        labelDescription:
          'Our big Private familly Room offer you An Amazing Volcano View and is located close by from the dive center in a brand new building and offer you a private terrace, perfect for a couple or a family. A/C,hot shower, and small kitchen with fridge.',
        capacity: '2',
        ensuite: '1',
        basicType: 'Private',
        extendedType: '',
        grade: 'Deluxe',
        bathroomFacilities: [],
        mealPlan: '',
        view: '',
        bedTypes: [],
        facilities: [],
        images: [],
        totalBedsAvailable: 2,
        totalRoomsAvailable: 1,
        numberOfGuestsPerRoom: 2,
        ratePlans: [
          {
            id: 459194,
            paymentProcedure: {
              id: 'depositPayable',
              label: 'Deposit only',
              description:
                '<b>Deposit only</b><br>\nYour deposit will be non-refundable unless the Standard Flexible Booking option is available and you select it. T&C apply.',
            },
            isDefault: true,
            rateRuleViolations: [],
            ratePlanType: 'STANDARD',
          },
        ],
        averagePricePerNight: [
          { ratePlan: 459194, price: { value: '250000.00', currency: 'IDR' } },
        ],
        lowestPricePerNight: { value: '250000.00', currency: 'IDR' },
        stp: null,
        conditions: [],
        totalPrice: [
          { ratePlan: 459194, price: { value: '750000.00', currency: 'IDR' } },
        ],
        priceBreakdown: [
          {
            ratePlan: 459194,
            date: '2022-07-21',
            price: { value: '125000.00', currency: 'IDR' },
          },
          {
            ratePlan: 459194,
            date: '2022-07-22',
            price: { value: '125000.00', currency: 'IDR' },
          },
          {
            ratePlan: 459194,
            date: '2022-07-23',
            price: { value: '125000.00', currency: 'IDR' },
          },
        ],
      },
    ],
  },
  specialEventConditions: null,
  freeCancellation: {
    label: 'Free Cancellation rates',
    description:
      "If you cancel your booking before 23:59 19th Jul 2022 (WIB) your deposit will be refunded to your payment card. If you cancel after 19th Jul 2022 (WIB) or in the event of a no-show, your deposit will not be refunded and the total of the first night's accommodation will be charged to your payment card, unless otherwise stated (see 'Things to Note' information).Please note that cancellations must be made directly within your booking in My Account.",
  },
  lowestPricePerNight: { value: '80000.00', currency: 'IDR' },
  lowestPrivatePricePerNight: { value: '250000.00', currency: 'IDR' },
  lowestDormPricePerNight: { value: '80000.00', currency: 'IDR' },
  lowestAveragePricePerNight: { value: '80000.00', currency: 'IDR' },
  lowestAverageDormPricePerNight: { value: '80000.00', currency: 'IDR' },
  lowestAveragePrivatePricePerNight: { value: '250000.00', currency: 'IDR' },
  freeCancellationAvailable: false,
  freeCancellationAvailableUntil: '2022-07-20T00:00:00+07:00',
  promotions: [],
};