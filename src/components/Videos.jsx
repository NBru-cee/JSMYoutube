import React from "react";
import { Stack, Box, CircularProgress } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
      if (!videos?.length) {
            return <CircularProgress />;
      }
      return (
            <Stack
                  direction={direction || "row"}
                  flexWrap="wrap"
                  justifyContent="start"
                  gap={2}
            >
                  {videos.map((item, idx) => (
                        <Box key={idx}>
                              {item.id.videoId && <VideoCard video={item} />}
                              {item.id.channelId && (
                                    <ChannelCard channelDetails={item} />
                              )}
                        </Box>
                  ))}
            </Stack>
      );
};

export default Videos;
