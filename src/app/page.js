import MusicsPage from "./musics/page";
import styles from "./page.module.css";
import PodcastsPage from "./podcasts/page";
import VideosPage from "./videos/page";

export default function Home() {
  return (
    <>
      <h2>Ínicio</h2>
      <VideosPage/>
      <MusicsPage/>
      <PodcastsPage/>
    </>
  )
}
