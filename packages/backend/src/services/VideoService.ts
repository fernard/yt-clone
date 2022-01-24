import express from 'express';
import { StorageReader } from '../infrastructure/StorageReader';
import { pipeStreams } from '../utils/pipeStreams';
import { StorageHelper } from '../utils/StorageHelper';

export class VideoService {
    private storageReader: StorageReader
    private storageHelper: StorageHelper

    constructor() {
        this.storageReader = new StorageReader()
        this.storageHelper = new StorageHelper()
    }
    async getThumbnail(id: string,  response: express.Response) {
        const readStream = this.storageReader.getReadStream(this.storageHelper.getThumbnailPath(id))
        response.attachment(`${id}_thumbnail${this.storageHelper.getThumbnailExtension()}`)
        return pipeStreams([readStream, response])   
    }

    async getSourceFile(id: string,  response: express.Response) {
        const readStream = this.storageReader.getReadStream(this.storageHelper.getSourceFilePath(id))
        response.attachment(`${id}_video${this.storageHelper.getVideoExtension()}`)
        return pipeStreams([readStream, response])   
    }
}