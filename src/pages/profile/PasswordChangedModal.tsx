import React from 'react';
import { Box, Typography } from '@mui/material';
import { GSModal } from '../../shared/components/utils/GSModal';
import { GSButtonPrimary } from '../../shared/components/inputs';
import savePasswordImg from '../../assets/images/save-password.png';

interface PasswordChangedModalProps {
  open: boolean;
  onClose: () => void;
}

export const PasswordChangedModal: React.FC<PasswordChangedModalProps> = ({ open, onClose }) => (
  <GSModal open={open} onClose={onClose} width={400}>
    <Box sx={{
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 6,
      bgcolor: '#fff',
      textAlign: 'center',
      minWidth: 320
    }}>
      <Box mb={2}>
        <img src={savePasswordImg} alt="Password changed" style={{ width: 120, height: 120, objectFit: 'contain' }} />
      </Box>
      <Typography sx={{ color: '#23283A', fontWeight: 500, fontSize: 16, mb: 0.5 }}>
        your password has been changed
      </Typography>
      <Typography sx={{ color: '#23283A', fontWeight: 700, fontSize: 24, mb: 3 }}>
        Successfully
      </Typography>
      <GSButtonPrimary
        sx={{
          width: 180,
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 18,
          background: 'linear-gradient(90deg, #3CB5B9 0%, #5BE584 100%)'
        }}
        onClick={onClose}
      >
        Continue
      </GSButtonPrimary>
    </Box>
  </GSModal>
);

export default PasswordChangedModal; 