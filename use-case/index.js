const {
  loginSL,
  deleteChkTransactionTable,
  getChkTransactionTable,
} = require("../data-access/index");

const deleteChkTransactionTableUseCase = async () => {
  try {
    const login = await loginSL();
    const SessionId = login.SessionId;

    await deleteChkTransactionTable(SessionId);

    return {
      message: "CHK_TRANSACTION TABLE SUCCESSFULLY DELETED!",
    };
  } catch (error) {
    console.error(error);
  }
};

const getChkTransactionTableUseCase = async () => {
  const login = await loginSL();
  const SessionId = login.SessionId;

  const result = await getChkTransactionTable(SessionId);
  console.log("🚀 ~ file: index.js:27 ~ getChkTransactionTableUseCase ~ result:", result);

if (!result){
  console.log("Chk Transaction Table does not exist")
}


;
};
module.exports = {
  deleteChkTransactionTableUseCase,
  getChkTransactionTableUseCase,
};
