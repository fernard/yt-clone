import {join} from 'path'
import { AppConfig } from '../config/appConfig'


export class StorageHelper {
    private readonly SOURCE_FILES_FOLDER = 'sourceFiles'
    private readonly  THUMBNAILS_FOLDER = 'thumbnails'
    private readonly  VIDEO_EXT = '.mp4'
    private readonly  THUMBNAIL_EXT = '.png' 

    getSourceFilePath = (videoId: string) => {
        return join(AppConfig.getInstance().getStoragePath(), this.SOURCE_FILES_FOLDER, `${videoId}${this.VIDEO_EXT}`)
    }

    getThumbnailPath = (videoId: string) => {
        return join(AppConfig.getInstance().getStoragePath(), this.THUMBNAILS_FOLDER, `${videoId}${this.THUMBNAIL_EXT}`)
    }

    getVideoExtension() {
        return this.VIDEO_EXT
    }

    getThumbnailExtension() {
        return this.THUMBNAIL_EXT
    }
}

