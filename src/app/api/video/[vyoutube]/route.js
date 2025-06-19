import { NextResponse } from "next/server";
import { objectToArray } from '@/helpers/helpers';
import { getVideos } from '@/helpers/helpers-server';

export async function GET(_, { params }){
    const {vyoutube} = await params
    const videos = await getVideos()
    const videosList = objectToArray(videos)
    const video = videosList.find(video => video.key === vyoutube) ?? null

    return NextResponse.json(video, {status: video? 200 : 404 })
}