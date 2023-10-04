import { Sequelize } from "sequelize";

/* Esto es para entorno LOCAL
export const sequelize = new Sequelize("post_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
}); */

const DB_URI = process.env.CONNECTION_URI
export const sequelize = new Sequelize(DB_URI,{
    dialect: "mysql",
}); 

export const startDb = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: true });
        await sequelize.sync();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};