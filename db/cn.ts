import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'home.1705', {
    host: '192.168.1.9',
    port: 3309,
    dialect: 'mariadb',
    //logging:false
});

export default db;