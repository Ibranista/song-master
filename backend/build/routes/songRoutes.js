"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const songController_1 = require("../controllers/songController");
const router = express_1.default.Router();
router.post("/createSong", songController_1.createSong);
router.get("/", songController_1.listSongs);
router.put("/:id", songController_1.updateSong);
router.delete("/removeAll", songController_1.removeAllSongs);
router.delete("/:id", songController_1.deleteSong);
router.get("/songCount", songController_1.getTotalSongCount);
exports.default = router;
