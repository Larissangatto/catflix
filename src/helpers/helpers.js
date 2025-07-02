export function objectToArray(object){
    return Object
    .entries(object)
    .map(([key,data])=>({
        key,
        ...data
    }))
}

export function getRandomItem(array){
    return array[Math.floor(Math.random()*array.length)]
}

export function radomizerArray(array){
    return [...array].sort(()=>Math.random()-0.5)
}

export function removeDuplicates(array){
    return array.filter((item,index)=>
        array.indexOf(item)===index
    )
}
export  async function getVideos(tag, subTag){
    const response = await fetch('/api/videos',{
        method: 'POST',
        next:{revalidate:30}
    })
    const videos = await response.json()
    const videosList = objectToArray(videos)

    return videosList.filter(video => {
    const tags = video.tags || [];
    return (!tag || tags[0] === tag) &&
           (!subTag || tags[1] === subTag);
  })

}