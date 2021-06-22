[
  {
    _id: ObjectID("60cb60e5548da20064a30858"),
    id: 1,
    userData: {
      name: "Watcharin",
      surname: "Rachadet",
      gender: "male",
      birthday: "2009-02-25T04:17:06.000Z",
      phoneNumber: "1234566789",
      personID: "1234567890",
      intolerance: "none",
      address: "247 dadpijp",
      country: "Thailand",
      location: {
        type: "Point",
        cordinates: [-61.551, 16.265],
      },
    },
    state: {
      status: "ยังไม่ได้รับการฉีด",
      bookingStatus: "accepted", //to enum
      vaccineDetail: [
        {
          type: "Moderna", //to enum
          vaccineNo: 1,
          DAY: ISODate("2021-09-11T00:00:002"),
          location: { //optomize
            province: "โรงพยาบาลเชียงใหม่ราม",
            city: "ChiangMai",
            type: "Point",
            coordinates: [-61.551, 16.265],
          },
          feedback: "หมอน่ารักมากๆครับ"
        },
        {
            type: "Moderna",
            vaccineNo: 2,
            DAY: ISODate("2021-09-11T00:00:002"),
            location: {
              province: "โรงพยาบาลเชียงใหม่ราม",
              city: "ChiangMai",
              type: "Point",
              coordinates: [-61.551, 16.265],
            },
            feedback: "หมอน่ารักมากๆครับ"
          },
      ],
    },
  },
];
