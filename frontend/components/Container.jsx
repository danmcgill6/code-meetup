//import the GoogleApiWrapper
import {GoogleApiWrapper} from 'google-maps-react'


//pass the google info as props to the Map
 <Map google={this.props.google} />
//export the container WITHIN the GoogleApiWrapper
 export default GoogleApiWrapper({
   apiKey: 'AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao',
   libraries: ['visualization']
 })(Container)