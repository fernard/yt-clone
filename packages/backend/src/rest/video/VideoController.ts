
import express from 'express';
import { VideoDto } from 'shared';
import { HttpException } from '../../exceptions/HttpException';
import { VideoRepository } from '../../persistence/video/VideoRepository';

import { Controller } from "../types/Controller";
import { VideoMapper } from './VideoMapper';
import { GetVideoParams } from './VideoParams';

import { VideoService } from '../../services/VideoService';
import { videoRecords } from '../../utils/dummyData';

export class VideoController extends Controller {
    protected path = '/api/videos'
    private readonly videoRepository: VideoRepository
    private readonly videoService: VideoService
    constructor() {
        super();
        this.videoRepository = new VideoRepository()
        this.videoService = new VideoService()
        this.intializeRoutes();
    }

    protected intializeRoutes() {
        this.router.get(this.path, this.getAllVideos);
        this.router.get(`${this.path}/:videoId`, this.getById)
        this.router.get(`${this.path}/thumbnails/:videoId`, this.getThumbnail)
        this.router.get(`${this.path}/sourceFiles/:videoId`, this.getSourceFile)
        this.router.post(`${this.path}/prepopulate`, this.prepopulateDb)

    }

    private getById = async (request: express.Request<GetVideoParams>, response: express.Response<VideoDto>, next: express.NextFunction) => {
        try {
            const id = request.params.videoId
            const video = await this.videoRepository.findById(id);
            response.json(VideoMapper.toDto(video));
   
        } catch(err: any) {
            next(new HttpException(404, err.message));
        }

    }
    private getAllVideos = async (request: express.Request, response: express.Response<VideoDto[]>, next: express.NextFunction) => {
        try {
            const videos = await this.videoRepository.findAll();
            const videosDto = videos.map(VideoMapper.toDto)
            response.json(videosDto);
   
        } catch(err: any) {
            next(new HttpException(404, err.message));
        }

    }

    private getThumbnail = async (request: express.Request<GetVideoParams>, response: express.Response, next: express.NextFunction) => {
        try {
            const id = request.params.videoId
            return this.videoService.getThumbnail(id, response)
        } catch(err: any) {
            next(new HttpException(404, err.message));
        }

    }

    private getSourceFile = async (request: express.Request<GetVideoParams>, response: express.Response, next: express.NextFunction) => {
        try {
            const id = request.params.videoId
            return this.videoService.getSourceFile(id, response)
        } catch(err: any) {
            next(new HttpException(404, err.message));
        }

    }

    private prepopulateDb = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            for (const record of videoRecords) {
                await this.videoRepository.create({
                    id: record.id,
                    title: record.title,
                    description: record.description,
                    duration: record.duration,
                    publishedBy: record.publishedBy
                })
            }
            response.json({message: 'Ok'});
        } catch(err: any) {
            next(new HttpException(400, err.message));
        }

    }
}