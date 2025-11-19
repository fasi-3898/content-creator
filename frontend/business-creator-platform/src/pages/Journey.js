// src/pages/Journey.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Person,
  Business,
  ConnectWithoutContact,
  Campaign,
  Analytics,
  MonetizationOn,
  CheckCircle,
  ArrowForward,
  PlayArrow,
  Star,
  TrendingUp
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import Header from '../components/Header';
import { responsiveConfig } from '../config/responsiveConfig';
import Layout from '../components/Layout';

// Custom animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 65, 78, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 65, 78, 0.6); }
`;

const pathLineAnimation = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const Journey = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const journeyPaths = [
    {
      step: 1,
      title: 'Sign Up & Create Profile',
      description: 'Join our platform and create your personalized profile. Showcase your skills, portfolio, and expertise to attract the right opportunities.',
      icon: Person,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Quick Registration', 'Profile Verification', 'Portfolio Setup'],
      duration: 400,
      iconBg: '#667eea'
    },
    {
      step: 2,
      title: 'Define Your Goals',
      description: 'Set clear objectives for your collaboration. Whether you\'re a business seeking creators or a creator looking for projects, define what success looks like.',
      icon: Business,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Goal Setting', 'Target Audience', 'Success Metrics'],
      duration: 600,
      iconBg: '#f093fb'
    },
    {
      step: 3,
      title: 'Discover & Connect',
      description: 'Browse through curated profiles and find perfect matches. Use our smart matching algorithm to connect with ideal partners.',
      icon: ConnectWithoutContact,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Smart Matching', 'Direct Messaging', 'Video Calls'],
      duration: 800,
      iconBg: '#4facfe'
    },
    {
      step: 4,
      title: 'Collaborate & Create',
      description: 'Work together seamlessly with our collaboration tools. Share files, track progress, and maintain clear communication throughout the project.',
      icon: Campaign,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: ['Project Management', 'File Sharing', 'Real-time Updates'],
      duration: 1000,
      iconBg: '#43e97b'
    },
    {
      step: 5,
      title: 'Track & Analyze',
      description: 'Monitor your campaign performance with detailed analytics. Understand engagement, reach, and ROI with comprehensive reporting.',
      icon: Analytics,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      features: ['Performance Analytics', 'ROI Tracking', 'Audience Insights'],
      duration: 1200,
      iconBg: '#fa709a'
    },
    {
      step: 6,
      title: 'Grow & Monetize',
      description: 'Scale your success and maximize earnings. Build long-term partnerships and unlock new revenue streams with our platform.',
      icon: MonetizationOn,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      features: ['Revenue Growth', 'Partnership Scaling', 'Premium Features'],
      duration: 1400,
      iconBg: '#a8edea',
      textColor: '#000'
    }
  ];

  // Get responsive configuration based on screen size
  const getResponsiveConfig = (section, key) => {
    const deviceType = isMobile ? 'mobile' : 'desktop';
    return responsiveConfig[section][deviceType][key];
  };

  const PathConnector = ({ isLast }) => (
    <Box
      sx={{
        position: 'absolute',
        top: 80,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        height: isLast ? '0px' : '100px',
        background: 'linear-gradient(180deg, #ff414e, #ff8928, #ffde22)',
        animation: `${pulseGlow} 2s ease-in-out infinite`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '12px solid #ffde22',
        }
      }}
    />
  );

  const AnimatedCard = ({ path, index, total }) => {
    const IconComponent = path.icon;
    
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
          alignItems: 'center',
          mb: 8,
          '&:hover': {
            '& .journey-card': {
              transform: 'translateY(-10px) scale(1.02)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
            },
            '& .journey-icon': {
              animation: `${floatAnimation} 1s ease-in-out infinite`,
              transform: 'scale(1.1)',
            }
          }
        }}
      >
        {/* Path Number and Connector */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: isMobile ? 0 : 4,
            mb: isMobile ? 2 : 0,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: path.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              animation: `${pulseGlow} 3s ease-in-out infinite`,
              border: '4px solid white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
            className="journey-icon"
          >
            <IconComponent 
              sx={{ 
                fontSize: 40, 
                color: 'white',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </Box>
          
          <Box
            sx={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: '#ff414e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              border: '2px solid white',
              animation: `${floatAnimation} 2s ease-in-out infinite`,
            }}
          >
            {path.step}
          </Box>

          {/* Connector Line */}
          {!isMobile && index < total - 1 && (
            <Box
              sx={{
                position: 'absolute',
                top: 80,
                width: '2px',
                height: '200px',
                background: 'linear-gradient(180deg, #ff414e, #ff8928, #ffde22)',
                animation: `${pulseGlow} 2s ease-in-out infinite`,
                zIndex: 1,
              }}
            />
          )}
        </Box>

        {/* Content Card */}
        <Card
          className="journey-card"
          sx={{
            flex: 1,
            maxWidth: isMobile ? '100%' : '500px',
            background: path.gradient,
            color: path.textColor || 'white',
            borderRadius: '25px',
            p: 0,
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            transition: 'all 0.4s ease',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
              animation: `${pulseGlow} 3s ease-in-out infinite`,
            }
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom 
              fontWeight="bold"
              sx={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {path.title}
              <Star sx={{ fontSize: 30, color: 'gold' }} />
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                opacity: 0.9,
                lineHeight: 1.6 
              }}
            >
              {path.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              {path.features.map((feature, featureIndex) => (
                <Box
                  key={featureIndex}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                    animation: `fadeInUp 0.6s ease-out ${featureIndex * 0.2}s both`,
                    '@keyframes fadeInUp': {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    }
                  }}
                >
                  <CheckCircle 
                    sx={{ 
                      mr: 2, 
                      color: 'limegreen',
                      fontSize: 20 
                    }} 
                  />
                  <Typography variant="body1" fontWeight="medium">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pt: 2,
                borderTop: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PlayArrow sx={{ mr: 1 }} />
                <Typography variant="body2" fontWeight="medium">
                  Start this step
                </Typography>
              </Box>
              <ArrowForward sx={{ color: 'white' }} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dynamic Header */}
      <Header 
        transparent={true}
        logo="SpotSource"
        logoVariant={getResponsiveConfig('header', 'logoVariant')}
        showBlurEffect={getResponsiveConfig('header', 'blurEffect')}
        height={getResponsiveConfig('header', 'height')}
        padding={getResponsiveConfig('header', 'padding')}
      />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
              mb: 3,
            }}
          >
            Your Success Journey
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              mb: 4,
            }}
          >
            Follow our proven 6-step path to connect, collaborate, and create amazing content together
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <TrendingUp sx={{ fontSize: 40, color: 'gold' }} />
            <Typography variant="h6" fontWeight="medium">
              95% Success Rate
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Journey Path */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ position: 'relative' }}>
          {/* Main Timeline Line */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(180deg, #ff414e, #ff8928, #ffde22, #43e97b, #4facfe, #a8edea)',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  background: '#ff414e',
                  borderRadius: '50%',
                  animation: `${pulseGlow} 2s ease-in-out infinite`,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  background: '#a8edea',
                  borderRadius: '50%',
                  animation: `${pulseGlow} 2s ease-in-out infinite`,
                  animationDelay: '1s',
                }
              }}
            />
          )}

          {/* Journey Steps */}
          {journeyPaths.map((path, index) => (
            <AnimatedCard
              key={path.step}
              path={path}
              index={index}
              total={journeyPaths.length}
            />
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            p: 6,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(45deg, #ffffff, #ffde22)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 3,
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              color: 'white',
              opacity: 0.9,
            }}
          >
            Join thousands of successful creators and businesses who have transformed their collaborations
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {journeyPaths.slice(0, 3).map((path) => (
              <Box
                key={path.step}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: path.gradient,
                    mr: 1,
                  }}
                />
                <Typography variant="body2" color="white">
                  Step {path.step}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Layout>
    </Layout>
    </Box>
  );
};

export default Journey;