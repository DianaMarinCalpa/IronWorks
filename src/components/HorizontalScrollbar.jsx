import { Box, Stack } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Stack direction="row" sx={{ gap: { lg: '30px', xs: '10px' } }} flexWrap="wrap" justifyContent="center">
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </Box>
    ))}
  </Stack>
);

export default HorizontalScrollbar;
