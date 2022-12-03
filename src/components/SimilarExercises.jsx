import { Box, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant="h3" mb="5">
        Exercises that target the same muscle group
      </Typography>
      {targetMuscleExercises.length ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
      <Typography variant="h3">Exercises with the same equipment</Typography>
      {equipmentExercises.length ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Box>
  )
}

export default SimilarExercises
