// Shared utilities and types for student module

export interface StudentData {
  id: string;
  name: string;
  grade: number;
  enrollmentDate: Date;
}

export const studentUtils = {
  formatStudentName: (name: string): string => {
    return name.trim().toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  },
  
  calculateAge: (birthDate: Date): number => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    
    return age;
  },
  
  validateStudentId: (id: string): boolean => {
    return id.length > 0 && id.startsWith('STU');
  }
};

export default studentUtils;