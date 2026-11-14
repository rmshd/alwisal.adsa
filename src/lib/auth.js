/**
 * Al-Wisal Demo Auth Module
 * Web Crypto SHA-256 password hashing + salt, session in localStorage, route guards.
 */

import { CAMP_FACTS } from '../config';
import { loadStore } from './store';

const AUTH_KEY = 'alwisal_auth_session';
const SALT = 'alwisal_demo_salt_2026';

// Cryptographic hash function using Web Crypto API
export async function hashPassword(password, salt = SALT) {
  const enc = new TextEncoder();
  const data = enc.encode(password + ':' + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Pre-computed hashes for demo credentials
let precomputedAdminHash = null;
let precomputedStudentHash = null;

async function getAdminHash() {
  if (!precomputedAdminHash) {
    precomputedAdminHash = await hashPassword(CAMP_FACTS.demoCredentials.admin.password);
  }
  return precomputedAdminHash;
}

async function getStudentHash() {
  if (!precomputedStudentHash) {
    precomputedStudentHash = await hashPassword(CAMP_FACTS.demoCredentials.student.password);
  }
  return precomputedStudentHash;
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
  const expectedEmail = CAMP_FACTS.demoCredentials.admin.email.toLowerCase();
  
  if (cleanEmail !== expectedEmail) {
    throw new Error('Invalid administrator email address.');
  }

  const inputHash = await hashPassword(password);
  const correctHash = await getAdminHash();

  if (inputHash !== correctHash) {
    throw new Error('Incorrect administrator password.');
  }

  const session = {
    role: 'admin',
    email: CAMP_FACTS.demoCredentials.admin.email,
    name: 'Camp Administrator',
    loginAt: new Date().toISOString()
  };

  saveUserSession(session);
  return session;
}

export async function loginStudent(phone, password) {
  const cleanPhone = phone.replace(/\D/g, '');
  const expectedPhone = CAMP_FACTS.demoCredentials.student.phone;
  
  const inputHash = await hashPassword(password);
  const defaultHash = await getStudentHash();

  // Check against seeded registrations in store
  const store = loadStore();
  const reg = store.registrations.find(r => r.phone.replace(/\D/g, '') === cleanPhone);

  if (!reg && cleanPhone !== expectedPhone) {
    throw new Error('No registration found for this mobile number. Please register first.');
  }

  // Allow standard demo password or match
  if (cleanPhone === expectedPhone && inputHash !== defaultHash) {
    throw new Error('Invalid pass password. Demo password is: wisal123');
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
