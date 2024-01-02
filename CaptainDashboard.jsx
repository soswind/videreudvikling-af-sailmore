import DashboardCrew from "./components/DashboardCrew"
import messages from './images/messages.png'
import seafare_requests from './images/seafare_requests.png'
import find_crew from './images/find_crew.png'
import update_seafares from './images/update_seafares.png'
import DashboardSeafares from './components/DashboardSeafares'

export default function CaptainDashboard(props) {
    return(
        <>
        <div className="dashboard_title"><h3>Welcome back,</h3>
        <h3>{props.user_name}</h3></div>
        <section className="dash">
            <div>
            <section id="options">
                <div><button className="dashboard_option"><img src={messages} /></button>
                Messages</div>
                <div><button className="dashboard_option"><img src={seafare_requests} /></button>
                Seafare Requests</div>
                <div><a href="/crew"><button className="dashboard_option"><img src={find_crew} /></button></a>
                Find Crew</div>
                <div><button className="dashboard_option"><img src={update_seafares} /></button>
                Update Seafares</div>
            </section>
            <section id="former_crew">
                <h4>Former Crewmember</h4>
                <DashboardCrew crew_name="Hanne Nielsen"/>
                <h5 className="viewmore">View More</h5>
            </section>
            </div>
            <div>
            <section id="dashboardSeafares">
                <h4>Upcoming seafares</h4>
                <DashboardSeafares />
                <a className="button-link seafare-button" href="/createseafare">Create New Seafare</a>
            </section>
            </div>
        </section>
            
        </>
    )
}