import { Video } from "@prisma/client";
import { VideoDto } from "shared";

export class VideoMapper {
    public static toDto(video: Video): VideoDto {
        return {
            id: video.id,
            title: video.title,
            description: video.description,
            duration: video.duration,
            publishedBy: video.publishedBy,
            createdAt: video.createdAt.toLocaleDateString(),

        }
    }
}