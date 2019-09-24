const styles = {
    margin: "1em auto",
    padding: "1em",
    border: "1px solid #ddd",
    width: "900px",
    fontSize: "1.2em"
};

const Main = props => {
    return (
        <div style={styles}>
            <center>
                <h1>My first Ruby on rails Project</h1>
            </center>
            {/* <p>here we will add our article CRUD component</p> */}
            <ArticlesContainer signed_in={props.signed_in}/>
        </div>
    );
};


// class Main extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             currentUser:null
//         }
//         this.updateCurrentUser = this.updateCurrentUser.bind(this);
//     }
//     componentDidMount(){
//         let that = this
//         fetch('users/check_for_user')
//     }

// } 