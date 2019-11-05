import React, {Component} from 'react';
import MessageBox from '../MessageBox';
import ThreeChoices from '../ThreeChoices';
import NavigationPage from '../NavigationPage';
import Apple from '../../Assets/Apple.png';
import Google from '../../Assets/Google.png';
import avatarIcon from '../../Assets/avatarIcon.png';
import Phone from '../../Assets/Phone.png';
import Phone2 from '../../Assets/Phone2.png';
import Vector from '../../Assets/Vector.png';
import Shape from '../../Assets/Shape.png';
import Vector7 from '../../Assets/Vector7.png';
import loan from '../../Assets/loan.png';
import user from '../../Assets/user.png';
import sponsor1 from '../../Assets/sponsor1.png';
import sponsor2 from '../../Assets/sponsor2.png';
import sponsor3 from '../../Assets/sponsor3.png';
import sponsor4 from '../../Assets/sponsor4.png';
import splashScreenLogo from '../../Assets/splashScreenLogo.png';
import OpenNav from '../OpenNav';
import './LandingPage.css'

class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, showNaw: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.setNav = this.setNav.bind(this);
        // this.closeNav = this.closeNav.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    setNav() {
        // e.preventDefault();  
        console.log('set')
        // this.state.showNaw=true
        this.setState({showNaw: !this.state.showNaw});
    }
    // closeNav(){
    //     console.log('close')
    //     // this.state.showNaw=false
    //     this.setState({showNaw: false});
    // }
    render(){
        console.log(this.state.width)
        const { width, showNaw } = this.state;
        console.log(showNaw)

        const choices = [
            {
              url: Shape,
              title: 'Quick Loans',
              body: 'At Arvo, we\'ve developed our application to be as straightforward and convenient as possible. There is no need to take the time to travel to a location'
            },
            {
              url: Vector,
              title: 'No Colateral',
              body: 'Through a novelly structured loan, we are able to minimise the risk associated with consumer loans in Nigeria. Making loans available for.'
            },
            {
              url: Vector7,
              title: 'Guaranteed Lowest Interest Rates',
              body: 'As a responsible fintech company, we design our products to ensure our customers get the lowest interest rate in the market'
            },
          ]
        
          const messages = [
            {
              url: avatarIcon,
              title: 'Hey Ebuka 👋',
              body: 'Please select an investment option.',
              prices: ['N50k-N100k', 'N100k-N500k', 'N500k-N2m', 'N2m-N5m']
            },
            {
              url: avatarIcon,
              title: 'Hey Bosun Jones 👋',
              body: 'Your loan application has been approved',
            }
          ]
        return(
            <div>
                {
                    (showNaw && width <=763) ?
                        <NavigationPage logo={splashScreenLogo} triggerClose={this.setNav} />
                    :
                    <div>
                        <div className="header">
                            <div className="left-header">
                                <div><img src={splashScreenLogo} alt="img" /></div>
                                {
                                width > 763?
                                <div className="links">About Us&emsp;&emsp;How it Works&emsp;&emsp;Contact Us&emsp;&emsp;FAQs&emsp;&emsp;FEDPAY</div>
                                : null
                                }
                            </div>
                            {
                                width > 763 ?
                                <div className="signup">
                                <div className="sign">
                                    SIGN IN
                                </div>
                                <div className="download">
                                    DOWNLOAD APP
                                </div>
                                </div>
                                :
                                
                                <div 
                                    className="signup" 
                                    // onClick={this.setNav()}
                                    // tabIndex={0}
                                    // role="button"
                                >
                                    <OpenNav triggerOpen={this.setNav} />
                                    {/* <button onClick={()=>this.setNav()}> */}
                                    {/* z */}
                                    {/* </button> */}
                                </div>
                            }
                        </div>
                        <div className="page">
                            <div className="giant-circle-1 ellipse"></div>

                            {/* <div className="uRec-2"></div>
                            <div className="uRec-2-1"></div>
                            <div className="uRec-2-2"></div>

                            <div className="lRec-2"></div>
                            <div className="lRec-2-1"></div>
                            <div className="lRec-2-2"></div> */}

                            <div className="giant-circle-2 ellipse"></div>
                            <div className="giant-circle-3 ellipse"></div>


                            <div className="up">
                            <div className="up-box">
                                <div className="up-text1">
                                The best way to invest your money and get quick access to loans
                                </div>

                                <div className="up-text2">
                                With ArvoFinance, you can easily get a quick loan within an hour
                                without collaterals and delays, you can also invest your money 
                                through our peer-to-peer platform.
                                </div>

                                <div className="up-text3">
                                Download and use on the go!
                                </div>
                                <div className="goo-app">
                                <img src={Google} alt="img" />
                                <img src={Apple} alt="img" />
                                </div>
                            </div>

                            <div className="up-box" style={{ position: 'relative' }}>
                                <div className="uRec-2"></div>
                                <div className="uRec-2-1"></div>
                                <div className="uRec-2-2"></div>

                                <div className="lRec-2"></div>
                                <div className="lRec-2-1"></div>
                                <div className="lRec-2-2"></div>
                                <img src={Phone} alt="img" />
                                <div className="msg-left">
                                <MessageBox message={messages[0]} id={1} />
                                </div>
                                <div className="msg-right">
                                <MessageBox message={messages[1]} id={2}/>
                                </div>
                            </div>
                            </div>
                            
                            <div className="choices">
                            {
                                choices.map((item,key)=><ThreeChoices choice={item} key={key} />)
                            }
                            </div>

                            <div className="center-part">
                            <div className="mid-text1">
                                INVEST WITH ARVO FINANCE
                            </div>

                            <div className="mid-text2">
                                The best way to invest your money and get quick access to loans.
                            </div>

                            <div className="line-box">
                                <div className="line"/>
                                <div className="loan-p2p">
                                <div className="loan-box">ARVO LOANS</div>
                                <div className="p2p-box">P2P INVESTMENT</div>
                                </div>
                            </div>

                            <div className="mid">
                                <div className="mid-box">
                                <div className="mid-icon">
                                    <img src={loan} alt="img" />
                                </div>
                                <div className="mid-title">
                                    Arvo Loan
                                </div>
                                <div className="mid-body">
                                    With ArvoFinance, you can easily get a quick loan within an hour without collaterals and delays, you can also invest your money through our peer-to-peer platform.
                                </div>
                                <div className="mid-button">
                                GET STARTED
                                </div>
                                </div>

                                <div className="mid-box" style={{position: 'relative'}}>
                                <img src={Phone} style={{width: '395px', height: '644px'}} alt="img"/>
                                <div className="inner-phone">
                                <img src={Phone2} style={{width: '239.98px', height: '423px'}} alt="img" />
                                </div>

                                </div>

                            </div>

                            <div className="recommendations">
                                <div className="rec-img">
                                <img src={user} alt="img" />
                                </div>
                                <div className="rec-title">
                                Best Investment App Ever!
                                </div>
                                <div className="rec-body">
                                With ArvoFinance, you can easily get a quick loan within an hour without collaterals and delays, you can also invest.
                                </div>
                                <div className="recs">
                                
                                </div>
                            </div>

                            <div className="sponsors">
                                <div className="spon"><img src={sponsor1} alt="img" /></div>
                                <div className="spon"><img src={sponsor2} alt="img" /></div>
                                <div className="spon"><img src={sponsor3} alt="img" /></div>
                                <div className="spon"><img src={sponsor4} alt="img" /></div>
                            </div>

                            <div className="get-started">
                                <div className="start-title">Ready to get started?</div>
                                <div className="start-body">With ArvoFinance, you can easily get a quick loan within an hour without collaterals and delays, you can also invest.</div>
                                <div className="start-button">CREATE AN ACCOUNT</div>
                            </div>
                            </div>

                            <div className="down">
                            <div className="footer">
                                <div className="foot1">
                                <img src={splashScreenLogo} alt="img" />
                                </div>
                                <div className="foot2">
                                <div className="foot-titles">Solutions</div>
                                <div className="foot-bodies">
                                    FEDPAY<br />
                                    Online Application<br />
                                    Financial planning<br />
                                    Collateral Free loan<br />
                                    Affordable Interest rates
                                </div>
                                </div>
                                <div className="foot3">
                                <div className="foot-titles">Resources</div>
                                <div className="foot-bodies">
                                    Blog<br />
                                    Privacy Policy<br />
                                    Terms of service<br />
                                    Press<br />
                                    Contact Us<br />
                                    Fraud Alerts
                                </div>
                                </div>
                                <div className="foot4">
                                <div className="foot-titles">Support</div>
                                <div className="foot-bodies">
                                    +2348021810034<br />
                                    hello@arvofinance.com<br />
                                    ombudsman
                                </div>
                                </div>
                            </div>
                            <div className="last">
                                <div>
                                <div style={{marginBottom: '15px'}}>Download our Mobile App</div>
                                <div className="goo-app">
                                    <img src={Google} alt="img" />
                                    <img src={Apple} alt="img" />
                                </div>
                                </div>
                                <div>
                                © Arvo Finance 2019
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default LandingPage;
