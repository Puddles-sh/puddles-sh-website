import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/mjgqdojl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-split">

      <div className="contact-card">
        <p className="eyebrow">Self-Hosted</p>
        <h2 className="contact-card-heading">Runs on your hardware.</h2>
        <p className="contact-card-body">
          Puddles runs on infrastructure you own — local inference, your Key Vault,
          your audit log. We deploy it, tune it to your environment, and operate it.
          Your team writes requests in plain English and approves the work.
        </p>
        <ul className="contact-card-checklist">
          <li>39 validated PowerShell scripts across Graph, Exchange, Defender, and Teams</li>
          <li>Human approval gate built in — cannot be configured away</li>
          <li>Full audit trail on every run, every decision, every action</li>
          <li>Multi-tenant — one instance, isolated config and audit log per client</li>
        </ul>
      </div>

      <div className="contact-card">
        <p className="eyebrow">Get in touch</p>
        <h2 className="contact-card-heading">Talk to us about deployment.</h2>
        <p className="contact-card-body">
          Need help deploying Puddles for your team or your clients? We work with
          MSPs and regulated-industry IT teams on managed deployments and custom
          integrations.
        </p>

        {status === 'success' ? (
          <div className="form-success">
            <p>Message received — we'll be in touch at <strong>{form.email}</strong>.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                id="company" name="company" type="text"
                value={form.company} onChange={handleChange}
                placeholder="MSP or company name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">What are you trying to solve?</label>
              <textarea
                id="message" name="message" rows={4}
                value={form.message} onChange={handleChange}
                placeholder="Tell us about your environment — tenant count, what you're managing, what's taking too long."
              />
            </div>
            {status === 'error' && (
              <p className="form-error">
                Something went wrong. Email us directly at{' '}
                <a href="mailto:contact@puddles.sh">contact@puddles.sh</a>
              </p>
            )}
            <button
              type="submit"
              className="button primary form-submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
