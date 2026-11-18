import "./student-profile.css";

function StudentProfile() { 
    return ( 
        <div class="profile-container">
           <div class="profile-content"> <h2>Student Profile</h2>
            <p>Name: niranjan</p>
            <p>Age: 20</p>
            <p>Major: Computer Science</p>
            </div>
            <div class="actions">
                <button class="button1">
                    edit Profile    
                </button>
                <button class="button1">
                    Delete Profile
                </button>
            </div>
        </div>
    )
}

export default StudentProfile;