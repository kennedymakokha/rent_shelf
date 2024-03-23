export const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },

  {
    title: 'Services',
    // url: '/services',
    submenu: [
      {
        title: 'Rent Type',
        submenu: [
          {
            title: 'Rent shelf',
            url: 'shelves-type/rent-shelf',
          },
          {
            title: 'Pick up Point',
            url: 'shelves-type/pick-up-Point',
          },
          {
            title: 'Drop off Point',
            url: 'shelves-type/drop-off-Point',
          },
          {
            title: 'Percel sending',
            url: 'shelves-type/percel-sending',
          },
          {
            title: 'Storage Unit ',
            url: 'shelves-type/storage-unit ',
          },
          {
            title: 'warehouse',
            url: 'shelves-type/warehouse',
          },
        ],
      },
      {
        title: 'Property City',
        submenu: [
          {
            title: 'Nairobi',
            url: 'shelves-in/nairobi',
          },
          {
            title: 'Mombasa',
            url: 'shelves-in/mombasa',
          },
          {
            title: 'Kisumu',
            url: 'shelves-in/kisumu',
          },
          {
            title: 'Kakamega',
            url: 'shelves-in/kakamega',
          },
          {
            title: 'Nairobi',
            url: 'shelves-in/nairobi',
          },

        ]
      },

    ],

  },
  {
    title: 'Web Development',
    url: 'web-dev',
    submenu: [
      {
        title: 'Frontend',
        url: 'frontend',
      },
      {
        title: 'Backend',
        submenu: [
          {
            title: 'NodeJS',
            url: 'node',
          },
          {
            title: 'PHP',
            url: 'php',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
  },
];

