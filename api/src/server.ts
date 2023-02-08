import * as dotenv from "dotenv"
dotenv.config({ path: `${ __dirname }/.env` })

import { AppDataSource } from './data-source'
import { seedMasterSuite } from './seeds/seedMasterSuite'
import { app } from './app'

const startApp = async () => {
    if (!process.env.DATABASE) {
        console.log('Missing database filename in env config...')
        process.exit(9)
    }

    await AppDataSource.initialize();

    await seedMasterSuite()

    if (!process.env.PORT) {
        console.error('Missing app port in env config...')
        process.exit(9)
    }

    const port = process.env.PORT
    return app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}

startApp().then(r => console.log('App running'));

