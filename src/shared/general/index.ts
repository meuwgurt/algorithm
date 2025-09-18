// Shared utilities and types for general module

export interface GeneralConfig {
  appName: string;
  version: string;
  environment: 'development' | 'production' | 'testing';
}

export const generalUtils = {
  formatDate: (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },
  
  generateId: (): string => {
    return Math.random().toString(36).substring(2, 15);
  }
};

export default generalUtils;