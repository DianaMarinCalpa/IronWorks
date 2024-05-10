import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #E13035', background: '#fff', borderBottomLeftRadius: '20px', width: '180px', height: '50px', cursor: 'pointer', gap: '5px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '180px', height: '50px', cursor: 'pointer', gap: '5px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    
    <Typography fontSize="24px" fontWeight="bold" fontFamily="roboto" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
