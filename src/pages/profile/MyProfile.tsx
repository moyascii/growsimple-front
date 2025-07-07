import React, { useState } from 'react';
import { Box, Avatar, IconButton, InputAdornment } from '@mui/material';
import { GSModal } from '../../shared/components/utils/GSModal';
import { GSTabs } from '../../shared/components/navigation/GSTabs';
import { GSInput } from '../../shared/components/inputs/GSInput';
import { GSSwitch } from '../../shared/components/inputs/GSSwitch';
import { GSButtonPrimary, GSButtonSecondary } from '../../shared/components/inputs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PasswordChangedModal from './PasswordChangedModal';

interface MyProfileProps {
  open: boolean;
  onClose: () => void;
}

const tabs = [
  { label: 'General', value: 'general' },
  { label: 'Password', value: 'password' },
];

export const MyProfile: React.FC<MyProfileProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState('general');
  const [notification, setNotification] = useState(true);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <GSModal open={open} onClose={onClose} width={900} maxWidth={1000}>
      <Box sx={{ p: 4, borderRadius: 6, bgcolor: '#fff', minWidth: 600 }}>
        {/* Header y Tabs */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box sx={{ fontWeight: 700, fontSize: 26, color: '#23283A', flex: 1 }}>
            My Profile
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <GSTabs tabs={tabs} value={tab} onChange={setTab} />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <GSButtonSecondary
              startIcon={<span style={{ marginRight: 2 }}><svg width="18" height="18" fill="none" viewBox="0 0 18 18"><rect width="18" height="18" rx="4" fill="#23283A"/><path d="M6.75 9.75h4.5v-1.5h-4.5v1.5Zm0 3h4.5v-1.5h-4.5v1.5Zm-1.5-9v12h9v-12h-9Zm7.5 10.5h-6v-9h6v9Z" fill="#F1BD3E"/></svg></span>}
              sx={{
                bgcolor: '#111629',
                color: '#F1BD3E',
                px: 2,
                py: 0.5,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: 15,
                minWidth: 0,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#181C32' }
              }}
            >
              Billing
            </GSButtonSecondary>
          </Box>
        </Box>
        {/* Avatar y Upload */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 96, height: 96, mb: 1 }} />
            <IconButton sx={{ position: 'absolute', bottom: 8, right: 8, bgcolor: '#3CB5B9', color: '#fff', width: 32, height: 32, border: '2px solid #fff', boxShadow: 1 }}>
              <CloudUploadIcon />
            </IconButton>
          </Box>
        </Box>
        {/* Formulario General */}
        {tab === 'general' && (
          <Box component="form" autoComplete="off">
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <GSInput label="First Name" required defaultValue="Kris" sx={{ flex: 1 }} />
              <GSInput label="Last Name" required defaultValue="Land" sx={{ flex: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <GSInput label="Email" required defaultValue="kland@krisland.com" sx={{ flex: 1 }} />
              <GSInput label="Role" required defaultValue="Design" sx={{ flex: 1 }} />
            </Box>
            <GSInput label="Company Information" required defaultValue="Market Creations, LLC" sx={{ mb: 2 }} />
            <GSSwitch label="Enable Notification" checked={notification} onChange={e => setNotification(e.target.checked)} sx={{ mb: 3 }} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
              <GSButtonSecondary onClick={onClose}>Cancel</GSButtonSecondary>
              <GSButtonPrimary type="submit">Save Changes</GSButtonPrimary>
            </Box>
          </Box>
        )}
        {/* Formulario Password */}
        {tab === 'password' && (
          <Box component="form" autoComplete="off" onSubmit={e => { e.preventDefault(); setShowSuccess(true); }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <GSInput label="First Name" required defaultValue="Kris" sx={{ flex: 1 }} />
              <GSInput label="Last Name" required defaultValue="Land" sx={{ flex: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <GSInput
                label="Old Password"
                required
                type={showOldPassword ? 'text' : 'password'}
                defaultValue="************"
                sx={{ flex: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle old password visibility"
                        onClick={() => setShowOldPassword((show) => !show)}
                        edge="end"
                        size="small"
                      >
                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <GSInput
                label="New Password"
                required
                type={showNewPassword ? 'text' : 'password'}
                defaultValue="************"
                sx={{ flex: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle new password visibility"
                        onClick={() => setShowNewPassword((show) => !show)}
                        edge="end"
                        size="small"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <GSButtonPrimary type="submit">Update Password</GSButtonPrimary>
            </Box>
          </Box>
        )}
      </Box>
      <PasswordChangedModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </GSModal>
  );
};

export default MyProfile; 