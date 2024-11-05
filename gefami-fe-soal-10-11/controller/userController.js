const namaLengkap = [
  {
    name: "Ryan Rumpoko",
    age: "31",
    dob: "30 Oktober 1993",
  },
  { name: "Surya Insomnia", age: "37", dob: "9 Desember 1986" },
  { name: "Andre Taulany", age: "50", dob: "17 September 1974" },
];

const getUser = (req, res) => {
  console.log("Get Success");
  res.status(200).json(namaLengkap);
};

const postUser = (req, res) => {
  const inputData = {
    name: req.body.name,
    age: req.body.age,
    dob: req.body.dob,
  };
  console.log("Post Success");
  res.status(200).json(`Data ${inputData.name} berhasil dibuat`);
};

module.exports = {
  getUser,
  postUser,
};
