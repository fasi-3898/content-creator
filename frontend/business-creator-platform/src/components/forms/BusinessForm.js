import React from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Send
} from '@mui/icons-material';

const BusinessForm = ({ formData, onChange, onSubmit }) => {
  return (
    <Grid container sx={{ height: '100%', minHeight: '60vh' }}>
      {/* Left Side - Image (50%) */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Business Collaboration"
          sx={{
            width: '90%',
            height: '90%',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '20px',
            display: 'block',
          }}
        />
      </Grid>

      {/* Right Side - Form (50%) */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box 
          component="form" 
          onSubmit={onSubmit}
          sx={{
            width: '100%',
            px: { xs: 2, md: 4 },
            py: { xs: 3, md: 0 },
          }}
        >
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={onChange}
            required
            size="small"
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
          
          <TextField
            fullWidth
            label="Business Name"
            name="business"
            value={formData.business}
            onChange={onChange}
            required
            size="small"
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
          
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            size="small"
            InputProps={{
              startAdornment: <Phone sx={{ color: '#ffde22', mr: 1, fontSize: '18px' }} />,
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
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            required
            size="small"
            InputProps={{
              startAdornment: <Email sx={{ color: '#ffde22', mr: 1, fontSize: '18px' }} />,
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
          
          <TextField
            fullWidth
            label="Business Address"
            name="address"
            multiline
            rows={2}
            value={formData.address}
            onChange={onChange}
            size="small"
            InputProps={{
              startAdornment: <LocationOn sx={{ color: '#ffde22', mr: 1, mt: 1.5, fontSize: '18px' }} />,
            }}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: '#ffde22' },
                '&.Mui-focused fieldset': { borderColor: '#ffde22' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="medium"
            endIcon={<Send />}
            sx={{
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #38f9d7 0%, #43e97b 100%)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              py: 1.5,
            }}
          >
            Send Business Inquiry
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BusinessForm;