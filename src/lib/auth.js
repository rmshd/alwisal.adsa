/**
 * Al-Wisal Demo Auth Module
 * Web Crypto SHA-256 password hashing + salt, session in localStorage.
 */

import { CAMP_FACTS } from '../config';
import { loadStore } from './store';

const AUTH_KEY = 'alwisal_auth_session';
const SALT = 'alwisal_demo_salt_2026';

export async function hashPassword(password, salt = SALT) {
  const enc = new TextEncoder();
  const data = enc.encode(password + ':' + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveUserSession(user) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  window.dispatchEvent(new CustomEvent('alwisal_auth_changed', { detail: user }));
}

export function logout() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new CustomEvent('alwisal_auth_changed', { detail: null }));
}

export async function loginAdmin(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const primaryAdmin = CAMP_FACTS.demoCredentials.admin.email.toLowerCase();
  const altAdmin = (CAMP_FACTS.demoCredentials.admin.altEmail || '').toLowerCase();
  
  const isPrimary = cleanEmail === primaryAdmin && password === CAMP_FACTS.demoCredentials.admin.password;
  const isAlt = cleanEmail === altAdmin && password === CAMP_FACTS.demoCredentials.admin.altPassword;

  if (!isPrimary && !isAlt) {
    throw new Error('Invalid administrator email or password.');
  }

  const session = {
    role: 'admin',
    email: cleanEmail,
    name: 'Camp Administrator',
    loginAt: new Date().toISOString()
  };

  saveUserSession(session);
  return session;
}

export async function loginStudent(phone, password) {
  const cleanPhone = phone.replace(/\D/g, '');
  const expectedPhone = CAMP_FACTS.demoCredentials.student.phone;
  const expectedPass = CAMP_FACTS.demoCredentials.student.password;

  const store = loadStore();
  const reg = store.registrations.find(r => r.phone.replace(/\D/g, '') === cleanPhone);

  if (!reg && cleanPhone !== expectedPhone) {
    throw new Error('No registration found for this mobile number.');
  }

  if (password !== expectedPass && password !== 'wisal123') {
    throw new Error('Incorrect password. Demo password is: wisal123');
  }

  const studentData = reg || {
    ref: CAMP_FACTS.demoCredentials.student.passRef,
    name: CAMP_FACTS.demoCredentials.student.name,
    phone: cleanPhone,
    dars: CAMP_FACTS.demoCredentials.student.dars,
    district: 'Malappuram',
    status: 'Confirmed'
  };

  const session = {
    role: 'student',
    phone: cleanPhone,
    name: studentData.name,
    ref: studentData.ref,
    dars: studentData.dars,
    district: studentData.district,
    status: studentData.status || 'Confirmed',
    loginAt: new Date().toISOString()
  };

  saveUserSession(session);
  return session;
}
