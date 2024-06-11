require('dotenv').config();
import * as env from 'env-var';


export const serverConfig = {
    port: env.get("SRV_PORT").asPortNumber()
}

export const databaseConfig = {
    uri: env.get("DATABASE_URL").asUrlString()
}

