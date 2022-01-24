import 'dotenv/config'

export class AppConfig {
    private static instance: AppConfig
    private readonly port: number;
    private readonly storagePath: string;

    private constructor() {
        this.port = Number(process.env.APP_PORT) || 3001
        this.storagePath = process.env.STORAGE_PATH || './'
    }
    public getPort() {
        return this.port
    }

    public getStoragePath() {
        return this.storagePath
    }

    public static getInstance() {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig()
        }
        return AppConfig.instance

    }
}

