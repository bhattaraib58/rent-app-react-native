import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

import ValidateAndDisplayMessage from '../../components/validateAndDisplayMessage/ValidateAndDisplayMessage';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import StatusDisplay from '../../components/statusDisplay/StatusDisplay';
import PageHeader from '../../components/pageHeader/PageHeader';
import CustomText from '../../components/customText/CustomText';
import Button from '../../components/button/Button';
import CustomRegex from '../../constants/regexType';
import Loader from '../../components/loader/Loader';
import styles from './styles';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submissionStatus: false,
      loginMessageType: 'error',
      loginMessage: '',
    };
    this.errors = new Set();
  }

  validateAndDisplayMessage(value, name, regex, minLength, maxLength) {
    this.errors.add(name);
    let messageView = ValidateAndDisplayMessage(
      value,
      name,
      regex,
      minLength,
      maxLength,
    );
    if (!messageView) {
      this.errors.delete(name);
    }
    return messageView;
  }

  loginUser() {
    this.setState({
      submissionStatus: true,
    });
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        if (user) {
          this.props.navigation.navigate('App');
        }
      })
      .catch(userCreationError => {
        let message = userCreationError.message.split(/\[.*?\]/);
        this.setState({
          loginMessageType: 'error',
          loginMessage: message[1],
          submissionStatus: false,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.formContainer}>
            <PageHeader showCompanyLogo={true} headerInfo={'Welcome Back !'} />

            <StatusDisplay
              message={this.state.loginMessage}
              messageType={this.state.loginMessageType}
            />

            <View style={styles.inputGroup}>
              <CustomText textName={'Email'} />
              <CustomTextInput
                setInputData={data => {
                  this.setState({
                    email: data,
                  });
                }}
                placeholderName="Email"
                keyboardType={'email-address'}
              />
              {this.validateAndDisplayMessage(
                this.state.email,
                'Email',
                CustomRegex.email,
              )}
            </View>
            <View style={styles.inputGroup}>
              <CustomText textName={'Password'} />
              <CustomTextInput
                setInputData={data => {
                  this.setState({
                    password: data,
                  });
                }}
                placeholderName="Password"
                secureTextEntry={true}
              />
              {this.validateAndDisplayMessage(this.state.password, 'Password')}
            </View>

            <TouchableOpacity
              style={[styles.inputGroup, styles.passwordContainer]}>
              <Text style={styles.linkText}>Forgot password</Text>
            </TouchableOpacity>

            <Button
              title={'Login'}
              style={styles.buttonStyle}
              textStyle={styles.textStyle}
              disable={this.errors.size === 0 ? false : true}
              onPress={this.loginUser.bind(this)}
            />
          </ScrollView>
        </SafeAreaView>
        <View style={[styles.inputGroup, styles.signupContainer]}>
          <Text style={styles.signupPreText}>Are you newbie! </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}>
            <Text style={styles.linkText}>Signup ></Text>
          </TouchableOpacity>
        </View>

        {this.state.submissionStatus ? <Loader /> : null}
      </View>
    );
  }
}
