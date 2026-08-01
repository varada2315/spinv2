// Centralized Lead Service for Google Sheets / Webhook / CRM Integration
export const submitLeadToCRM = async (leadData, source = 'General Enquiry') => {
  const payload = {
    timestamp: new Date().toISOString(),
    source,
    ...leadData
  };

  console.log(`[Spin Lead Service] Processing lead payload from ${source}:`, payload);

  // Webhook integration endpoint (Google Sheets Apps Script, Zapier, Make.com, HubSpot)
  const webhookUrl = import.meta.env?.VITE_CRM_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('[Spin Lead Service] Webhook forwarding failed:', err);
    }
  }

  // Generate formatted WhatsApp message URL
  const messageLines = [`Hello Spin Global! *${source}*`];
  Object.entries(leadData).forEach(([key, val]) => {
    if (val) {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      if (typeof val === 'object' && !Array.isArray(val)) {
        messageLines.push(`• *${formattedKey}:*`);
        Object.entries(val).forEach(([subKey, subVal]) => {
          if (subVal) {
            const formattedSubKey = subKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            messageLines.push(`   - ${formattedSubKey}: ${subVal}`);
          }
        });
      } else {
        messageLines.push(`• *${formattedKey}:* ${val}`);
      }
    }
  });

  const encodedMessage = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/916284661722?text=${encodedMessage}`;
};
