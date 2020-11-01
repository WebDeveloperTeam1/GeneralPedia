import React from 'react';
import '../bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavbarComponent';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articleHeading:'',
            mainArticle :''
        }
    }
    //This function handle center section of homepage
    handleArticle = (event) =>{
        this.setState({
            mainArticle:event.target.value
        })
    }
    //This function is for handling left side of home page.
    //Where we want to show just headings
    handleArticleHeading = (event) =>{
        this.setState({
            articleHeading:event.target.value
        })
    }
    render(){
        return(
            <div >
                <NavbarComponent/>
                <div className = "row">
                    <div className = "card col-3"><p>This is article's side</p></div>
                    <div className = "card col-6"><p>This is a main article area</p></div>
                    <div className = "card col-3"><p>This is introduction area</p></div>
                </div>
            </div>
        );
    }
}

export default HomePage;