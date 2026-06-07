export const DEFAULT_APP_CONTENT = {
  privacyPolicy: {
    sections: [
      {
        title: 'Information We Use',
        body: 'We use your profile details, listing activity, and device information to operate broker accounts, property listings, notifications, and support workflows inside BrokerLoop.',
      },
      {
        title: 'Why We Use It',
        body: 'Your data helps us show listings, connect brokers and buyers or tenants, deliver notifications, and improve platform reliability.',
      },
      {
        title: 'Sharing and Security',
        body: 'We only share the details needed for listing visibility and broker contact. Sensitive account data is kept behind authenticated APIs.',
      },
      {
        title: 'Need Help',
        body: 'For policy questions or account requests, use Help & Support from the profile screen or contact us through the channels listed on our website.',
      },
    ],
  },
  helpSupport: {
    introTitle: 'Need a hand?',
    introBody:
      'Reach support for account issues, listing problems, notification questions, or onboarding help.',
    channels: [
      {
        type: 'email',
        title: 'Email Support',
        subtitle: 'brokerloopapp@gmail.com',
        value: 'brokerloopapp@gmail.com',
        enabled: true,
      },
      {
        type: 'phone',
        title: 'Call Support',
        subtitle: '+91 98765 43210',
        value: '+919876543210',
        enabled: true,
      },
      {
        type: 'whatsapp',
        title: 'WhatsApp Support',
        subtitle: 'Chat with the support desk',
        value: '919876543210',
        enabled: true,
      },
    ],
  },
}

export function buildSupportUrl(channel) {
  const value = channel.value.trim()
  switch (channel.type) {
    case 'email':
      return `mailto:${value}?subject=${encodeURIComponent('BrokerLoop Support')}`
    case 'phone': {
      const digits = value.replace(/\D/g, '')
      return `tel:+${digits.replace(/^\+/, '')}`
    }
    case 'whatsapp': {
      const digits = value.replace(/\D/g, '')
      return `https://wa.me/${digits}`
    }
    default:
      return value
  }
}
