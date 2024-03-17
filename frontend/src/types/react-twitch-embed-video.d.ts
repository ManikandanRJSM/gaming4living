// types/react-twitch-embed-video.d.ts

declare module 'react-twitch-embed-video' {
    import React from 'react';
  
    interface TwitchEmbedVideoOptions {
      width?: number;
      height?: number;
      channel: string;
      theme: string;
    }
  
    const ReactTwitchEmbedVideo: React.FC<TwitchEmbedVideoOptions>;
    export default ReactTwitchEmbedVideo;
  }