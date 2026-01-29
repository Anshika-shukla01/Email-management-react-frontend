import { apiFetch } from './client';

export function sendEmail(subject: string, message: string) {
  return apiFetch('/send-email', {
    method: 'POST',
    body: JSON.stringify({
      subject,
      body: message,
      recipients: ['owner@email.com']
    })
  });
}

export function getSentEmails() {
  return apiFetch('/emails');
}
