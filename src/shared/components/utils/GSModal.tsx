import { Modal, Box } from '@mui/material';
import React from 'react';

export interface GSModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number | string;
  maxWidth?: number | string;
}

export const GSModal = ({ open, onClose, children, width = 540, maxWidth = 600, ...props }: GSModalProps) => (
  <Modal open={open} onClose={onClose} {...props}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: 6,
        boxShadow: 24,
        p: 0,
        width,
        maxWidth,
        outline: 'none',
      }}
    >
      {children}
    </Box>
  </Modal>
); 