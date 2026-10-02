import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Guest, GuestStatus } from '../types';

const GUESTS_COLLECTION = 'guests';

function toSafeAttendees(value: unknown): number {
  const number = Number(value ?? 0);
  return Number.isFinite(number) ? number : 0;
}

export function subscribeGuests(callback: (guests: Guest[]) => void) {
  const ref = collection(db, GUESTS_COLLECTION);
  const q = query(ref, orderBy('createdAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        callback([]);
        return;
      }

      const list: Guest[] = snapshot.docs.map((docSnap) => {
        const d = docSnap.data();
        return {
          id: docSnap.id,
          name: d.name || '',
          whatsapp: d.whatsapp || '',
          attendees: toSafeAttendees(d.attendees),
          companions: Array.isArray(d.companions) ? d.companions : [],
          status: (d.status as GuestStatus) || 'confirmed',
          notes: d.notes || '',
          createdAt: d.createdAt?.toDate ? d.createdAt.toDate().toISOString() : d.createdAt,
        };
      });

      callback(list);
    },
    () => {
      callback([]);
    }
  );
}

export async function registerRsvp(params: {
  name: string;
  whatsapp: string;
  attendees: number;
  companions?: string[];
  status: GuestStatus;
  notes?: string;
}): Promise<string> {
  const { name, whatsapp, attendees, companions = [], status, notes = '' } = params;

  if (!name.trim()) {
    throw new Error('Por favor, informe seu nome completo.');
  }
  if (!whatsapp.trim()) {
    throw new Error('Por favor, informe seu WhatsApp para combinarmos.');
  }

  const request = addDoc(collection(db, GUESTS_COLLECTION), {
    name: name.trim(),
    whatsapp: whatsapp.trim(),
    attendees: status === 'confirmed' ? Math.max(1, attendees) : 0,
    companions: status === 'confirmed' ? companions.filter((c) => c.trim().length > 0) : [],
    status,
    notes: notes.trim(),
    createdAt: serverTimestamp(),
  });

  try {
    const timeout = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Sem conexão. Tente novamente em alguns segundos.')), 10000);
    });

    const docRef = await Promise.race([request, timeout]);
    return docRef.id;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro inesperado ao registrar confirmação.';
    if (message.includes('permission') || message.includes('permissão')) {
      throw new Error('Permissão negada ao registrar a confirmação.');
    }
    if (message.includes('network') || message.includes('offline') || message.includes('Sem conexão')) {
      throw new Error('Sem conexão. Tente novamente em alguns segundos.');
    }
    throw new Error(message || 'Erro inesperado ao registrar confirmação.');
  }
}

export async function deleteGuest(id: string): Promise<void> {
  await deleteDoc(doc(db, GUESTS_COLLECTION, id));
}
