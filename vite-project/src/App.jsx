import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopNavbar from './components/topnavbar.jsx'
import Header from './components/header.jsx'
import ButtonsCheck from './components/buttonscheck.jsx'
import StudentProfile from './components/student-profile.jsx'
import Professor from './components/professors.jsx'
import ContactForm from './components/form.jsx'

function App() {
  return (
    <div className="app-shell">
      <TopNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ButtonsCheck />
              <div className="professors-list">
                <Professor professor={{ name: "1", department: "Computer Science", email: "1@university.edu" }} />
                <Professor professor={{ name: "2", department: "Mathematics", email: "2@university.edu" }} />
                <Professor professor={{ name: "3", department: "Physics", email: "3@university.edu" }} />
              </div>
            </>
          }
        />
        <Route path="me" element={<StudentProfile />}/>
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  )
}

export default App