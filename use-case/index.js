const {
  loginSL,
  deleteChkTransactionTable,
  getChkTransactionTable,
} = require("../data-access/index");

const deleteChkTransactionTableUseCase = async () => {
  const login = await loginSL();
  const SessionId = login.SessionId;

  const result = await deleteChkTransactionTable(SessionId);

  if (!result) {
    return { msg: "Chk Transaction deleted successfully." };
  }
  return result;
};

const getChkTransactionTableUseCase = async () => {
  const login = await loginSL();
  const SessionId = login.SessionId;

  const result = await getChkTransactionTable(SessionId);

  return result;
};
module.exports = {
  deleteChkTransactionTableUseCase,
  getChkTransactionTableUseCase,
};
