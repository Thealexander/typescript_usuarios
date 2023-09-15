"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'root', 'home.1705', {
    host: '192.168.1.9',
    port: 3309,
    dialect: 'mariadb',
    //logging:false
});
exports.default = db;
//# sourceMappingURL=cn.js.map