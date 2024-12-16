import React from 'react';
import PasswordChange from './security/PasswordChange';
import TwoFactorAuth from './security/TwoFactorAuth';
import DeviceManager from './security/DeviceManager';
import PrivacySettings from './security/PrivacySettings';

export default function SecurityPanel() {
  return (
    <div className="p-4 space-y-4">
      <PasswordChange />
      <TwoFactorAuth />
      <DeviceManager />
      <PrivacySettings />
    </div>
  );
}