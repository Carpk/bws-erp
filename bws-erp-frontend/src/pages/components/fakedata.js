

const FakeData = {
  projects: [{
      id: 1101,
      job_name: "Color Of Us",
      production: true,
      bid_number: 529,
      job_number: 391,
      purchase_order: 83579,
      details: [1201, 1202, 1203]
  },{
    id: 1102,
    job_name: "Night Sky",
    production: false,
    bid_number: 534,
    job_number: 423,
    purchase_order: 83582,
    details: [1204]
  }],

  details: [{
      id: 1201,
      name: "Mount flux capacitor",
      paints: {"black": 0, "primer": 0, "color": 0, "sealer": 0, "hardcoat": 0, "mathews": 0},
      sqft: {width: 1, height: 1},
      task: [1301, 1301,1303,1304,1305,1306],
      materials: [1400,1401,1402,1403]
  },{
    id: 1202,
    name: "Disengage hyperdrive",
    paints: {"black": 0, "primer": 0, "color": 0, "sealer": 0, "hardcoat": 0, "mathews": 0},
    sqft: {width: 1, height: 1},
    task: [1301, 1301,1303,1304,1305,1306],
    materials: [1404,1405,1402]
  },{
    id: 1203,
    name: "Forward thrusters",
    paints: {"black": 0, "primer": 0, "color": 0, "sealer": 0, "hardcoat": 0, "mathews": 0},
    sqft: {width: 1, height: 1},
    task: [],
    materials: []
  },{
    id: 1204,
    name: "Discombobulate",
    paints: {"black": 0, "primer": 0, "color": 0, "sealer": 0, "hardcoat": 0, "mathews": 0},
    sqft: {width: 1, height: 1},
    task: [],
    materials: []
  }],

  tasks: [{
      id: 1301,
      name: "CNC Program",
      dept: "programming",
      dates: {start: "2023-10-10", end: "2023-10-19"},
      description: "",
      quantity: 0,
    },{
      id: 1302,
      name: "CNC cut",
      dept: "cnc",
      dates: {start: "2023-10-10", end: "2023-10-19"},
      description: "",
      quantity: 0,
    },{
      id: 1303,
      name: "post-process sanding",
      dept: "carpentry",
      dates: {start: "2023-10-10", end: "2023-10-19"},
      description: "",
      quantity: 0,
    },{
      id: 1304,
      name: "paint primer",
      dept: "paint",
      dates: {start: "2023-10-10", end: "2023-10-19"},
      description: "",
      quantity: 0,
    },{
      id: 1305,
      name: "build crate",
      dept: "carpentry",
      dates: {start: "2023-10-10", end: "2023-10-19"},
      description: "",
      quantity: 0,
    },{
      id: 1306,
      name: "package and ship",
      dept: "logistics",
      dates: {start: "2023-10-10", end: "2023-10-19"},
      description: "",
      quantity: 0,
  },],

  items: [{
    id:1400,
    name: "2x4x8",
    vendor: "home depot",
    footage: null,
    date: {request: null, ordered: null, delovered: null},
    status: "In Stock",
    quantity: 15,
    cost: 3.18
  },{
    id:1401,
    name: "plywood 3/4",
    vendor: "home depot",
    footage: null,
    date: {request: "2023-10-7", ordered: "2023-10-8", delovered: null},
    status: "Ordered",
    quantity: 3,
    cost: 65.00
  },{
    id:1402,
    name: "glue",
    vendor: "amazon.com/glue",
    footage: null,
    date: {request: "2023-10-7", ordered: null, delovered: null},
    status: "On hold",
    quantity: 1,
    cost: 25.00
  },{
    id:1403,
    name: "Foam block",
    vendor: "FoamRUs.com/4x4-foam-block",
    footage: null,
    date: {request: "2023-10-7", ordered: "2023-10-8", delovered: "2023-10-14"},
    status: "Delivered",
    quantity: 1,
    cost: 125.00
  },{
    id:1404,
    name: "Cinder block",
    vendor: null,
    footage: null,
    date: {request: null, ordered: null, delovered: null},
    status: "Estimate",
    quantity: 120,
    cost: 2.11
  },{
    id:1405,
    name: "Mortar",
    vendor: null,
    footage: null,
    date: {request: null, ordered: null, delovered: null},
    status: "Estimate",
    quantity: 1,
    cost: 125.00
  },{
    id:1406,
    name: "Foam block",
    vendor: null,
    footage: null,
    date: {request: null, ordered: null, delovered: null},
    status: "Estimate",
    quantity: 1,
    cost: 125.00
  }],

  users: [ {
      id: 3101,
      name: {first: "Jason", last: ""},
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    }, {
      id: 3102,
      name: {first:"Brad" , last: ""},
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },{
      id: 3103,
      name: {first: "Ben", last:""},
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },{
      id: 3104,
      name: {first: "Rob", last: ""},
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },{
      id: 3105,
      name: {first: "Jessie", last:"" },
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },{
      id: 3106,
      name: {first: "Mike", last:"" },
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },{
      id: 3107,
      name: {first: "Zach", last: ""},
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },{
      id: 3108,
      name: {first: "Bob", last: ""},
      access: {},
      proficency: {carp: 3, metal: 3, paint: 3},
    },
  ]

}











// {
//   users: ["Dwayne", "Jason", "Brad", "Ben", "Zach", 
//           "Rob", "Philip", "Tom", "Jessie", "Mike", "Bob"],
//   managers: ["Rick", "John", "Adeline"],
//   clients: ["Nike", "Camp", "ADG"'],
//   projects: ["Trolls", "Marshal's Museum"],
//   tasks: [],

// };

export default FakeData;
