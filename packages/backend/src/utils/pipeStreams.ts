import { PassThrough, pipeline, Readable, Stream, Transform, Writable } from 'stream'

export async function pipeStreams (streamsToPipe: Array<Readable | PassThrough | Transform | Writable>): Promise<void> {
    return new Promise((resolve, reject) => {
      pipeline(
        streamsToPipe,
        function (err: any) {
          if (err) return reject(err)
          return resolve()
        })
    })
  }