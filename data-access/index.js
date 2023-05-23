const axios = require("axios").default;
const https = require("https");
const { parse, stringify, toJSON, fromJSON } = require("flatted");
require("dotenv").config();

const loginSL = async () => {
  const result = await axios({
    method: "POST",
    url: `${process.env.SL_URL}/b1s/v1/Login`,
    headers: {
      cookie: "ROUTEID=.node3",
      "Content-Type": "application/json",
      Prefer: "odata.maxpagesize = 300",
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    data: {
      CompanyDB: `${process.env.SL_CompanyDB}`,
      Password: `${process.env.SL_Password}`,
      UserName: `${process.env.SL_UserName}`,
    },
  });

  return result.data;
};

const deleteChkTransactionTable = async (SessionId) => {
  const result = await axios({
    method: "DELETE",
    // url: `${process.env.SL_URL}/b1s/v1/UserFieldsMD(TableName='@CHK_TRANSACTIONS',FieldID=0)`,
    url: `${process.env.SL_URL}/b1s/v1/UserTablesMD('CHK_TRANSACTIONS')`,
    headers: {
      Cookie: `B1SESSION=${SessionId};`,
      "Content-Type": "application/json",
      Prefer: "odata.maxpagesize = 300",
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  }).catch((err) => {
    throw new Error(err.response.data.error.message.value);
  });

  return result.data;
};

const getChkTransactionTable = async (SessionId) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.SL_URL}/b1s/v1/UserTablesMD('CHK_TRANSACTIONS')`,
    headers: {
      Cookie: `B1SESSION=${SessionId};`,
      "Content-Type": "application/json",
      Prefer: "odata.maxpagesize = 300",
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  }).catch((err) => {
    throw new Error(err.response.data.error.message.value);
  });

  return result.data;
};

module.exports = { loginSL, deleteChkTransactionTable, getChkTransactionTable };
