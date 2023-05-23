const router = require("express").Router();
const makeExpressCallback = require("../express-callback");

const { deleteTableController } = require("../controllers/delete-table");
const { getTableController } = require("../controllers/get-table");

router.delete("/delete-chk-transaction", makeExpressCallback(deleteTableController));
router.get("/get-chk-transaction", makeExpressCallback(getTableController));
module.exports = router;
