import '../css/RecommendedVideos.css';
import { useState } from 'react';
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import CircularProgress from '@material-ui/core/CircularProgress';
import VideoCard from './VideoCard';

let initialVideos = [];
for (let i = 0; i < 20; i++)
  initialVideos.push(<VideoCard image="https://cdn.eso.org/images/thumb300y/eso1907a.jpg" />);

export default function RecommendedVideos() {
  const [videos, setVideos] = useState(initialVideos);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  function fetchMoreListItems() {
    for (let i = 0; i < 20; i++) {
      initialVideos.push(<VideoCard image="https://cdn.eso.org/images/thumb300y/eso1907a.jpg" />);
    }
    setTimeout(() => {
      setVideos(initialVideos)
      setIsFetching(false);
    }, 1000);
  }
  return (
    <div className="RecommendedVideos">
      {videos.map(video => video)}
      {isFetching ? <div className="Reload"><CircularProgress /></div> : null}
    </div>
  )
}
