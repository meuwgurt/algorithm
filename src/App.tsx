import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import our custom modules
import TeacherComponent from './teacher'
import GeneralComponent from './general'
import StudentComponent from './student'

// Import shared utilities to verify they work
import { teacherUtils } from './shared/teacher'
import { generalUtils } from './shared/general'
import { studentUtils } from './shared/student'

function App() {
  const [count, setCount] = useState(0)
  const [activeModule, setActiveModule] = useState<'teacher' | 'general' | 'student'>('general')

  // Test shared utilities
  const testUtilities = () => {
    console.log('Teacher Name:', teacherUtils.formatTeacherName('John Doe'))
    console.log('Current Date:', generalUtils.formatDate(new Date()))
    console.log('Student Name:', studentUtils.formatStudentName('jane smith'))
    console.log('Generated ID:', generalUtils.generateId())
  }

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'teacher':
        return <TeacherComponent />
      case 'general':
        return <GeneralComponent />
      case 'student':
        return <StudentComponent />
      default:
        return <GeneralComponent />
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Algorithm Learning Platform</h1>
      
      {/* Module Navigation */}
      <div className="card">
        <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={() => setActiveModule('teacher')}
            style={{ margin: '0 0.5rem', backgroundColor: activeModule === 'teacher' ? '#646cff' : '' }}
          >
            Teacher
          </button>
          <button 
            onClick={() => setActiveModule('general')}
            style={{ margin: '0 0.5rem', backgroundColor: activeModule === 'general' ? '#646cff' : '' }}
          >
            General
          </button>
          <button 
            onClick={() => setActiveModule('student')}
            style={{ margin: '0 0.5rem', backgroundColor: activeModule === 'student' ? '#646cff' : '' }}
          >
            Student
          </button>
        </div>
        
        {/* Active Module Display */}
        {renderActiveModule()}
        
        {/* Test Counter and Utilities */}
        <div style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={testUtilities} style={{ margin: '0 1rem' }}>
            Test Utilities (Check Console)
          </button>
        </div>
        
        <p>
          All modules and shared utilities are working properly!
        </p>
      </div>
    </>
  )
}

export default App
