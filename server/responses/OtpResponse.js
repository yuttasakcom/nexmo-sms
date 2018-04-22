const _ = require("lodash");

const fileds = [
  "id",
  "phone",
  "phone_th",
  "code",
  "status",
  "expiration",
  "createdAt"
];

exports.one = obj => _.pick(obj, fileds);

exports.all = objs => {
  const data = objs.data.map(obj => _.pick(obj, fileds));
  return {
    ...objs,
    data
  };
};
