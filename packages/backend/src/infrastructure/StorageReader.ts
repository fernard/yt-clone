import fs from 'fs'

export class StorageReader {
    getReadStream(filePath: string) {
        const stream = fs.createReadStream(filePath)
        return stream
    }
}

