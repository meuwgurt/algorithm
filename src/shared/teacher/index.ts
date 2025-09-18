// Shared utilities and types for teacher module

export interface TeacherData {
  id: string;
  name: string;
  subject: string;
}

export const teacherUtils = {
  formatTeacherName: (name: string): string => {
    return `Prof. ${name}`;
  },
  
  validateTeacherId: (id: string): boolean => {
    return id.length > 0 && id.startsWith('TCH');
  }
};

export default teacherUtils;