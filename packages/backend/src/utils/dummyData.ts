import { Video } from "@prisma/client";

type PrepopulatedVideo = Omit<Video, 'createdAt'>

export const videoRecords: PrepopulatedVideo[] = [
    {
        id: '1c4615fb-3501-4ca2-8510-c813501f75cb',
        title: 'Earth rotating from space',
        description: 'Breathtaking view of our planet',
        duration: 30,
        publishedBy: 'someUser',
    },
    {
        id: 'ff5186e8-3528-485c-bd4d-11f415756a5c',
        title: 'Bunny Animated',
        description: 'Cool animated movie',
        duration: 62,
        publishedBy: 'someUser',
    }
]