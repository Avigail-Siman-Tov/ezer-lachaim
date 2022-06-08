// import mobiscroll from '@mobiscroll/react-lite';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';

// import React from 'react';

// class Cards extends React.Component {
//     constructor(props) {
//         super(props);

//       this.state = {
//         volume: 70,
//         alarm: 60,
//         mobile: 30
//       }  
//     }
    
//     // volumeChange = () => {
//     //   this.setState({
//     //       volume: ev.target.value
//     //   });
//     // }
    
//     // alarmChange = () => {
//     //   this.setState({
//     //       alarm: ev.target.value
//     //   });
//     // }
    
//     // mobileChange = () => {
//     //   this.setState({
//     //       mobile: ev.target.value
//     //   });
//     // }
    
//     render() {
//         return (
//             <div>
//                 <mobiscroll.Card 
//                     theme="ios"  
//                     themeVariant="light"
//                 >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.CardTitle>Volume</mobiscroll.CardTitle>
//                     </mobiscroll.CardHeader>
//                     <mobiscroll.CardContent>
//                         <mobiscroll.Slider value={this.state.volume} onChange={this.volumeChange} data-icon='{ "left": "volume-medium" }' />
//                         <mobiscroll.Slider value={this.state.alarm} onChange={this.alarmChange} data-icon='{ "left": "alarm2" }' />
//                         <mobiscroll.Slider value={this.state.mobile} onChange={this.mobileChange} data-icon='{ "left": "mobile" }' />
//                     </mobiscroll.CardContent>
//                 </mobiscroll.Card>
                
//                 <mobiscroll.Card
//                     theme="ios" 
//                     themeVariant="light"
//                 >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.CardTitle>Confirm Purchase</mobiscroll.CardTitle>
//                     </mobiscroll.CardHeader>
//                     <mobiscroll.CardContent>
//                         <mobiscroll.Form.Label>
//                             Name
//                             <input type="text" placeholder="Required" />
//                         </mobiscroll.Form.Label>
//                         <mobiscroll.Form.Label>
//                             Card
//                             <input type="text" placeholder="Credit card number" />
//                         </mobiscroll.Form.Label>
//                         <mobiscroll.Form.Label>
//                             Expiration
//                             <input type="text" placeholder="Required" />
//                         </mobiscroll.Form.Label>
//                         <mobiscroll.Form.Label>
//                             Security
//                             <input type="text" placeholder="3-digit CVV" />
//                         </mobiscroll.Form.Label>
//                     </mobiscroll.CardContent>
//                     <div className="mbsc-btn-group-block mbsc-padding">
//                         <button className="mbsc-btn-primary">Confirm</button>
//                     </div>
//                 </mobiscroll.Card>
                
//                  <mobiscroll.Card
//                     theme="ios" 
//                     themeVariant="light"
//                 >
//                     <mobiscroll.CardHeader>
//                         <mobiscroll.CardTitle>Calendar</mobiscroll.CardTitle>
//                     </mobiscroll.CardHeader>
//                     <mobiscroll.CardContent>
//                         <mobiscroll.Calendar
//                             type="hidden"
//                             display="inline"
//                         />
//                     </mobiscroll.CardContent>
//                 </mobiscroll.Card>
//             </div>
//         );
//     }    
// }

