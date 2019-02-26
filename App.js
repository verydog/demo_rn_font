

import React, {Component} from 'react';
import {View} from 'react-native';
import { Iconfont } from "./font/index";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Iconfont name="icon-bqxin" size={68} color="#E00"></Iconfont>
      </View>
    );
  }
}

