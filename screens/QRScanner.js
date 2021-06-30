import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScanner = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrData, setQRData] = useState("");
    const [count, setCount] = useState(0);
    const [scannedQRList, setScannedQRList] = useState([]);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setQRData(data);
      props.navigation.goBack();
      // const foundQR = scannedQRList.find((obj)=> obj.code === data );
      // if(foundQR == null){
      //   //scannedQRList.push(newCode);
      //   setScannedQRList(scannedQRList.concat({'code': data, 'count': 1}));
      //   setCount(1);
      // } else {
      //   foundQR.count += 1;
      //   setCount(foundQR.count);
      // }
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      // <View style={{ flex: 1 }}>
        <View style={{
              backgroundColor: 'black',
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              alignItems: "center",
              justifyContent: "center"
            }}>
          <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}  style={{
                height: '100%',
                width: '100%',
              }}/>
         {/* <View>
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          <Text><Text style={styles.textLabel}>Data: </Text>{qrData}</Text>
          <Text><Text style={styles.textLabel}>Count: </Text>{count}</Text>
        </View>        */}
        </View>
     
    );
  }
  const styles = StyleSheet.create({
    textLabel: {
      fontWeight: 'bold'
    },
  });

export default QRScanner
