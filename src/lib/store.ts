export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string | Date;
};

// Use a global variable to persist state in development across Hot Module Replacements
declare global {
  var messagesGlobal: ContactMessage[] | undefined;
}

export const messagesStore: ContactMessage[] = global.messagesGlobal || [];

if (process.env.NODE_ENV !== "production") {
  global.messagesGlobal = messagesStore;
}
