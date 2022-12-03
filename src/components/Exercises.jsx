import { Box, Pagination, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  )

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercises = async () => {
      const url =
        bodyPart === 'all'
          ? 'https://exercisedb.p.rapidapi.com/exercises'
          : `https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodyPart}`

      const data = await fetchData(url, exerciseOptions)
      setExercises([...data])
    }

    fetchExercises()
  }, [bodyPart, setExercises])

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: '110px' },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map(exercise => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 ? (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        ) : (
          ''
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
