import { PrismaClient, Video, Prisma } from '@prisma/client'


export class VideoRepository {
    private readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
    }

    async findById(id: string): Promise<Video> {
        const foundVideo = await this.prisma.video.findUnique({where: {
            id
        }})
        if (foundVideo) {
            return foundVideo
        } 
        throw Error(`Video with id ${id} not found`)

    }
    async findAll(): Promise<Video[]> {
       return this.prisma.video.findMany()
    }

    async create(data: Prisma.VideoCreateInput): Promise<Video> {
        return this.prisma.video.create({
            data
        })
    }
}