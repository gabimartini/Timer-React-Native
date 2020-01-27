import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity , Button, StyleSheet, TextInput} from 'react-native';



class App extends Component {
 constructor(props){
   super(props);
   this.state ={
   
     number: 0,
     btn: 'GO',
     last: null
   };
  this.timer = null
   this.Go = this.Go.bind(this)
   this.Clean = this.Clean.bind(this)
    

 }

 Go(){
   if(this.timer != null){
     clearInterval(this.timer);
     this.timer = null;

     this.setState({
       btn: 'GO'
     })
   }else{
    this.timer = setInterval( ()=> {
      this.setState({number: this.state.number + 0.1})
    }, 100);
    this.setState({btn: 'STOP'})
   }
 }

 Clean(){
if(this.timer != null){
  clearInterval(this.timer);
  this.timer = null
}
this.setState({
  last: this.state.number,
  number: 0,
  btn: 'GO'
})
 }


  render() { 
    return ( 

      <View style={styles.container}>
        <Image 
        source={require('./src/cronometro.png')}
        style={styles.img}/>
      
    <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

<View style={styles.btnArea}>
  <TouchableOpacity style={styles.btn} onPress={this.Go}>
  <Text style={styles.btnText}>{this.state.btn}</Text>

  </TouchableOpacity>

  <TouchableOpacity style={styles.btn} onPress={this.Clean}>
    <Text style={styles.btnText}>Clean</Text>

  </TouchableOpacity>

</View>

<View style={styles.lastArea}>
<Text style={styles.lastTime}>
  {this.state.last > 0 ? 'Last Time: '+ this.state.last.toFixed(2) : ""}
</Text>
  </View>

      </View>

     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },

  lastArea:{
    marginTop: 40,
  },

  lastTime:{
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  }

})
 
export default App;











