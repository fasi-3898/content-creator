import React from 'react';
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  Phone,
  LocationOn,
  Link,
  Send
} from '@mui/icons-material';

const CreatorForm = ({ formData, onChange, onSubmit }) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={onChange}
        required
        size="small"
        sx={{
          mb: 1.5,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover fieldset': { borderColor: '#ffde22' },
            '&.Mui-focused fieldset': { borderColor: '#ffde22' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        }}
      />
      
      <TextField
        fullWidth
        label="City/Place"
        name="place"
        value={formData.place}
        onChange={onChange}
        required
        size="small"
        InputProps={{
          startAdornment: <LocationOn sx={{ color: '#ffde22', mr: 1, fontSize: '18px' }} />,
        }}
        sx={{
          mb: 1.5,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover fieldset': { borderColor: '#ffde22' },
            '&.Mui-focused fieldset': { borderColor: '#ffde22' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        }}
      />
      
      <TextField
        fullWidth
        label="Contact Number/Email"
        name="contact"
        value={formData.contact}
        onChange={onChange}
        required
        size="small"
        InputProps={{
          startAdornment: <Phone sx={{ color: '#ffde22', mr: 1, fontSize: '18px' }} />,
        }}
        sx={{
          mb: 1.5,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover fieldset': { borderColor: '#ffde22' },
            '&.Mui-focused fieldset': { borderColor: '#ffde22' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        }}
      />
      
      <TextField
        fullWidth
        label="Instagram Profile"
        name="instagram"
        value={formData.instagram}
        onChange={onChange}
        size="small"
        InputProps={{
          startAdornment: <Link sx={{ color: '#ffde22', mr: 1, fontSize: '18px' }} />,
        }}
        sx={{
          mb: 1.5,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover fieldset': { borderColor: '#ffde22' },
            '&.Mui-focused fieldset': { borderColor: '#ffde22' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        }}
      />
      
      <TextField
        fullWidth
        label="YouTube Channel"
        name="youtube"
        value={formData.youtube}
        onChange={onChange}
        size="small"
        InputProps={{
          startAdornment: <Link sx={{ color: '#ffde22', mr: 1, fontSize: '18px' }} />,
        }}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
            '&:hover fieldset': { borderColor: '#ffde22' },
            '&.Mui-focused fieldset': { borderColor: '#ffde22' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
        }}
      />
      
      <FormControlLabel
        control={
          <Checkbox
            name="readyForCollabs"
            checked={formData.readyForCollabs}
            onChange={onChange}
            size="small"
            sx={{
              color: '#ffde22',
              '&.Mui-checked': {
                color: '#ffde22',
              },
            }}
          />
        }
        label="Are you ready to do better collabs if we sent any products?"
        sx={{ 
          color: 'rgba(255,255,255,0.9)',
          mb: 2,
          display: 'block',
          '& .MuiTypography-root': {
            fontSize: '0.875rem',
          }
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="medium"
        endIcon={<Send />}
        sx={{
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #fee140 0%, #fa709a 100%)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          py: 1,
        }}
      >
        Join as Creator
      </Button>
    </Box>
  );
};

export default CreatorForm;